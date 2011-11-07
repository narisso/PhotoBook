// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create base UI tab and root window
//
var win = Titanium.UI.createWindow({  
    title:'PhotoBook !',
    backgroundColor:'#fff',
    url:'windows/login.js',
    exitOnClose: true
});



// open window
win.open({animated:true, modal:true});
