document.addEventListener('DOMContentLoaded', () => {
    
    navigator.serviceWorker.register('sw.js');
    if (Notification.permission === 'default')
        Notification.requestPermission(function(result) {
            localStorage.setItem('permisos', result);
            
        });


    document.querySelector('#noti').addEventListener('click', () => {
        const permisos = localStorage.getItem('permisos');

        if (permisos === 'granted')
            navigator.serviceWorker.ready.then(function(registration) {
                registration.showNotification('Título de prueba', {
                    body: 'Cuerpo de la notificación',
                    icon: 'icon.jpg'
                });
            });
    });

    document.querySelector('#cancelar').addEventListener('click', () => {
        localStorage.setItem('permisos', 'denied');
    });

    document.querySelector('#activar').addEventListener('click', () => {
        localStorage.setItem('permisos', 'granted');
    });
});
