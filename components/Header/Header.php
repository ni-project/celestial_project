<?php

$dataHeaderMenu = [
    [
        'title' => 'О компании',
        'url' => '#',
        'items' => [
            'О нас' => '/',
            'Отзывы' => '/',
            'Вакансии' => '/',
            'Реквизиты' => '/',
        ]
    ],
    [
        'title' => 'Покупателям',
        'url' => '#',
        'items' => [
            'Заключение договора' => '/',
            'Доставка' => '/',
            'Оплата' => '/',
            'Получение товара' => '/',
            'Возврат товара' => '/',
            'Магазины' => '/',
        ]
    ],
    [
        'title' => 'Поставщикам',
        'url' => '/',
    ],
    [
        'title' => 'Контакты',
        'url' => '/',
    ]
]

?>

<div class="header">
    <div class="middle-wrap">
        <div class="header_wrapper">
            <a href="#" class="header_logo">
                <img src="/images/logo.svg" alt="" draggable="false" />
            </a>

            <div class="header_content">
                <div class="header_content-desktop">
                    <div class="header_content-top">
                        <a href="#" class="location">
                            <svg width="20" height="20">
                                <use href="/images/icons/sprite.svg#city-marker"></use>
                            </svg>

                            <div class="location_name">
                                Екатеринбург
                            </div>
                        </a>

                        <div class="header_nav js-header-nav-container">
                            <?php foreach ($dataHeaderMenu as $headerMenu) { ?>
                                <?php $hasDropdownItems = isset($headerMenu['items']); ?>

                                <div class="header_nav-item <?= $hasDropdownItems ? 'js-header-nav-item' : '' ?>">
                                    <a href="<?= $headerMenu['url'] ?>" class="header_nav-item_link <?= $hasDropdownItems ? 'js-no-click' : '' ?>">
                                        <span>
                                            <?= $headerMenu['title'] ?>
                                        </span>

                                        <?php if ( $hasDropdownItems ) { ?>
                                            <svg class="header_nav-item_link-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 6.66669L8 10.6667L12 6.66669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        <?php } ?>
                                    </a>

                                    <?php if ( $hasDropdownItems ) { ?>
                                        <div class="header_nav-item_dropdown">
                                            <nav>
                                                <ul>
                                                    <?php foreach ($headerMenu['items'] as $caption => $url) { ?>
                                                        <li>
                                                            <a href="<?= $url ?>">
                                                                <?= $caption ?>
                                                            </a>
                                                        </li>
                                                    <?php } ?>
                                                </ul>
                                            </nav>
                                        </div>

                                        <div class="header_nav-item_substrate js-header-nav-item-dropdown-close"></div>
                                    <?php } ?>
                                </div>
                            <?php } ?>
                        </div>
                    </div>

                    <div class="header_content-bottom">
                        <a href="#" class="button-primary js-button-catalog js-no-click">
                            <div class="button-primary_icon"></div>

                            <div class="button-primary_caption">
                                Каталог товаров
                            </div>
                        </a>

                        <form action="/" class="header_search" method="post">
                            <div class="search">
                                <label>
                                    <svg width="24" height="24" class="search_icon">
                                        <use href="/images/icons/sprite.svg#search"></use>
                                    </svg>

                                    <input type="text" name="search" placeholder="Поиск товаров ..." class="search_control" />
                                </label>
                            </div>
                        </form>

                        <div class="header_controls">
                            <a href="#" class="button-glass">
                                <div class="button-glass_icon">
                                    <svg width="24" height="24">
                                        <use href="/images/icons/sprite.svg#favorites"></use>
                                    </svg>
                                </div>

                                <span>Избранное</span>
                            </a>

                            <a href="#" class="button-glass">
                                <div class="button-glass_icon">
                                    <svg width="24" height="24">
                                        <use href="/images/icons/sprite.svg#cart"></use>
                                    </svg>

                                    <div class="bubble">120</div>
                                </div>

                                <span>Корзина</span>
                            </a>

                            <a href="#" class="button-secondary js-button-auth js-no-click">
                                <div class="button-secondary_caption">
                                    Войти
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="header_content-mobile">
                    <a href="#" class="button-lonely">
                        <svg width="24" height="24">
                            <use href="/images/icons/sprite.svg#marker-blue"></use>
                        </svg>
                    </a>

                    <a href="#" class="button-lonely">
                        <svg width="24" height="24">
                            <use href="/images/icons/sprite.svg#search"></use>
                        </svg>
                    </a>

                    <a href="#" class="button-lonely button-mobile js-no-click js-handle-button-mobile-menu">
                        <div class="button-mobile_hamburger"></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
