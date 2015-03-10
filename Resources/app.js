// All source code Copyright 2013 Cope Consultancy Services. All rights reserved


// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create base root window
//
var win1 = Titanium.UI.createWindow({  
    backgroundImage:'/images/2015-02-20-22.40.33.jpg'
});


var theLabel = Ti.UI.createLabel({text: 'Important', top: 20, left: 20, font: {fontSize: 40}});
win1.add(theLabel);

	var switchOrientation = Ti.UI.createButton({title: 'Make Landscape', top: '50%', left: '30%'});
	switchOrientation.addEventListener('click', rotateLayout);
	win1.add(switchOrientation);
	
	function rotateLayout() {
	win1.orientationModes = [Ti.UI.LANDSCAPE_LEFT];
	switchOrientation.hide();
	}
	
win1.open();
