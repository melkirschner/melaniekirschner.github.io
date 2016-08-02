$('#fahrenheit_to_celsius').on('click', function () {
   var fahrenheit = $('#temperature').val();
   fahrenheit = parseFloat(fahrenheit);
   var celsius = (fahrenheit - 32) / 1.8;
   $('#result').html(fahrenheit + ' °F = ' + celsius.toFixed(2) + ' °C');

$('#temperature').val('');


function backgroundColor () {
    if (fahrenheit < 50) {
    document.body.style.backgroundColor = 'blue';
}
    else if (fahrenheit > 70) {
    document.body.style.backgroundColor = 'red';
}

    else {
    document.body.style.backgroundColor = 'yellow';
}
}
backgroundColor()


});

$('#celsius_to_fahrenheit').on('click', function () {
   var celsius = $('#temperature').val();
   celsius = parseFloat(celsius);
   var fahrenheit = ((celsius) * 1.8)+ 32;
   // $('#result').html(fahrenheit);
    $('#result').html(celsius.toFixed(2) + ' °C = ' + fahrenheit.toFixed(2) + ' °F ');

    $('#temperature').val('');
function backgroundColor () {
    if (fahrenheit < 50) {
    document.body.style.backgroundColor = 'blue';
}
    else if (fahrenheit > 70) {
    document.body.style.backgroundColor = 'red';
}

    else {
    document.body.style.backgroundColor = 'yellow';
}
}
backgroundColor()

});