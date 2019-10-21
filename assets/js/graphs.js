queue()
    .defer(d3.csv, "data/wineworld.csv")
    .await(makeGraphs);

// Loading data to crossfilter

function makeGraphs(error, wineProduction) {
    var ndx = crossfilter(wineProduction);

    production_by_country(ndx);

    vineyard_surface_by_country(ndx);

    production_by_continent(ndx);

    dc.renderAll();
}

// Pie Chart for wine production by country

function production_by_country(ndx) {
    var wine_dim = ndx.dimension(dc.pluck('Country'));
    var wine_prod = wine_dim.group().reduceSum(dc.pluck('Wine'));

    dc.pieChart('#country-production')
        .height(350)
        .radius(500)
        .innerRadius(50)
        .transitionDuration(500)
        .dimension(wine_dim)
        .group(wine_prod);
        
}

// Pie Chart for vineyard surfaces by each country

function vineyard_surface_by_country(ndx) {
    var vineyard_dim = ndx.dimension(dc.pluck('Country'));
    var vineyard_area = vineyard_dim.group().reduceSum(dc.pluck('Surface'));

    dc.pieChart('#vineyard_surface')
        .height(350)
        .radius(500)
        .innerRadius(50)
        .transitionDuration(500)
        .dimension(vineyard_dim)
        .group(vineyard_area);
}

//Bar chart for wine production per each continent in 2018

function production_by_continent(ndx) {
    var continent_dim = ndx.dimension(dc.pluck('Continent'));
    var continent_prod = continent_dim.group().reduceSum(function(d) {return d.Wine;});
 
 
    dc.barChart('#continent-production')
        .width(550)
        .height(200)
        .useViewBoxResizing(true)
        .margins({top: 10, right: 50, bottom: 40, left: 40})
        .dimension(continent_dim)
        .group(continent_prod)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Continent")
        .yAxisLabel("Hectoliters(hl)")
        .yAxis().ticks(6);
}

// Function for refreshing charts 

function refreshPage() {
    window.location.reload();
}