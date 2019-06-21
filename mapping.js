
    "use strict";
    var map;
    var infowindow;
    var markers = [];
    var currentmap = true;
    var show_near_store = false;
    var show_find_store = false;
    var stores = [
        {
            "name": "PHOENIX",
            "lat":12.9904,
            "lng":80.2171,
            "type":"MALL",
            "postcode":"600042",
            "City":"chennai"
        },
        {
            "name":"Skywalk",
            "lat": 13.0734,
            "lng": 80.2215,
            "type":"MALL",
            "postcode":"600029",
            "City":"chennai" 
        },
        {
            "name":"lulu international shopping mall",
            "lat": 10.0261,
            "lng": 76.3071,
            "type":"MALL",
            "postcode":"682024",
            "City":"kochi"
          
        },
        {
            "name":"R city",
            "lat": 19.0995,
            "lng": 72.9168,
            "type":"MALL",
            "postcode":"400086",
            "City":"mumbai"
        },
        
    ];
    function initMap() {
        var mapOptions = {
          center: {lat: 20.5937, lng: 78.9629},
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map"),mapOptions);
        for (var i = 0, length = stores.length; i < length; i++) {
            var data = stores[i];
            var content = getContent(data.name,data.type,data.City);
            addMarker(content,data.name,data.type,data.City,data.lat,data.lng);     
        }
    }
    //get content for infowindow
    function getContent(name,type,city){
        var content = '<div class="Markercontent">'+
                        '<h4 class="detailName">'+name+'</h4>'+
                        '<p class="detailType">'+type+'</p>'+
                        '<p clas="detailCity">'+city+'</p>'+
                        
                        '</div>';
        return content;
    }
    //add marker to map
    function addMarker(content,name,type,city,lat,lng) {
        var location = new google.maps.LatLng(lat,lng);
        var marker = new google.maps.Marker({
          position: location,
          map: map,
          icon: "image/map-pin2.png",
        });
        markers.push(marker);
        infowindow = new google.maps.InfoWindow();
        window.onclick = function(event) {
                    if (event.target == Markercontent) {
                        infowindow.close();
                    }
                }
        //store's infowindow
        google.maps.event.addListener(marker, 'mouseover', function() {
            infowindow.close();
            infowindow.setContent(content);
            infowindow.open(map, marker);
            var btn = document.getElementsByClassName("btncontent")[0];
            //show store detail 
            btn.onclick = function(){
                var modal = document.getElementById('ViewStore');
                var span = document.getElementsByClassName("close")[0];
                modal.style.display = "block";
                //hide store detail
                span.onclick = function() {
                    modal.style.display = "none";
                }
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
                //store detail
                document.getElementById("StoreName").innerHTML = name;
                document.getElementById("StoreType").innerHTML = type;
                document.getElementById("StoreCity").innerHTML = city;
                var mapOptions = {
                    center: location,
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                map = new google.maps.Map(document.getElementById("storemap"),mapOptions);
                var marker = new google.maps.Marker({
                      position: location,
                      map: map,
                      icon: "image/map-pin2.png",
                });
                //show current marker direction on map.google
                var btn_direction = document.getElementById("direction");
                btn_direction.onclick = function(){
                    var href = 'https://www.google.com/maps/place/'+lat+'+'+lng+'/@'+lat+','+lng+',10z';
                    document.getElementById("link-direction").href = href;
                };
                currentmap = false; 
            }
        });
        //click any where in map close infowindow
        google.maps.event.addListener(map, 'click', function(){
        	infowindow.close();
        });
    }
    //Hide and show marker
    function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
    }
    //search store by type
    var x = false;
    function SearchType(obj){
        var typeList = document.getElementsByName("StoreType");
        document.getElementById("inputsearch").value = "";
        var storeType = "";
        //check show/hide near-store if user find store before
        if (show_near_store == true) {
            document.getElementById("near-store").style.display = "none";
        }
        //check show/hide find store if user find store before
        if (show_find_store == true) {
            document.getElementById("find-store").style.display = "none";
        }
        //check current map
        if (currentmap == false) {
            initMap();
            currentmap = true;
        }
        //when user checked
        for(var i=0;i<typeList.length;i++){
            typeList[i].checked = false;
        }
        if (x == true) {
            obj.checked = false;
            x = false;
        }else{
            obj.checked = true;
            x = true;
        }
        for(var i=0;i<typeList.length;i++){
            if (typeList[i].checked) {
                storeType = typeList[i].value;
            }
        }
        switch(storeType){
            case "factory":
                setMapOnAll(null);
                for (var i = 0, length = stores.length; i < length; i++){
                    if (stores[i].type == "Factory"){
                      var data = stores[i];
                      var content = getContent(data.name,data.type,data.City);
                      addMarker(content,data.name,data.type,data.City,data.lat, data.lng);
                    }
                }
                break;
            case "politix":
                setMapOnAll(null);
                for (var i = 0, length = stores.length; i < length; i++){
                    if (stores[i].type == "Politix store"){
                        var data = stores[i];
                        var content = getContent(data.name,data.type,data.City);
                        addMarker(content,data.name,data.type,data.City,data.lat, data.lng);
                    }
                }
                break;
            case "myer":
             setMapOnAll(null);
                for (var i = 0, length = stores.length; i < length; i++){
                    if (stores[i].type == "Myer"){
                        var data = stores[i];
                        var content = getContent(data.name,data.type,data.City);
                        addMarker(content,data.name,data.type,data.City,data.lat, data.lng);
                    }
                }
                break;
            case "stockist":
                setMapOnAll(null);
                for (var i = 0, length = stores.length; i < length; i++){
                    if (stores[i].type == "Stockists"){
                        var data = stores[i];
                        var content = getContent(data.name,data.type,data.City);
                        addMarker(content,data.name,data.type,data.City,data.lat, data.lng);
                    }
                }
                break;
            default :
                setMapOnAll(map);
                break;
        }
    }
    //Search store button
    function btnSearch(){
        var inputSearch = document.getElementById("inputsearch").value;
        var near_store = [];//save near store
        //delete checked when user checked before search
        var typeList = document.getElementsByName("StoreType");
        for(var i=0;i<typeList.length;i++){
            typeList[i].checked = false;
        }
        if(inputSearch == ""){
            initMap();
        }else{
            for (var i = 0, length = stores.length; i < length; i++){
                if (inputSearch == stores[i].postcode || inputSearch == stores[i].City ){
                    near_store.push(stores[i]);
                    var mapOptions = {
                        center: {lat: stores[i].lat, lng:stores[i].lng},
                        zoom: 16,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    map = new google.maps.Map(document.getElementById("map"),mapOptions);
                }
            }
        }
        //add makers to map
        for(var i = 0; i < near_store.length; i++){
            var data = near_store[i];
            var content = getContent(data.name,data.type,data.City);
            var marker=addMarker(content,data.name,data.type,data.City,data.lat, data.lng);
        }
		 markers.push(marker);
		 infowindow = new google.maps.InfoWindow();
        window.onclick = function(event) {
                    if (event.target == Markercontent) {
                        infowindow.close();
                    }
                }
        //find near store in the same city
        console.log(near_store);
        document.getElementById("find-store").style.display = "block";
        show_find_store = true;
        var list_near_store = document.getElementsByClassName("list-near-store")[0];
        var node = document.createElement('li');
        if(near_store.length > 1){
            document.getElementById("NumberStore").innerHTML = near_store.length - 1 ;
            document.getElementById("near-store").style.display = "block";
            show_near_store = true;
        }
        else{
            document.getElementById("near-store").style.display = "none";
        }
        for(var i = 0 ; i < near_store.length-1 ; i++){
            list_near_store.appendChild(node);
            node.classList.add('NearStore');
            document.getElementsByClassName("NearStore")[i].innerHTML = '<h4>'+near_store[i].name+'</h4>'+
                                                                        '<p>'+near_store[i].City+'</p>'+
                                                                        '<button class="btn-near-content">VIEW STORE DETAIL</button>';
            var nearlat = near_store[i].lat;
            var nearlng = near_store[i].lng;
            var nearName = near_store[i].name;
            var nearType = near_store[i].type;
            var nearCity = near_store[i].City;
            var btn = document.getElementsByClassName("btn-near-content")[0];
            btn.onclick = function(){
                //show poup store detail
                var modal = document.getElementById('ViewStore');
                var span = document.getElementsByClassName("close")[0];
                modal.style.display = "block";
                //hide popup store detail
                span.onclick = function() {
                    modal.style.display = "none";
                }
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
                //show near store
                document.getElementById("StoreName").innerHTML = nearName;
                document.getElementById("StoreType").innerHTML = nearType;
                document.getElementById("StoreCity").innerHTML = nearCity;
                var btn_direction = document.getElementById("direction");
                var location = new google.maps.LatLng(nearlat,nearlng);
                var mapOptions = {
                    center: location,
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                map = new google.maps.Map(document.getElementById("storemap"),mapOptions);
                var marker = new google.maps.Marker({
                      position: location,
                      map: map,
                      icon: "image/map-pin2.png",
                });
                //get near store direction on map.google
                btn_direction.onclick = function(){
                    var href = 'https://www.google.com/maps/place/'+nearlat+'+'+nearlng+'/@'+nearlat+','+nearlng+',10z';
                    document.getElementById("link-direction").href = href;
                };
            }
        }
        currentmap = false;
    }
    //Search by press Enter key
    function pressSearch(event){
        if (event.keyCode == 13) {
            btnSearch();
        }
    }
    //Set custom location
        function btnMylocation(obj) {
            //delete checked when user checked before search
            var typeList = document.getElementsByName("StoreType");
            for(var i=0;i<typeList.length;i++){
                typeList[i].checked = false;
            }
            //delete search when user search before
            document.getElementById("inputsearch").value = "";
            if(!!navigator.geolocation) {
                var mapOptions = {
                    zoom: 20,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                
                map = new google.maps.Map(document.getElementById("map"), mapOptions);
                //get user loaction
                navigator.geolocation.getCurrentPosition(function(position) {
                    var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    map.setCenter(geolocate);
                    var myMarker = new google.maps.Marker({
                        position: geolocate,
                        map: map
                    });
                });
                
            } else {
                document.getElementById("map").innerHTML = 'No Geolocation Support.';
            }
            document.getElementById("find-store").style.display = "block"; 
            show_find_store = true;
            currentmap = false;
        };

