$(document).ready(function() {
    function typeText(element, text, delay) {
        $(element).addClass('typing-cursor');
        let i = 0;
        let interval = setInterval(function() {
            if (i < text.length) {
                $(element).append(text.charAt(i));
                i++;
            } else {
                clearInterval(interval);
                $(element).removeClass('typing-cursor'); // Remove the cursor after typing is complete
            }
        }, delay);
    }

    // Clear the text initially
    $('.text1').text('');
    $('.text2 span').text('');

    // Start typing with a cursor effect
    typeText('.text1', 'Not ', 100);
    setTimeout(function() {
        typeText('.text2 span', '$6,750', 100);
    }, 500); 
});




$(document).on('click','.click_bars', function(){
	$('.menu').slideToggle(500);

	return false;
})