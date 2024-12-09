document.addEventListener('DOMContentLoaded', function() {
    var menuContent = document.getElementById('menuContent');
    menuContent.classList.add('hidden');
});

document.getElementById('menuItem').addEventListener('click', function() {
    var menuContent = document.getElementById('menuContent');
    var arrow = document.getElementById('arrow');
    var header = document.getElementById('header');
    
    if (menuContent.classList.contains('hidden')) {
        menuContent.classList.remove('hidden');
        menuContent.style.display = 'flex';
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-up');
        header.style.backgroundColor = '#fff'; 
    } else {
        menuContent.classList.add('hidden');
        menuContent.style.display = 'none';
        arrow.classList.remove('arrow-up');
        arrow.classList.add('arrow-down');
        header.style.backgroundColor = '#fcf5ebff';
    }
});
