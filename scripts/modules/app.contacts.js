
export default class AppContacts {
    constructor() {
        this.bindEvents()
    }

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------

    container = document.querySelector('.js-contacts');
    buttonContactsAddress = this.container.querySelectorAll('.js-handle-contacts-address');
    mapControls = this.container.querySelectorAll('.js-contacts-map-control');
    contactsMapContainer = 'contacts-map';
    addressList = [
        {
            position: [56.748893, 60.742948],
            hint: 'г. Екатеринбург. Черняховского 100',
            description: {
                caption: 'Магазин на Черняховского',
                street: 'улица Черняховского, 100',
                phone: '+7 (999) 012-34-56',
                schedule: 'Ежедневно с 09:00 до 22:00'
            }
        },
        {
            position: [56.865259, 60.667983],
            hint: 'г. Екатеринбург. Блюхера 99',
            description: {
                caption: 'Магазин на Блюхера',
                street: 'улица Блюхера, 99',
                phone: '+7 (999) 012-34-56 (доб. 02)',
                schedule: 'Ежедневно с 10:00 до 21:00'
            }
        }
    ];

    //-----------------------------------------------------
    // Bind events
    //-----------------------------------------------------

    bindEvents() {
        ymaps.ready(() => {
            this.contactsMapInit()
        });
    }

    //-----------------------------------------------------
    // Methods
    //-----------------------------------------------------

    contactsMapInit = () => {
        const mobileModalBalloonContainer = document.querySelector('.js-modal-map-balloon');
        const mobileModalBalloonContent = mobileModalBalloonContainer.querySelector('.modal_wrapper');
        const showMobileModalBalloon = (description) => {
            mobileModalBalloonContainer.classList.add('active');
            mobileModalBalloonContent.innerHTML = this.getBalloonBody(description);
        };
        const movingMapToAddress = (mapPlacemark, address) => {
            // PS: Если увеличивать/приближать масштаб карты, то карта анимируется некрасиво, проблема яндекса, оставляю масштаб без изменения - "11"
            //map.setZoom(11);
            map.panTo(address.position, {
                duration: 800
            }).then(() => {
                mapPlacemark.balloon.open();
            });

            showMobileModalBalloon(address.description);
        };
        const handleClickMapControl = (button) => {
            const buttonMapControl = button.getAttribute('data-map-control');

            switch (buttonMapControl) {
                case 'up':
                    map.setZoom( map.getZoom() + 1 );
                    break;

                case 'down':
                    map.setZoom( map.getZoom() - 1 );
                    break;

                default: break;
            }
        };
        const map = new ymaps.Map(this.contactsMapContainer, {
                center: [56.8100, 60.7000],
                zoom: 11,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            });

        map.behaviors.disable('scrollZoom');

        for ( let index = 0; index < this.addressList.length; index++ ) {
            const address = this.addressList[index];
            const balloonLayout = ymaps.templateLayoutFactory.createClass(this.getBalloonLayout(address), {
                build: function () {
                    balloonLayout.superclass.build.call(this);

                    const  mobileModalBalloonButtonClose = document.querySelectorAll('.js-contacts-map-balloon-close');

                    for ( let index = 0; index < mobileModalBalloonButtonClose.length; index++ ) {
                        mobileModalBalloonButtonClose[index].addEventListener('click', () => {
                            this.events.fire('userclose');

                            mobileModalBalloonContainer.classList.remove('active');
                        });
                    }
                }
            });

            const mapPlace = new ymaps.Placemark(address.position, {
                hintContent: address.hint
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/contacts/marker.png',
                iconImageSize: [48, 54],
                iconImageOffset: [-24, -54],
                balloonLayout: balloonLayout,
            });

            mapPlace.events.add('click', () => showMobileModalBalloon(address.description));

            map.geoObjects.add(mapPlace);

            this.buttonContactsAddress[index].addEventListener('click', () => movingMapToAddress(mapPlace, address));
        }

        for ( let index = 0; index < this.mapControls.length; index++ ) {
            this.mapControls[index].addEventListener('click', function() { handleClickMapControl(this) });
        }
    };

    getBalloonLayout = ({description}) => {
        return `<div class="contacts_map-balloon">${this.getBalloonBody(description)}</div>`;
    };

    getBalloonBody = (description) => {
        return `<div>
                    <div class="contacts_map-balloon_close js-contacts-map-balloon-close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 19L12 12L19 19M19 5L11.9987 12L5 5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>                    
                    </div>

                    <div class="contacts_address-caption">${description.caption}</div>
                    <p>${description.street}</p>
                    <p>${description.phone}</p>
                    <p>${description.schedule}</p>
                      
                    <div class="contacts_map-balloon_build-route">
                        <div class="contacts_map-balloon_build-route_caption">
                            Построить маршрут                    
                        </div>
                                
                        <div class="contacts_map-balloon_build-route_controls">
                            <a href="/" class="button-secondary">
                                <div class="button-secondary_caption">
                                    <svg width="108" height="20">
                                        <use href="/images/icons/sprite.svg#map-button-build-route-yandex-maps"></use>
                                    </svg>
                                </div>
                            </a>     
                            
                            <a href="/" class="button-secondary">
                                <div class="button-secondary_caption">
                                    <svg width="108" height="20">
                                        <use href="/images/icons/sprite.svg#map-button-build-route-google-maps"></use>
                                    </svg>
                                </div>
                            </a>                  
                        </div>
                    </div>
                </div>`
    };
}
