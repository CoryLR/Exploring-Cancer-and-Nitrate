
# Exploring-Cancer-and-Nitrate

Lab 1, GEOG 777: Capstone in GIS Development, [University of Wisconsin-Madison](https://geography.wisc.edu/gis/onlinemasters/)

## Architecture Brainstorming

The Stack

- `Leaflet`     (Interactive mapping interface)
- `Angular`     (Front-end JavaScript framework)
- `NPM`         (Front-end package manager)
- `Flask`       (Back-end Python web framework)
- `Pip`         (Python package manager)
- `Anaconda`    (Used for Python environment management)
- `pysal`       (Geostatistical analysis)
- `Heroku`      (Platform / host)
- `VS Code`     (IDE / code editor)

Relevant links:

- [The Best New Geospatial Data Science Libraries In 2019](https://towardsdatascience.com/the-best-new-geospatial-data-science-libraries-in-2019-7f0174e2a0eb)
- [Essential geospatial Python libraries](https://medium.com/@chrieke/essential-geospatial-python-libraries-5d82fcc38731)
- [The Flask Mega-Tutorial Part XVIII: Deployment on Heroku](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-xviii-deployment-on-heroku)

## Business Logic

  - Cancer tracts are static
  - User chooses distance decay value (and possibly other values)
  - Backend:
    - Interpolates nitrate wells with user's distance decay
    - Runs zonal statistics with cancer tracts and interpolated nitrate raster
    - Runs linear regression on the cancer/nitrate table enriched by zonal statistics
    - Provides the front-end with 1) regression results and 2) the cancer/nitrate table
  - Front end:
    - Join the nitrate values back to the cancer tracts data based on geoID, update display, update regression results

## Analysis

Notes
- Key Elements:
  - Cancer census tracts
  - Nitrate wells

Refined steps log


1. `2020-02-08:1300` [QGIS] [IDW] Interpolated Nitrate wells --> Input parameters: { 'DISTANCE_COEFFICIENT' : 2, 'EXTENT' : '-92.889433,-86.750119,42.491912,47.309822 [EPSG:4269]', 'INTERPOLATION_DATA' : '/Users/clr/code/Exploring-Cancer-and-Nitrate/analysis/data/working/well_nitrate.shp::~::0::~::-1::~::0', 'OUTPUT' : '/Users/clr/code/Exploring-Cancer-and-Nitrate/analysis/data/working/nitrate_interpolated2.tif', 'PIXEL_SIZE' : 0.1 }
2. `2020-02-08:1400` [QGIS] [RasterStats] Created an average nitrate per tract
3. We can now use the tract layer (containing both nitrate concentration and cancer rate for linear regression)
4. Linear regression simply outputs a report. Need to learn how to interpret this report.


Old Steps Log

- `2020-02-10:2018` [GRASS] Linear Regression on the clipped nitrate interpolation and the rasterized cancer tracts
- `2020-02-10:2018` [GDAL] Clipped raster
- `2020-02-10:2018` [GDAL] Dissolve to get Wisconsin outline --> Input parameters: {'INPUT':'/Users/clr/code/Exploring-Cancer-and-Nitrate/analysis/data/working/cancer_tracts.shp','FIELD':None,'GEOMETRY':'geometry','EXPLODE_COLLECTIONS':False,'KEEP_ATTRIBUTES':False,'COUNT_FEATURES':False,'COMPUTE_AREA':False,'COMPUTE_STATISTICS':False,'STATISTICS_ATTRIBUTE':None,'OPTIONS':'','OUTPUT':'/Users/clr/code/Exploring-Cancer-and-Nitrate/analysis/data/working/wisconsin_outline.shp'}
- `2020-02-08:1415` [GDAL] Rasterize: Cancer tracts --> Input parameters: { 'BURN' : None, 'DATA_TYPE' : 5, 'EXTENT' : '-92.889433,-86.750119,42.491912,47.309822 [EPSG:4269]', 'FIELD' : 'canrate', 'HEIGHT' : 45, 'INIT' : None, 'INPUT' : '/Users/clr/code/Exploring-Cancer-and-Nitrate/analysis/data/working/cancer_tracts.shp', 'INVERT' : False, 'NODATA' : -1, 'OPTIONS' : '', 'OUTPUT' : '/Users/clr/code/Exploring-Cancer-and-Nitrate/analysis/data/working/cancer_tracts_rasterized.tif', 'UNITS' : 0, 'WIDTH' : 60 }
- `2020-02-08:1300` [QGIS] IDW: Interpolated Nitrate wells --> Input parameters: { 'DISTANCE_COEFFICIENT' : 2, 'EXTENT' : '-92.889433,-86.750119,42.491912,47.309822 [EPSG:4269]', 'INTERPOLATION_DATA' : '/Users/clr/code/Exploring-Cancer-and-Nitrate/analysis/data/working/well_nitrate.shp::~::0::~::-1::~::0', 'OUTPUT' : '/Users/clr/code/Exploring-Cancer-and-Nitrate/analysis/data/working/nitrate_interpolated2.tif', 'PIXEL_SIZE' : 0.1 }


