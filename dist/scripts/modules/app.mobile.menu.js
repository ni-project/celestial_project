
class AppMobileMenu {
    constructor() {
        this.bindEvents()
    }

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------

    buttonMobileMenu = document.querySelector('.js-handle-button-mobile-menu');
    container = document.querySelector('.js-mobile-menu');
    mobileMenuClose = this.container.querySelector('.js-mobile-menu-close');
    breakPointTabletLandscape = 1150;

    //-----------------------------------------------------
    // Bind events
    //-----------------------------------------------------

    bindEvents() {
        this.buttonMobileMenu.addEventListener('click', this.handleButtonMenu);
        this.mobileMenuClose.addEventListener('click', this.handleButtonMenuClose);

        window.onresize = () => { this.windowResize() }
    }

    //-----------------------------------------------------
    // Methods
    //-----------------------------------------------------

    handleButtonMenu = (event) => {
        const isVisible = event.currentTarget.classList.contains('active');

        if ( isVisible ) {
            this.mobileMenu('close');
        } else {
            this.mobileMenu('show');
        }
    };

    mobileMenu = (visible) => {
        switch (visible) {
            case 'show':
                this.buttonMobileMenu.classList.add('active');
                this.container.classList.add('active');
                break;

            case 'close':
                this.buttonMobileMenu.classList.remove('active');
                this.container.classList.remove('active');
                break;

            default: break;
        }
    };

    handleButtonMenuClose = (event) => {
        this.mobileMenu('close');

        event.stopPropagation();
    };

    windowResize = () => {
        const windowWidth = window.innerWidth;
        const isActiveMenu = this.container.classList.contains('active');

        if ( windowWidth > this.breakPointTabletLandscape && isActiveMenu ) {
            this.mobileMenu('close');
        }
    };
}

new AppMobileMenu();
