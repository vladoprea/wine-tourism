// Initialize map function

function initMap() {
    var center = {lat: 41.8719, lng: 12.5674};

   //Markers position and text for infowindows
   
   var locations = [
      ['<h5>Marchesi di Barolo</h5><br>\
       Barolo is possibly one of the most renowned and best-quality wines in Italy<br>\
      <a href="https://www.marchesibarolo.com/>gigel</a>', 44.6112557, 7.9381734],
      ['<h5>Antica Cascina dei Conti di Roero</h5><br>\
      Vezza d’Alba, where this winery is located, is a truly historic area for wine-making in Italy.<br>\
      <a href=https://www.oliveropietro.it/"></a>', 44.7825053, 5.7433958],
      ['<h5>Redaelli de Zinis</h5><br>\
      All the produce is DOC – of controlled origin – which guarantees a great quality and an unmistakable flavour.<br>\
      <a href="http://www.dezinis.it/"></a>', 45.4552095, 10.489519],
      ['<h5>Tenuta di Castelbuono</h5><br>\
      Tenuta di Castelbuono was awarded the Wonderful Winery prize because of its peculiar architecture.<br>\
      <a href="http://www.tenutelunelli.it/it/tenute_umbria.php"></a>', 42.9682789, 12.5606493],
      ['<h5>Azienda Agricola Valentini</h5><br>\
      Most of its wine production is centred upon Trebbiano and Montepulciano, but its offer covers other sorts of other labels too.<br>\
      <a href="http://www.agricolavalentini.it/en/"></a>', 42.6960311, 11.2772723],
      ['<h5>Azienda Vinicola Contini</h5><br>\
      With a perfect mix of local flavours and national quality, Azienda Vinicola Contini shows that Sardinia has plenty more to offer than just rugged beaches and untouched lands.<br>\
      <a href="https://www.vinicontini.com/"></a>', 39.9337543, 8.5268467],
      ['<h5>Mastroberardino</h5><br>\
      Among its grapes are, for instance, Aglianico, Fiano, Greco, Fanghina, Piedirosso, all dating back to ancient Greek and Roman times.<br>\
      <a href="https://www.mastroberardino.com/"></a>', 40.9232693, 14.8296336],
      ['<h5>Librandi</h5><br>\
      Conveniently located between the seaside and its temperate climate in the mountains, Librandi is a great spot for some wine tasting on this southern isle.<br>\
      <a href="https://www.librandi.it"></a>', 39.4011949, 12.6375087],
      ['<h5>Planeta ulmo</h5><br>\
      The vineyards make up a total area of 363 hectares and yield different kinds of grapes: from the little-known Grecanico, Carricante, Frappato, and Nerello Mascalese to the internationally acclaimed Nero d’Avola, Chardonnay, Syrah, Merlot and Cabernet.<br>\
      <a href="https://planeta.it/"></a>', 37.6272855, 13.0775756],
      ['<h5>Marchesi de’ Frescobaldi</h5><br>\
      Marchesi de’ Frescobaldi possesses five different discrete units where wine is produced and which guests are more than welcome to visit.<br>\
      <a href="https://www.frescobaldi.com"></a>', 43.3114252, 10.1835734],
      ['<h5>Domaine Virgile Joly, Languedoc</h5><br>\
      Long committed to wine tourism, vigneron Virgile Joly organises a wine and film night every August, when visitors can taste, watch an open-air film and eat dinner in the village square.<br>\
      <a href="www.domainevirgilejoly.com"></a>', 43.6946706, 3.4687463],
      ['<h5>Domaine Cazes, Roussillon</h5><br>\
      The largest certified biodynamic estate in France, stretching over 220 hectares of land at Rivesaltes in the Pyrénées Orientales, Domaine Cazes produces 13 different wines every year.<br>\
      <a href="www.cazes-rivesaltes.com"></a>', 42.7701099, 2.875148],
      ['<h5>Domaine Maltoff, Burgundy</h5><br>\
      Visitors can enjoy tastings of either white, rosé or red wines, all benefitting from the Bourgogne Coulanges la Vineuse designation, in the cellar as well as a visit of the estate.<br>\
      <a href="http://chambres-hotes.maltoff.com"></a>', 47.6991806, 3.577568],
      ['<h5>Vignoble Klur, Alsace</h5><br>\
      Vigneron Clément Klur hosts vineyard visits and tutored tastings and offers delicious meals and appetisers at the estate’s wine bar, Le KatZ.<br>\
      <a href="www.klur.net"></a>', 48.1068473, 7.2780616],
      ['<h5>Château Thieuley, Bordeaux</h5><br>\
      They grow a variety of grapes with a majority of Sémillon and Sauvignon Blanc for whites and Merlot for red that all benefit from the Bordeaux designation.<br>\
      <a href="www.thieuley.com"></a>', 44.7669343, -0.332071],
      ['<h5>Domaine de Mourchon, Rhône</h5><br>\
      They produce a white, a rosé and six reds, which include a Côtes-du-Rhône and a Châteauneuf du Pape, following a sustainable viticulture programme.<br>\
      <a href="www.domainedemourchon.com"></a>', 44.2149317, 5.0340774],
      ['<h5>Domaine Jean-Charles Girard-Madoux, Savoie</h5><br>\
      He offers whites, reds, a sparkling white and a rosé. Jean-Charles also prepares gastronomic meals in summer, which are taken outside among the vines, and cellar feasts in winter, accompanied by his estate’s wines.<br>\
      <a href="www.domaine-jcgirardmadoux.fr"></a>', 45.5228208, 6.0096555],
      ['<h5>Domaine de la Croix, Provence</h5><br>\
      The vineyard has spectacular underground wine warehouses which are often used for events and receptions. It is renowned locally for its lively vineyard events and the vineyard is available for visits.<br>\
      <a href="www.domainedelacroix.com"></a>', 43.198242, 6.567096],
      ['<h5>Champagne Tarlant, Champagne</h5><br>\
      Since 1687, they produce a wide range of champagnes deriving from several grape varieties including Pinot Noir, Chardonnay, Pinot Blanc or Petit Meslier.<br>\
      <a href="www.tarlant.com"></a>', 49.071598, 3.7914496],
      ['<h5>Caves Jean Bourdy, Jura</h5><br>\
      It offers tastings within its 15th-century vaulted cellars, has its own family wine museum and organises walks in the mountainous vineyards of Jura.<br>\
      <a href="www.cavesjeanbourdy.com"></a>', 46.762208, 5.5236293],
      ['<h5>Bodegas Marques de Riscal</h5><br>\
      One of La Rioja’s oldest wineries, founded in 1858, Bodegas Marques de Riscal is a must-visit.<br>\
      <a href="https://www.marquesderiscal.com/"></a>', 42.5111131, -2.6195869],
      ['<h5>Bodegas Ysios</h5><br>\
      It was designed by Santiago Calatrava and was created to mirror the undulation of the Cantabrian mountain range that frames it.<br>\
      <a href="http://www.bodegasysios.com/"></a>', 42.5688267, -2.5929498],
      ['<h5>Cavas Freixenet</h5><br>\
      If you want somewhere that makes cava (Spain’s answer to Champagne) as well as wine, then head to Cavas Freixenet in Catalunya.<br>\
      <a href="https://www.freixenet.es/es"></a>', 41.4203738,1.7914521],
      ['<h5>Dinastia Vivanco</h5><br>\
      Dinastia Vivanco is not only one of La Rioja’s best wineries but it’s also a restaurant and excellent wine museum. Begin your visit here with a tour of the bodega, then browse the museum to learn all about the history of wine and how it’s made.<br>\
      <a href="https://vivancoculturadevino.es/es/"></a>', 42.5394299, -2.779765],
      ['<h5>Finca Villacreces</h5><br>\
      It lies tucked in between rivers, ancient vineyards and pine forests and its vineyards cover 110 hectares. Wine has been made on the land here for many years, but the current winery dates back to 2004 and then was relaunched in 2007.<br>\
      <a href="http://www.villacreces.com/"></a>',  41.6302623, -4.2891095],
      ['<h5>Rey Fernando De Castilla</h5><br>\
      Situated in the Sherry Triangle, it’s famous for its sherries and white wines, which are aged in new French and American oak barrels. It produces a range of pale, dry and elegant award-winning wines and sherries and also excellent vinegars.<br>\
      <a href="http://fernandodecastilla.es/en/"></a>', 36.6891703, -6.1453706],
      ['<h5>Bodegas López de Heredia</h5><br>\
      It’s an old vast wine complex, which is just as impressive above ground as it is below. The oldest parts of the winery are over 140 years old.<br>\
      <a href="http://www.lopezdeheredia.com/"></a>', 42.584419, -3.96881],
      ['<h5>Cavas Codorníu</h5><br>\
      Codorníu has been linked to a family of winegrowers dating all the way back to the 16th century. It is one of the oldest family companies in Spain and one of the oldest in the world.<br>\
      <a href="https://www.codorniu.com"></a>', 41.4339109, 1.793952],
      ['<h5>Bodegas Protos – Peñafiel, Castilla y León</h5><br>\
      In the heart of Ribera del Duero, at the foot of the mountain near the castle of Peñafiel, you can find Bodegas Protos, one of the best wineries in Spain. They claim to be the first Spanish winery to reflect an attitude of innovation and high-quality.<br>\
      <a href="https://www.bodegasprotos.com/en/#&panel1-3"></a>', 41.599444, -4.116306],
      ['<h5>Ramón Bilbao – Haro, La Rioja</h5><br>\
      Founded in 1924 by Ramón Bilbao, and chosen as one of the best wineries of Spain at the International Wine & Spirit Competition, the company, located in Haro, has focused on innovation without forgetting their traditional roots and respecting the culture and history of wine.<br>\
      <a href="https://www.bodegasramonbilbao.es/"></a>', 42.5699478, -2.8630381]
    ];

}



