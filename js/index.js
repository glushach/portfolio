const i18Obj = {
    'en': {
        'skills': 'Skills',
        'portfolio': 'Portfolio',
        'video': 'Video',
        'price': 'Price',
        'contacts': 'Contacts',
        'hero-title': 'Alexa Rise',
        'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
        'hire': 'Hire me',
        'skill-title-1': 'Digital photography',
        'skill-text-1': 'High-quality photos in the studio and on the nature',
        'skill-title-2': 'Video shooting',
        'skill-text-2': 'Capture your moments so that they always stay with you',
        'skill-title-3': 'Rotouch',
        'skill-text-3': 'I strive to make photography surpass reality',
        'skill-title-4': 'Audio',
        'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
        'winter': 'Winter',
        'spring': 'Spring',
        'summer': 'Summer',
        'autumn': 'Autumn',

        'price-description-1-span-1': 'One location',
        'price-description-1-span-2': '120 photos in color',
        'price-description-1-span-3': '12 photos in retouch',
        'price-description-1-span-4': 'Readiness 2-3 weeks',
        'price-description-1-span-5': 'Make up, visage',
        'price-description-2-span-1': 'One or two locations',
        'price-description-2-span-2': '200 photos in color',
        'price-description-2-span-3': '20 photos in retouch',
        'price-description-2-span-4': 'Readiness 1-2 weeks',
        'price-description-2-span-5': 'Make up, visage',
        'price-description-3-span-1': 'Three locations or more',
        'price-description-3-span-2': '300 photos in color',
        'price-description-3-span-3': '50 photos in retouch',
        'price-description-3-span-4': 'Readiness 1 week',
        'price-description-3-span-5': 'Make up, visage, hairstyle',
        'order': 'Order shooting',
        'contact-me': 'Contact me',
        'send-message': 'Send message'
    },
    'ru': {
        'skills': 'Навыки',
        'portfolio': 'Портфолио',
        'video': 'Видео',
        'price': 'Цены',
        'contacts': 'Контакты',
        'hero-title': 'Алекса Райс',
        'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
        'hire': 'Пригласить',
        'skill-title-1': 'Фотография',
        'skill-text-1': 'Высококачественные фото в студии и на природе',
        'skill-title-2': 'Видеосъемка',
        'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
        'skill-title-3': 'Ретушь',
        'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
        'skill-title-4': 'Звук',
        'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
        'winter': 'Зима',
        'spring': 'Весна',
        'summer': 'Лето',
        'autumn': 'Осень',

        'price-description-1-span-1': 'Одна локация',
        'price-description-1-span-2': '120 цветных фото',
        'price-description-1-span-3': '12 отретушированных фото',
        'price-description-1-span-4': 'Готовность через 2-3 недели',
        'price-description-1-span-5': 'Макияж, визаж',
        'price-description-2-span-1': 'Одна-две локации',
        'price-description-2-span-2': '200 цветных фото',
        'price-description-2-span-3': '20 отретушированных фото',
        'price-description-2-span-4': 'Готовность через 1-2 недели',
        'price-description-2-span-5': 'Макияж, визаж',
        'price-description-3-span-1': 'Три локации и больше',
        'price-description-3-span-2': '300 цветных фото',
        'price-description-3-span-3': '50 отретушированных фото',
        'price-description-3-span-4': 'Готовность через 1 неделю',
        'price-description-3-span-5': 'Макияж, визаж, прическа',
        'order': 'Заказать съемку',
        'contact-me': 'Свяжитесь со мной',
        'send-message': 'Отправить'
    }
};

// +++++++++++ PLAY VIDEO +++++++++++
(function () {
    const video = document.querySelector('video');
    const btn = document.querySelector('.video__play');

    btn.addEventListener('click', () => {
        try {
            video.setAttribute('controls', 'controls');
            video.play();
            btn.style.display = 'none'
        } catch (e) {}
    });
}());


// +++++++++++ BURGER MENU +++++++++++
(function () {
    const burger = document.querySelector('.burger');
    const overlay = document.querySelector('.overlay');
    const overlayClose = document.querySelector('.header__navigation-close');
    const menuLinks = document.querySelectorAll('.navigation__link');

    burger.addEventListener('click', () => {
        overlay.classList.add('overlay_active');
    });
    overlayClose.addEventListener('click', () => {
        overlay.classList.remove('overlay_active');
    });

    if (window.innerWidth < 769) {
        menuLinks.forEach(item => {
            item.addEventListener('click', () => {
                overlay.classList.remove('overlay_active');
            });
        });
    }
}());


