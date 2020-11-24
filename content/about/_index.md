---
title: About
layout: about
---

### Who are we?

We're a research group based out of Carnegie Mellon University dedicated to developing the theory and practice of epidemic tracking and forecasting. Pre-pandemic our focus was influenza; now it's COVID. We procure unique data streams that reflect epidemic (or pandemic) activity, extract relevant indicators, and make these publicly and continuously available. These indicators are then used for nowcasting (situational awareness) and short-term forecasting.

### Who is our audience?

Public health authorities (federal, state, local), fellow researchers (working on epidemic tracking and forecasting), public and private sectors, data journalists, and the general public.

### Delphi's milestones

- Since 2013, we've supported CDC's Influenza Division in advancing and growing a [scientific community around flu forecasting](https://www.cdc.gov/flu/weekly/flusight/index.html). We've been perennial leaders in forecasting accuracy.

- Since 2016, we've developed the [Epidata API]({{< apiref "/" >}}), which provides real-time access to epidemiological surveillance data.

- Since 2016, we've been providing [flu nowcasts](https://delphi.cmu.edu/nowcast/) to state departments of health.

- Since 2019, we've been working directly with CDC as a National Center of Excellence for Influenza Forecasting (a 5-year designation).

- Since March 2020, we've created and maintained the [nation's largest public repository of diverse, geographically-detailed, real-time indicators of COVID-19 activity]({{< relref "covidcast" >}}) in the U.S. Our indicators cover every rung of the [severity pyramid](https://docs.google.com/presentation/d/1jvIycxDRMEIozKIowv2UyvSqZyF5y6jR8EAXUEK22D4/edit?usp=sharing), and they're freely available through a [public API]({{< apiref "api/covidcast.html" >}}).

- Several of the underlying data sources (on which these indicators are built) would not exist or be publicly available without our efforts. This includes: 

    * A massive [national daily survey]({{< relref "surveys">}}) we're running in [partnership with Facebook](https://covid-survey.dataforgood.fb.com/survey_and_map_data.html). This has reached over 12 million Americans since April, providing real-time insights into, e.g., [self-reported symptoms]({{< relref "2020-08-26-fb-survey#whats-in-the-survey" >}}), [mask wearing]({{< relref "2020-10-06-survey-wave-4.html#mask-wearing" >}}), [testing]({{< relref "2020-10-06-survey-wave-4#testing" >}}), and contacts, all broken down by various demographics.

    * An enormous database of de-identified medical insurance claims, covering more than half the US population, made possible through health system partners including Change Healthcare. We use this to produce a new [syndromic COVID-19 indicator based on doctor visits]({{< relref "2020-10-14-dv-signal" >}}), and other indicators based on hospitalizations and ICU admissions.

- Since April 2020, we've been supporting and advising the CDC in their community-driven COVID-19 forecasting effort, which includes [creating and evaluating an ensemble forecast]({{< relref "2020-09-21-forecast-demo" >}}) from the 70+ forecasts under submission that serves as the basis for the [CDC's official COVID-19 forecast communications](https://www.cdc.gov/coronavirus/2019-ncov/covid-data/forecasting-us.html). We also contribute our own short-term forecasts of COVID-19 cases and deaths, which can be found in the [COVID-19 Forecast Hub](https://covid19forecasthub.org).
