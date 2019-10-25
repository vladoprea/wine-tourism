# WINE TOURISM

Wine tourism or enotourism was a blooming industry in 2018 and its popularity is still rising. Wine tourism includes the tasting, consumption or purchasing of wine  at or near the source. It can consist of visits to wineries, vineyards and restaurants known to offer unique experiences, as well as organized wine tours, wine festivals or other special events.
This single page site is designed to show statistics about the wine production by country and continent in 2018 and more important, to present an interactive map with 30 of the most beatiful vineyards and wineries to visit from 3 countries: Italy, France and Spain.

The deployed site can be found here: <https://vladoprea.github.io/wine-tourism/>

## User Experience

This is a single page site, easy to navigate. It begins with an bohemian introduction into the wine world and continues with a short brief of the site content structure. Even tough its main purpose is a turistic one, I included some statistics for a better understanding of this world phenomenon that helps the user to have a larger view about the subject.

### Structure and design objectives

+ First section contains a short description of wine to make the user enter its complex and beatiful world. It also contains text about the structure of the page.
+ Second section contains graphs with data about the wine production per country and per continent in 2018 and the vineyard surfaces used by those countries. They make the user more aware about the magnitude of this industry.
+ Third section contains a definition of wine tourism and three buttons that represent the top producers in the world as shown in the graphs.
+ The last section contains a map that shows 30 of the most recommended vineyards and wineries to visit. It allows the user to do a virtually first tour.
+ Background images are represented by grapes and vineyards to connect the text with a visual representation.
+ As a font, I used Merienda, which have an artistic touch on the page

### Target audience

+ A simple person interested in an unique alternative for holiday
+ A vineyard owner interested in analyzing competition
+ A wine lover looking to enlarge his knowledge

### User Stories

+ As a simple tourist I want to be able to find the best possible destinations and compare them.
+ As a vineyard owner I want to have access to statistical data about wine, vineyards and wineries and also to be able to see and access informations about other vineyards that compete with mine.
+ As a wine lover I want to have complex data that I can access in order to expand my knowledge.

### Mock-ups

As it can be seen, the project was modified and improved during development process:

