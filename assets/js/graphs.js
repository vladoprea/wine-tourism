queue()
    .defer(d3.csv, "data/wineworld.csv")
    .await(makeGraphs);

// Loading data to crossfilter

function makeGraphs(error, wineProduction) {
    var ndx = crossfilter(wineProduction);

    production_by_country(ndx);

    dc.renderAll();
}

// Pie Chart for wine production by country

function production_by_country(ndx) {
    var name_dim = ndx.dimension(dc.pluck('Country'));
    var wine_prod = name_dim.group().reduceSum(dc.pluck('Wine'));

    dc.pieChart('#country-production')
        .height(350)
        .radius(500)
        .innerRadius(50)
        .transitionDuration(500)
        .dimension(name_dim)
        .group(wine_prod);
        
}

