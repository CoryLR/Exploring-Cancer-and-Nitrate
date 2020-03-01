from flask import Flask
from flask import render_template
from flask import request

#* Import dependencies for analysis
from geopandas import GeoDataFrame
from rasterstats import zonal_stats
from statsmodels.api import OLS
from gdal import Grid
from datetime import datetime
from random import getrandbits
from os import remove

app = Flask(__name__)

@app.route('/', strict_slashes=False)
@app.route('/static', strict_slashes=False)
def main():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    try:

        #* This script allows the user to explore the relationship between nitrate concentration in water and cancer rate
        #* Adapted from linearRegression.py for use in the Flask environment
        #* PoC:  Cory Leigh Rahman
        #*       University of Wisconsin-Madison

        print()
        print("> > > Starting /analyze")

        #* User inputs
        req_data = request.get_json()
        input_iwd_power = float(req_data["distanceDecayExponent"])
        input_iwd_smoothing = float(req_data["smoothing"])
        print(f'> > > Got inputs: distanceDecayExponent={str(input_iwd_power)}, smoothing={str(input_iwd_smoothing)}')

        #* Make a unique tag for this process
        timestamp = datetime.utcnow().strftime('%Y%m%d-%H%M%S%f-')
        randomNumber = getrandbits(32)
        uniqueTag = f'{timestamp}{randomNumber}'
        print("> > > Got unique tags")

        #* Perform IDW interpolation on well data
        idwFilePath = f'analysis/data/working/nitrate_interpolation_{uniqueTag}.tif'
        Grid(idwFilePath,'analysis/data/working/well_nitrate.shp', algorithm=f'invdist:power={input_iwd_power}:smoothing={input_iwd_smoothing}', zfield='nitr_con', outputBounds=[-92.90, 47.32, -86.75, 42.48])
        print("> > > Got IDW")

        #* Get the average nitrate concentration per census tract using Zonal Statistics
        nitrateAndCancer_geoJson = zonal_stats("analysis/data/working/cancer_tracts.shp", idwFilePath, stats="mean", all_touched=True, geojson_out=True)
        nitrateAndCancer_geoDataFrame = GeoDataFrame.from_features(nitrateAndCancer_geoJson)
        print("> > > Got Zonal Statistics")

        #* Now that we have cancer rates and nitrate concentration aggregated to the same enumeration unit (census tract) we can compare them.
        #* Get the appropriate attribute columns for regression (cancer rate and nitrate concentration)
        cancerRate_column_values = nitrateAndCancer_geoDataFrame["canrate"]
        nitrateConcentration_column_values = nitrateAndCancer_geoDataFrame["mean"]
        print("> > > Got columns for regression")

        #* Get regression results
        Y = cancerRate_column_values
        X = nitrateConcentration_column_values
        model = OLS(Y, X)
        results = model.fit()
        print("> > > Got regression results")

        #* Merge the residuals into the geodataframe
        nitrateAndCancer_geoDataFrame["residual"] = results.resid
        print("> > > Merged residuals to the geodataframe")

        #* Clean up temp files
        remove(idwFilePath)
        print("> > > Removed temp files")

        #* Make variables to send back to front end
        summaryString = str(results.summary())
        geoJson = nitrateAndCancer_geoDataFrame.to_json()
        print("> > > Function complete and sending return.")

        return { 'input': req_data, 'summary': summaryString, 'geojson': geoJson }

        # return {
        #     'request': req_data,
        #     'serverData': "This string came from the back-end, can you see it in the front end?",
        #     # 'response': response_data
        # }
    except Exception as e:
        return {"error": e}
