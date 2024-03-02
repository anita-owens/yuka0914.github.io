var allDates = [];
var allTimes = [];
var allAddresses = [];
var allDesc = [];
var regionArea = [];
var allRegions = [];
var allRegionsLastWord = []; 
var allAssault = [];

// Api call polisen

$.ajax({
 url:"https://www.kimonolabs.com/api/bma1tcic?apikey=loL5YLbepPulQW60uX7OuQAQWQKGLS4D",
 crossDomain: true,
 dataType: "jsonp",
 success: function (data) {
   console.log('success', data);
     
     polisendata = data.results.collection1;
     
     for(var i = 0; i < 21; i++) {
         var item= polisendata[i];
         var adrs = item.address;
         var desc = item.description;
         var dates = item.date.text;
         var times = item.time.text;
         var assaults = item.assault.text;
        
         
        
         allDates.push(dates);
         allTimes.push(times);
         allAddresses.push(adrs);
         allDesc.push(desc);
         allAssault.push(assaults);
         
        
     }
     
     for(var i = 0; i < 21; i++) {
         
         var item = polisendata[i];
          var regionArea = item.region.text.split (" ");
         
         // var a = regionArea[regionArea[i]];
         allRegionsLastWord.push(regionArea[regionArea.length - 1]);
     }
  
 },
 error: function (xhr, status) {
   //handle errors
 }
});



var map;
var infoWindow;
var place;

function initMap() {


   map = new google.maps.Map(document.getElementById('map'), { 
   zoom: 10,
   center: {lat:59.3294, lng:18.0686},
       
   });

                                            
                                            };

                                            


var geocoder;
var delay = 500;

var marker0;
var marker2;
var marker3;
var marker4;
var marker5;
var marker6;
var marker7;
var marker8;
var marker9;
var marker10;
var marker11;
var marker12;
var marker13;
var marker14;
var marker15;
var marker16;
var marker17;
var marker18;
var marker19;
var marker20;


function crime0() {
 console.log(allRegionsLastWord);
    console.log(allAddresses);
      var listener0 = allDesc[0];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[0] + ", " + allAddresses[0]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
           marker0 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker0, 'click', function (listener0) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[0] + " " + allTimes[0] + "</font><br> " + allAssault[0] + "</b>" + "<br>" + allDesc[0]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
      }  
      
    });
    
  
     setTimeout(function () {
            return crime1() }, delay);
          }


function crime1() {

      var listener1 = allDesc[1];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[1] + ", " + allAddresses[1]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker1 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker1, 'click', function (listener1) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[1] + ", " + allTimes[1] +  "</font><br> " + allAssault[1] + "</b>"  + "<br>" + allDesc[1]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime2() }, delay);
     
          }



function crime2() {

      var listener2 = allDesc[2];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[2] + ", " + allAddresses[2]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker2 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker2, 'click', function (listener2) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[2] + " " + allTimes[2] +  "</font><br> " + allAssault[2] + "</b>" + "<br>" + allDesc[2]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  setTimeout(function () {
            return crime3() }, delay);
     
          }

   function crime3() {

      var listener3 = allDesc[3];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[3] + ", " + allAddresses[3]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker3 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker3, 'click', function (listener3) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[3] + " " + allTimes[3] + "</font><br> " + allAssault[3] + "</b>" + "<br>" + allDesc[3]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime4() }, delay);
     
          }

   function crime4() {

      var listener4 = allDesc[4];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[4] + ", " + allAddresses[4]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker4 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker4, 'click', function (listener4) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[4] + " " + allTimes[4] + "</font><br> " + allAssault[4] + "</b>" + "<br>" + allDesc[4]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime5() }, delay);
     
          }
function crime5() {

      var listener5 = allDesc[5];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[5] + ", " + allAddresses[5]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker5 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker5, 'click', function (listener5) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[5] + " " + allTimes[5] + "</font><br> " + allAssault[5]+ "</b>" + "<br>" + allDesc[5]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime6() }, delay);
     
          }

function crime6() {

      var listener6 = allDesc[6];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[6] + ", " + allAddresses[6]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker6 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker6, 'click', function (listener6) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[6] + " " + allTimes[6] + "</font><br> " + allAssault[6] + "</b>" + "<br>" + allDesc[6]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime7() }, delay);
     
          }

function crime7() {

      var listener7 = allDesc[7];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[7] + ", " + allAddresses[7]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker7 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker7, 'click', function (listener7) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[7] + " " + allTimes[7] + "</font><br> " + allAssault[7] + "</b>" + "<br>" + allDesc[7]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime8() }, delay);
     
          }

