const btnFeedback = document.getElementById('btnFeedback');

function sendFeedback(e) {
    e.preventDefault();
    console.log('test');
    alert('Thank you for your feedback!');
}

btnFeedback.addEventListener('click', sendFeedback);
