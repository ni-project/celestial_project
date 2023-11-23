
<div class="modal modal_sign-in js-modal">
    <div class="modal_window">

        <div class="modal_wrapper">
            <div class="modal_head">
                <div class="modal_caption">
                    Вход
                </div>

                <div class="modal_close js-modal-close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 19L12 12L19 19M19 5L11.9987 12L5 5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>

            <div class="modal_body">
                <div class="modal_body-caption">
                    Вход через E-mail:
                </div>

                <form action="/" method="post" class="form_container">
                    <div class="form-group">
                        <div class="form-input js-form-input">
                            <label>
                                <input type="email" name="" />
                                <div class="form-input_placeholder">E-mail</div>
                            </label>
                        </div>

                        <div class="form-input js-form-input">
                            <div class="form-input_icon icon-password js-form-icon-password">
                                <svg width="24" height="24">
                                    <use href="/images/icons/sprite.svg#password"></use>
                                </svg>
                            </div>

                            <label>
                                <input type="password" name="" />
                                <div class="form-input_placeholder">Пароль</div>
                            </label>
                        </div>
                    </div>

                    <div class="form_controls">
                        <button class="form-button">
                            Войти
                        </button>

                        <a href="#" class="link">
                            Забыли пароль?
                        </a>
                    </div>
                </form>
            </div>

            <div class="modal_footer">
                <span class="text-secondary">У вас нет аккаунта?</span> <a href="#" class="link">Зарегистрируйтесь</a>
            </div>
        </div>

    </div>
</div>
