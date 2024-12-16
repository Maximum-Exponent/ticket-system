document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelector('.services-wrapper');
    const servicesPopup = document.querySelector('.services-popup');
    const supportOption1 = document.querySelector('.support-option-1');
    const supportOption2 = document.querySelector('.support-option-2');
    const divider = document.querySelector('.divider');
    const mainSupport = document.querySelector('.main-support');

    servicesPopup.addEventListener('click', (event) => {
        event.preventDefault();

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
});