// +++++++++++ CHANGE CONTENT IN TABS +++++++++++
(function () {
    const portfolioTabs = document.querySelector('.tabs');
    const portfolioBtns = document.querySelectorAll('.tabs button')
    const portfolioImages = document.querySelectorAll('.portfolio__promo img');

    portfolioTabs.addEventListener('click', (evt => {
        portfolioBtns.forEach(btn => {
            btn.classList.remove('btn_tab-active');
        });

        if (evt.target.dataset.season === 'winter') {
            portfolioImages.forEach((img, index) => {
                img.src = `./assets/img/winter/${index + 1}.jpg`;
                img.alt = 'portfolio-winter';
            });
            evt.target.classList.add('btn_tab-active');
        }
        if (evt.target.dataset.season === 'spring') {
            portfolioImages.forEach((img, index) => {
                img.src = `./assets/img/spring/${index + 1}.jpg`;
                img.alt = 'portfolio-spring';
            });
            evt.target.classList.add('btn_tab-active');
        }
        if (evt.target.dataset.season === 'summer') {
            portfolioImages.forEach((img, index) => {
                img.src = `./assets/img/summer/${index + 1}.jpg`;
                img.alt = 'portfolio-summer';
            });
            evt.target.classList.add('btn_tab-active');
        }
        if (evt.target.dataset.season === 'autumn') {
            portfolioImages.forEach((img, index) => {
                img.src = `./assets/img/autumn/${index + 1}.jpg`;
                img.alt = 'portfolio-autumn';
            });
            evt.target.classList.add('btn_tab-active');
        }
    }));
}());


// +++++++++++ CHANGE LANG +++++++++++
(function () {
    if (localStorage.getItem('lang')) {
        const lang = document.querySelector(`.lang-${localStorage.getItem('lang')}`);
        getTranslate(lang);
    }
}());

(function () {
    const en = document.querySelector('.lang-en');
    const ru = document.querySelector('.lang-ru');
    en.addEventListener('click', () => {
        getTranslate(en);
    });
    ru.addEventListener('click', () => {
        getTranslate(ru);
    });
}());

function getTranslate(lang) {
    const langBlock = document.querySelectorAll('.header__lang span');
    const i18 = document.querySelectorAll('[data-i18]');
    const trans = {...i18Obj[lang.textContent]};

    langBlock.forEach(child => {
        child.classList.remove('lang_active');
    });

    lang.classList.add('lang_active');
    i18.forEach(el => {
        if (trans.hasOwnProperty(el.dataset.i18)) {
            el.textContent = trans[el.dataset.i18];
        }
    });
    localStorage.setItem('lang', lang.textContent);
}


// +++++++++++ CHANGE THEME +++++++++++
const moon = [
    'body-black', 'divider', 'skill', 'tab', 'price'
];
const sun = [
    'body-light', 'divider-light', 'skill-light', 'tab-light', 'price-light'
];

const elements = moon.map(el => document.querySelectorAll(`.${el}`));

