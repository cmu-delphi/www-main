---
title: Delphi Research Group
layout: about

collaborators:
- name: Amazon
  group: collaborator
- name: CDC
  group: collaborator
- name: Change Healthcare
  group: collaborator
- name: Defense Threat Reduction Agency
  group: collaborator
- name: Facebook
  group: collaborator
- name: Uptake
  group: collaborator
- name: Optum
  group: collaborator
- name: Google.org
  group: sponsor

---

### Who are we?

We're a research group based out of Carnegie Mellon University dedicated to developing the theory and practice of epidemic tracking and forecasting. Pre-pandemic we worked mostly on influenza, dengue and norovirus; now we focus on COVID. We procure unique data streams that reflect epidemic (or pandemic) activity, extract relevant indicators, and make these publicly and continuously available. We and others then use these indicators for nowcasting (situational awareness) and short-term forecasting.

### Who is our audience?

Public health authorities (federal, state, local), the healthcare industry, the public and private sectors, fellow researchers working on epidemic tracking and forecasting, data journalists, and the general public.

### Delphi's milestones

- Since 2013, we've supported U.S. CDC's Influenza Division in advancing and growing a [scientific community around flu forecasting](https://www.cdc.gov/flu/weekly/flusight/index.html). We've been [perennial leaders in forecasting accuracy](https://www.cs.cmu.edu/~roni/CDC%20Flu%20Challenge%202014-2018%20Results.pdf).

- Since 2016, we've developed the [Delphi Epidata API]({{< apiref "/" >}}), which provides real-time access to epidemiological surveillance data.

- Since 2016, we've been providing [flu nowcasts](https://delphi.cmu.edu/nowcast/) to U.S. CDC, states' departments of health, and the public.

- Since 2019, we've been working directly with U.S. CDC as a National Center of Excellence for Influenza Forecasting (a 5-year designation).

- Since March 2020, we've created and maintained the [nation's largest public repository of diverse, geographically-detailed, real-time indicators of COVID-19 activity]({{< relref "covidcast" >}}) in the U.S. Our indicators cover every rung of the [severity pyramid](https://docs.google.com/presentation/d/1jvIycxDRMEIozKIowv2UyvSqZyF5y6jR8EAXUEK22D4/edit?usp=sharing), and are freely available through a [public API]({{< apiref "api/covidcast.html" >}}).

- Several of the underlying data sources (on which these indicators are built) would not exist or be publicly available without our efforts. This includes:

  - A massive [national daily survey]({{< relref "surveys">}}) we're running in [partnership with Facebook](https://covid-survey.dataforgood.fb.com/survey_and_map_data.html). Over 12 million Americans have answered the survey since April, providing real-time insights into, e.g., [self-reported symptoms]({{< relref "2020-08-26-fb-survey#whats-in-the-survey" >}}), [mask wearing]({{< relref "2020-10-06-survey-wave-4.html#mask-wearing" >}}), [testing]({{< relref "2020-10-06-survey-wave-4#testing" >}}), and contacts, all broken down by various demographics.

  - An enormous database of medical insurance claims that have been de-identified in accordance with HIPAA privacy regulations, covering more than half the US population, made possible through health system partners including Change Healthcare. We use this to produce a new [syndromic COVID-19 indicator based on doctor visits]({{< relref "2020-10-14-dv-signal" >}}), and other indicators based on hospitalizations and ICU admissions.

- Since April 2020, we've been supporting and advising U.S. CDC in their community-driven COVID-19 forecasting effort, which includes [creating and evaluating an ensemble forecast]({{< relref "2020-09-21-forecast-demo" >}}) from the 70+ forecasts under submission that serves as the basis for the [CDC's official COVID-19 forecast communications](https://www.cdc.gov/coronavirus/2019-ncov/covid-data/forecasting-us.html). We also contribute our own short-term forecasts of COVID-19 cases and deaths, which can be found in the [COVID-19 Forecast Hub](https://covid19forecasthub.org).


### Activities

We have participated, and [have done very well](https://www.cs.cmu.edu/~roni/CDC%20Flu%20Challenge%202014-2018%20Results.pdf), in all epidemiological forecasting challenges organized by the US government to date:

<!--            : 2013--2014, 2014--2015 (winner),
    <a target="_blank" rel="noopener" href="https://www.cdc.gov/flu/spotlights/flu-activity-forecasts-2016-2017.htm">2015--2016 (winner)</a>
    ,
    <a target="_blank" rel="noopener" href="https://predict.phiresearchlab.org/post/57f3f440123b0f563ece2576">2016--2017 (winner)</a>
    <a target="_blank" rel="noopener" href="https://www.cdc.gov/flu/weekly/flusight/index.html#nav-group-aeff9">2017--2018 (winner)</a>-->

* [Forecasting Seasonal Influenza in the US](https://www.cdc.gov/flu/weekly/flusight/) by [CDC](https://www.cdc.gov) 2013 -- current
* [Forecasting Dengue in Puerto Rico and Peru](https://predict.cdc.gov/post/5a4fcc3e2c1b1669c22aa261) by the [White House](https://www.whitehouse.gov/) [OSTP](https://www.whitehouse.gov/administration/eop/ostp)
* [Forecasting the Chikungunya invasion of the Americas](https://www.innocentive.com/ar/challenge/9933617") by [DARPA](https://www.darpa.mil/)
