$(document).ready(function() {

	// wow lbrary for animation
	new WOW().init();

	// intitalize fullpage
	$('#fullpage').fullpage({
		sectionsColor: ['#1bbc9b', 'whitesmoke', '#ccddff', '#7BAABE', '#4BBFC3'],
		css3: true,
		navigation: true,
		navigationPosition: 'right',
		scrollBar: true,
		slidesNavigation: true,
		afterRender: function() {
			// show page on ready
			$("#loadingMask").fadeOut("slow");
		}
	});

});

// initialize chart
var ctx = document.getElementById("skill-chart").getContext("2d");

var data = {
	labels: ['Java', 'MySQL', 'JavaScript', 'Python', 'C#', 'HTML5/CSS3', 'C++', 'PHP'],
	datasets: [{
		label: "Skill Level",
		fillColor: "rgba(51, 51, 51, 0.6)",
		strokeColor: "#fff",
		pointColor: "rgba(51, 51, 51, 0.9)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(220,220,220,1)",
		data: [8, 7, 7, 6, 7, 8, 7, 5]
	}]
};

var chart = new Chart(ctx).Radar(data, {
	scaleOverride: true,
	scaleSteps: 10,
	scaleStepWidth: 1,
	scaleStartValue: 0,
	angleLineColor: "rgba(0,0,0,.1)",
	pointLabelFontSize: 12,
	pointLabelFontColor: "#222"
});
