(function(window, document, $, R, J) {
	
	// Setup our Responsive Content Object	
	R.create({ 
		prop: "width",
		prefix: "src",
		breakpoints: [0, 320, 640, 960, 1280],
		lazy: true
	});
	
	// THE BLACK MAGIC OF RESPONSIVE JAVASCRIPT LIVES BELOW....
	
	var jRes = new J([ // Setup of jResponse
		{ label: '4', enter: 0, exit: 639 },
		{ label: '8', enter: 640, exit: 959 },
		{ label: '12', enter: 960, exit: 1279 },
		{ label: '16', enter: 1280, exit: 10000 }
	]);
	
	jRes.addFunc({ // Function Called On ALL Breakpoints during a Resize
		breakpoint: '*',
		enter: function() { // A function called on enter of ANY breakpoint

		},
		exit: function() { // Called on Exit of ANY breakpoing
			
		}
	});
	
	jRes.addFunc([ // Enter and Exit callbacks based on breakpoints
		{
			breakpoint: '16',
			enter: function() {

			},
			exit: function() {

			}
		},{
			breakpoint: '12',
			enter: function() {

			},
			exit: function() {

			}
		},{
			breakpoint: '8',
			enter: function() {

			},
			exit: function() {
				
			}
		},{
			breakpoint: '4',
			enter: function() {

			},
			exit: function() {
				
			}
		},{
			breakpoint: ['12', '16'], // Both 12 and 16 columns layouts
			enter: function() {
				
			},
			exit: function() {
				
			}
		},{
			breakpoint: ['4', '8'], // Both 4 and 8 columns layouts
			enter: function() {
			
			},
			exit: function() {

			}
		}
	]);

}(this, this.document, this.jQuery, this.Response, this.jRespond));