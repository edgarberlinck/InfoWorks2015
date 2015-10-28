var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.obterLocalizacao();
    },

    obterLocalizacao : function () {
       

       var erro = function () {
          alert("Não foi possícel obter a geolocalização");
       };
        
       navigator.geolocation.getCurrentPosition(function(position) {
            document.getElementById("longitude").value = position.coords.longitude;
            document.getElementById("latitude").value = position.coords.latitude;
       }, erro);
    } 
};

app.initialize();