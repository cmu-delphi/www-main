---
title: Delphi's COVID-19 Trends and Impact Surveys (CTIS)
linkTitle: About CTIS
aliases:
 - /covidcast/surveys
---

{{< alert category="primary">}}
  Summary results for the survey are available. [Click here to explore]({{< relref "covidcast/survey-results" >}})
{{< /alert >}}

In collaboration with Facebook, along with a consortium of universities and public health officials, the [Delphi group]({{< relref "/" >}}) at [Carnegie Mellon University](https://www.cmu.edu/) conducts the COVID-19 Trends and Impact Survey to monitor the spread and impact of the COVID-19 pandemic in the United States. This survey is advertised through Facebook. It has run continuously since early April 2020, and about 50,000 people in the United States participate **every day**. Survey results are publicly available on our [CTIS Results Dashboard]({{< relref "covidcast/survey-results" >}}) and [COVIDcast Map]({{< relref "covidcast" >}}); aggregate data can be downloaded through our [COVIDcast Exporter]({{< relref "covidcast/export" >}}), from our [COVIDcast API]({{< apiref "api/covidcast.html" >}}), and as [contingency tables]({{< apiref "symptom-survey/contingency-tables.html">}}) with demographic breakdowns.

Such detailed data has never before been available during a public health emergency, and it has already helped public health officials understand how to save lives and how to safely reopen public life. The data also helps researchers understand the social, economic, and health effects of the COVID-19 pandemic.

An international version of the survey is conducted by the University of Maryland in collaboration with Facebook. Its data [is available separately](https://covidmap.umd.edu/).

Detailed technical documentation about the survey is available on our [site for data users](https://cmu-delphi.github.io/delphi-epidata/symptom-survey/).

## What are the surveys for?

The survey asks respondents whether they are experiencing any symptoms, then asks a series of questions designed to help researchers understand the spread of COVID-19 and its effect on people in the United States. These include questions about COVID-19 testing, prior medical conditions, social distancing measures, mental health, demographics, and the economic effects of the pandemic.

Delphi uses information from the survey as part of its public [COVIDcast Map]({{< relref "covidcast" >}}), to inform its forecasts of the pandemic’s spread, and to assist public health agency partners. By providing daily data from all parts of the United States, the survey allows comparisons between regions and allows careful tracking of changes over time. Other researchers use the survey to study factors related to the pandemic's spread, its effects on mental health, how different demographic groups are affected by the pandemic, and numerous other important questions.

Because the survey can reach thousands of respondents every day, its questions focus on what the respondents are experiencing right now. This allows us to track how conditions change across the country every day.

## Who is running these surveys?

The surveys are a collaboration between [Delphi]({{< relref "/" >}}) at Carnegie Mellon University, numerous universities, and Facebook. Researchers at many institutions are analyzing the survey data and assisting in the survey’s development.

The survey protocol has been reviewed by the Carnegie Mellon University Institutional Review Board. Delphi only publicly releases aggregate data; de-identified individual data is made available to research partners. Our partners are bound by data use agreements to maintain the confidentiality of individual survey responses. Facebook refers its users to the survey, but it does not receive any individual survey data.

## How are the surveys distributed?

Participants are recruited for the surveys through an advertisement placed in their Facebook news feed. Facebook automatically selects a random sample of its users to see the advertisement; users who click on the ad are taken to a survey administered by Carnegie Mellon University, and Facebook does not see their survey responses. The survey is available in English, Spanish, Brazilian Portuguese, Vietnamese, French, and simplified Chinese.

The survey participants are sampled from Facebook users, rather than being a random sample from the entire United States population. But unlike a traditional telephone or mail survey, distribution through Facebook allows us to reach tens of thousands of respondents every day, permitting researchers to make comparisons between many geographic areas and to detect changes as soon as they happen.

To account for the differences between Facebook users and the United States population, Facebook includes a unique identifier when it links users to the survey. Carnegie Mellon collects these identifiers and provides Facebook with a list of identifiers that completed the survey; Facebook then calculates statistical weights indicating how representative each person is of the United States population, based on demographic data known to Facebook. Crucially, Carnegie Mellon cannot use these identifiers to identify specific Facebook users, and Facebook never receives individual survey responses and cannot link them to specific users.

## Where can I see the results?

Our [CTIS Results Dashboard]({{< relref "covidcast/survey-results" >}}) shows aggregate survey results, ranging from rates of COVID-like symptoms over mask usage to mental health. In addition, our [COVIDcast dashboard]({{< relref "covidcast" >}}) shows basic aggregate survey results, revealing the rates of mask usage and COVID-like symptoms across the United States. The data used by both tools is also freely available for download through the [COVIDcast API]({{< apiref "api/covidcast.html">}}) and our [COVIDcast Exporter]({{< relref "covidcast/export" >}}). Facebook also publishes [a map](https://covid-survey.dataforgood.fb.com/) based on the United States and international aggregate data.

The [Symptom Data Challenge](https://www.symptomchallenge.org/) challenged participants to enable earlier detection and improved situational awareness of the COVID-19 outbreak by using data from these symptom surveys. Check out the [the challenge website](https://www.symptomchallenge.org/) for more details about the Challenge and the finalists.

### Publications

Our primary description of the survey and its results over the first year of operation was published as part of the [special feature "Beyond Cases and Deaths: The Benefits of Auxiliary Data Streams in Tracking the COVID-19 Pandemic"](https://www.pnas.org/doi/full/10.1073/pnas.2111456118) in *PNAS*:

- J. Salomon, A. Reinhart, A. Bilinski, E. J. Chua, W. La Motte-Kerr, M. M.
  Rönn, M. B. Reitsma, K. A. Morris, S. LaRocca, T. H. Farag, F. Kreuter, R.
  Rosenfeld, and R. J. Tibshirani (2021). [The US COVID-19 Trends and Impact
  Survey: Continuous real-time measurement of COVID-19 symptoms, risks,
  protective behaviors, testing, and
  vaccination](https://doi.org/10.1073/pnas.2111454118). *Proceedings of the
  National Academy of Sciences* 118 (51) e2111454118.

Other research publications using the survey data include:

- F. Petersen, A. Errore, and P. Karaca-Mandic (2022). [Lifting statewide mask mandates and COVID-19 cases: A synthetic control study](https://doi.org/10.1097/MLR.0000000000001725). *Medical Care*.
- F. Pierri, B. L. Perry, M. R. DeVerna, et al. (2022). [Online misinformation is linked to early COVID-19 vaccination hesitancy and refusal](https://doi.org/10.1038/s41598-022-10070-w). *Scientific Reports* 12, 5966.
- A. Pilehvari, J. Ton, M. R. Mohan, A. Marathe, and A. Vullikanti (2022). [Drivers and Predictors of COVID-19 Vaccine Hesitancy in Virginia](https://doi.org/10.1007/978-3-030-96188-6_8). In: Yang, Z., von Briesen, E. (eds), *Proceedings of the 2021 Conference of The Computational Social Science Society of the Americas*. CSSSA 2021.
- L. S. Flor, J. Friedman, C. N. Spencer, et al. (2022). [Quantifying the effects of the COVID-19 pandemic on gender equality on health, social, and economic indicators: a comprehensive review of data from March, 2020, to September, 2021](https://doi.org/10.1016/S0140-6736(22)00008-3). *The Lancet*.
- D. P. Do and R. Frank (2022). [Prior COVID-19 infection: an underappreciated factor in vaccine hesitancy in the USA](https://doi.org/10.1093/pubmed/fdab404). *Journal of Public Health*, fdab404.
- W. C. King, M. Rubinstein, A. Reinhart, and R. J. Mejia (2021). [Time trends, factors associated with, and reasons for COVID-19 vaccine hesitancy: A massive online survey of US adults from January-May 2021](https://doi.org/10.1371/journal.pone.0260731). *PLoS ONE* 16 (12), e0260731.
- C. Lupton-Smith, E. Badillo-Goicochea, T.-H. Chang, H. Maniates, K. E. Riehm, I. Schmid, and E. A. Stuart (2021). [Factors associated with county-level mental health during the COVID-19 pandemic](https://doi.org/10.1002/jcop.22785). *Journal of Community Psychology*.
- D. P. Do and R. Frank (2021). [U.S. frontline workers and COVID-19 inequities](https://doi.org/10.1016/j.ypmed.2021.106833). *Preventive Medicine* 153, 106833.
- W. C. King, M. Rubinstein, A. Reinhart, and R. J. Mejia (2021). [COVID-19 vaccine hesitancy January-May 2021 among 18–64 year old US adults by employment and occupation](https://doi.org/10.1016/j.pmedr.2021.101569). *Preventive Medicine Reports* 24, 101569.
- C. H. Sudre, A. Keshet, M. S. Graham, A. D. Joshi, S. Shilo, H. Rossman, B. Murray, E. Molteni, K. Klaser, L. D. Canas, M. Antonelli, L. H. Nguyen, D. A. Drew, M. Modat, J. Capdevila Pujol, S. Ganesh, J. Wolf, T. Meir, A. T. Chan, C. J. Steves, T. D. Spector, J. S. Brownstein, E. Segal, S. Ourselin, and C. M. Astley (2021). [Anosmia, ageusia, and other COVID-19-like symptoms in association with a positive SARS-CoV-2 test, across six national digital surveillance platforms: an observational study](https://doi.org/10.1016/S2589-7500(21)00115-1). *The Lancet Digital Health* 3 (9), e577-e586.
- R. Sukumaran, P. Patwa, S. T V, S. Shankar, R. Kanaparti, J. Bae, Y. Mathur, A. Singh, A. Chopra, M. Kang, P. Ramaswamy, and R. Raskar (2021). [COVID-19 outbreak prediction and analysis using self reported symptoms](https://doi.org/10.35566/jbds/v1n1/p8). *Journal of Behavioral Data Science* 1 (1), 154–169.
- D. Adjodah, K. Dinakar, M. Chinazzi, S. P. Fraiberger, A. Pentland, S. Bates, K. Staller, A. Vespignani, and D. L. Bhatt (2021). [Association between COVID-19 outcomes and mask mandates, adherence, and attitudes](https://doi.org/10.1371/journal.pone.0252315). *PLoS ONE* 16 (6), e0252315.
- C. M. Zipfel, V. Colizza, and S. Bansal (2021). [The missing season: The impacts of the COVID-19 pandemic on influenza](https://doi.org/10.1016/j.vaccine.2021.05.049). *Vaccine* 39 (28), 3645-3648.
- J. Lessler, M. K. Grabowski, K. H. Grantz, E. Badillo-Goicoechea, C. J. E. Metcalf, C. Lupton-Smith, A. S. Azman, and E. A. Stuart (2021). [Household COVID-19 risk and in-person schooling](https://doi.org/10.1126/science.abh2939). *Science* 372 (6545), 1092-1097.
- Doerr, A.J. (2021). [Locked (Down) and Loaded (Language): Effect of Policy and Speech on COVID-19 Outcomes](https://doi.org/10.1177/15480518211012404). *Journal of Leadership & Organizational Studies* 28 (3), 340-348.
- Fischer CB, Adrien N, Silguero JJ, Hopper JJ, Chowdhury AI, Werler MM (2021). [Mask adherence and rate of COVID-19 across the United States](https://doi.org/10.1371/journal.pone.0249891). *PLoS ONE* 16 (4), e0249891.
- Bilinski, A., Emanuel, E., Salomon, J.A. and Venkataramani, A. (2021). [Better Late Than Never: Trends in COVID-19 Infection Rates, Risk Perceptions, and Behavioral Responses in the USA](https://doi.org/10.1007/s11606-021-06633-8). *Journal of General Internal Medicine* 36, 1825-1828.
- Molteni, E., Astley, C.M., Ma, W. et al. (2021). [Symptoms and syndromes associated with SARS-CoV-2 infection and severity in pregnant women from two community cohorts](https://doi.org/10.1038/s41598-021-86452-3). *Scientific Reports* 11, 6928.
- Rebeiro, P., Aronoff, D, and Smith, M.K. (2021). [The Impact of State Mask-Wearing Requirements on the Growth of COVID-19 Cases, Hospitalizations, and Deaths in the United States](https://doi.org/10.1093/cid/ciab101). *Clinical Infectious Diseases*, ciab101.
- Rader, White, Burns, Chen, Brilliant, Cohen, Shaman, Brilliant, Kraemer, Moritz, Hawkins, Scarpino, Astley, and Brownstein (2021). [Mask-wearing and control of SARS-CoV-2 transmission in the USA: a cross-sectional study](https://doi.org/10.1016/S2589-7500(20)30293-4). *Lancet Digital Health* 3 (3), e148-e157.
- Flaxman AD, Henning DJ and Duber HC (2020). [The relative incidence of COVID-19 in healthcare workers versus non-healthcare workers: evidence from a web-based survey of Facebook users in the United States](https://doi.org/10.12688/gatesopenres.13202.2). *Gates Open Research*, 4:174.
- Kreuter, F., Barkay, N., Bilinski, A., Bradford, A., Chiu, S., Eliat, R., Fan, J., Galili, T., Haimovich, D., Kim, B., LaRocca, S., Li, Y., Morris, K., Presser, S., Sarig, T., Salomon, J. A., Stewart, K., Stuart, E. A., & Tibshirani, R. J. (2020). [Partnering with a global platform to inform research and public policy making](https://doi.org/10.18148/srm/2020.v14i2.7761). *Survey Research Methods*, 14 (2), 159-163.

If you have used the survey data, or the aggregate data available in the COVIDcast API, to publish research results, please [contact us](#who-can-i-contact) so we can include your work here.

### Blog posts and reports

- Surgo Ventures, Resolve to Save Lives (2021). [COVID-19 Vaccine Precision Response Toolkit: An End-to-End Vaccination Improvement Framework to Improve COVID-19 Vaccine Uptake](https://surgoventures.org/resource-library/increasing-covid-19vaccine-uptake-a-four-step-framework-to-promote-access-acceptance-and-equity).
- Alejandra Arrieta, Emmanuela Gakidou, Heidi Larson, Erin Mullany, and Christopher Troeger, April 1, 2021. [Through Understanding and Empathy, We Can Convince Women to Get the COVID-19 Vaccine](https://www.thinkglobalhealth.org/article/through-understanding-and-empathy-we-can-convince-women-get-covid-19-vaccine). Think Global Health.
- Joseph Friedman, Silvia Montoya and Emmanuela Gakidou, March 8, 2021. [Gender Equality in the Global Return to School](https://www.thinkglobalhealth.org/article/gender-equality-global-return-school). Think Global Health.
- Leanna Morinishi, Kris Barkume, Esther Kim, and Alex Reinhart, February 2, 2021. [Home for the Holidays? The Impact of US Holidays on Social Behaviors and Preventative Measures]({{< relref "2021-01-22-holiday-surveys" >}}). Delphi blog.
- Alex Reinhart, Esther Kim, Andy Garcia, and Sarah LaRocca, January 28, 2021. [Using the COVID-19 Symptom Survey to Track Vaccination Uptake and Sentiment in the United States]({{< relref "2021-01-28-survey-vaccines" >}}). Delphi blog.
- Alex Reinhart, October 12, 2020. [New and Improved COVID Symptom Survey Tracks Testing and Mask-Wearing]({{< relref "2020-10-06-survey-wave-4" >}}). Delphi blog.
- Ryan Tibshirani, September 21, 2020. [Can Symptom Surveys Improve COVID-19 Forecasts?]({{< relref "2020-09-21-forecast-demo" >}}) Delphi blog.
- Alex Reinhart and Ryan Tibshirani, August 26, 2020. [COVID-19 Symptom Surveys through Facebook]({{< relref "2020-08-26-fb-survey" >}}). Delphi blog.

## Can I use the surveys in my research?

Yes! Aggregate data is available for download through the [COVIDcast API]({{< apiref "api/covidcast.html">}}), updated daily. [R and Python clients are available]({{< apiref "api/covidcast_clients.html">}}) for the API. Aggregate data does not include any individual survey responses, only averages over counties and other geographic areas, and does not include all survey questions. See the [API documentation]({{< apiref "api/covidcast-signals/fb-survey.html">}}) for details on how to access the data, what survey questions are available, and how our aggregate values are calculated. Contingency tables giving demographic breakdowns of key survey signals are [also publicly available for download]({{< apiref "symptom-survey/contingency-tables.html">}}).

Access to de-identified individual survey responses is available to qualified research groups who sign Data Use Agreements protecting the confidentiality of survey responses. If you are interested in using the data for your research, you can [find instructions on our documentation site](https://cmu-delphi.github.io/delphi-epidata/symptom-survey/data-access.html). The available data and survey waves are [documented here](https://cmu-delphi.github.io/delphi-epidata/symptom-survey/).

## Who can I contact?

Questions from survey respondents about consent, research ethics, or how their data is used: [delphi-admin-survey-fb@lists.andrew.cmu.edu](mailto:delphi-admin-survey-fb@lists.andrew.cmu.edu)

Getting access to survey data for research: [complete this form](https://dataforgood.fb.com/docs/covid-19-symptom-survey-request-for-data-access/)

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
