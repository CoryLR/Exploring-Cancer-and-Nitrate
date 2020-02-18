print()
print("> > > Starting 'linearRegression.py'.")

#***** Import tools *****
import numpy as np
import pandas as pd  #* To read data
import geopandas as gpd  #* To read data
from rasterstats import zonal_stats
import statsmodels.api as sm

print()
print("> > > Imports successful.")

#***** Get data into one dataframe for the regression *****

nitrateAndCancer_geoJson = zonal_stats("data/working/cancer_tracts.shp", "data/working/nitrate_interpolated.tif", stats="mean", all_touched=True, geojson_out=True)

# print("nitrateAndCancer_geoJson:\n", nitrateAndCancer_geoJson)

nitrateAndCancer_geoDataFrame = gpd.GeoDataFrame(nitrateAndCancer_geoJson)

# print("type(nitrateAndCancer_geoDataFrame):\n", type(nitrateAndCancer_geoDataFrame))

#* Get Independent Variable (X), nitrate concentration


#* Get Dependant Variable (Y), cancer rate
# data = pd.read_csv('rasterStatsTractsNitratecsv.csv')  #* load data set
# y = data.iloc[:, 1].values.reshape(-1, 1)  #* -1 means that calculate the dimension of rows, but have 1 column

# TODO: Need to get the columns out of this GeoDataFrame for the linear regression
# print()
# print("\nnitrateAndCancer_geoDataFrame.properties:\n", nitrateAndCancer_geoDataFrame.properties)
# print("\ntype(nitrateAndCancer_geoDataFrame.properties):\n", type(nitrateAndCancer_geoDataFrame.properties))
# print("\nnitrateAndCancer_geoDataFrame['properties'][0]:\n", nitrateAndCancer_geoDataFrame['properties'][0])

# Get values of particular key in list of dictionaries using List Comprehension
cancerRate_column_values = [ sub['canrate'] for sub in nitrateAndCancer_geoDataFrame['properties'] ]
nitrateConcentration_column_values = [ sub['mean'] for sub in nitrateAndCancer_geoDataFrame['properties'] ]

i = 1
print("\ncancerRate_column_values[0], nitrateConcentration_column_values[0]:\n", cancerRate_column_values[0], nitrateConcentration_column_values[0])
while i < 10:
  print(cancerRate_column_values[i], nitrateConcentration_column_values[i])
  i += 1


# y = nitrateAndCancer_geoDataFrame.iloc[:, 1].values.reshape(-1, 1)  #* -1 means that calculate the dimension of rows, but have 1 column

# print()
# print("> > > X and y:")
# print("y (dependant variable):\n", y)
# print("X", X)
#* TODO: Join the data from/to the CSV so that I have both the 


#* Get regression diagnostics
Y = cancerRate_column_values
X = nitrateConcentration_column_values

# Significant
# Y = [1,2,2,4,5,6,7,7,9,10,12,12,13,14,15,15,16,18,20,20,21,22,23,24,25,28,27,28,29,29,31,32,33,35,35,36,37,38,40]
# X = [1,2,3,5,5,6,7,9,9,10,11,12,13,14,14,16,17,13,19,20,25,22,23,23,23,26,29,28,29,33,31,32,34,34,35,37,37,38,39]

# Random
# Y = [1,2,2,4,5,6,7,7,9,10,12,12,13,14,15,15,16,18,20,20,21,22,23,24,25,28,27,28,29,29,31,32,33,35,35,36,37,38,40]
# X = [9, 900, 7, 60, 50, 50, 390, 380, 37, 37, 350, 340, 340, 330, 3210, 310, 30, 2190, 2190, 2180, 2160, 2150, 2130, 2130, 2130, 21210, 2100, 20, 190, 17, 160, 140, 140, 130, 130, 120, 110, 100, 10]

model = sm.OLS(Y, X)
results = model.fit()
print(results.summary())



#******************** Old / reference code ************************

# import matplotlib.pyplot as plt
# from statsmodels.sandbox.regression.predstd import wls_prediction_std

# import numpy as np
# import matplotlib.pyplot as plt  # To visualize
# import pandas as pd  # To read data
# from sklearn.linear_model import LinearRegression

# data = pd.read_csv('rasterStatsTractsNitratecsv.csv')  # load data set
# X = data.iloc[:, 0].values.reshape(-1, 1)  # values converts it into a numpy array
# yt = data.iloc[:, 1].values.reshape(-1, 1)  # -1 means that calculate the dimension of rows, but have 1 column
# linear_regressor = LinearRegression()  # create object for the class
# linear_regressor.fit(X, Y)  # perform linear regression

# Display diagnostics

# Y_pred = linear_regressor.predict(X)  # make predictions