+ [Desktop-MockUp](https://ibb.co/C6kpk1d)
+ [Ipad-MockUp](https://ibb.co/r3n3Hr6)
+ [Mobile-MockUp](https://ibb.co/Hqmz740)

## Features

### Charts

1. First pie chart that contains a visual statistical representantion of the wine production per 18 countries. When the user hovers over one slice of the pie, a small window appears which contains the name of the country and the quantity in hectolitres. The pie is interactive, being connected with the other charts.

2. Second pie chart that contains a visual representation of the vineyards surfaces per each of the 18 most wine producing countries. When the user hovers over one slice of the pie, a small window appears which contains the name of the country and the surface in hectares. The pie is interactive, being connected with the other charts.

3. A bar chart that contains a visual representation of the wine production per each continent. When the user hovers over one bar, a small window appears which contains the name of the continent and the quantity in hectolitres. The x-axis represents the continents and the y-axis represents the quantity. The bar chart is interactive, being connected with the other charts.

### Refresh charts button

A button at the end of the charts that refresh the entire page, including the charts.

### Flag country buttons

Three buttons represented by the flag of the first three wine producing countries in the world. These countries make the object of the touristic representations. When clicking a button, the center of the map moves over the respective country.

### Search box

A google map search box connected with the google map that offers the opportunity to the user to search for any destination in the world. It has also an autocomplete function.

### Google map

A google map centered above Italy. It contains 30 markers, 10 for each of the 3 countries that produces most wine. When clicked, each marker opens a window with the title of the vineyard and a short presentation text. The title is also a link to the site of the respective destination.

## Technologies used

In this project I used:

+ [HTML](https://www.w3schools.com/html/)
+ [CSS](https://www.w3schools.com/css/)
+ [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
+ [BootstrapCDN](https://getbootstrap.com/)
+ [GoogleFonts](https://fonts.google.com/)
+ [Git](https://git-scm.com/)
+ [Crossfilter](https://github.com/crossfilter)
+ [D3.js](https://d3js.org/)
+ [DC.js](https://dc-js.github.io/dc.js/)
+ [GoogleMapsAPI](https://developers.google.com/maps/documentation/javascript/tutorial)
+ [VScode](https://code.visualstudio.com/)

Other technologies used:

+ [AdobeXD](https://www.adobe.com/ro/products/xd.html) for creating Mock-Ups

## Testing

This project was only tested manually on a range of devices and browsers. During development I constantly used Chrome Developer Tools in order to ensure responsivness on all devices. The site functionality was contantly checked in the following browsers:

+ Chrome
+ Mozzila Firefox
+ Opera
+ Safari
+ Internet Explorer 11
+ Mi Browser

For some users, the responsivness of Pie Charts in small devices can create a bad experience because of lacking a full view of the charts interconnectivity.

Because of the technologies used, an automatic testing with Jasmine was not necessary.

### Manual testing

Manual testing was made on several small, medium and large devices and constantly during development with Chrome Developer Tools.

Charts

1. Desktop users: The tests were made trying the interactivity of the charts by clicking on each of the slices of the pie charts or each bar of the bar chart. As example, when user clicks on the slice of the pie of Italy, the other pie chart shows the data only for Italy and the barchart shows only de data for Europe keeping just the quantity produced by Italy. Also, when hovered, the charts open small windows with the necessary information.

2. Mobile and tablet users: The tests were made trying the interactivity of the charts by clicking on each of the slices of the pie charts or each bar of the bar chart. As example, when user clicks on the slice of the pie of Italy, the other pie chart shows the data only for Italy and the barchart shows only de data for Europe keeping just the quantity produced by Italy. The disadvantage for these devices is that the small windows with informations are not displayed when hovering.

Refresh Charts button

Refresh charts button worked in all tests, refreshing the entire page as designed.

Country flags buttons

Country flags buttons worked in all tests by centering the map above the country selected. After using the search box for other destinations across the globe, when pressing the flags buttons, the map is centered as programmed.

Search box

Search box was tested by entering different destinations across the world. The autocomplete functions works and a marker is displayed for the desired destination.

Google map

Google map is displayed well on all devices and browser tested. All the markers are on the desired destination. Markers were tested by clicking on each of them, an info window appeared for all of them containing the correct informations. Titles of the destinations that contain links to their website, open the websites on a different tab. All of them worked correctly.

### Validators

The code was checked with the following validators:

+ [W3CMarkupValidator](https://validator.w3.org/) for HTML code - errors found were fixed
+ [W3CJigsawCSSValidator](https://jigsaw.w3.org/css-validator/) for CSS code - no errors found
+ [JShint](https://jshint.com/) for JS code. Errors found:

1. Multiple errors in maps.js file for var = locations saying: "Bad escaping of EOL. Use option multistr if needed."
2. One error at line 107 in maps.js file saying: "Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (infowindow, locations, map)"

## Deployment

This site was developed using VScode, committed to git and pushed to GitHub with the built-in functionality in VScode. From there it was deployed to GitHub Pages from its GitHub repository.

### To deploy this page to GitHub Pages from its GitHub repository the following steps were taken

1. Logged into my GitHub account <https://github.com/vladoprea>
2. Go to Repository tab.
3. Click the repository called "wine-tourism".
4. Go to the "Settings" tab at the top of the page and click it.
5. Scroll down the "Settings" page to the "Github Pages" section.
6. In the "Sources" subsection select "Master Branch" from the drop-down menu currently labelled none. This refreshes the page and publishes the project.
7. Scroll down again to the GitHub pages to find a link to the deployed site.
8. The website is published here: <https://vladoprea.github.io/wine-tourism/>

### To run project locally

To clone this project from GitHub:

1. Follow this link to the Project GitHub repository.
2. Under the repository name, click "Clone or download".
3. In the Clone with HTPPs section, copy the clone URL for the repository.
4. In your local IDE open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone and then paste the URL you copied in Step 3.
7. git clone:  <https://vladoprea.github.io/wine-tourism/>
8. Press Enter. Your local clone will be created.

## Credits

### Media

+ Background top picture: <https://www.rockwood-manor.com/vineyards/>
+ Background bottom picture: <https://wentevineyards.com/wines/gifts>
+ Flags for buttons images: <http://www.all-flags-world.com>
+ Text in first section: <https://www.thewinecellarinsider.com/wine-topics/wine-education-articles/learn-wine-guide-understanding-wine/>
+ Text in third section: <https://en.wikipedia.org/wiki/Enotourism>
+ Destinations in Italy and info text about them: <https://theculturetrip.com/europe/italy/articles/the-10-best-wineries-in-italy/>
+ Destinations in France and info text about them: <https://www.completefrance.com/travel/holiday-ideas/10-outstanding-vineyards-in-france-you-have-to-visit-1-4430426>
+ Destinations in Spain and info text about them: <https://theculturetrip.com/europe/spain/articles/the-best-wineries-and-vineyards-to-visit-in-spain/> and <https://www.winerist.com/magazine/wine/the-10-most-famous-spanish-wineries-to-visit>

### Acknowledgements

+ MrUpsidown users answer in StackOverflow for Centering a Map by clicking a button: <https://stackoverflow.com/questions/28499141/how-to-change-google-map-center-by-clicking-a-button>
+ Michelle user of medium site for creating markers and infowindows on google map: <https://medium.com/@limichelle21/integrating-google-maps-api-for-multiple-locations-a4329517977a>
+ For creating a search box and link it to the google map: <https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/examples/places-searchbox>
+ [CodeInstitute](https://codeinstitute.net/)
+ [StackOverflow](https://stackoverflow.com/)
+ [GoogleMapsPlatform](https://developers.google.com/maps/documentation/javascript/places)

Special thanks to:

+ Maranatha Ilesanmi my mentor who guide me through this project and provided punctual, solid and useful feedback.
+ [Slack](https://app.slack.com/client/T0L30B202/C0L316Z96) community for providing solutions to every question I had.
