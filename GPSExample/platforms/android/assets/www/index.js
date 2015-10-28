var app = {
	initialize : function () {
		document.addEventListener('deviceready', this.start, false);
		document.addEventListener('backbutton', this.backButton, false);
	},

	start : function () {

	},

	backButton : function () {
		alert ('backbutton!');
	},

	obterGeolocalizacao : function () {
		var sucesso = function (position) {
			alert('Latitude: '          + position.coords.latitude          + '\n' +
                  'Longitude: '         + position.coords.longitude         + '\n' +
                  'Altitude: '          + position.coords.altitude          + '\n' +
                  'Accuracy: '          + position.coords.accuracy          + '\n' +
                  'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                  'Heading: '           + position.coords.heading           + '\n' +
                  'Speed: '             + position.coords.speed             + '\n' +
                  'Timestamp: '         + position.timestamp                + '\n');
		};

		var erro = function () {
			alert("Não foi possícel obter a geolocalização");
		};
		
		navigator.geolocation.getCurrentPosition(sucesso, erro);
	}
}

app.initialize();