---
title: Delphi's COVID-19 Trends and Impact Surveys (CTIS)
linkTitle: About CTIS
aliases:
 - /covidcast/surveys
 - /covid19/ctis
---

{{< alert category="primary">}}
  Summary results for the survey are available. [Click here to explore]({{< relref "covidcast/survey-results" >}})
{{< /alert >}}

In collaboration with Facebook, along with a consortium of universities and public health officials, the [Delphi group]({{< relref "/" >}}) at [Carnegie Mellon University](https://www.cmu.edu/) conducted the COVID-19 Trends and Impact Survey (CTIS) to monitor the spread and impact of the COVID-19 pandemic in the United States. The survey was advertised through Facebook. It ran continuously from  April 6, 2020, to June 25, 2022, and about 40,000 people in the United States participated **every day**. Survey results are publicly available on our [CTIS Results Dashboard]({{< relref "covidcast/survey-results" >}}) and [COVIDcast Map]({{< relref "covidcast" >}}); aggregate data can be downloaded through our [COVIDcast Exporter]({{< relref "covidcast/export" >}}), from our [COVIDcast API]({{< apiref "api/covidcast.html" >}}), and as [contingency tables]({{< apiref "symptom-survey/contingency-tables.html">}}) with demographic breakdowns.

Such detailed data has never before been available during a public health emergency, and it has helped public health officials understand how to save lives and how to safely reopen public life. The data also helps researchers understand the social, economic, and health effects of the COVID-19 pandemic.

An international version of the survey was conducted by the University of Maryland in collaboration with Facebook. Its data [is available separately](https://covidmap.umd.edu/).

The [CTIS Methodology Report](https://dataforgood.facebook.com/dfg/resources/CTIS-methodology-report) gives technical details about the survey design and data collection process, and detailed technical documentation about the survey is available on our [site for data users](https://cmu-delphi.github.io/delphi-epidata/symptom-survey/).

## What are the surveys for?

The survey asked respondents whether they were experiencing any symptoms, then asked a series of questions designed to help researchers understand the spread of COVID-19 and its effect on people in the United States. These included questions about COVID-19 testing, prior medical conditions, social distancing measures, mental health, demographics, and the economic effects of the pandemic.

Delphi used information from the survey as part of its public [COVIDcast Map]({{< relref "covidcast" >}}), to inform its forecasts of the pandemic’s spread, and to assist public health agency partners. By providing daily data from all parts of the United States, the survey allows comparisons between regions and allows careful tracking of changes over time. Other researchers use the survey to study factors related to the pandemic's spread, its effects on mental health, how different demographic groups were affected by the pandemic, and numerous other important questions.

Because the survey reached thousands of respondents every day, its questions focused on what the respondents were experiencing when they took the survey. This allows us to track how conditions changed across the country every day.

## Who ran these surveys?

The surveys were a collaboration between [Delphi]({{< relref "/" >}}) at Carnegie Mellon University, numerous universities, and Facebook. Researchers at many institutions are analyzing the survey data and assisted in the survey’s development.

The survey protocol has been reviewed by the Carnegie Mellon University Institutional Review Board. Delphi only publicly releases aggregate data; de-identified individual data is made available to research partners. Our partners are bound by data use agreements to maintain the confidentiality of individual survey responses. Facebook referred its users to the survey, but it never received any individual survey data.

## How were the surveys distributed?

Participants were recruited for the surveys through an advertisement placed in their Facebook news feed. Facebook automatically selected a random sample of its users to see the advertisement each day; users who clicked on the ad were taken to a survey administered by Carnegie Mellon University, and Facebook did not receive their survey responses. The survey was available in English, Spanish, Brazilian Portuguese, Vietnamese, French, and simplified Chinese.

The survey participants were sampled from Facebook users, rather than being a random sample from the entire United States population. But unlike a traditional telephone or mail survey, distribution through Facebook allowed us to reach tens of thousands of respondents every day, permitting researchers to make comparisons between many geographic areas and to detect changes as soon as they happened.

To account for the differences between Facebook users and the United States population, Facebook included a unique identifier when it linked users to the survey. Carnegie Mellon collected these identifiers and provided Facebook with a list of identifiers that completed the survey; Facebook then calculated statistical weights indicating how representative each person is of the United States population, based on demographic data known to Facebook. Crucially, Carnegie Mellon cannot use these identifiers to identify specific Facebook users, and Facebook never received individual survey responses and cannot link them to specific users.

## Where can I see the results?

Our [CTIS Results Dashboard]({{< relref "covidcast/survey-results" >}}) shows aggregate survey results, ranging from rates of COVID-like symptoms over mask usage to mental health. In addition, our [Delphi Epidata dashboard]({{< relref "covidcast" >}}) shows basic aggregate survey results, revealing the rates of mask usage and COVID-like symptoms across the United States. The data used by both tools is also freely available for download through the [COVIDcast API]({{< apiref "api/covidcast.html">}}) and our [COVIDcast Exporter]({{< relref "covidcast/export" >}}). Facebook also publishes [a map](https://covid-survey.dataforgood.fb.com/) based on the United States and international aggregate data.

The [Symptom Data Challenge](https://www.symptomchallenge.org/) challenged participants to enable earlier detection and improved situational awareness of the COVID-19 outbreak by using data from these symptom surveys. Check out the [the challenge website](https://www.symptomchallenge.org/) for more details about the Challenge and the finalists.

### Publications

Our primary description of the survey and its results over the first year of operation was published as part of the [special feature "Beyond Cases and Deaths: The Benefits of Auxiliary Data Streams in Tracking the COVID-19 Pandemic"](https://www.pnas.org/topic/548) in *PNAS*:

- J. Salomon, A. Reinhart, A. Bilinski, E. J. Chua, W. La Motte-Kerr, M. M.
  Rönn, M. B. Reitsma, K. A. Morris, S. LaRocca, T. H. Farag, F. Kreuter, R.
  Rosenfeld, and R. J. Tibshirani (2021). [The US COVID-19 Trends and Impact
  Survey: Continuous real-time measurement of COVID-19 symptoms, risks,
  protective behaviors, testing, and
  vaccination](https://doi.org/10.1073/pnas.2111454118). *Proceedings of the
  National Academy of Sciences* 118 (51) e2111454118.

Dozens of other peer-reviewed publications and reports have used CTIS data to study important questions in public health, epidemiology, forecasting, and related fields. A [full list is available on our survey documentation site](https://cmu-delphi.github.io/delphi-epidata/symptom-survey/publications.html).

## Can I use the surveys in my research?

Yes! Aggregate data is available for download through the [COVIDcast API]({{< apiref "api/covidcast.html">}}). [R and Python clients are available]({{< apiref "api/covidcast_clients.html">}}) for the API. Aggregate data does not include any individual survey responses, only averages over counties and other geographic areas, and does not include all survey questions. See the [API documentation]({{< apiref "api/covidcast-signals/fb-survey.html">}}) for details on how to access the data, what survey questions are available, and how our aggregate values are calculated. Contingency tables giving demographic breakdowns of key survey signals are [also publicly available for download]({{< apiref "symptom-survey/contingency-tables.html">}}).

Access to de-identified individual survey responses is available to qualified research groups who sign Data Use Agreements protecting the confidentiality of survey responses. If you are interested in using the data for your research, you can [find instructions on our documentation site](https://cmu-delphi.github.io/delphi-epidata/symptom-survey/data-access.html). The available data and survey waves are [documented here](https://cmu-delphi.github.io/delphi-epidata/symptom-survey/).

## Who can I contact?

Getting access to survey data for research: [complete this form](https://dataforgood.facebook.com/dfg/docs/covid-19-trends-and-impact-survey-request-for-data-access)

### Media inquiries:

[Stacy Kish](mailto:skish@andrew.cmu.edu)  
Associate Director, Research Communications  
Dietrich College  
Carnegie Mellon University

### All other questions:

[Alex Reinhart](mailto:areinhar@stat.cmu.edu)  
Assistant Teaching Professor  
Department of Statistics & Data Science  
Carnegie Mellon University
