var wms_layers = [];

var lyr_Raster_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Raster',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Raster_0, 0]);
var format_BugVMAP2002_1 = new ol.format.GeoJSON();
var features_BugVMAP2002_1 = format_BugVMAP2002_1.readFeatures(json_BugVMAP2002_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BugVMAP2002_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BugVMAP2002_1.addFeatures(features_BugVMAP2002_1);
var lyr_BugVMAP2002_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BugVMAP2002_1, 
                style: style_BugVMAP2002_1,
                popuplayertitle: 'Bug VMAP 2002',
                interactive: true,
                title: '<img src="styles/legend/BugVMAP2002_1.png" /> Bug VMAP 2002'
            });
var format_AktuanyprzebiegBuguSentinel_2 = new ol.format.GeoJSON();
var features_AktuanyprzebiegBuguSentinel_2 = format_AktuanyprzebiegBuguSentinel_2.readFeatures(json_AktuanyprzebiegBuguSentinel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AktuanyprzebiegBuguSentinel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AktuanyprzebiegBuguSentinel_2.addFeatures(features_AktuanyprzebiegBuguSentinel_2);
var lyr_AktuanyprzebiegBuguSentinel_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AktuanyprzebiegBuguSentinel_2, 
                style: style_AktuanyprzebiegBuguSentinel_2,
                popuplayertitle: 'Aktuany przebieg Bugu Sentinel',
                interactive: true,
                title: '<img src="styles/legend/AktuanyprzebiegBuguSentinel_2.png" /> Aktuany przebieg Bugu Sentinel'
            });
var format_Bugdanearchiwalne19351940r_3 = new ol.format.GeoJSON();
var features_Bugdanearchiwalne19351940r_3 = format_Bugdanearchiwalne19351940r_3.readFeatures(json_Bugdanearchiwalne19351940r_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bugdanearchiwalne19351940r_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bugdanearchiwalne19351940r_3.addFeatures(features_Bugdanearchiwalne19351940r_3);
var lyr_Bugdanearchiwalne19351940r_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bugdanearchiwalne19351940r_3, 
                style: style_Bugdanearchiwalne19351940r_3,
                popuplayertitle: 'Bug dane archiwalne 1935-1940r.',
                interactive: true,
                title: '<img src="styles/legend/Bugdanearchiwalne19351940r_3.png" /> Bug dane archiwalne 1935-1940r.'
            });
var format_obszar_opracowania_2022_4 = new ol.format.GeoJSON();
var features_obszar_opracowania_2022_4 = format_obszar_opracowania_2022_4.readFeatures(json_obszar_opracowania_2022_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_obszar_opracowania_2022_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_obszar_opracowania_2022_4.addFeatures(features_obszar_opracowania_2022_4);
var lyr_obszar_opracowania_2022_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_obszar_opracowania_2022_4, 
                style: style_obszar_opracowania_2022_4,
                popuplayertitle: 'obszar_opracowania_2022',
                interactive: true,
                title: '<img src="styles/legend/obszar_opracowania_2022_4.png" /> obszar_opracowania_2022'
            });
var format_A_B_5 = new ol.format.GeoJSON();
var features_A_B_5 = format_A_B_5.readFeatures(json_A_B_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A_B_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_B_5.addFeatures(features_A_B_5);
var lyr_A_B_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_A_B_5, 
                style: style_A_B_5,
                popuplayertitle: 'A_B',
                interactive: true,
    title: 'A_B<br />\
    <img src="styles/legend/A_B_5_0.png" /> -87 - -48<br />\
    <img src="styles/legend/A_B_5_1.png" /> -48 - -26<br />\
    <img src="styles/legend/A_B_5_2.png" /> -26 - -9<br />\
    <img src="styles/legend/A_B_5_3.png" /> -9 - 4<br />\
    <img src="styles/legend/A_B_5_4.png" /> 4 - 16<br />\
    <img src="styles/legend/A_B_5_5.png" /> 16 - 33<br />\
    <img src="styles/legend/A_B_5_6.png" /> 33 - 60<br />\
    <img src="styles/legend/A_B_5_7.png" /> 60 - 100<br />'
        });
