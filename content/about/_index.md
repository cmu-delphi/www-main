---
title: Delphi Research Group
linkTitle: About Delphi
layout: about

collaborators:
- name: Amazon
  group: collaborator
- name: Centers for Disease Control and Prevention
  group: collaborator
- name: Change Healthcare
  group: collaborator
- name: Defense Threat Reduction Agency
  group: collaborator
- name: Facebook
  group: collaborator
- name: Google
  group: collaborator
- name: Google.org
  group: collaborator
- name: Optum
  group: collaborator
- name: Quidel Inc.
  group: collaborator
- name: Uptake
  group: collaborator

---

### Who are we?

We're a research group based out of Carnegie Mellon University dedicated to developing the theory and practice of epidemic tracking and forecasting. Pre-pandemic we worked mostly on influenza, dengue and norovirus; we've now picked up a focus on COVID. We procure unique data streams that reflect epidemic (or pandemic) activity, extract relevant indicators, and make these publicly and continuously available. We and others then use these indicators for nowcasting (situational awareness) and short-term forecasting.

### Who is our audience?

Public health authorities (federal, state, local), the healthcare industry, the public and private sectors, fellow researchers working on epidemic tracking and forecasting, data journalists, and the general public.

### Delphi's milestones

In reverse chronological order.

- **April 2020.** We began supporting and advising the U.S. CDC in their community-driven COVID-19 forecasting effort. This work (collaborative with the [Reich Lab](https://reichlab.io) at UMass) includes:

    * Creating and evaluating an ensemble forecast from the 70+ forecasts in the [COVID-19 Forecast Hub](https://covid19forecasthub.org), which serves as the basis of the [CDC's official communications](https://www.cdc.gov/coronavirus/2019-ncov/covid-data/forecasting-us.html) on COVID-19 forecasting.

    * Creating a [forecast evaluation dashboard](https://delphi.cmu.edu/forecast-eval/), which provides an interactive analysis of the performance of Hub forecasters.

- **March 2020.** We launched [COVIDcast]({{< relref "covidcast" >}}), the nation's largest public repository of diverse, real-time indicators of COVID-19 activity.
    * Our indicators are freely available through a [public API]({{< apiref "api/covidcast.html" >}}), which is updated daily with the latest data.

    * Several of the underlying data sources (on which these indicators are built) would not exist or be publicly available without our efforts. This includes:

        *  A massive [national daily survey]({{< relref "surveys">}}) we're running in [partnership with Facebook](https://covid-survey.dataforgood.fb.com/survey_and_map_data.html). Over 20 million Americans have answered the survey since April 2020, providing real-time insights into, e.g., self-reported symptoms, mask wearing, testing, contacts, and vaccination.

        *  An enormous database of medical insurance claims that have been de-identified in accordance with HIPAA privacy regulations, covering more than half the U.S. population. This data is made available by health system partners including Change Healthcare, and provides insights into disease activity through outpatient visits and hospitalizations.


- **2019.** We became a CDC National Center of Excellence for Influenza Forecasting, one of two nationally (and a 5-year designation).

- **2016.** We developed and deployed [influenza nowcasts](https://delphi.cmu.edu/nowcast/) for the CDC, state departments of public health, and the public.

- **2016.** We developed and deployed the [Epidata API]({{< apiref "/" >}}), which provides real-time access to epidemiological surveillance data.

- **2013.** We began supporting the U.S. CDC's Influenza Division in advancing and growing a [scientific community around influenza forecasting](https://www.cdc.gov/flu/weekly/flusight/index.html). We've been [perennial leaders in forecasting accuracy](https://www.cs.cmu.edu/~roni/CDC%20Flu%20Challenge%202014-2018%20Results.pdf) ever since.
