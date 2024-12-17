document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelector('.services-wrapper');
    const servicesPopup = document.querySelector('.services-popup');
    const supportOption1 = document.querySelector('.support-option-1');
    const supportOption2 = document.querySelector('.support-option-2');
    const divider = document.querySelector('.divider');
    const mainSupport = document.querySelector('.main-support');
    
    const login = document.querySelector('.login-wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');

    servicesPopup.addEventListener('click', (event) => {
        event.preventDefault();

        if (login.classList.contains('active-popup')) {
            login.classList.remove('active-popup')
        }

        if (services.classList.contains('services-popup')) {
            mainSupport.classList.remove('active');
            divider.classList.remove('active');
            supportOption2.classList.remove('active');
            supportOption1.classList.remove('active');

            setTimeout(() => {
                services.classList.remove('services-popup');
            }, 1000);
        } else {
            services.classList.add('services-popup');
            supportOption1.classList.add('active');

            setTimeout(() => {
                supportOption2.classList.add('active');
            }, 1000);

            setTimeout(() => {
                divider.classList.add('active');
            }, 2000);

            setTimeout(() => {
                mainSupport.classList.add('active');
            }, 3000);
        }
    });

    registerLink.addEventListener('click', () => {
        login.classList.add('active');
    });
    
    loginLink.addEventListener('click', () => {
        login.classList.remove('active');
    });

    btnPopup.addEventListener('click', () => {
        // Chiudi il pannello dei servizi se è aperto
        if (services.classList.contains('services-popup')) {
            mainSupport.classList.remove('active');
            divider.classList.remove('active');
            supportOption2.classList.remove('active');
            supportOption1.classList.remove('active');

            setTimeout(() => {
                services.classList.remove('services-popup');
            }, 1000);
        }

        login.classList.add('active-popup');
    });

    iconClose.addEventListener('click', () => {
        login.classList.remove('active-popup');
    });
});