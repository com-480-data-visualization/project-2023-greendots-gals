# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
|Sijia Du|335812|
|Weier Liu |346426|
|Xinyi Ding |357331|

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1

### Dataset<sup>1</sup>

- Energy: https://ourworldindata.org/energy 
- Renewable energy: https://ourworldindata.org/renewable-energy
- Fossil energy: https://ourworldindata.org/fossil-fuels
- GreenGas energy: https://ourworldindata.org/co2-and-greenhouse-gas-emissions
- Climate Change Impacts: https://ourworldindata.org/explorers/climate-change


### Problematic

Energy now becomes a huge topic to be discussed in the current world. There are two main reasons. The first one is that the dominance of fossil fuels in our energy system drives climate change, and other health impacts such as air pollution. The second one is that due to the Russia-Ukraine war, the world, especially in Europe, is experiencing a lack of fossil fuels. As a result, the development of renewable and clean energy is important and agent. However, not every person has recognized the problems, so we need to show people that this problem is significant to arouse people’s awareness. 

First, we plan to show the energy consumption in each country to give the audience a direct sense of how much energy we are using. In addition, we plan to show the consumption of fossil fuels in each country. Second, we want to draw our audience’s attention on the climate change and greenhouse gas emissions trading to show the fact that we are facing significant environmental problems due to the high energy consumption. 

Then, we want to discover the potential power of using renewable energy in each country. Based on this target, we first want to show the trading and current share of renewable energy in overall energy consumption of each country. Later, we want to have a more detailed view on each sub-category renewable energy consumption situation. From here, we could analyze which countries have done a good job and which countries need to contribute more on the use of renewable energy.



### Exploratory Data Analysis

From the figures, we can see the global temperature and CO2 emission are generally synchronous. In the recent 60 years, CO2 emissions per capita five of main countries (in terms of CO2 emissions) has decreased in different levels. At the same time, fossil fuels consumption per capita is decreasing in slow process and renewables consumption per capita is increasing. In the last figure, we can different types of percentage of energy. Traditional energy still accounts for large proportions of the entire energy consumption.

![Annual CO2 emission of 5 countries](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/annualCO2emissions.png)
![Fossil fuels consumption of 5 countries](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/fossilfuels.png)
![Renewables consumption of 5 countries](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/renewables.png)
![Energy percentage over time](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/energypercentage.png)
![Monthly temperature change over time](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/temperaturechange.png)



### Related work


There are already some initial interpretations and visualizations available on the datasets we have chosen, such as line graphs and interactive map charts illustrating global temperature trends and energy consumption situations. While these visualizations present vast amounts of data, they only provide a preliminary insight into the energy landscape. Our aim is to use these datasets to tell a coherent data story that helps people understand the issues surrounding energy consumption and the environment.

We plan to select the most significant data elements and use interactive charts with visually appealing and simple designs to communicate our data story to the audience. Our approach goes beyond merely presenting data and aims to convey clear information to the audience, generate interest, and evoke empathy to raise awareness and prompt action.

Therefore, we will select the most relevant and impactful data elements and use interactive visualizations with a clear and logical narrative flow that effectively communicates our data story. Our approach not only presents data, but also aims to raise awareness and encourage action by conveying a compelling message that resonates with the audience.

One of our sources of inspiration is a website that presents a wide range of global information during the COVID-19 pandemic in a clear, visually appealing, and informative manner without overwhelming the viewer<sup>2</sup>.

### Reference
1. Our World in Data: https://ourworldindata.org/
2. Latest updates: COVID-19 vaccination charts, maps and eligibility by country: https://www.reuters.com/graphics/world-coronavirus-tracker-and-maps/vaccination-rollout-and-access/


## Milestone 2 (7th May, 5pm)

**10% of the final grade**
### Tools:
(The library used here related to lectures)

### Goals:
1. In 

### Implements (including core design and extras):
#### 1. One spinnable earth to show the energy consumption in each country.

The first element of our website is an Earth that fills the whole sight. It is interactive where people can let it rotate at will. Users can click on any country, and related data of the country will pop out.  We provide two versions of information, separately giving users an insight of energy consumption in the whole country or per person. Users can select the total mode of per person mode with a button on the side. The pop out label of each country contains Information including name of the country, number of energy consumption, and percentage and value of fossils energy consumption in the whole energy consumption. The shade of background color depends on the value of the energy consumption. The higher the consumption is, the darker the shade will be. The difference in color shade gives the users an intuitive impression of the global level of energy consumption.

![Spinnable Earth 100% zoom](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/spinearth.png)

#### 2. a big line racing graph to show the climate change and greenhouse gas emissions trading based on year

The interactive section of our website presents an in-depth look at the relationship between climate change and greenhouse gas emissions trading. This feature provides users with the ability to select from a variety of climate change indicators, including changes over time in temperature, CO2 concentration, N2O concentration, CH4 concentration, ocean pH, sea surface temperature, ocean heat content, sea level rise, and Arctic ice extent. By selecting specific indicators, users can compare them to greenhouse gas emissions trading, gaining valuable insights into the impact of these emissions on our planet. The interactive feature takes the form of a line chart, with the selected indicators racing together as users interact with the tool. This section is a valuable resource for anyone looking to gain a better understanding of the complex relationship between climate change and greenhouse gas emissions. 

![climate change I]()

#### 3. a big line racing graph with the trading and current share (percentage and value) of renewable energy in overall energy consumption of each country (top 10 most consuming countries)

In this part, the visulization is similar to the section 2. The lines in this line chart will be racing together as users interact with the tool. Each line present a trading and current share (percentage and value) of renewable energy in overall energy consumption of one country. 

[figures and instructions TBC]

#### 4. create separate bar for each country, show a more detailed view on each sub-category renewable energy consumption (wind, solar, hydrapower, other), two main graphs: racing line to show year & pie chart to show percentages 
  - In the main page, the top 10 country basic information will be shown in a table as following:
  ![Table of countries](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/Table_of_countries.png)
  - When you click on a single country, a more detailed data will be presented, the process will be like this:
  ![Table of countries with extend](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/Table_of_countries_with_extend.png)
  - In each small window, on the left, a racing line graph shows each clean energy trading for each year. On the right side, a pie chart shows the percentage of each clean energy of the year 2022. The layout is like this: 
  ![Layout of renewable energy](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/layout_of_country_details.png)
  - Extended ideas:
  1. The table of countries is sorted defualt by the total amount of energy. To extend, we could let user to chose to sort by any of the three features.
  2. The pie chart was defualt to show the information of 2022, but we could let user to choose any year's (from 1965 to 2022) information by clicking a year line.


### Prototype Review


## Milestone 3 (4th June, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

