queue()
    .defer(d3.csv, "data/wineworld.csv")
    .await(makeGraphs);

function makeGraphs(error, wineProduction){

}