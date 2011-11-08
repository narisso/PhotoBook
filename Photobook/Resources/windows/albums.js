
var win = Ti.UI.currentWindow;

var activityIndicator = Ti.UI.createActivityIndicator({
        	message:' Loading...',
       });
win.add(activityIndicator);
     
var tableview = Ti.UI.createTableView({
            backgroundColor : 'transparent',
            rowBackgroundColor : 'white'
       });
win.add(tableview);

function getAlbumCovers() {
		activityIndicator.show();
        Titanium.Facebook.requestWithGraphPath('me/albums', {
            fields : 'id,name,cover_photo,count,created_time'
        }, 'GET', function(e) {

            if(e.success) {
                if(e.result) {
                    
                    var rows = [];             
                    var data = JSON.parse(e.result).data;
                    
                    for(x in data) {

                        var row = Titanium.UI.createTableViewRow({
                            width : '100%',
                            height : 'auto',
                            link:data[x].id
                        });
                        var image = Titanium.UI.createImageView({
                            image : "https://graph.facebook.com/" + (data[x].cover_photo || 0) + "/picture?access_token=" + Ti.Facebook.accessToken,
                            top : 0,
                            left : 0,
                            width : 100,
 							height : 100
                        });
                        var title = Titanium.UI.createLabel({
                            text : String.format("%s (%d)", data[x].name, data[x].count),
                            top : 0,
                            left : 110,
                            width : 'auto',
                            height : 'auto'
                        });
                        
                        row.add(image);
                        row.add(title);
                        rows.push(row);
                    }
                    
                    tableview.setData(rows);

					tableview.addEventListener('click', function(e){
					    if (e.rowData.link)
					    {
					        var win2 = Titanium.UI.createWindow({
								title:'Photos !',
						  		backgroundColor:'#fff',
						   		url:'photos.js',
						   		AlbumID:e.rowData.link,
						   		modal:true
								});

							win2.open();
						}
                	});
            	}
            } 
            
            else if(e.cancelled) {
                Ti.API.debug("user cancelled");
            } 
            else {
                Ti.API.debug(e.result);
            }
            activityIndicator.hide();

        });
}

getAlbumCovers();


