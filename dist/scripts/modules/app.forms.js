
class AppForms {
    constructor() {
        this.bindEvents()
    }

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------

    container = document.querySelectorAll('.js-form-input');
    formIconPassword = document.querySelectorAll('.js-form-icon-password');

    //-----------------------------------------------------
    // Bind events
    //-----------------------------------------------------

    bindEvents() {
        for ( let index = 0; index < this.container.length; index++ ) {
            const container = this.container[index];
            const formInput = container.querySelector('input');

            formInput.addEventListener('focus', (event) => this.handleFormInputFocus(event, container) );
            formInput.addEventListener('blur', (event) => this.handleFormInputBlur(event, container) );
        }

        for ( let index = 0; index < this.formIconPassword.length; index++ ) {
            const container = this.formIconPassword[index];

            container.addEventListener('click', () => this.handleClickFormIconPassword(container));
        }
    }

    //-----------------------------------------------------
    // Methods
    //-----------------------------------------------------

    handleFormInputFocus = (event, el) => {
        el.classList.add('is-focused');

        if ( !event.target.value.length ) {
            const placeholder = el.querySelector('.form-input_placeholder');

            placeholder.classList.add('active');
        }
    };

    handleFormInputBlur = (event, el) => {
        el.classList.remove('is-focused');

        if ( event.target.value.length ) {
            el.classList.add('has-value');
        } else {
            const container = el.closest('.js-form-input');
            const placeholder = container.querySelector('.form-input_placeholder');

            el.classList.remove('has-value');
            placeholder.classList.remove('active');
        }
    };

    handleClickFormIconPassword = (el) => {
        const container = el.closest('.js-form-input');
        const formInput = container.querySelector('input');

        if ( el.classList.contains('active') ) {
            el.classList.remove('active');

            formInput.setAttribute('type', 'password');
        } else {
            el.classList.add('active');

            formInput.setAttribute('type', 'text');
        }
    };
}

new AppForms();
