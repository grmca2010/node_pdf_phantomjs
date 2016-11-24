var phantom = require('node-phantom-simple');
		phantom.create({ path: require('phantomjs').path }, function(err,ph) {
			  ph.createPage(function(err,page) {
				  page.settings = {
					        loadImages: true,
					        localToRemoteUrlAccessEnabled: true,
					        javascriptEnabled: true,
					        loadPlugins: false,
							resourceTimeout : 2000
					       };
					      page.set('viewportSize', { width: 1200, height: 1000 });
					      page.set('paperSize', { 
					    	  format: 'A3', 
					    	  orientation: 'portrait',
					    	  margin: '1.5cm',
					    	  });
				page.open("https://cce.cloudapps.cisco.com/guest/assessmentresult/582d579dbcfd1a5a81910341", function(err,status) {
			      console.log("opened site? ", status);
						page.render('report.pdf', function(err) {
				    	  if(!err) {
				    		  console.log('PDF is created in ');	
				    	  }
								ph.exit();
				      });			      
			    });
					page.onLoadFinished = function(status) {
						console.log('Status: ' + status);
						// Do other things here...
					};
			  });
			});