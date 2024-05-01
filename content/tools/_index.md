---
title: Tools Overview
linkTitle: Tools
layout: single
---
## [Delphi Epidata API](https://github.com/cmu-delphi/delphi-epidata)

API for getting up-to-date epidemiological data (also available via a web interface through [EpiVis](https://delphi.cmu.edu/epivis/epivis.html) and a [Dashboard](covidcast/dashboard)).

## Dashboards

### [Delphi Epidata Dashboard](covidcast/dashboard)
The primary dashboard to interact with delphi data. If you wish to access the results programmatically, see the [API](#Delphi_Epidata_API), or one of it's clients.
### [Indicator Status](https://delphi.cmu.edu/covidcast/indicator-status/)

A dashboard for displaying the lags for various signals in the Delphi Epidata API.

### [Dashboard Builder](https://delphi.cmu.edu/covidcast/dashboard)

A builder that allows you to customize the [Delphi Epidata Dashboard](/covidcast/).

### [EpiVis](https://delphi.cmu.edu/epivis/)

Epidemiological time series visualizer.



## Forecasting
### [COVID-19 Forecasting Evaluation](https://delphi.cmu.edu/forecast-eval/)

We host a forecast evaluation dashboard to compare the historical performance of the forecasts submitted to the [COVID-19 Forecast Hub](https://covid19forecasthub.org/).




### [Flu Forecasting (FluSight)](https://www.cdc.gov/flu/weekly/flusight/index.html)

We participate in the weekly Flu forecasting hub run by the CDC during the flu season.
Our current system for generating forecasts can be found [here](https://github.com/cmu-delphi/flu-hosp-forecast/).
From these dozens of individual forecasts by various groups, the CDC publishes a weekly [ensemble prediction](https://www.cdc.gov/flu/weekly/flusight/flu-forecasts.htm).

### [COVID-19 Forecasting](https://covid19forecasthub.org/)

We participate in weekly COVID hospital admissions forecasting at the state and national level.
Our current system for generating forecasts will be available soon [here](https://github.com/cmu-delphi/covid-hosp-forecast).
In addition to publishing the individual forecasts from the participating groups, the Reich lab makes an ensemble prediction, and hosts a [visualization of both](https://viz.covid19forecasthub.org).


## Archived
### [COVIDcast 1.0 ("Classic")](/covidcast/classic)

A map-first single-page webapp for visualizing COVID-19 pandemic indicators.

### [Crowdcast](/crowdcast)

Delphi’s "Wisdom of crowds" forecasting system: Used for Chikungunya, flu and most recently Covid. In it's archived configuration, this system was set up to forecast ILI during the COVID-19 pandemic

### [ILI Nearby](/nowcast)

Flu nowcasting system.

**Note:** This system is designed to nowcast ILI driven by seasonal
influenza and is NOT designed to nowcast ILI during the COVID-19 pandemic.

### [Epiforecast](https://github.com/cmu-delphi/epiforecast-R)

R package that implements several methods for epidemiological forecasting empirical bayes (EB), basis regression (BR), and time-weighted kernel density estimation (twkde).

### [Nowcast](https://github.com/cmu-delphi/nowcast)

A sensor fusion based nowcasting system developed to predict ILI before the COVID-19 pandemic

### [Fluscores](https://delphi.cmu.edu/misc/fluscores/)

Visual comparison of scored submissions to CDC Flu Forecasting Challenge for 2014-16 (provide your own score files).

### [utils](https://github.com/cmu-delphi/utils)

Old python utility package, mainly for handling dates and locations.

# Notes
separate out packages into a separate tab
## Packages

All source code is freely available on [GitHub](https://github.com/cmu-delphi/).

### [Epidatr](https://cmu-delphi.github.io/epidatr/)

R client for the [Delphi Epidata API](https://cmu-delphi.github.io/delphi-epidata/).
It allows you to cache queries locally to speed up data access and seamlessly integrate pulling from our API into your pipelines.

### [Epidemiological Forecasting with Delphi Tooling Packages](https://cmu-delphi.github.io/delphi-tooling-book/)

An introduction to epidemiological forecasting using our tools: epiprocess and epipredict.

### [Epiprocess](https://cmu-delphi.github.io/epiprocess/)

A collection of data structures and methods for handling epidemiological data.
The major features are:
- The epi_df structure, which allows you track epidemiological data measured over location and time (and other potential keys).
- The epi_archive structure, which allows you to store epi_df objects in a versioned archive and to query the archive for the state of the data at any point in time.
- Support for applying generic functions across a sliding time window, building on tools like [slider](https://slider.r-lib.org/). Comes with support for
  - handling gaps in time
  - automatically handling grouping of keys
- Support for version aware data transformation and forecasting, which allows for simple and accurate backtesting of forecasting models (using only the actual data that was available at the time of the forecast and not the revised versions).
- Growth rate estimation, as estimated using relative rates of change, linear regression, smooth splines, or polynomial trend filtering.
- Outlier detection and correction, using rolling median or LOESS trend decomposition.
- Signal correlation over space, time and other keys. It also supports lagged correlations, automatically handles grouping by the specified keys, and handles time gaps.

### [Epipredict](https://cmu-delphi.github.io/epipredict/)

A framework for building epidata pipelines involving transformation and forecasting. It is built on top of epiprocess and provides a simple interface for defining and running pipelines. It supports:
- A simple interface for defining a sequence of data pre-processing, forecasting, and post-processing steps.
- A collection of data processing steps common to epidata.
- A collection of pre-packaged forecasting models commonly used by Delphi's forecasting team.

### [Epidatpy](https://github.com/cmu-delphi/epidatpy) (WIP)

A work-in-progress Python client for the [Delphi Epidata API](https://cmu-delphi.github.io/delphi-epidata/).
Not yet recommended for production, but we are happy to receive feedback!

