// script.js
document.addEventListener('DOMContentLoaded', function() {
    const intro1 = document.getElementById('intro1');
    const intro2 = document.getElementById('intro2');
    const content = document.getElementById('content');

    setTimeout(() => {
        intro1.classList.add('hidden');
        intro2.classList.remove('hidden');
    }, 4000);

    setTimeout(() => {
        intro2.classList.add('hidden');
        content.classList.remove('hidden');
    }, 8000);
});