function crime8() {

      var listener8 = allDesc[8];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[8] + ", " + allAddresses[8]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker8 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker8, 'click', function (listener8) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[8] + ", " + allTimes[8] +  "</font><br> " + allAssault[8] + "</b>"  + "<br>" + allDesc[8]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime9() }, delay);
     
          }

function crime9() {

      var listener9 = allDesc[9];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[9] + ", " + allAddresses[9]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker9 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker9, 'click', function (listener9) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[9] + ", " + allTimes[9] +  "</font><br> " + allAssault[9] + "</b>"  + "<br>" + allDesc[9]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime10() }, delay);
     
          }

function crime10() {

      var listener10 = allDesc[10];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[10] + ", " + allAddresses[10]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker10 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker10, 'click', function (listener10) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[10] + ", " + allTimes[10] +  "</font><br> " + allAssault[10] + "</b>"  + "<br>" + allDesc[10]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime11() }, delay);
     
          }
function crime11() {

      var listener11 = allDesc[11];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[11] + ", " + allAddresses[11]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker11 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker11, 'click', function (listener11) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[11] + ", " + allTimes[11] +  "</font><br> " + allAssault[11] + "</b>"  + "<br>" + allDesc[11]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime12() }, delay);
     
          }

function crime12() {

      var listener12 = allDesc[12];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[12] + ", " + allAddresses[12]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker12 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker12, 'click', function (listener12) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[12] + ", " + allTimes[12] +  "</font><br> " + allAssault[12] + "</b>"  + "<br>" + allDesc[12]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime13() }, delay);
     
          }

function crime13() {

      var listener13 = allDesc[13];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[13] + ", " + allAddresses[13]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker13 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker13, 'click', function (listener13) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[13] + ", " + allTimes[13] +  "</font><br> " + allAssault[13] + "</b>"  + "<br>" + allDesc[13]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime14() }, delay);
     
          }

function crime14() {

      var listener14 = allDesc[14];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[14] + ", " + allAddresses[14]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker14 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker14, 'click', function (listener14) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[14] + ", " + allTimes[14] +  "</font><br> " + allAssault[14] + "</b>"  + "<br>" + allDesc[14]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime15() }, delay);
     
          }

function crime15() {

      var listener15 = allDesc[15];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[15] + ", " + allAddresses[15]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker15 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker15, 'click', function (listener15) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[15] + ", " + allTimes[15] +  "</font><br> " + allAssault[15] + "</b>"  + "<br>" + allDesc[15]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime16() }, delay);
     
          }
function crime16() {

      var listener16 = allDesc[16];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[16] + ", " + allAddresses[16]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker16 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker16, 'click', function (listener16) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[16] + ", " + allTimes[16] +  "</font><br> " + allAssault[16] + "</b>"  + "<br>" + allDesc[16]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime17() }, delay);
     
          }

function crime17() {

      var listener17 = allDesc[17];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[17] + ", " + allAddresses[17]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker17 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker17, 'click', function (listener17) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[17] + ", " + allTimes[17] +  "</font><br> " + allAssault[17] + "</b>"  + "<br>" + allDesc[17]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime18() }, delay);
     
          }
function crime18() {

      var listener18 = allDesc[18];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[18] + ", " + allAddresses[18]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker18 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker18, 'click', function (listener18) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[18] + ", " + allTimes[18] +  "</font><br> " + allAssault[18] + "</b>"  + "<br>" + allDesc[18]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime19() }, delay);
     
          }
function crime19() {

      var listener19 = allDesc[19];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[19] + ", " + allAddresses[19]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker19 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker19, 'click', function (listener19) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[19] + ", " + allTimes[19] +  "</font><br> " + allAssault[19] + "</b>"  + "<br>" + allDesc[19]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
    
  
     setTimeout(function () {
            return crime20() }, delay);
     
          }
function crime20() {

      var listener20 = allDesc[20];
      geocoder = new google.maps.Geocoder(); 

    geocoder.geocode({'address': "stockholm, " + allRegionsLastWord[20] + ", " + allAddresses[20]}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
       
        
           marker20 = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
          });
        
            
          google.maps.event.addListener(marker20, 'click', function (listener20) {
              if (infowindow != null) {
                infowindow.close();
              } 
               
              
              infowindow.setContent("<font size=3px>" + "<b>" + allDates[20] + ", " + allTimes[20] +  "</font><br> " + allAssault[20] + "</b>"  + "<br>" + allDesc[20]);
              infowindow.open(map, this);
          });
          infowindow = new google.maps.InfoWindow();
        
      } else {
         
          console.log ("over query limit");
          
          
      } 
    });
  
     
          } 