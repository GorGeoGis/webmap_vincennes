ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2154").setExtent([657243.853956, 6860004.623853, 660269.453870, 6861995.272795]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FEUILLE_1 = new ol.format.GeoJSON();
var features_FEUILLE_1 = format_FEUILLE_1.readFeatures(json_FEUILLE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_FEUILLE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FEUILLE_1.addFeatures(features_FEUILLE_1);
var lyr_FEUILLE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FEUILLE_1, 
                style: style_FEUILLE_1,
                interactive: true,
                title: '<img src="styles/legend/FEUILLE_1.png" /> FEUILLE'
            });
var format_PARCELLE_2 = new ol.format.GeoJSON();
var features_PARCELLE_2 = format_PARCELLE_2.readFeatures(json_PARCELLE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_PARCELLE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARCELLE_2.addFeatures(features_PARCELLE_2);
var lyr_PARCELLE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PARCELLE_2, 
                style: style_PARCELLE_2,
                interactive: true,
                title: '<img src="styles/legend/PARCELLE_2.png" /> PARCELLE'
            });
var format_BATIMENT_3 = new ol.format.GeoJSON();
var features_BATIMENT_3 = format_BATIMENT_3.readFeatures(json_BATIMENT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_BATIMENT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATIMENT_3.addFeatures(features_BATIMENT_3);
var lyr_BATIMENT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATIMENT_3, 
                style: style_BATIMENT_3,
                interactive: true,
                title: '<img src="styles/legend/BATIMENT_3.png" /> BATIMENT'
            });

lyr_OSMStandard_0.setVisible(true);lyr_FEUILLE_1.setVisible(true);lyr_PARCELLE_2.setVisible(true);lyr_BATIMENT_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_FEUILLE_1,lyr_PARCELLE_2,lyr_BATIMENT_3];
lyr_FEUILLE_1.set('fieldAliases', {'EDITION': 'EDITION', });
lyr_PARCELLE_2.set('fieldAliases', {'IDU': 'IDU', 'NUMERO': 'NUMERO', 'SECTION': 'SECTION', 'CODE_DEP': 'CODE_DEP', 'NOM_COM': 'NOM_COM', 'CODE_COM': 'CODE_COM', 'CONTENANCE': 'CONTENANCE', });
lyr_BATIMENT_3.set('fieldAliases', {'TYPE': 'TYPE', });
lyr_FEUILLE_1.set('fieldImages', {'EDITION': 'TextEdit', });
lyr_PARCELLE_2.set('fieldImages', {'IDU': 'TextEdit', 'NUMERO': 'TextEdit', 'SECTION': 'TextEdit', 'CODE_DEP': 'TextEdit', 'NOM_COM': 'TextEdit', 'CODE_COM': 'TextEdit', 'CONTENANCE': 'Range', });
lyr_BATIMENT_3.set('fieldImages', {'TYPE': '', });
lyr_FEUILLE_1.set('fieldLabels', {'EDITION': 'inline label', });
lyr_PARCELLE_2.set('fieldLabels', {'IDU': 'inline label', 'NUMERO': 'inline label', 'SECTION': 'inline label', 'CODE_DEP': 'inline label', 'NOM_COM': 'inline label', 'CODE_COM': 'inline label', 'CONTENANCE': 'inline label', });
lyr_BATIMENT_3.set('fieldLabels', {'TYPE': 'header label', });
lyr_BATIMENT_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});