
# Exploring-Cancer-and-Nitrate

Lab 1, GEOG 777: Capstone in GIS Development, [University of Wisconsin-Madison](https://geography.wisc.edu/gis/onlinemasters/)

## Front-end Angular

- Get Flask to serve the Angular front-end:
  - Build with a custom base href, copy index.html to `/templates`, and copy everything else to `/static`
    - [/front-end-exploring-cancer-nitrate/] `ng build --base-href /static/ && cp -r dist/front-end-exploring-cancer-nitrate/. ../static && cp dist/front-end-exploring-cancer-nitrate/index.html ../templates`
    - Shortcut: `npm run build` (assuming the package.json is updated)
  - With the above command, we can run the app from root using `flask run`

## Back-end Flask

- Code is in `app.py`
- Initialization steps:
  - [/Exploring-Cancer-and-Nitrate/] `export FLASK_APP=app.py`
  - [/Exploring-Cancer-and-Nitrate/] `flask run`
- 


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

References

- ["Affine" info, required when using zonal stats on ndarray instead of tif](https://gis.stackexchange.com/questions/343529/which-affine-format-to-use-in-rasterstats-zonal-stats)
- [Working with GRASS without starting it explicitly](https://grasswiki.osgeo.org/wiki/Working_with_GRASS_without_starting_it_explicitly)
- [Esri guide to interpreting OLS results](https://desktop.arcgis.com/en/arcmap/10.3/tools/spatial-statistics-toolbox/interpreting-ols-results.htm)
- [Understanding Conda and Pip (Best quick guide I've found)](https://www.anaconda.com/understanding-conda-and-pip/)
- [Deploy a Python (Dash) app to Heroku using Conda environments](https://stackoverflow.com/questions/47949173/deploy-a-python-dash-app-to-heroku-using-conda-environments-instead-of-virtua)
- [YouTube Learn flask for python full tutorial](https://www.youtube.com/watch?v=Z1RJmh_OqeA)

## Important commands

- [Bash] Saves conda dependencies: `conda env export > environment-linearRegression.py.yml`


## Meetings

2020-02-21 Call with Chris Scheele

- Visualization options:
  - **Display residuals on a map**
    - There should be a way to access residuals
    - Plan b: Loop and predict my variable, do the subtraction myself
  - Display a scatter plot
- Just give the user the linear regression summary in full, don't spend too much time on individual diagnostics
- For programmatic OLS interpolation - use GDAL, debug my pip install; I should be able to `pip install gdal`
- PATH FORWARD
  - [Done!] Debug GDAL
  - [Done!] Use GDAL to perform IDW
  - [TODO] Get residuals from regression and apply them back to the GeoJSON which I need to return to the front end
  - [Research...] Start building web app backend
  - [TODO] Start building web app frontend
  - [TODO] Smooth it all out...
