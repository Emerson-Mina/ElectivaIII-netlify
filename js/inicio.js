document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault(); 
            const submenu = this.nextElementSibling;

            if (submenu) {
                submenu.classList.toggle('show');
                submenu.style.display = submenu.classList.contains('show') ? 'block' : 'none'; 
            }
        });
    });

    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor); 

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`; 
        cursor.style.top = `${e.clientY}px`; 
    });
});
