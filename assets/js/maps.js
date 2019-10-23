// Initialize map function

function initMap() {
    var center = {lat: 41.8719, lng: 12.5674};

   //Define a variable for markers position and text for infowindows
   
   var locations = [
      ['<a href="https://www.marchesibarolo.com/" target="_blank"><h6>Marchesi di Barolo</h6></a><br>\
       Barolo is possibly one of the most renowned and best-quality wines in Italy.', 44.6112557, 7.9381734],
      ['<a href=https://www.oliveropietro.it/" target="_blank"><h6>Antica Cascina dei Conti di Roero</h6></a><br>\
      Vezza d’Alba, where this winery is located, is a truly historic area for wine-making in Italy.', 44.7825053, 5.7433958],
      ['<a href="http://www.dezinis.it/" target="_blank"><h6>Redaelli de Zinis</h6></a><br>\
      All the produce is DOC – of controlled origin – which guarantees a great quality and an unmistakable flavour.', 45.4552095, 10.489519],
      ['<a href="http://www.tenutelunelli.it/it/tenute_umbria.php" target="_blank"><h6>Tenuta di Castelbuono</h6></a><br>\
      Tenuta di Castelbuono was awarded the Wonderful Winery prize because of its peculiar architecture.', 42.9682789, 12.5606493],
      [' <a href="http://www.agricolavalentini.it/en/" target="_blank"><h6>Azienda Agricola Valentini</h6></a><br>\
      Most of its wine production is centred upon Trebbiano and Montepulciano, but its offer covers other sorts of other labels too.', 42.6960311, 11.2772723],
      ['<a href="https://www.vinicontini.com/" target="_blank"><h6>Azienda Vinicola Contini</h6></a><br>\
      With a perfect mix of local flavours and national quality, Azienda Vinicola Contini shows that Sardinia has plenty more to offer than just rugged beaches and untouched lands.', 39.9337543, 8.5268467],
      ['<a href="https://www.mastroberardino.com/" target="_blank"><h6>Mastroberardino</h6></a><br>\
      Among its grapes are, for instance, Aglianico, Fiano, Greco, Fanghina, Piedirosso, all dating back to ancient Greek and Roman times.', 40.9232693, 14.8296336],
      ['<a href="https://www.librandi.it" target="_blank"><h6>Librandi</h6></a><br>\
      Conveniently located between the seaside and its temperate climate in the mountains, Librandi is a great spot for some wine tasting on this southern isle.', 39.4011949, 12.6375087],
      ['<a href="https://planeta.it/" target="_blank"><h6>Planeta ulmo</h6></a><br>\
      The vineyards make up a total area of 363 hectares and yield different kinds of grapes: from the little-known Grecanico, Carricante, Frappato, and Nerello Mascalese to the internationally acclaimed Nero d’Avola, Chardonnay, Syrah, Merlot and Cabernet.', 37.6272855, 13.0775756],
      ['<a href="https://www.frescobaldi.com" target="_blank"><h6>Marchesi de’ Frescobaldi</h6></a><br>\
      Marchesi de’ Frescobaldi possesses five different discrete units where wine is produced and which guests are more than welcome to visit.', 43.3114252, 10.1835734],
      ['<a href="www.domainevirgilejoly.com" target="_blank"><h6>Domaine Virgile Joly, Languedoc</h6></a><br>\
      Long committed to wine tourism, vigneron Virgile Joly organises a wine and film night every August, when visitors can taste, watch an open-air film and eat dinner in the village square.', 43.6946706, 3.4687463],
      ['<a href="www.cazes-rivesaltes.com" target="_blank"><h6>Domaine Cazes, Roussillon</h6></a><br>\
      The largest certified biodynamic estate in France, stretching over 220 hectares of land at Rivesaltes in the Pyrénées Orientales, Domaine Cazes produces 13 different wines every year.', 42.7701099, 2.875148],
      ['<a href="http://chambres-hotes.maltoff.com" target="_blank"><h6>Domaine Maltoff, Burgundy</h6></a><br>\
      Visitors can enjoy tastings of either white, rosé or red wines, all benefitting from the Bourgogne Coulanges la Vineuse designation, in the cellar as well as a visit of the estate.', 47.6991806, 3.577568],
      ['<a href="www.klur.net" target="_blank"><h6>Vignoble Klur, Alsace</h6></a><br>\
      Vigneron Clément Klur hosts vineyard visits and tutored tastings and offers delicious meals and appetisers at the estate’s wine bar, Le KatZ.', 48.1068473, 7.2780616],
      ['<a href="www.thieuley.com" target="_blank"><h6>Château Thieuley, Bordeaux</h6></a><br>\
      They grow a variety of grapes with a majority of Sémillon and Sauvignon Blanc for whites and Merlot for red that all benefit from the Bordeaux designation.', 44.7669343, -0.332071],
      ['<a href="www.domainedemourchon.com" target="_blank"><h6>Domaine de Mourchon, Rhône</h6></a><br>\
      They produce a white, a rosé and six reds, which include a Côtes-du-Rhône and a Châteauneuf du Pape, following a sustainable viticulture programme.', 44.2149317, 5.0340774],
      ['<a href="www.domaine-jcgirardmadoux.fr" target="_blank"><h6>Domaine Jean-Charles Girard-Madoux, Savoie</h6></a><br>\
      He offers whites, reds, a sparkling white and a rosé. Jean-Charles also prepares gastronomic meals in summer, which are taken outside among the vines, and cellar feasts in winter, accompanied by his estate’s wines.', 45.5228208, 6.0096555],
      ['<a href="www.domainedelacroix.com" target="_blank"><h6>Domaine de la Croix, Provence</h6></a><br>\
      The vineyard has spectacular underground wine warehouses which are often used for events and receptions. It is renowned locally for its lively vineyard events and the vineyard is available for visits.', 43.198242, 6.567096],
      ['<a href="www.tarlant.com" target="_blank"><h6>Champagne Tarlant, Champagne</h6></a><br>\
      Since 1687, they produce a wide range of champagnes deriving from several grape varieties including Pinot Noir, Chardonnay, Pinot Blanc or Petit Meslier.', 49.071598, 3.7914496],
      ['<a href="www.cavesjeanbourdy.com" target="_blank"><h6>Caves Jean Bourdy, Jura</h6></a><br>\
      It offers tastings within its 15th-century vaulted cellars, has its own family wine museum and organises walks in the mountainous vineyards of Jura.', 46.762208, 5.5236293],
      ['<a href="https://www.marquesderiscal.com/" target="_blank"><h6>Bodegas Marques de Riscal</h6></a><br>\
      One of La Rioja’s oldest wineries, founded in 1858, Bodegas Marques de Riscal is a must-visit.', 42.5111131, -2.6195869],
      ['<a href="http://www.bodegasysios.com/" target="_blank"><h6>Bodegas Ysios</h6></a><br>\
      It was designed by Santiago Calatrava and was created to mirror the undulation of the Cantabrian mountain range that frames it.', 42.5688267, -2.5929498],
      ['<a href="https://www.freixenet.es/es" target="_blank"><h6>Cavas Freixenet</h6></a><br>\
      If you want somewhere that makes cava (Spain’s answer to Champagne) as well as wine, then head to Cavas Freixenet in Catalunya.', 41.4203738,1.7914521],
      ['<a href="https://vivancoculturadevino.es/es/" target="_blank"><h6>Dinastia Vivanco</h6></a><br>\
      Dinastia Vivanco is not only one of La Rioja’s best wineries but it’s also a restaurant and excellent wine museum. Begin your visit here with a tour of the bodega, then browse the museum to learn all about the history of wine and how it’s made.', 42.5394299, -2.779765],
      ['<a href="http://www.villacreces.com/" target="_blank"><h6>Finca Villacreces</h6></a><br>\
      It lies tucked in between rivers, ancient vineyards and pine forests and its vineyards cover 110 hectares. Wine has been made on the land here for many years, but the current winery dates back to 2004 and then was relaunched in 2007.',  41.6302623, -4.2891095],
      ['<a href="http://fernandodecastilla.es/en/" target="_blank"><h6>Rey Fernando De Castilla</h6></a><br>\
      Situated in the Sherry Triangle, it’s famous for its sherries and white wines, which are aged in new French and American oak barrels. It produces a range of pale, dry and elegant award-winning wines and sherries and also excellent vinegars.', 36.6891703, -6.1453706],
      ['<a href="http://www.lopezdeheredia.com/" target="_blank"><h6>Bodegas López de Heredia</h6></a><br>\
      It’s an old vast wine complex, which is just as impressive above ground as it is below. The oldest parts of the winery are over 140 years old.', 42.584419, -3.96881],
      ['<a href="https://www.codorniu.com" target="_blank"><h6>Cavas Codorníu</h6></a><br>\
      Codorníu has been linked to a family of winegrowers dating all the way back to the 16th century. It is one of the oldest family companies in Spain and one of the oldest in the world.', 41.4339109, 1.793952],
      ['<a href="https://www.bodegasprotos.com/en/#&panel1-3" target="_blank"><h6>Bodegas Protos – Peñafiel, Castilla y León</h6></a><br>\
      In the heart of Ribera del Duero, at the foot of the mountain near the castle of Peñafiel, you can find Bodegas Protos, one of the best wineries in Spain. They claim to be the first Spanish winery to reflect an attitude of innovation and high-quality.', 41.599444, -4.116306],
      ['<a href="https://www.bodegasramonbilbao.es/" target="_blank"><h6>Ramón Bilbao – Haro, La Rioja</h6></a><br>\
      Founded in 1924 by Ramón Bilbao, and chosen as one of the best wineries of Spain at the International Wine & Spirit Competition, the company, located in Haro, has focused on innovation without forgetting their traditional roots and respecting the culture and history of wine.', 42.5699478, -2.8630381]
    ];

    // Display a map on the page
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: center 
    });

    // Display multiple markers on a map
    var infowindow = new google.maps.InfoWindow({maxWidth: 250});
    
    var marker, i;

    // Loop through the array of markers & place each one on the map
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            title: locations[i][0]
        });

    // Allow each marker to have an info window
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function () {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    }) (marker, i));
  }
}



