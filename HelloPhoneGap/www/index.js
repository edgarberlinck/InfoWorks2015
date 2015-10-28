var app = {
	initialize : function () {
		document.addEventListener('deviceready', this.start, false);
		document.addEventListener('backbutton', this.backButton, false);
	},

	start : function () {

	},

	backButton : function () {
		alert ('backbutton!');
	}
}

app.initialize();