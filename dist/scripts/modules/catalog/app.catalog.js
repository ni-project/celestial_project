
class AppCatalog {
    constructor() {
        this.bindEvents()
    }

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------

    headerContainer = document.querySelector('.header');
    buttonCatalog = document.querySelectorAll('.js-button-catalog');
    container = document.querySelector('.js-catalog');
    buttonClose = this.container.querySelector('.js-catalog-close');
    buttonCloseMobile = this.container.querySelector('.js-catalog-close-mobile');

    catalogListMain = this.container.querySelector('.js-catalog-list-main');
    catalogListMainContent = this.catalogListMain.querySelector('.optiscroll-content');
    catalogListMainContainer = this.container.querySelector('.js-catalog-list-main-container');

    catalogListSecondary = this.container.querySelector('.js-catalog-list-secondary');
    catalogListSecondaryContent = this.catalogListSecondary.querySelector('.optiscroll-content');
    catalogListSecondaryContainer = this.container.querySelector('.js-catalog-list-secondary-container');
    catalogListSecondaryContainerHead = this.catalogListSecondaryContainer.querySelector('.catalog_list-head');
    catalogListSecondaryContainerHeadClose = this.catalogListSecondaryContainerHead.querySelector('.catalog_list-head_close');
    catalogListSecondaryContainerHeadTitle = this.catalogListSecondaryContainerHead.querySelector('.catalog_list-head_title');

    catalogListThird = this.container.querySelector('.js-catalog-list-third');
    catalogListThirdContent = this.catalogListThird.querySelector('.optiscroll-content');
    catalogListThirdContainer = this.container.querySelector('.js-catalog-list-third-container');
    catalogListThirdContainerHead = this.catalogListThirdContainer.querySelector('.catalog_list-head');
    catalogListThirdContainerHeadClose = this.catalogListThirdContainerHead.querySelector('.catalog_list-head_close');
    catalogListThirdContainerHeadSub = this.catalogListThirdContainerHead.querySelector('.catalog_list-head_sub');
    catalogListThirdContainerHeadTitle = this.catalogListThirdContainerHead.querySelector('.catalog_list-head_title');

    catalog = catalogItems;

    //-----------------------------------------------------
    // Bind events
    //-----------------------------------------------------

    bindEvents() {
        for (let index = 0; index < this.buttonCatalog.length; index++) {
            this.buttonCatalog[index].addEventListener("click", this.handleClickButtonCatalog);
        }

        this.buttonClose.addEventListener("click", this.handleClickButtonClose);
        this.buttonCloseMobile.addEventListener("click", this.handleClickButtonCloseMobile);

        this.catalogListSecondaryContainerHeadClose.addEventListener("click", this.handleClickSecondaryCatalogListHeadClose);
        this.catalogListThirdContainerHeadClose.addEventListener("click", this.handleClickThirdCatalogListHeadClose);

        window.addEventListener('resize', this.windowResize);
    }

    //-----------------------------------------------------
    // Methods
    //-----------------------------------------------------

    handleClickButtonCatalog = () => {
        const catalogIsActive = this.container.classList.contains('active');

        if ( !catalogIsActive ) {
            this.container.classList.add('active');
            this.headerContainer.classList.add('has-border');

            for (let index = 0; index < this.buttonCatalog.length; index++) {
                this.buttonCatalog[index].classList.add('active');
            }

            for (let index = 0; index < this.catalog.length; index++) {
                this.catalogListMainContent.insertAdjacentHTML('beforeend', this.renderCatalogListItem(this.catalog[index]));
            }

            const listItemNoClick = this.container.querySelectorAll('.js-no-click');

            for (let index = 0; index < listItemNoClick.length; index++) {
                listItemNoClick[index].addEventListener("click", this.handleNoClick);
            }

            const catalogListMain = this.catalogListMainContent.querySelectorAll('.catalog_list-item');

            for (let index = 0; index < catalogListMain.length; index++) {
                catalogListMain[index].addEventListener("mouseenter", () => { this.handleMouseEnterMain(index) });
            }

            for (let index = 0; index < catalogListMain.length; index++) {
                catalogListMain[index].addEventListener("click", () => { this.handleClickCatalogListItemMain(this.catalog[index]) });
            }
        }
    };

    handleClickButtonClose = () => {
        this.container.classList.remove('active');
        this.headerContainer.classList.remove('has-border');

        const catalogListItemsMain = this.catalogListMainContent.querySelectorAll('.catalog_list-item');
        const catalogListItemsSecondary = this.catalogListSecondaryContent.querySelectorAll('.catalog_list-item');
        const catalogListItemsThird =  this.catalogListThirdContent.querySelectorAll('.catalog_list-item');

        for (let index = 0; index < catalogListItemsMain.length; index++) {
            catalogListItemsMain[index].remove();
        }
        for (let index = 0; index < catalogListItemsSecondary.length; index++) {
            catalogListItemsSecondary[index].remove();
        }
        for (let index = 0; index < catalogListItemsThird.length; index++) {
            catalogListItemsThird[index].remove();
        }

        for (let index = 0; index < this.buttonCatalog.length; index++) {
            this.buttonCatalog[index].classList.remove('active');
        }
    };

    handleClickButtonCloseMobile = () => {
        this.handleClickButtonClose();

        this.catalogListSecondaryContainerHeadTitle.innerText = 'Выберите каталог';
        this.catalogListMainContainer.removeAttribute('style');
        this.catalogListSecondaryContainer.removeAttribute('style');
        this.catalogListThirdContainer.removeAttribute('style');
    };

