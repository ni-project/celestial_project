
class AppCommon {
    constructor() {
        this.bindEvents()
    }

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------

    container = document;
    noClick = this.container.querySelectorAll('.js-no-click');

    catalogContainer = this.container.querySelector('.js-catalog');
    catalogListItemScrolls = this.catalogContainer.querySelectorAll('.optiscroll');

    catalogListItemScroll = [];

    //-----------------------------------------------------
    // Bind events
    //-----------------------------------------------------

    bindEvents() {
        for (let index = 0; index < this.noClick.length; index++) {
            this.noClick[index].addEventListener("click", this.handleNoClick);
        }

        for (let index = 0; index < this.catalogListItemScrolls.length; index++) {
            this.catalogListItemScroll[index] = new Optiscroll(this.catalogListItemScrolls[index], {
                forceScrollbars: true
            });
        }

        this.initSliders([
            '#ads_slider',
            '.ads_goods'
        ]);
    }

    //-----------------------------------------------------
    // Methods
    //-----------------------------------------------------

    initSliders = (sliders) => {
        for ( let index = 0; index < sliders.length; index++ ) {
            const sliderSpeed = sliders[index] === '#ads_slider' ? 800 : 400;

            new Swiper(sliders[index], {
                loop: true,
                speed: sliderSpeed,
                autoplay: {
                    delay: 8000,
                },
                grabCursor: true,
                longSwipesMs: 500,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                }
            });
        }
    };

    handleNoClick = (event) => {
        event.preventDefault();
    };
}

new AppCommon();
