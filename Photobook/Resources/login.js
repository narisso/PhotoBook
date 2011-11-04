
var win = Titanium.UI.currentWindow;

Titanium.Facebook.appid = "134793934930";
Titanium.Facebook.permissions = ['publish_stream', 'read_stream'];

var loginBtn = Titanium.UI.createButton({
	title:'Login',
	top:'25%',
	width:'50%',
	height:'50%',
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
loginBtn.addEventListener('click', function() {
  Titanium.Facebook.authorize();
});

win.add(loginBtn);
