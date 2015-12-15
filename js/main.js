particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

$(document).ready(function() {
    $('body').css('opacity', '0').fadeTo(1500, 1, 'swing');

    new WOW().init();

    $('#fullpage').fullpage({
      navigation: true,
      navigationPosition: 'right',
      scrollBar: true
    });

});

var ctx = document.getElementById("skill-chart").getContext("2d");

var data = {
    labels: ['Java', 'MySQL', 'JavaScript', 'Python', 'C#', 'HTML5/CSS3', 'C++', 'PHP'],
    datasets: [
        {
            label: "Skill Level",
            fillColor: "rgba(27,188,155,0.5)",
            strokeColor: "#fff",
            pointColor: "rgba(27,188,155,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [10, 7, 8, 6, 7, 9, 7, 5]
        }
    ]
};



var chart = new Chart(ctx).Radar(data, {  angleLineColor : "rgba(0,0,0,.3)", pointLabelFontSize : 12, pointLabelFontColor : "#222"});
