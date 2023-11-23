
export default class AppHeaderMenu {
    constructor() {
        this.bindEvents()
    }

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------

    container = document.querySelector('.js-header-nav-container');
    headerNavItem = this.container.querySelectorAll('.js-header-nav-item');
    headerNavItemDropdownClose = this.container.querySelectorAll('.js-header-nav-item-dropdown-close');

    //-----------------------------------------------------
    // Bind events
    //-----------------------------------------------------

    bindEvents() {
        for (let index = 0; index < this.headerNavItem.length; index++) {
            this.headerNavItem[index].addEventListener("click", this.handleMenuOpen);
        }

        for (let index = 0; index < this.headerNavItemDropdownClose.length; index++) {
            this.headerNavItemDropdownClose[index].addEventListener("click", this.handleMenuClose);
        }
    }

    //-----------------------------------------------------
    // Methods
    //-----------------------------------------------------

    handleMenuOpen = (event) => {
        if ( !event.currentTarget.classList.contains('active') ) {
            this.resetActiveMenu();

            event.currentTarget.classList.add('active');
        }
    };

    handleMenuClose = (event) => {
        this.resetActiveMenu();

        event.stopPropagation();
    };

    resetActiveMenu = () => {
        for (let index = 0; index < this.headerNavItem.length; index++) {
            this.headerNavItem[index].classList.remove('active');
        }
    };
}
