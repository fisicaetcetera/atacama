///Dropbox/local-server/ZHONG_GUÓ/zhong_guo_master
var imageUrl;
var latuser;
var lonuser;
var lattxt;
var lontxt;
var latlonuser;
var accuracy;

var icone = L.icon({
  iconUrl: './marker-icon.png',
  shadowUrl: './marker-shadow.png',
  iconSize: [18, 95], // size of the icon
  shadowSize: [20, 95], // size of the shadow
  iconAnchor: [9, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [2, 94], // the same for the shadow
  popupAnchor: [0, -79] // point from which the popup should open relative to the iconAnchor
})
function setup() {

  noCanvas();

  //=====localização

  var map = L.map('mapid');
  
  map.locate({
    setView: true,
    maxZoom: 12
  });

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  //Escala
  L.control.scale({
     metric: true,
     imperial: false,
     position: 'topleft'
  }).addTo(map);
  //Watermark, meu
  L.Control.Watermark=L.Control.extend({
   onAdd: function(map){
      var img = L.DomUtil.create('img');
      img.src = 'eniLogo.ico';
      img.style.width = '60px';
      return img;
      },
    onRemove: function(map){},
    });
    
    L.control.watermark = function(opts){
      return new L.Control.Watermark(opts);
    }
    
    L.control.watermark({position: 'topleft'}).addTo(map);  
//Water mark, beit
  L.Control.Watermark=L.Control.extend({
   onAdd: function(map){
      var img = L.DomUtil.create('img');
      img.src = 'avelar_logo.png';
      img.style.width = '100px';
      return img;
      },
    onRemove: function(map){},
    });
    
    L.control.watermark = function(opts){
      return new L.Control.Watermark(opts);
    }
    
    L.control.watermark({position: 'topleft'}).addTo(map);  

  // TRAJETO DE IDA EM AZUL  ---------------------------------------------------
  
var latlngsIda = [
    [-5.759290, -35.368370], //Natal
    [-23.454, -46.534096], // Sao Paulo
    [-33.447487,-70.673676], //Santiago
    [-22.453712, -68.925308], //Calama    
    [ -22.91110000, -68.20113000],//São Pedro
    [-22.453712, -68.925308], //Calama
    [-33.447487,-70.673676], //Santiago    
    [-34.603722, -58.381592], //Buenos Aires
    [-24.782932, -65.412155],  //Salta
    [-32.88945870, -68.84583860]
 // Mendoza
];
var latlngsVolta = [
    [-24.782932, -65.412155],  //Salta
    [-32.8277, -68.7984],//Mendoza
    [-23.454, -46.534096] // Sao Paulo
];
var polylineIda = L.polyline(latlngsIda, {color: 'blue'}).addTo(map);
var polylineVolta = L.polyline(latlngsVolta, {color: 'yellow'}).addTo(map);
// zoom the map to the polyline
map.fitBounds(polylineIda.getBounds());
//===============================================================  
  
    // TRAJETO DE VOLTA EM AMARELO  ---------------------------------------------------
 
// zoom the map to the polyline
//map.fitBounds(polylineVolta.getBounds()); 
  
  let localizacao = false;
  if("geolocation" in navigator)
        {
          localizacao = true;  
          console.log('geolocation available 🤗️');
            navigator.geolocation.getCurrentPosition(position => {
              const posicao = position.coords;
              console.log(posicao);
              latuser = posicao.latitude;
              lonuser = posicao.longitude;
              lattxt = latuser.toString();
              lontxt = lonuser.toString();
              latlonuser = [latuser, lonuser];
              console.log(latuser,lonuser,latlonuser);
              //const altitude = posicao.altitude.toString();
              //const speed = posicao.speed.toString();
              //const heading = posicao.heading.toString();
              accuracy = posicao.accuracy;
               L.marker(latlonuser).addTo(map).bindPopup("Você!").openPopup();
              L.circle(latlonuser, accuracy).addTo(map);
              //map.setView(latlonuser, 8);  //([latuser, lonuser], zoom)
              map.locate({setView: true, maxZoom: 11});
            });
             } else {  
              localizacao = false;
             } 
  console.log("115-just outside anonymous",latuser,lonuser,latlonuser);
  //=============================================================

  L.marker(latlngsIda[0]).addTo(map)
    .bindPopup('SÃO GONÇALO <BR> dia 14/01 Reunião às 24:00 (Alessandro mudou) <br> 15/01 Embarque às 02:40 <br> Retorno: dia 31/01, 00:05 ')
    .openPopup();
    
  L.marker(latlngsIda[1]).addTo(map)
    .bindPopup('SÃO PAULO <BR> dia 15 ,<br> Retorno: dia 30 ')
    .openPopup();
    
  // Santiago
  L.marker(latlngsIda[2]).addTo(map)
    .bindPopup('Santiago <BR> ida: 15 - só conexão <BR> volta: dias 23-26')
    .openPopup();
 //Calama
  L.marker(latlngsIda[3]).addTo(map)
    .bindPopup('Calama<BR> ida: dia 15 só conexão <BR> volta: dia 22-23 só conexão')
    .openPopup(); 
 //São Pedro do Atacama
  L.marker(latlngsIda[4]).addTo(map)
    .bindPopup('São Pedro <BR> do Atacama<br> ida: 15/01<br>volta: 21/01')
    .openPopup();
     
    var imageUrl = './valle-la-luna.jpg',
    imageBounds = [ [-22.93416,-68.27426], [-21.93416,-67.27426]];
L.imageOverlay(imageUrl, imageBounds).addTo(map); 
 
  //Yuni
  [-20.266562, -67.620552]
  L.marker([-20.266562, -67.620552]).addTo(map)
    .bindPopup('Yuni')
    .openPopup();
    var imageUrl = './salarDeYuni.jpeg',
    imageBounds = [ [-20.266562, -67.620552], [-19.266562, -66.620552]];
L.imageOverlay(imageUrl, 
imageBounds).addTo(map); 

 var imageUrl = './desiertoDali.png',
    imageBounds = [ [-22.61498,-67.66597], [-23.61498, -68.66597]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);  


  // Salta
  L.marker(latlngsIda[8]).addTo(map)
    .bindPopup('Salta<br> ida: 26/01<br>volta: 29/01')
    .openPopup();
    
  //Santiago
  
    
  // Buenos Aires

  L.marker(latlngsIda[7]).addTo(map)
    .bindPopup('Buenos Aires<br> conexão: 26/01')
    .openPopup();

  // Mendoza

  L.marker(latlngsVolta[1]).addTo(map)
    .bindPopup('Mendoza<br> conexão: 29/30(01)')
    .openPopup();

  // 
  
} //setup

//casa de la moneda -33.443018 -70.65387
//MENDOZA: [-32.88945870, -68.84583860]

