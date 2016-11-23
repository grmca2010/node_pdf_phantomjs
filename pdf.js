var phantom = require('node-phantom-simple');
		phantom.create({ path: require('phantomjs').path }, function(err,ph) {
			  return ph.createPage(function(err,page) {
				  page.settings = {
					        loadImages: true,
					        localToRemoteUrlAccessEnabled: true,
					        javascriptEnabled: true,
					        loadPlugins: false
					       };
					      page.set('viewportSize', { width: 1200, height: 1000 });
					      page.set('paperSize', { 
					    	  format: 'A3', 
					    	  orientation: 'portrait',
					    	  margin: '1.5cm',
					    	  });
				  return page.open("https://github.com", function(err,status) {
			      console.log("opened site? ", status);
				      return page.render('packtpub.pdf', function(err) {
				    	  if(!err) {
				    		  console.log('PDF is created in ');	
				    	  }
								ph.exit();
				      });			      
			    });
			  });
			});