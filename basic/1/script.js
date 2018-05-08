$('document').ready(function() {

$('#white').on('click', function() {
	$('.output').text("It's the white gift box!");
});

$('#santa').on('click', function() {
	$('.output').text('Santa Claus is coming!');
});

$('#bell').on('click', function() {
	$('.output').text('The bell is ringing!');
});

});