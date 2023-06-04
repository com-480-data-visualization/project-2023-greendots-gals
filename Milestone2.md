### Tools:
1. Web development skills and designing skills (lecture 1, 8)
2. D3 Gallery (lecture 4, 5)
3. Visualization with maps (lecture 9)
4. Echarts
5. Python for data analysis
6. Story telling skills (Lecture 12)

### Prototype preview
[Here](http://htmlpreview.github.io/?https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/index.html)

### Goals and Implements (including core design and extras):
#### 1. One spinnable earth to show the energy consumption in each country.

The first element of our website is an Earth that fills the whole sight. It is interactive where people can let it rotate at will. Users can click on any country, and related data of the country will pop out.  We provide two versions of information, separately giving users an insight of energy consumption in the whole country or per person. Users can select the total mode of per person mode with a button on the side. The pop out label of each country contains Information including name of the country, number of energy consumption, and percentage and value of fossils energy consumption in the whole energy consumption. The shade of background color depends on the value of the energy consumption. The higher the consumption is, the darker the shade will be. The difference in color shade gives the users an intuitive impression of the global level of energy consumption.

![Spinnable Earth 100% zoom](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/spinearth.png)

#### 2. A big line racing graph to show the climate change and greenhouse gas emissions trading based on year

The interactive section of our website presents an in-depth look at the relationship between climate change and greenhouse gas emissions trading. This feature provides users with the ability to select from a variety of climate change indicators, including changes over time in temperature, CO2 concentration, N2O concentration, CH4 concentration, ocean pH, sea surface temperature, ocean heat content, sea level rise, and Arctic ice extent. By selecting specific indicators, users can compare them to greenhouse gas emissions trading, gaining valuable insights into the impact of these emissions on our planet. The interactive feature takes the form of a line chart, with the selected indicators racing together as users interact with the tool. This section is a valuable resource for anyone looking to gain a better understanding of the complex relationship between climate change and greenhouse gas emissions. 

The initial status is like following:

![climate change i](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/Climate%20Change%20t1.svg)

Users can select indicators of how many regions and which data to show:

![climate change iii](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/Climate%20Change%20t2.svg)

This is the layout of 'Split by Region':

![climate change II](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/Climate%20Change%20II.svg)

#### 3. Access to clean energy(proportion) vs. GDP per capita
In this part, the visualization will present the access to clean energy vs. GDP per capita. It is an interactive visualization. Users can select countries or regions and year. Users also could decide to let the figure automatically change over years to the energy transformation. Users can the results from two data processing methods, with linear X or log X. When users click the circle to see details about data.
![Chart 3](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/chart3.svg)

#### 4. Create separate bar for each country, show a more detailed view on each sub-category renewable energy consumption (wind, solar, hydrapower, other), two main graphs: racing line to show year & pie chart to show percentages 
  - In the main page, the top 10 country basic information will be shown in a table as following:
  ![Table of countries](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/Table_of_countries.png)
  - When you click on a single country, a more detailed data will be presented, the process will be like this:
  ![Table of countries with extend](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/Table_of_countries_with_extend.png)
  - In each small window, on the left, a racing line graph shows each clean energy trading for each year. On the right side, a pie chart shows the percentage of each clean energy of the year 2022. The layout is like this: 
  ![Layout of renewable energy](https://github.com/com-480-data-visualization/project-2023-greendots-gals/blob/master/figures/layout_of_country_details.png)
  - Extended ideas:
  1. The table of countries is sorted defualt by the total amount of energy. To extend, we could let user to chose to sort by any of the three features.
  2. The pie chart was defualt to show the information of 2022, but we could let user to choose any year's (from 1965 to 2022) information by clicking a year line.
