---
title: About Delphi Epidata (including COVIDcast)
linkTitle: About Delphi Epidata (including COVIDcast)
layout: single

---

Delphi Epidata is a database platform, repository, and API for epidemiological signals (also called "indicators"). It was launched in 2016 and significantly revamped during the pandemic. Delphi Epidata was purpose-designed for hosting signals for epidemic and pandemic detection, tracking and forecasting. It has built-in support for data versioning, calendar reporting effects, anomaly and trend detection, backfill projection, privacy-based censoring, and geographic, temporal and demographic breakdown and aggregation. The Delphi Epidata repository contains over 500 different current or historical signals, tracking flu, COVID-19, dengue, norovirus and other pathogens, and covering all rungs of the [severity pyramid](#severity-pyramid).

We procure data streams that reflect epidemic and pandemic activity from a wide variety of sources -- including unique industry partnerships and scraping of publicly available data -- and extract from them in real-time disease-related signals at the finest possible geographic, demographic and temporal granularity.

The COVID-19 related portion of Delphi Epidata is also known as **COVIDcast**, and constitute what we believe may be the largest public repository of real-time, geographically-detailed indicators of COVID-19 activity in the U.S.

We make all our signals freely available in real-time to the greatest extent allowable, using a [public API](https://cmu-delphi.github.io/delphi-epidata/) which is updated with new data daily. We also provide:
 - a [signal discovery](https://delphi.cmu.edu/signals/) tool, to explore what epi-signals are available in Delphi Epidata and elsewhere in the community
 - a general [signal visualization](https://delphi.cmu.edu/epivis/) tool
 - a [signal dashboard]({{< relref "/covidcast" >}}) and a "classic" [map-based version]({{< relref "/covidcast/classic" >}}) to visualize a core set of COVID-19 and flu indicators
 - a [COVID-19 signal export]({{< relref "/covidcast/export" >}}) app, a [dashboard builder]({{< relref "/covidcast/dashboard" >}}), and more
 - [R](https://cmu-delphi.github.io/epidatr/) and [Python](https://github.com/cmu-delphi/epidatpy) packages to extract signals from the Epidata repository, and R packages to further [process them](https://cmu-delphi.github.io/epiprocess/) and to create [epidemic forecasting models](https://cmu-delphi.github.io/epipredict/) ([learn more](https://docs.google.com/presentation/d/1XfnxQAzR8TcqpguIcFcn9XwG6vvpTyWP6S79cevVqhY/edit#slide=id.g2e3520ca017_0_70) about the packages)

Some of the underlying data from which our signals are extracted would not exist or be publicly available without Delphi’s efforts. These include a massive national daily survey called the [COVID-19 Trends and Impact Survey (CTIS)]({{< relref "ctis" >}}) that we have deployed in partnership with Facebook, which has been taken by over 25 million Americans during 2020-2022; and aggregated counts extracted from an enormous database of de-identified medical insurance claims, covering more than 35% of the U.S. population, made possible through health system partners including Change Healthcare.


## Severity Pyramid

![](/epidemic-signals/images/severity-pyramid.svg)