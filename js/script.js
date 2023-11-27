'use strict';
(function(){
    document.querySelector('#OpenMobileMenu').addEventListener('click', () => {
        document.querySelector('#MobileHeader').classList.add('open');
    });

    document.querySelector('#CloseBtn').addEventListener('click', () => {
        document.querySelector('#MobileHeader').classList.remove('open');
    })
})();
