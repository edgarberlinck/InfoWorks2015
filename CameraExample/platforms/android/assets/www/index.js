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

	tirarFoto : function () {
		var cameraSuccess = function (picture) {
			var image = document.getElementById('foto');
        	image.src = "data:image/jpeg;base64," + picture;
		};

		var cameraError = function () {

		};

		var cameraOptions = { 
			quality: 100,
			targetWidth: 500,
      		targetHeight: 500,
        	destinationType: Camera.DestinationType.DATA_URL,
        	sourceType : Camera.PictureSourceType.CAMERA,
        	saveToPhotoAlbum: false
    	};

		navigator.camera.getPicture( cameraSuccess, cameraError, cameraOptions );
	}
}

app.initialize();