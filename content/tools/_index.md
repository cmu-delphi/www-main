---
title: Tools Overview
linkTitle: Tools
layout: single
---

## [Delphi Epidata API](https://github.com/cmu-delphi/delphi-epidata)

API for getting up-to-date epidemiological data (also available via a web interface through [EpiVis](https://delphi.cmu.edu/epivis/epivis.html) and a [Dashboard](covidcast/dashboard)).

## Dashboards

### [Delphi Epidata Dashboard](covidcast/)

The primary dashboard to interact with Delphi Epidata. If you wish to access the results programmatically, see the API above or one of its clients.

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

### [Nowcast](https://github.com/cmu-delphi/nowcast)

A sensor fusion based nowcasting system developed to predict ILI before the COVID-19 pandemic

### [Fluscores](https://delphi.cmu.edu/misc/fluscores/)

Visual comparison of scored submissions to CDC Flu Forecasting Challenge for 2014-16 (provide your own score files).
