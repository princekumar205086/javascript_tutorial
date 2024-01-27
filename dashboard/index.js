// function toggleMenu() {
//     var navList = document.querySelector('.nav-list');
//     navList.classList.toggle('show');
// }


function toggleMenu() {
    var navList = document.querySelector('.nav-list');
    if (!navList.classList.contains('show')) {
        navList.style.display = 'flex';
        setTimeout(function() {
            navList.classList.add('show');
        }, 300); // Delay before the animation starts
    } else {
        navList.classList.remove('show');
        setTimeout(function() {
            navList.style.display = 'none';
        }, 300); // Delay before the sidebar is hidden
    }
}

// Add this event listener
window.addEventListener('resize', function() {
    var navList = document.querySelector('.nav-list');
    if (window.innerWidth >= 769) {
        navList.style.display = 'flex';
        navList.classList.remove('show');
    } else if (!navList.classList.contains('show')) {
        navList.style.display = 'none';
    }
});