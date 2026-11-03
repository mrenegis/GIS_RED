
var icgcTopografic = L.tileLayer.wms(
  'https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wms',
  {
    layers: 'topografic',
    styles: '',
    format: 'image/png',
    transparent: false,
    version: '1.1.1',
    crs: L.CRS.EPSG3857,
    attribution: '© ICGC'
  }
);

// Afegir al mapa
icgcTopografic.addTo(map);
