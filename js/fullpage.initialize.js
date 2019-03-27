jQuery(document).ready(function() {
	jQuery('#fullpage').fullpage({
		//options here
        //Scrolling
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
        sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page', 'Third page', 'Fourth and last page'],
//Scrolling
css3: true,
scrollingSpeed: 700,
autoScrolling: true,
fitToSection: true,
fitToSectionDelay: 1000,
scrollBar: false,

	});

	//methods
});