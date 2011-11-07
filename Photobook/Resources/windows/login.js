
var win = Titanium.UI.currentWindow;

Titanium.Facebook.appid = "134793934930";
Titanium.Facebook.permissions = ['publish_stream', 'read_stream','user_photos'];

var PhotoButton = Titanium.UI.createButton({
	title:'See Photos',
	top:'15%',
	width:'50%',
	height:'25%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});

PhotoButton.addEventListener('click', function() {
	var win2 = Titanium.UI.createWindow({
		title:'Albums !',
  		backgroundColor:'#fff',
   		url:'albums.js',
   		modal:true
		});
	win2.open({animated:true, modal:true});
});

function setupWindow() {
	if(Ti.Facebook.loggedIn)
		win.add(PhotoButton);
}

setupWindow();

function showPhotoButton() {
	win.add(PhotoButton);
}
function hidePhotoButton() {
	win.remove(PhotoButton);
}

Titanium.Facebook.addEventListener('login', showPhotoButton);
Titanium.Facebook.addEventListener('logout', hidePhotoButton);

win.add(Titanium.Facebook.createLoginButton({
	style:'wide',
	top:'5%'
}));