var format_B__C_6 = new ol.format.GeoJSON();
var features_B__C_6 = format_B__C_6.readFeatures(json_B__C_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B__C_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B__C_6.addFeatures(features_B__C_6);
var lyr_B__C_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B__C_6, 
                style: style_B__C_6,
                popuplayertitle: 'B__C',
                interactive: true,
    title: 'B__C<br />\
    <img src="styles/legend/B__C_6_0.png" /> -73 - -45<br />\
    <img src="styles/legend/B__C_6_1.png" /> -45 - -28<br />\
    <img src="styles/legend/B__C_6_2.png" /> -28 - -15<br />\
    <img src="styles/legend/B__C_6_3.png" /> -15 - -5<br />\
    <img src="styles/legend/B__C_6_4.png" /> -5 - 2<br />\
    <img src="styles/legend/B__C_6_5.png" /> 2 - 10<br />\
    <img src="styles/legend/B__C_6_6.png" /> 10 - 20<br />\
    <img src="styles/legend/B__C_6_7.png" /> 20 - 43<br />'
        });
var format_ObszargdzieBugpynzawsze_7 = new ol.format.GeoJSON();
var features_ObszargdzieBugpynzawsze_7 = format_ObszargdzieBugpynzawsze_7.readFeatures(json_ObszargdzieBugpynzawsze_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObszargdzieBugpynzawsze_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObszargdzieBugpynzawsze_7.addFeatures(features_ObszargdzieBugpynzawsze_7);
var lyr_ObszargdzieBugpynzawsze_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObszargdzieBugpynzawsze_7, 
                style: style_ObszargdzieBugpynzawsze_7,
                popuplayertitle: 'Obszar gdzie Bug płynął zawsze',
                interactive: true,
                title: '<img src="styles/legend/ObszargdzieBugpynzawsze_7.png" /> Obszar gdzie Bug płynął zawsze'
            });
var format_ObszargdzieBugpynprzynajmniejraz_8 = new ol.format.GeoJSON();
var features_ObszargdzieBugpynprzynajmniejraz_8 = format_ObszargdzieBugpynprzynajmniejraz_8.readFeatures(json_ObszargdzieBugpynprzynajmniejraz_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObszargdzieBugpynprzynajmniejraz_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObszargdzieBugpynprzynajmniejraz_8.addFeatures(features_ObszargdzieBugpynprzynajmniejraz_8);
var lyr_ObszargdzieBugpynprzynajmniejraz_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObszargdzieBugpynprzynajmniejraz_8, 
                style: style_ObszargdzieBugpynprzynajmniejraz_8,
                popuplayertitle: 'Obszar gdzie Bug płynął przynajmniej raz',
                interactive: true,
                title: '<img src="styles/legend/ObszargdzieBugpynprzynajmniejraz_8.png" /> Obszar gdzie Bug płynął przynajmniej raz'
            });

