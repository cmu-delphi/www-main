---
title: Tools Overview
linkTitle: Tools
layout: single
---

## Forecasting

### [Flu Forecasting (FluSight)](https://www.cdc.gov/flu/weekly/flusight/index.html)

We participate in the weekly Flu forecasting hub run by the CDC during the flu season.
Our current system for generating forecasts can be found [here](https://github.com/cmu-delphi/flu-hosp-forecast/).
From these dozens of individual forecasts by various groups, the CDC publishes a weekly [ensemble prediction](https://www.cdc.gov/flu/weekly/flusight/flu-forecasts.htm).

### [COVID-19 Forecasting](https://covid19forecasthub.org/)

We participate in weekly COVID hospital admissions forecasting at the state and national level.
Our current system for generating forecasts will be available soon [here](https://github.com/cmu-delphi/covid-hosp-forecast).
In addition to publishing the individual forecasts from the participating groups, the Reich lab makes an ensemble prediction, and hosts a [visualization of both](https://viz.covid19forecasthub.org).

### [COVID-19 Forecasting Evaluation](https://delphi.cmu.edu/forecast-eval/)

We host a forecast evaluation dashboard to compare the historical performance of the forecasts submitted to the [COVID-19 Forecast Hub](https://covid19forecasthub.org/).

## Packages

All source code is freely available on [GitHub](https://github.com/cmu-delphi/).

### [Epidatr](https://cmu-delphi.github.io/epidatr/)

R client for the [Delphi Epidata API](https://cmu-delphi.github.io/delphi-epidata/).
It allows you to cache queries locally to speed up data access and seamlessly integrate pulling from our API into your pipelines.

### [Delphi Tooling Book](https://cmu-delphi.github.io/delphi-tooling-book/)

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

## Operational Systems

### [Delphi Epidata API](https://github.com/cmu-delphi/delphi-epidata)

API for getting up-to-date epidemiological data (also available via a web interface through [EpiVis](https://delphi.cmu.edu/epivis/epivis.html)).

### [Indicator Status](https://delphi.cmu.edu/covidcast/indicator-status/)

A dashboard for displaying the lags for various signals in the Delphi Epidata API.

### [Dashboard Builder](https://delphi.cmu.edu/covidcast/dashboard)

A builder that allows you to customize the [Delphi Epidata Dashboard](/covidcast/).

### [EpiVis](https://delphi.cmu.edu/epivis/)

Epidemiological time series visualizer.
