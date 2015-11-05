/*
var textarray = [
    "printf (Hello, World !);",
    "PRINT Hello, World !;",
    "std::cout << 'Hello, World !' << std::endl;",
    "System.out.println('Hello, World !');",
    "document.write('Hello, World !');",
    "Print['Hello, World !']",
    "NSLog(@'Hello, World !');",
    "echo 'Hello, World !';",
    "print('Hello, World !')",
    "WRITE 'Hello, World !'.",
    "message 'Hello, World !' with style = popup;",
    "trace('Hello, World !');",
    "WRITE 'Hello, World !'.",
    "MSG: .ASCIIZ 'Hello, World !'",
    "10 PRINT 'Hello, World !'",
    "<p>Hello, World !</p>",
    "put 'Hello, World !'",
    "puts 'Hello, World !'",
    "PRINT *, 'Hello, World !'"
];

function RndText() {
    var rannum = Math.floor(Math.random() * textarray.length);
    document.getElementById('arraytext').innerHTML = textarray[rannum];
}
onload = function() {
    RndText();
}

*/

var inter = setInterval(function() {
    RndText();
}, 1000);

$(document).ready(function() {
    $('body').css('opacity', '0').fadeTo(1500, 1, 'swing');
});
