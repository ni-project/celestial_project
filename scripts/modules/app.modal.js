
export default class AppModal {
    constructor() {
        this.bindEvents()
    }

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------

    container = document.querySelector('.js-modal');

    buttonAuth = document.querySelectorAll('.js-button-auth');
    buttonModalClose = this.container.querySelector('.js-modal-close');

    //-----------------------------------------------------
    // Bind events
    //-----------------------------------------------------

    bindEvents() {
        for ( let index = 0; index < this.buttonAuth.length; index++ ) {
            this.buttonAuth[index].addEventListener('click', this.handleClickButtonAuth);
        }

        this.buttonModalClose.addEventListener('click', this.handleClickButtonModalClose);
    }

    //-----------------------------------------------------
    // Methods
    //-----------------------------------------------------

    handleClickButtonAuth = () => {
        this.container.classList.add('active');
    };

    handleClickButtonModalClose = () => {
        this.container.classList.remove('active');
    };
}