    handleMouseEnterMain = (itemIndex) => {
        const hasCategories = Boolean(this.catalog[itemIndex].categories);

        const catalogListItemsSecondary = this.catalogListSecondaryContent.querySelectorAll('.catalog_list-item');
        const catalogListItemsThird =  this.catalogListThirdContent.querySelectorAll('.catalog_list-item');
        for (let index = 0; index < catalogListItemsSecondary.length; index++) {
            catalogListItemsSecondary[index].remove();
        }
        for (let index = 0; index < catalogListItemsThird.length; index++) {
            catalogListItemsThird[index].remove();
        }

        if ( hasCategories ) {
            for (let index = 0; index < this.catalog[itemIndex].categories.length; index++) {
                this.catalogListSecondaryContent.insertAdjacentHTML('beforeend', this.renderCatalogListItem(this.catalog[itemIndex].categories[index]));
            }

            const listItemNoClick = this.container.querySelectorAll('.js-no-click');

            for (let index = 0; index < listItemNoClick.length; index++) {
                listItemNoClick[index].addEventListener("click", this.handleNoClick);
            }

            const catalogListSecondary = this.catalogListSecondaryContent.querySelectorAll('.catalog_list-item');

            for (let index = 0; index < catalogListSecondary.length; index++) {
                catalogListSecondary[index].addEventListener("mouseenter", () => { this.handleMouseEnterSecondary(this.catalog[itemIndex].categories[index]) });
            }

            for (let index = 0; index < catalogListSecondary.length; index++) {
                catalogListSecondary[index].addEventListener("click", () => { this.handleClickCatalogListItemSecondary(this.catalog[itemIndex].categories[index]) });
            }
        }
    };

    handleClickCatalogListItemMain = ({title}) => {
        const windowWidth = window.innerWidth;

        this.catalogListSecondaryContainerHeadTitle.innerText = title;
        this.catalogListThirdContainerHeadSub.innerText = title;

        if ( windowWidth > 540 && windowWidth < 1000 ) {
            this.catalogListSecondaryContainer.style.right = '0%';
            this.catalogListThirdContainer.style.right = '-50%';
        }

        if ( windowWidth < 540 ) {
            this.catalogListMainContainer.style.left = '-100%';
            this.catalogListSecondaryContainer.style.right = '0%';
        }
    };

    handleClickCatalogListItemSecondary = ({title}) => {
        const windowWidth = window.innerWidth;

        this.catalogListThirdContainerHeadTitle.innerText = title;

        if ( windowWidth > 540 && windowWidth < 1000 ) {
            this.catalogListSecondaryContainer.style.right = '50%';
            this.catalogListThirdContainer.style.right = '0%';
        }

        if ( windowWidth < 540 ) {
            this.catalogListSecondaryContainer.style.right = '100%';
            this.catalogListThirdContainer.style.right = '0%';
        }
    };

    handleClickSecondaryCatalogListHeadClose = () => {
        const windowWidth = window.innerWidth;

        if ( windowWidth < 540 ) {
            this.catalogListMainContainer.style.left = '0%';
            this.catalogListSecondaryContainer.style.right = '-100%';
        }
    };

    handleClickThirdCatalogListHeadClose = () => {
        const windowWidth = window.innerWidth;

        if ( windowWidth > 540 && windowWidth < 1000 ) {
            this.catalogListSecondaryContainer.style.right = '0%';
            this.catalogListThirdContainer.style.right = '-50%';
        }

        if ( windowWidth < 540 ) {
            this.catalogListSecondaryContainer.style.right = '0%';
            this.catalogListThirdContainer.style.right = '-100%';
        }
    };

    windowResize = () => {
        const windowWidth = window.innerWidth;

        if ( windowWidth > 540 && windowWidth < 1000 ) {
            this.catalogListMainContainer.style.left = '0%';
        }

        if ( windowWidth > 1000 ) {
            this.catalogListMainContainer.removeAttribute('style');
            this.catalogListSecondaryContainer.removeAttribute('style');
            this.catalogListThirdContainer.removeAttribute('style');
        }
    };

    handleMouseEnterSecondary = (catalog) => {
        const hasCategories = Boolean(catalog.categories);
        const catalogListItemsThird =  this.catalogListThirdContent.querySelectorAll('.catalog_list-item');

        for (let index = 0; index < catalogListItemsThird.length; index++) {
            catalogListItemsThird[index].remove();
        }

        if ( hasCategories ) {
            for (let index = 0; index < catalog.categories.length; index++) {
                this.catalogListThirdContent.insertAdjacentHTML('afterbegin', this.renderCatalogListItem(catalog.categories[index]));
            }
        }
    };

    renderCatalogListItem = (catalog) => {
        const hasCategories = Boolean(catalog.categories);
        const hasIcon = Boolean(catalog.icon);

        return(`<a href="${catalog.url ?? '/'}" class="catalog_list-item ${hasCategories ? 'js-no-click' : ''}">
                    ${hasIcon ? this.renderIcon(catalog.icon) : ''}

                    <div class="catalog_list-item_caption">
                        ${catalog.title}
                    </div>
                    
                    ${hasCategories ? this.renderArrow() : ''}
                </a>`)
    };

    renderIcon = (url) => {
        return(`<div>
                    <img src="${url}" alt="" draggable="false" />
                </div>`)
    };

    renderArrow = () => {
        return(`<div class="catalog_list-item_arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M8 5.00012L13 10.0001L8 15.0001" stroke="#8285A5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>`)
    };

    handleNoClick = (event) => {
        event.preventDefault();
    };
}

new AppCatalog();
