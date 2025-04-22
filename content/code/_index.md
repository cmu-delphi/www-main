---
title: Code Overview
linkTitle: Code
layout: single
---

In addition to the Delphi Epidata API server code, we have a number of user-oriented code packages, such as API clients and time-series modeling for epidemiology.
All source code is freely available on [GitHub](https://github.com/cmu-delphi/).

## API and clients

### [Epidata](https://github.com/cmu-delphi/delphi-epidata)

The core server code for the [Delphi Epidata API](https://cmu-delphi.github.io/delphi-epidata/).

### [Epidatr](https://cmu-delphi.github.io/epidatr/)

R client for the [Delphi Epidata API](https://cmu-delphi.github.io/delphi-epidata/).
Download data from our API as a usable tibble in R!

### [Epidatpy](https://github.com/cmu-delphi/epidatpy)

Python client for the [Delphi Epidata API](https://cmu-delphi.github.io/delphi-epidata/).
Download data from our API as a usable Pandas dataframe in Python!

## Forecasting

### [Introduction to Epidemiological Forecasting: Delphi Tools, Data, and Lessons](https://cmu-delphi.github.io/delphi-tooling-book/)

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

A framework for building epidata pipelines involving transformation and forecasting. It is designed to work smoothly with epiprocess and provides a simple interface for defining and running forecasting workflows. It supports:
- A simple interface for defining a sequence of data pre-processing, forecasting, and post-processing steps.
- A collection of data processing steps common to epidata.
- A collection of pre-packaged forecasting models commonly used by Delphi's forecasting team.

## Deprecated Packages

### [Covidcast](https://github.com/cmu-delphi/covidcast)

A collection of R and Python packages for accessing and analyzing data from the Delphi COVIDcast API.

### [Epiforecast](https://github.com/cmu-delphi/epiforecast-R)

R package that implements several methods for epidemiological forecasting empirical bayes (EB), basis regression (BR), and time-weighted kernel density estimation (twkde).

### [utils](https://github.com/cmu-delphi/utils)

Python utility package for handling dates and locations.
