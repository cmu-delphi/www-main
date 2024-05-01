---
title: Tools Overview
linkTitle: Tools
layout: single
---

## Forecasting

### [COVID Forecasting](https://covid19forecasthub.org/)

We participate in weekly COVID hospital admissions forecasting at the state and national level.
Our current system for generating forecasts can be found [here](https://github.com/cmu-delphi/covid-hosp-forecast).
In addition to publishing the individual forecasts from the participating groups, the Reich lab makes an ensemble prediction, and hosts a [visualization of both](https://viz.covid19forecasthub.org).
We host a comparison tool for [retrospective analysis of the forecasters](https://delphi.cmu.edu/forecast-eval/).

### [Flu Forecasting (FluSight)](https://www.cdc.gov/flu/weekly/flusight/index.html)

We participate in the weekly Flu forecasting hub run by the CDC during the flu season. Our current system for generating forecasts can be found [here](https://github.com/cmu-delphi/flu-hosp-forecast/).
From these dozens of individual forecasts by various groups, the CDC publishes a weekly [ensemble prediction](https://www.cdc.gov/flu/weekly/flusight/flu-forecasts.htm).

## Packages

All source code is freely available on [GitHub](https://github.com/cmu-delphi/).

### [Epidatr](https://cmu-delphi.github.io/epidatr/)

R client for our [Epidata API](https://cmu-delphi.github.io/delphi-epidata/). It allows you to cache queries locally to speed up data access and seamlessly integrate pulling from our API into your pipelines.

### [Delphi Tooling Book](https://cmu-delphi.github.io/delphi-tooling-book/)

An introduction to epidemiological forecasting using our tools: epiprocess and epipredict.

### [Epiprocess](https://cmu-delphi.github.io/epiprocess/)

A collection of data structures and methods for handling epidemiological data measured over space, time, and other potential keys like age or ethnicity.
The major methods are:
- Sliding functions, both for generic user-supplied function and optimized commonly used functions (e.g. rolling mean and sum). These build on tools like [slider](https://slider.r-lib.org/) by
  - handling gaps in time
  - automatically handling grouping of keys
  - being version aware; this enables version-aware forecast evaluation, so that you can compare forecasters using only data that would have available at the time of forecast.
- Growth rate estimation, as estimated using relative rates of change, linear regression, smooth splines, or polynomial trend filtering.
- Outlier detection and correction, using rolling median or LOESS trend decomposition.
- Signal correlation over space, time and other keys. It also supports lagged correlations, automatically handles grouping by the specified keys, and handles time gaps.

Epiprocess also has methods for growth rate estimation,

R client for our [Epidata API](https://cmu-delphi.github.io/delphi-epidata/). It allows you to cache queries locally to speed up data access and seamlessly integrate pulling from our API into your pipelines.

### [Epipredict](https://cmu-delphi.github.io/epipredict/)

A collection of data structures and methods for handling epidemiological data measured over space, time, and other potential keys like age or ethnicity.
The major methods are:
- Sliding functions, both for generic user-supplied function and optimized commonly used functions (e.g. rolling mean and sum). These build on tools like [slider](https://slider.r-lib.org/) by
  - handling gaps in time
  - automatically handling grouping of keys
  - being version aware; this enables version-aware forecast evaluation, so that you can compare forecasters using only data that would have available at the time of forecast.
- Growth rate estimation, as estimated using relative rates of change, linear regression, smooth splines, or polynomial trend filtering.
- Outlier detection and correction, using rolling median or LOESS trend decomposition.
- Signal correlation over space, time and other keys. It also supports lagged correlations, automatically handles grouping by the specified keys, and handles time gaps.

Epiprocess also has methods for growth rate estimation,

R client for our [Epidata API](https://cmu-delphi.github.io/delphi-epidata/). It allows you to cache queries locally to speed up data access and seamlessly integrate pulling from our API into your pipelines.

### [Epidatpy](https://github.com/cmu-delphi/epidatpy) (WIP)

A work in progress Python client for our [Epidata API](https://cmu-delphi.github.io/delphi-epidata/). Not yet ready for production, but let us know if you are interested, so we can prioritize it!

## Operational Systems

### [EpiData](https://github.com/cmu-delphi/delphi-epidata)

API for getting up-to-date epidemiological data (also available via a web interface through [EpiVis](https://delphi.cmu.edu/epivis/epivis.html))

### [Indicator Status](https://delphi.cmu.edu/covidcast/indicator-status/)

A dashboard for displaying the lags for various signals in the delphi epidata API.

### [Dashboard Builder](https://delphi.cmu.edu/covidcast/dashboard)

A builder that allows you to customize the [Delphi Epidata Dashboard](/covidcast/).

### [COVID Forecasting Evaluation](https://delphi.cmu.edu/forecast-eval/)

A forecast evaluation dashboard to compare the historical performance of the forecasts submitted to the [COVID-19 Forecast Hub](https://covid19forecasthub.org/), a collaboration between various modeling teams to produce forecasts of daily hospital admissions.

### [EpiVis](https://delphi.cmu.edu/epivis/)

Epidemiological time series visualizer.