(function () {
    const theme = document.querySelector('.header__theme');
    if(localStorage.getItem('theme') === 'sun') {
        theme.innerHTML = `
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" data-theme="sun">
                <path d="M22.8375 17.2125C23.95 17.2125 25.0376 17.5424 25.9626 18.1605C26.8876 18.7786 27.6086 19.6571 28.0343 20.6849C28.4601 21.7127 28.5715 22.8437 28.3544 23.9349C28.1374 25.026 27.6016 26.0283 26.815 26.815C26.0283 27.6016 25.026 28.1374 23.9349 28.3544C22.8437 28.5715 21.7127 28.4601 20.6849 28.0343C19.6571 27.6086 18.7786 26.8876 18.1605 25.9626C17.5424 25.0376 17.2125 23.95 17.2125 22.8375C17.2144 21.3462 17.8076 19.9166 18.8621 18.8621C19.9166 17.8076 21.3462 17.2144 22.8375 17.2125ZM22.8375 14.4C21.1687 14.4 19.5374 14.8949 18.1499 15.822C16.7623 16.7491 15.6809 18.0669 15.0423 19.6086C14.4037 21.1504 14.2366 22.8469 14.5621 24.4836C14.8877 26.1203 15.6913 27.6237 16.8713 28.8037C18.0513 29.9837 19.5547 30.7873 21.1914 31.1129C22.8281 31.4384 24.5246 31.2713 26.0664 30.6327C27.6081 29.9941 28.9259 28.9127 29.853 27.5251C30.7802 26.1376 31.275 24.5063 31.275 22.8375C31.275 20.5997 30.3861 18.4536 28.8037 16.8713C27.2214 15.2889 25.0753 14.4 22.8375 14.4Z" fill="white"/>
                <path d="M7.58531 9.58078L9.57375 7.59094L14.5041 12.5213L12.5156 14.5097L7.58531 9.58078Z" fill="white"/>
                <path d="M2.8125 21.1008H9.84375V23.9133H2.8125V21.1008Z" fill="white"/>
                <path d="M7.58531 35.4333L12.5156 30.503L14.5041 32.4928L9.57375 37.4217L7.58531 35.4333Z" fill="white"/>
                <path d="M21.0938 35.1633H23.9062V42.1945H21.0938V35.1633Z" fill="white"/>
                <path d="M30.4973 32.4928L32.4858 30.503L37.4161 35.4333L35.4277 37.4217L30.4973 32.4928Z" fill="white"/>
                <path d="M35.1562 21.1008H42.1875V23.9133H35.1562V21.1008Z" fill="white"/>
                <path d="M30.4973 12.5213L35.4277 7.59094L37.4161 9.58078L32.4858 14.5097L30.4973 12.5213Z" fill="white"/>
                <path d="M21.0938 2.81953H23.9062V9.85078H21.0938V2.81953Z" fill="white"/>
            </svg>
        `;


        elements.forEach((el, idx) => {
            el.forEach(i => {
                i.classList.add(sun[idx]);
            });
        });
        document.querySelector('.btn_tab-active').style.color = '#000000';
    } // конец условия
    theme.addEventListener('click', () => getColorTheme(theme));
}());

