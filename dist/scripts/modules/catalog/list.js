const catalogItems = [
    {
        title: 'Актуальные',
        icon: '/images/icons/actual.svg',
        categories: [
            {
                title: 'Актуальные 1',
                url: '/actual'
            },
            {
                title: 'Актуальные 2',
                url: 'actual-2'
            }
        ]
    },
    {
        title: 'Акции',
        icon: '/images/icons/stock.svg',
        categories: [
            {
                title: 'Акции 1',
                url: 'stock-1'
            },
            {
                title: 'Акции 2',
                url: 'stock-2'
            },
            {
                title: 'Акции 3',
                url: 'stock-3'
            }
        ]
    },
    {
        title: 'Новогодние товары',
        categories: [
            {
                title: 'Все товары категории',
                url: '/all-goods-categories'
            },
            {
                title: 'Гирлянды и освещение',
                categories: [
                    {
                        title: 'Гирлянды для дома',
                        url: '/for-home'
                    },
                    {
                        title: 'Гирлянды уличные',
                        url: '/for-street'
                    },
                    {
                        title: 'Гирлянды на батарейках, USB',
                        url: '/on-lion-usb'
                    },
                    {
                        title: 'Верхушки с подсветкой',
                        url: '/lights'
                    },
                    {
                        title: 'Световые приборы',
                        url: '/lights-boxes'
                    },
                    {
                        title: 'Фигуры световые',
                        url: '/figure-lights'
                    },
                    {
                        title: 'Удлинители для гирлянд',
                        url: '/for-garland'
                    },
                    {
                        title: 'Ленты светодиодные',
                        url: '/led-strips'
                    },
                ]
            },
            {
                title: 'Ёлки искусственные',
                categories: [
                    {
                        title: 'Ёлки искусственные 1',
                        url: 'elki-iskusstvennye-1'
                    },
                    {
                        title: 'Ёлки искусственные 2',
                        url: 'elki-iskusstvennye-2'
                    }
                ]
            },
            {
                title: 'Украшения для ёлки',
                categories: [
                    {
                        title: 'Украшения для ёлки 1',
                        url: 'ukrasheniya-for-eolki-1'
                    },
                    {
                        title: 'Украшения для ёлки 2',
                        url: 'ukrasheniya-for-eolki-2'
                    }
                ]
            },
            {
                title: 'Сувениры новогодние',
                categories: [
                    {
                        title: 'Сувениры новогодние 1',
                        url: 'suveniry-new-year-1'
                    },
                    {
                        title: 'Сувениры новогодние 2',
                        url: 'suveniry-new-year-2'
                    }
                ]
            },
            {
                title: 'Посуда новогодняя',
                categories: [
                    {
                        title: 'Посуда новогодняя 1',
                        url: 'posuda-novogodnaya-1'
                    },
                    {
                        title: 'Посуда новогодняя 2',
                        url: 'posuda-novogodnaya-2'
                    }
                ]
            },
            {
                title: 'Текстиль новогодний',
                categories: [
                    {
                        title: 'Текстиль новогодний 1',
                        url: 'textstyle-1'
                    }
                ]
            },
            {
                title: 'Карнавальные товары',
                categories: [
                    {
                        title: 'Карнавальные товары 1',
                        url: 'karnavals-goods-1'
                    },
                    {
                        title: 'Карнавальные товары 2',
                        url: 'karnavals-goods-2'
                    },
                    {
                        title: 'Карнавальные товары 3',
                        url: 'karnavals-goods-3'
                    },
                ]
            },
            {
                title: 'Игрушки новогодние',
                url: '/toys-new-years'
            },
            {
                title: 'Галантерея новогодняя',
                categories: [
                    {
                        title: 'Галантерея новогодняя 1',
                        url: 'galantereya-new-year-1'
                    },
                    {
                        title: 'Галантерея новогодняя 2',
                        url: 'galantereya-new-year-2'
                    }
                ]
            },
            {
                title: 'Упаковка новогодняя',
                categories: [
                    {
                        title: 'Упаковка новогодняя 1',
                        url: 'upakovka-new-year-1'
                    },
                    {
                        title: 'Упаковка новогодняя 2',
                        url: 'upakovka-new-year-1'
                    }
                ]
            },
            {
                title: 'Новогодние книжки',
                url: '/new-year-books'
            },
            {
                title: 'Канцтовары новогодние',
                categories: [
                    {
                        title: 'Канцтовары новогодние 1',
                        url: 'kanstovary-new-year-1'
                    }
                ]
            },
            {
                title: 'Атрибуты праздника',
                categories: [
                    {
                        title: 'Атрибуты праздника 1',
                        url: 'atributes-prazdnika-1'
                    },
                    {
                        title: 'Атрибуты праздника 2',
                        url: 'atributes-prazdnika-2'
                    }
                ]
            },
            {
                title: 'Одежда и обувь новогодние',
                categories: [
                    {
                        title: 'Одежда и обувь новогодние 1',
                        url: 'dress-shoos-new-year-1'
                    },
                    {
                        title: 'Одежда и обувь новогодние 2',
                        url: 'dress-shoos-new-year-2'
                    }
                ]
            },
            {
                title: 'Товары для дома новогодние',
                url: '/goods-new-years'
            },
            {
                title: 'Открытки новогодние',
                url: '/postcard-new-years'
            },
            {
                title: 'Предыдущие коллекции',
                categories: [
                    {
                        title: 'Предыдущие коллекции 1',
                        url: 'predydushie-kolleksuy-1'
                    },
                    {
                        title: 'Предыдущие коллекции 2',
                        url: 'predydushie-kolleksuy-2'
                    },
                    {
                        title: 'Предыдущие коллекции 3',
                        url: 'predydushie-kolleksuy-3'
                    },
                    {
                        title: 'Предыдущие коллекции 4',
                        url: 'predydushie-kolleksuy-4'
                    }
                ]
            },
        ]
    },
    {
        title: 'Галантерея и аксессуары',
        categories: [
            {
                title: 'Галантерея и аксессуары 1',
                url: 'galantereya-1'
            },
            {
                title: 'Галантерея и аксессуары 2',
                url: 'galantereya-2'
            }
        ]
    },
    {
        title: 'Хозтовары',
        categories: [
            {
                title: 'Хозтовары 1',
                url: 'hoztovar-1'
            },
            {
                title: 'Хозтовары 2',
                url: 'hoztovar-2'
            }
        ]
    },
    {
        title: 'Праздники и подарки',
        categories: [
            {
                title: 'Праздники и подарки 1',
                url: 'prazdniki-podarki-1'
            },
            {
                title: 'Праздники и подарки 2',
                url: 'prazdniki-podarki-2'
            }
        ]
    },
    {
        title: 'Интерьерные товары для дома',
        categories: [
            {
                title: 'Интерьерные товары для дома 1',
                url: 'interesting-goods-for-home-1'
            },
            {
                title: 'Интерьерные товары для дома 2',
                url: 'interesting-goods-for-home-2'
            }
        ]
    },
    {
        title: 'Домашний текстиль',
        categories: [
            {
                title: 'Домашний текстиль 1',
                url: 'home-texstyle-1'
            },
            {
                title: 'Домашний текстиль 2',
                url: 'home-texstyle-2'
            }
        ]
    },
    {
        title: 'Творчество',
        categories: [
            {
                title: 'Творчество 1',
                url: 'tvorchestvo-1'
            },
            {
                title: 'Творчество 2',
                url: 'tvorchestvo-2'
            }
        ]
    },
    {
        title: 'Туризм и активный отдых',
        categories: [
            {
                title: 'Туризм и активный отдых 1',
                url: 'turiz-i-activnuy-otdyh-1'
            },
            {
                title: 'Туризм и активный отдых 2',
                url: 'turiz-i-activnuy-otdyh-2'
            }
        ]
    },
    {
        title: 'Товары для рассады',
        categories: [
            {
                title: 'Товары для рассады 1',
                url: 'goods-for-rassada-1'
            },
            {
                title: 'Товары для рассады 2',
                url: 'goods-for-rassada-2'
            }
        ]
    },
    {
        title: 'Игрушки, товары для детей',
        categories: [
            {
                title: 'Игрушки, товары для детей 1',
                url: 'toys-goods-for-children-1'
            },
            {
                title: 'Игрушки, товары для детей 2',
                url: 'toys-goods-for-children-2'
            }
        ]
    },
    {
        title: 'Пикник',
        categories: [
            {
                title: 'Пикник 1',
                url: 'piknik-1'
            },
            {
                title: 'Пикник 2',
                url: 'piknik-2'
            }
        ]
    },
    {
        title: 'Спортивные товары',
        categories: [
            {
                title: 'Спортивные товары 1',
                url: 'sport-goods-1'
            },
            {
                title: 'Спортивные товары 2',
                url: 'sport-goods-2'
            }
        ]
    },
    {
        title: 'Товары для животных',
        categories: [
            {
                title: 'Товары для животных 1',
                url: 'goods-for-pets-1'
            },
            {
                title: 'Товары для животных 2',
                url: 'goods-for-pets-2'
            }
        ]
    },
    {
        title: 'Интерьерное освещение',
        categories: [
            {
                title: 'Интерьерное освещение 1',
                url: 'interesting-lights-1'
            },
            {
                title: 'Интерьерное освещение 2',
                url: 'interesting-lights-2'
            }
        ]
    },
    {
        title: 'Одежда, обувь, головные уборы',
        categories: [
            {
                title: 'Одежда, обувь, головные уборы 1',
                url: 'dress-shoos-head-1'
            },
            {
                title: 'Одежда, обувь, головные уборы 2',
                url: 'dress-shoos-head-2'
            }
        ]
    },
    {
        title: 'Снегоуборочный инвентарь',
        categories: [
            {
                title: 'Снегоуборочный инвентарь 1',
                url: 'snow-inventart-1'
            },
            {
                title: 'Снегоуборочный инвентарь 2',
                url: 'snow-inventart-2'
            }
        ]
    },
    {
        title: 'Бассейны и аксессуары',
        categories: [
            {
                title: 'Бассейны и аксессуары 1',
                url: 'basseyn-i-aksessuary-1'
            },
            {
                title: 'Бассейны и аксессуары 2',
                url: 'basseyn-i-aksessuary-2'
            }
        ]
    },
    {
        title: 'Средства гигиены и бытовая химия',
        categories: [
            {
                title: 'Средства гигиены и бытовая химия 1',
                url: 'sredstva-gigieny-1'
            },
            {
                title: 'Средства гигиены и бытовая химия 2',
                url: 'sredstva-gigieny-2'
            }
        ]
    },
    {
        title: 'Товары для бани и сауны',
        categories: [
            {
                title: 'Товары для бани и сауны 1',
                url: 'goods-for-bany-i-sauny-1'
            },
            {
                title: 'Товары для бани и сауны 2',
                url: 'goods-for-bany-i-sauny-2'
            }
        ]
    },
    {
        title: 'Строительство и ремонт',
        categories: [
            {
                title: 'Строительство и ремонт 1',
                url: 'stroitelstvo-remont-1'
            },
            {
                title: 'Строительство и ремонт 2',
                url: 'stroitelstvo-remont-2'
            }
        ]
    },
    {
        title: 'Автотовары',
        categories: [
            {
                title: 'Автотовары 1',
                url: 'avtotovary-1'
            },
            {
                title: 'Автотовары 2',
                url: 'avtotovary-2'
            }
        ]
    },
];
