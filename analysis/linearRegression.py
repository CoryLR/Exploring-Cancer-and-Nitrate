# This script allows the user to explore the relationship between nitrate concentration in water and cancer rate
# PoC:  Cory Leigh Rahman
#       University of Wisconsin-Madison

# User inputs
input_iwd_power = 1

print()
print("> > > Starting 'linearRegression.py'.")

#* Import dependencies
from geopandas import GeoDataFrame
from rasterstats import zonal_stats
from statsmodels.api import OLS
from gdal import Grid
from datetime import datetime
from random import getrandbits
from os import remove
print("> > > Imports successful.")

#* Make a unique tag for this process
timestamp = datetime.utcnow().strftime('%Y%m%d-%H%M%S%f-')
randomNumber = getrandbits(32)
uniqueTag = f'{timestamp}{randomNumber}'

#* Perform IDW interpolation on well data
idwFilePath = f'data/working/nitrate_interpolation_{uniqueTag}.tif'
Grid(idwFilePath,'data/working/well_nitrate.shp', algorithm=f'invdist:power={input_iwd_power}', zfield='nitr_con', outputBounds=[-92.90, 47.32, -86.75, 42.48])

#* Get the average nitrate concentration per census tract using Zonal Statistics
nitrateAndCancer_geoJson = zonal_stats("data/working/cancer_tracts.shp", idwFilePath, stats="mean", all_touched=True, geojson_out=True)
nitrateAndCancer_geoDataFrame = GeoDataFrame(nitrateAndCancer_geoJson)

#* Now that we have cancer rates and nitrate concentration aggregated to the same enumeration unit (census tract) we can compare them.
# Get the appropriate attribute columns for regression (cancer rate and nitrate concentration)
# ^ Done by getting values of a particular key in list of dictionaries using List Comprehension
cancerRate_column_values = [ sub['canrate'] for sub in nitrateAndCancer_geoDataFrame['properties'] ]
nitrateConcentration_column_values = [ sub['mean'] for sub in nitrateAndCancer_geoDataFrame['properties'] ]

#* Get regression results
Y = cancerRate_column_values
X = nitrateConcentration_column_values
model = OLS(Y, X)
results = model.fit()

#* Display Results
print(results.summary())

#* Clean up temp files
remove(idwFilePath)
