---
title: Flu and Other Pathogens
layout: single
---

Delphi systems developed before the COVID-19 pandemic typically target seasonal Influenza ("Flu"), but often are used to study other diseases including Chikungunya, Dengue, and Norovirus.

# About Flu Forecasting

Since 2013, Delphi has supported the U.S. CDC’s Influenza Division in advancing and growing a scientific community around influenza forecasting. That year, we participated in the CDC’s inaugural “[Predict the Influenza Season Challenge](https://www.cdc.gov/flu/news/predict-flu-challenge.htm).” We’ve been perennial leaders in forecasting accuracy ever since, taking part in further [flu forecasting challenges](https://www.cdc.gov/flu/weekly/flusight/about-flu-forecasting.htm). In 2019 we were designated a [National Center of Excellence for Influenza Forecasting](https://delphi.cmu.edu/about/center-of-excellence/), which is a CDC-funded and CDC-designated center working on advancing influenza forecasting and enabling and improving the usefulness of forecasts of both seasonal and pandemic influenza.

## Resources and Tools

### [Epidata](https://cmu-delphi.github.io/delphi-epidata/)
The Epidata API, originally released in 2016, provides real-time access to epidemiological surveillance signals, as well as to historical versions of each signal (“what was known when”). In this system, we compile data from multiple sources and extract signals related to flu, dengue, and other pathogens. Epidata’s influenza and dengue signals served as the precursor for our COVIDCast system.

### [EpiVis](https://delphi.cmu.edu/epivis/)
EpiVis is an interactive tool for visualizing epidemiological time-series data. Users may explore their own data or utilize existing time series from the numerous data sources provided by the Epidata API.

### [ILI Nearby](https://delphi.cmu.edu/nowcast/)
In continuous operation since 2016, ILI Nearby is a real-time flu tracking system which utilizes sensor fusion methodology to bring together multiple signals to nowcast (estimate in real-time) the prevalence of Influenza-Like-Illness ("%ILI") in each U.S. state and broader regions of the US. **Note:** Since early 2020, %ILI lost much of its meaning for flu surveillance because of its overlap with Covid-Like-Illness (CLI) and because of drastic changes in healthcare practices and healthcare-seeking behavior. Consequently, ILI Nearby has not been actively maintained since 2019 and should no longer be relied upon for accurate nowcasting of %ILI in the post-pandemic era.

## Research Articles
- [Recalibrating Probabilistic Forecasts of Epidemics](https://arxiv.org/abs/2112.06305) by Rumack et al.
- [Pancasting: Forecasting Epidemics from Provisional Data](https://delphi.cmu.edu/~lcbrooks/brooks2020pancasting.pdf) by Logan C. Brooks
- [Kalman Filter, Sensor Fusion, and Constrained Regression: Equivalences and Insights](https://papers.nips.cc/paper/2019/hash/b522259710151f8cc7870b970b4e0930-Abstract.html) by Jahja et al.
- [Nonmechanistic Forecasts of Seasonal Influenza with Iterative One-Week-Ahead Distributions](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1006134) by Brooks et al.
- [A Human Judgment Approach to Epidemiological Forecasting](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005248) by Farrow et al.
- [Modeling the Past, Present, and Future of Influenza](https://delphi.cmu.edu/~dfarrow/thesis.pdf) by David C. Farrow
- [Flexible Modeling of Epidemics with an Empirical Bayes Framework](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004382) by Brooks et al.

# About Other Pathogens

Delphi has also worked on other pathogens, including Dengue fever, Norovirus, and Chikungunya. More information about our data on those pathogens is available in our [Epidata API](https://cmu-delphi.github.io/delphi-epidata/api/README.html).

## Research Articles
- [An Open Challenge to Advance Probabilistic Forecasting for Dengue Epidemics](https://www.pnas.org/doi/full/10.1073/pnas.1909865116) by Johansson et al.
- [Risk of Dengue for Tourists and Teams during the World Cup 2014 in Brazil](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4120682/) by van Panhuis et al.
- [A Human Judgment Approach to Epidemiological Forecasting](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005248) by Farrow et al.