function getColorTheme(theme) {
    if (localStorage.getItem('theme') === 'moon') {
        theme.innerHTML = `
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" data-theme="sun">
                <path d="M22.8375 17.2125C23.95 17.2125 25.0376 17.5424 25.9626 18.1605C26.8876 18.7786 27.6086 19.6571 28.0343 20.6849C28.4601 21.7127 28.5715 22.8437 28.3544 23.9349C28.1374 25.026 27.6016 26.0283 26.815 26.815C26.0283 27.6016 25.026 28.1374 23.9349 28.3544C22.8437 28.5715 21.7127 28.4601 20.6849 28.0343C19.6571 27.6086 18.7786 26.8876 18.1605 25.9626C17.5424 25.0376 17.2125 23.95 17.2125 22.8375C17.2144 21.3462 17.8076 19.9166 18.8621 18.8621C19.9166 17.8076 21.3462 17.2144 22.8375 17.2125ZM22.8375 14.4C21.1687 14.4 19.5374 14.8949 18.1499 15.822C16.7623 16.7491 15.6809 18.0669 15.0423 19.6086C14.4037 21.1504 14.2366 22.8469 14.5621 24.4836C14.8877 26.1203 15.6913 27.6237 16.8713 28.8037C18.0513 29.9837 19.5547 30.7873 21.1914 31.1129C22.8281 31.4384 24.5246 31.2713 26.0664 30.6327C27.6081 29.9941 28.9259 28.9127 29.853 27.5251C30.7802 26.1376 31.275 24.5063 31.275 22.8375C31.275 20.5997 30.3861 18.4536 28.8037 16.8713C27.2214 15.2889 25.0753 14.4 22.8375 14.4Z" fill="white"/>
                <path d="M7.58531 9.58078L9.57375 7.59094L14.5041 12.5213L12.5156 14.5097L7.58531 9.58078Z" fill="white"/>
                <path d="M2.8125 21.1008H9.84375V23.9133H2.8125V21.1008Z" fill="white"/>
                <path d="M7.58531 35.4333L12.5156 30.503L14.5041 32.4928L9.57375 37.4217L7.58531 35.4333Z" fill="white"/>
                <path d="M21.0938 35.1633H23.9062V42.1945H21.0938V35.1633Z" fill="white"/>
                <path d="M30.4973 32.4928L32.4858 30.503L37.4161 35.4333L35.4277 37.4217L30.4973 32.4928Z" fill="white"/>
                <path d="M35.1562 21.1008H42.1875V23.9133H35.1562V21.1008Z" fill="white"/>
                <path d="M30.4973 12.5213L35.4277 7.59094L37.4161 9.58078L32.4858 14.5097L30.4973 12.5213Z" fill="white"/>
                <path d="M21.0938 2.81953H23.9062V9.85078H21.0938V2.81953Z" fill="white"/>
            </svg>
        `;

        elements.forEach((el, idx) => {
            el.forEach(i => {
                i.classList.add(sun[idx]);
            });
        });

        localStorage.setItem('theme', 'sun');
    } else {
        theme.innerHTML = `
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-theme="moon">
                <path d="M21.4528 40C15.7066 40 10.315 37.8174 6.27098 33.8545C2.22701 29.8915 5.02421e-07 24.6074 5.02421e-07 18.9761C-0.00085731 15.0913 1.09674 11.2823 3.17098 7.97181C5.24521 4.66132 8.21494 1.97886 11.7505 0.222165C12.1143 0.0404498 12.5246 -0.032245 12.9302 0.0131555C13.3359 0.058556 13.7189 0.220041 14.0315 0.477451C14.344 0.734861 14.5723 1.07679 14.6878 1.46057C14.8033 1.84434 14.8009 2.25294 14.6809 2.63538C13.672 5.82896 13.5728 9.23201 14.3941 12.4768C15.2154 15.7216 16.9259 18.6847 19.3408 21.046C21.0739 22.757 23.136 24.1141 25.4078 25.0388C27.6796 25.9635 30.116 26.4374 32.576 26.433C34.4579 26.4345 36.3292 26.1578 38.1269 25.6125C38.5172 25.4948 38.9342 25.4924 39.3258 25.6056C39.7175 25.7188 40.0665 25.9425 40.3291 26.2488C40.5918 26.5552 40.7566 26.9306 40.8029 27.3282C40.8492 27.7257 40.775 28.1279 40.5895 28.4843C38.7969 31.9492 36.0597 34.8596 32.6817 36.8923C29.3036 38.9251 25.4169 40.0008 21.4528 40ZM11.6763 3.31431C8.93463 4.94908 6.66986 7.24958 5.10105 9.99327C3.53225 12.737 2.71252 15.831 2.72115 18.9761C2.72115 29.0982 11.1241 37.3333 21.4528 37.3333C24.6621 37.3418 27.8193 36.5384 30.619 35.001C33.4187 33.4636 35.7662 31.2441 37.4343 28.5573C35.8413 28.9186 34.2113 29.1007 32.5762 29.1C29.7587 29.1053 26.9682 28.5628 24.3661 27.5041C21.764 26.4453 19.4021 24.8913 17.417 22.9319C14.8382 20.4094 12.9578 17.2845 11.9533 13.8522C10.9489 10.4199 10.8536 6.79329 11.6763 3.31481V3.31431Z" fill="#1C1C1C"/>
            </svg>
        `;

        elements.forEach((el, idx) => {
            el.forEach(i => {
                i.classList.remove(sun[idx]);
            });
        });

        localStorage.setItem('theme', 'moon');
    }

}

console.log(`
Score 85 / 75
- Смена изображений в секции portfolio (25/25):
    - [x] при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio 
    отображаются изображения из папки с соответствующим названием (20)
    - [x] кнопка, по которой кликнули, становится активной т.е. выделяется стилем. 
    Другие кнопки при этом будут неактивными (5)
    
- Перевод страницы на два языка (25/25):
    - [x] при клике по надписи ru англоязычная страница переводится на русский язык (10)
    - [x] при клике по надписи en русскоязычная страница переводится на английский язык (10)
    - [x] надписи en или ru, соответствующие текущему языку страницы, 
    становятся активными т.е. выделяются стилем (5)
    
- Переключение светлой и тёмной темы. На страницу добавлен переключатель при клике по которому (25/25):
    - [x] тёмная тема приложения сменяется светлой (10)
    - [x] светлая тема приложения сменяется тёмной (10)
    - [x] после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид 
    при наведении и клике и при этом остаются видимыми на странице 
    (нет ситуации с белым шрифтом на белом фоне) (5)
    
- Дополнительный функционал (10/10):
    - [x] выбранный пользователем язык отображения страницы и 
    светлая или тёмная тема сохраняются при перезагрузке страницы (5)
    - [x] сложные эффекты для кнопок при наведении (анимация) (5)
`)