---
title: EpiProcess
link: https://cmu-delphi.github.io/epiprocess/
order: 2
---

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

