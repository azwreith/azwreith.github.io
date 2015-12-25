$(document).ready(function() {

  // page flash on ready
  $('body').css('opacity', '0').fadeTo(1500, 1, 'swing');

  // wow lbrary for animation
  new WOW().init();

  // intitalize fullpage
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    scrollBar: true
  });

});

// initialize chart
var ctx = document.getElementById("skill-chart").getContext("2d");

var data = {
    labels: ['Java', 'MySQL', 'JavaScript', 'Python', 'C#', 'HTML5/CSS3', 'C++', 'PHP'],
    datasets: [
        {
            label: "Skill Level",
            fillColor: "rgba(51, 51, 51, 0.6)",
            strokeColor: "#fff",
            pointColor: "rgba(51, 51, 51, 0.9)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [8, 7, 7, 6, 7, 8, 7, 5]
        }
    ]
};

var chart = new Chart(ctx).Radar(data, {     scaleOverride: true, scaleSteps: 10, scaleStepWidth: 1, scaleStartValue: 0, angleLineColor : "rgba(0,0,0,.1)", pointLabelFontSize : 12, pointLabelFontColor : "#222"});
