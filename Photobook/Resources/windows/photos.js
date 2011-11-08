
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

activityIndicator.show();    
Titanium.Facebook.requestWithGraphPath(win.AlbumID+'/photos', {fields : 'id'}, 'GET', 
	function(e){
        	if(e.success) {
                if(e.result) 
                {
                	var rows = [];    
                	var data = JSON.parse(e.result).data;
                	for(x in data) 
                	{
                		var row = Titanium.UI.createTableViewRow({
                            width : '100%',
                            height : 'auto'
                        });
                        var image = Titanium.UI.createImageView({
                            image : "https://graph.facebook.com/" + (data[x].id || 0) + "/picture?access_token=" + Ti.Facebook.accessToken,
                            top : '3%',
                            bottom:'3%',
                            left : '10%',
                            width : '80%'

                        });
						row.add(image);
                        rows.push(row);
                	}
                	tableview.setData(rows);
                }
            }
            else if(e.cancelled) 
            {
                Ti.API.debug("user cancelled");
            } 
            else 
            {
                Ti.API.debug(e.result);
            }
            activityIndicator.hide();
        	
        	
        }
);




