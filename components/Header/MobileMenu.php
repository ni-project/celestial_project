<?php

$dataMobileMenu = [
    [
        'title' => 'О компании',
        'items' => [
            'О нас' => '/',
            'Новости' => '/',
            'Поставщикам' => '/',
            'Отзывы' => '/',
            'Вакансии' => '/',
            'Реквизиты' => '/',
            'Контакты' => '/'
        ]
    ],
    [
        'title' => 'Покупателям',
        'items' => [
            'Заключение договора' => '/',
            'Доставка' => '/',
            'Оплата' => '/',
            'Получение товара' => '/',
            'Возврат товара' => '/',
            'Магазины' => '/'
        ]
    ]
];

$dataSocialButtons = [
    '/images/icons/sprite.svg#vk' => '/',
    '/images/icons/sprite.svg#ok' => '/',
    '/images/icons/sprite.svg#tg' => '/',
    '/images/icons/sprite.svg#wa' => '/'
]

?>

<div class="mobile-menu js-mobile-menu">
    <div class="mobile-menu_close js-mobile-menu-close"></div>

    <div class="mobile-menu_container">
        <a href="#" class="mobile-menu_button-location js-no-click">
            <div class="location">
                <svg width="24" height="24">
                    <use href="/images/icons/sprite.svg#city-marker"></use>
                </svg>

                <div class="location_name">
                    Екатеринбург
                </div>
            </div>
        </a>

        <a href="#" class="mobile-menu_button-catalog js-button-catalog">
            <span class="mobile-menu_button-catalog_caption">
                Каталог товаров
            </span>

            <img src="/images/button-catalog-background.png" alt="" draggable="false" />
        </a>

        <div class="mobile-menu_navigation">
            <?php foreach ($dataMobileMenu as $mobileMenu) { ?>
                <nav>
                    <div class="mobile-menu_navigation-title">
                        <?= $mobileMenu['title'] ?>
                    </div>

                    <ul>
                        <?php foreach ($mobileMenu['items'] as $caption => $url) { ?>
                            <li>
                                <a href="<?= $url; ?>">
                                    <?= $caption; ?>
                                </a>
                            </li>
                        <?php } ?>
                    </ul>
                </nav>
            <?php } ?>
        </div>

        <div class="mobile-menu_phones">
            <a href="tel:88043338611">8 804 333-86-11</a>
            <a href="tel:83433102266">8 (343) 310-22-66</a>
        </div>

        <div class="mobile-menu_address">
            Екатеринбург, ул. Черняховского, 100
        </div>

        <div class="mobile-menu_social">
            <?php foreach ($dataSocialButtons as $icon => $url) { ?>
                <a href="<?= $url ?>">
                    <svg width="24" height="24">
                        <use href="<?= $icon ?>"></use>
                    </svg>
                </a>
            <?php } ?>
        </div>
    </div>
</div>