lyr_Raster_0.setVisible(true);lyr_BugVMAP2002_1.setVisible(true);lyr_AktuanyprzebiegBuguSentinel_2.setVisible(true);lyr_Bugdanearchiwalne19351940r_3.setVisible(true);lyr_obszar_opracowania_2022_4.setVisible(true);lyr_A_B_5.setVisible(true);lyr_B__C_6.setVisible(true);lyr_ObszargdzieBugpynzawsze_7.setVisible(true);lyr_ObszargdzieBugpynprzynajmniejraz_8.setVisible(true);
var layersList = [lyr_Raster_0,lyr_BugVMAP2002_1,lyr_AktuanyprzebiegBuguSentinel_2,lyr_Bugdanearchiwalne19351940r_3,lyr_obszar_opracowania_2022_4,lyr_A_B_5,lyr_B__C_6,lyr_ObszargdzieBugpynzawsze_7,lyr_ObszargdzieBugpynprzynajmniejraz_8];
lyr_BugVMAP2002_1.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'obwod': 'obwod', });
lyr_AktuanyprzebiegBuguSentinel_2.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'InPoly_FID': 'InPoly_FID', 'obwod': 'obwod', });
lyr_Bugdanearchiwalne19351940r_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Id': 'Id', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'obwod': 'obwod', 'zawartosc': 'zawartosc', });
lyr_obszar_opracowania_2022_4.set('fieldAliases', {'Id': 'Id', });
lyr_A_B_5.set('fieldAliases', {'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'PERCENTA_2': 'PERCENTA_2', 'paraA_B': 'paraA_B', 'paraB_C': 'paraB_C', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_B__C_6.set('fieldAliases', {'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'PERCENTA_2': 'PERCENTA_2', 'paraA_B': 'paraA_B', 'paraB_C': 'paraB_C', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ObszargdzieBugpynzawsze_7.set('fieldAliases', {'FID_Bugdan': 'FID_Bugdan', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'FID_Bugd_1': 'FID_Bugd_1', 'Id_1': 'Id_1', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'FID_staror': 'FID_staror', 'TERYT': 'TERYT', 'LOKALNYID': 'LOKALNYID', 'PRZES_NAZW': 'PRZES_NAZW', 'WERSJA': 'WERSJA', 'POCZ_WERSJ': 'POCZ_WERSJ', 'OZNA_ZMIAN': 'OZNA_ZMIAN', 'ZRO_DANYCH': 'ZRO_DANYCH', 'KAT_ISTNIE': 'KAT_ISTNIE', 'UWAGI': 'UWAGI', 'INFO_DODAT': 'INFO_DODAT', 'KOD10K': 'KOD10K', 'SKROT_KART': 'SKROT_KART', 'RODZAJ': 'RODZAJ', 'IDMPHP': 'IDMPHP', 'NAZWA': 'NAZWA', 'IDPRNG': 'IDPRNG', 'BDOT500': 'BDOT500', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_ObszargdzieBugpynprzynajmniejraz_8.set('fieldAliases', {'FID_Bugdan': 'FID_Bugdan', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'FID_staror': 'FID_staror', 'TERYT': 'TERYT', 'LOKALNYID': 'LOKALNYID', 'PRZES_NAZW': 'PRZES_NAZW', 'WERSJA': 'WERSJA', 'POCZ_WERSJ': 'POCZ_WERSJ', 'OZNA_ZMIAN': 'OZNA_ZMIAN', 'ZRO_DANYCH': 'ZRO_DANYCH', 'KAT_ISTNIE': 'KAT_ISTNIE', 'UWAGI': 'UWAGI', 'INFO_DODAT': 'INFO_DODAT', 'KOD10K': 'KOD10K', 'SKROT_KART': 'SKROT_KART', 'RODZAJ': 'RODZAJ', 'IDMPHP': 'IDMPHP', 'NAZWA': 'NAZWA', 'IDPRNG': 'IDPRNG', 'BDOT500': 'BDOT500', 'FID_Bugd_1': 'FID_Bugd_1', 'Id_1': 'Id_1', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_BugVMAP2002_1.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'obwod': 'TextEdit', });
lyr_AktuanyprzebiegBuguSentinel_2.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'InPoly_FID': 'TextEdit', 'obwod': 'TextEdit', });
lyr_Bugdanearchiwalne19351940r_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Id': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'obwod': 'TextEdit', 'zawartosc': 'TextEdit', });
lyr_obszar_opracowania_2022_4.set('fieldImages', {'Id': 'Range', });
lyr_A_B_5.set('fieldImages', {'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'paraA_B': 'TextEdit', 'paraB_C': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_B__C_6.set('fieldImages', {'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'paraA_B': 'TextEdit', 'paraB_C': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ObszargdzieBugpynzawsze_7.set('fieldImages', {'FID_Bugdan': '', 'Id': '', 'Shape_Leng': '', 'FID_Bugd_1': '', 'Id_1': '', 'gridcode': '', 'InPoly_FID': '', 'FID_staror': '', 'TERYT': '', 'LOKALNYID': '', 'PRZES_NAZW': '', 'WERSJA': '', 'POCZ_WERSJ': '', 'OZNA_ZMIAN': '', 'ZRO_DANYCH': '', 'KAT_ISTNIE': '', 'UWAGI': '', 'INFO_DODAT': '', 'KOD10K': '', 'SKROT_KART': '', 'RODZAJ': '', 'IDMPHP': '', 'NAZWA': '', 'IDPRNG': '', 'BDOT500': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_ObszargdzieBugpynprzynajmniejraz_8.set('fieldImages', {'FID_Bugdan': '', 'Id': '', 'Shape_Leng': '', 'FID_staror': '', 'TERYT': '', 'LOKALNYID': '', 'PRZES_NAZW': '', 'WERSJA': '', 'POCZ_WERSJ': '', 'OZNA_ZMIAN': '', 'ZRO_DANYCH': '', 'KAT_ISTNIE': '', 'UWAGI': '', 'INFO_DODAT': '', 'KOD10K': '', 'SKROT_KART': '', 'RODZAJ': '', 'IDMPHP': '', 'NAZWA': '', 'IDPRNG': '', 'BDOT500': '', 'FID_Bugd_1': '', 'Id_1': '', 'gridcode': '', 'InPoly_FID': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_BugVMAP2002_1.set('fieldLabels', {'DLUG_BRZEG': 'inline label - always visible', 'DLUGOSC': 'inline label - always visible', 'DOKLADNOSC': 'inline label - always visible', 'DOSTEPNOSC': 'inline label - always visible', 'GLEBOKOSC': 'inline label - always visible', 'ISTNIENIE': 'inline label - always visible', 'KAT_HYDRO': 'inline label - always visible', 'KAT_PLYWU': 'inline label - always visible', 'KAT_POJEMN': 'inline label - always visible', 'KAT_POLOZ': 'inline label - always visible', 'KAT_WODY': 'inline label - always visible', 'NAJW_WYS': 'inline label - always visible', 'NAZWA': 'inline label - always visible', 'OBIEKT': 'inline label - always visible', 'OPR_UPUST': 'inline label - always visible', 'OPR_ZBURZ': 'inline label - always visible', 'POCH_HYDRO': 'inline label - always visible', 'PRED_PRZEP': 'inline label - always visible', 'SREDNIA_GL': 'inline label - always visible', 'STAT_EKSPL': 'inline label - always visible', 'SZEROKOSC': 'inline label - always visible', 'TAJNOSC': 'inline label - always visible', 'TYP_AKWED': 'inline label - always visible', 'TYP_WYBRZ': 'inline label - always visible', 'ZN_ORIENT': 'inline label - always visible', 'POWIERZCHN': 'inline label - always visible', 'ID': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'obwod': 'inline label - always visible', });
lyr_AktuanyprzebiegBuguSentinel_2.set('fieldLabels', {'Id': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'InPoly_FID': 'inline label - always visible', 'obwod': 'inline label - always visible', });
lyr_Bugdanearchiwalne19351940r_3.set('fieldLabels', {'Shape_Leng': 'inline label - always visible', 'Id': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'obwod': 'inline label - always visible', 'zawartosc': 'inline label - always visible', });
lyr_obszar_opracowania_2022_4.set('fieldLabels', {'Id': 'inline label - always visible', });
lyr_A_B_5.set('fieldLabels', {'GRID_ID': 'inline label - always visible', 'PERCENTAGE': 'inline label - always visible', 'PERCENTA_1': 'inline label - always visible', 'PERCENTA_2': 'inline label - always visible', 'paraA_B': 'inline label - always visible', 'paraB_C': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_B__C_6.set('fieldLabels', {'GRID_ID': 'inline label - always visible', 'PERCENTAGE': 'inline label - always visible', 'PERCENTA_1': 'inline label - always visible', 'PERCENTA_2': 'inline label - always visible', 'paraA_B': 'inline label - always visible', 'paraB_C': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_ObszargdzieBugpynzawsze_7.set('fieldLabels', {'FID_Bugdan': 'inline label - always visible', 'Id': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'FID_Bugd_1': 'inline label - always visible', 'Id_1': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'InPoly_FID': 'inline label - always visible', 'FID_staror': 'inline label - always visible', 'TERYT': 'inline label - always visible', 'LOKALNYID': 'inline label - always visible', 'PRZES_NAZW': 'inline label - always visible', 'WERSJA': 'inline label - always visible', 'POCZ_WERSJ': 'inline label - always visible', 'OZNA_ZMIAN': 'inline label - always visible', 'ZRO_DANYCH': 'inline label - always visible', 'KAT_ISTNIE': 'inline label - always visible', 'UWAGI': 'inline label - always visible', 'INFO_DODAT': 'inline label - always visible', 'KOD10K': 'inline label - always visible', 'SKROT_KART': 'inline label - always visible', 'RODZAJ': 'inline label - always visible', 'IDMPHP': 'inline label - always visible', 'NAZWA': 'inline label - always visible', 'IDPRNG': 'inline label - always visible', 'BDOT500': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_ObszargdzieBugpynprzynajmniejraz_8.set('fieldLabels', {'FID_Bugdan': 'inline label - always visible', 'Id': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'FID_staror': 'inline label - always visible', 'TERYT': 'inline label - always visible', 'LOKALNYID': 'inline label - always visible', 'PRZES_NAZW': 'inline label - always visible', 'WERSJA': 'inline label - always visible', 'POCZ_WERSJ': 'inline label - always visible', 'OZNA_ZMIAN': 'inline label - always visible', 'ZRO_DANYCH': 'inline label - always visible', 'KAT_ISTNIE': 'inline label - always visible', 'UWAGI': 'inline label - always visible', 'INFO_DODAT': 'inline label - always visible', 'KOD10K': 'inline label - always visible', 'SKROT_KART': 'inline label - always visible', 'RODZAJ': 'inline label - always visible', 'IDMPHP': 'inline label - always visible', 'NAZWA': 'inline label - always visible', 'IDPRNG': 'inline label - always visible', 'BDOT500': 'inline label - always visible', 'FID_Bugd_1': 'inline label - always visible', 'Id_1': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'InPoly_FID': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_ObszargdzieBugpynprzynajmniejraz_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});