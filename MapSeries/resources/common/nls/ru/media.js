define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Медиа",
      "lblSelect2": "Ресурсы",
      "lblMap": "Карта",
      "lblImage": "Изображение",
      "lblVideo": "Видео",
      "lblExternal": "Веб-страница",
      "disabled": "Функция была отключена администратором",
      "url": "Чтобы вручную ввести веб-адрес изображения",
      "userLookup": "Загрузить альбомы",
      "notImplemented": "Еще не реализовано.",
      "noData": "Общедоступных альбомов не найдено"
    },
    "imageSelector": {
      "lblStep1": "Выберите услугу",
      "lblStep2": "Выберите ваши средства массовой информации",
      "lblStep3": "Настроить"
    },
    "imageSelectorHome": {
      "explain": "Загрузка изображения из социальных средств массовой информации,<br>или прямо из URL-адреса"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Имя пользователя",
      "signInMsg2": "Пользователь не найден",
      "loadingFailed": "Загрузка не удалась"
    },
    "imageSelectorFacebook": {
      "leftHeader": "Пользователь Facebook",
      "rightHeader": "Страница Facebook",
      "pageExplain": "Страница Facebook - это публичный продукт, как <b>esrigis</b>. Вы можете использовать имя страницы, расположенное после первой косой черты '/' в URL-адресе страницы.",
      "pageInputLbl": "Имя страницы",
      "lookupMsgError": "Страница не найдена",
      "warning": "Ж_Facebook support has been discontinued, ${learn}________________Я.",
      "learn": "Ж_learn more____Я"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "Ж_Email or Picasa id______Я",
      "signInMsg2": "Учетная запись не найдена",
      "howToFind": "Ж_How to find a Picasa id________Я",
      "howToFind2": "Ж_Copy digits between the first and second '/' of any Picasa page____________________Я"
    },
    "videoSelectorCommon": {
      "check": "Проверить",
      "notFound": "Видео не найдено",
      "found": "Видео найдено",
      "select": "Выбрать это видео"
    },
    "videoSelectorHome": {
      "other": "Другие"
    },
    "videoSelectorYoutube": {
      "url": "URL видео на Youtube",
      "pageInputLbl": "Имя пользователя",
      "lookupMsgError": "Пользователь не найден",
      "howToFind": "Как найти имя пользователя YouTube",
      "howToFind2": "Имя пользователя отображается под видео",
      "found": "Найдено",
      "noData": "Общедоступных видео не найдено",
      "videoNotChecked": "Это видео не было проверено на YouTube, но его адрес выглядит пригодным.",
      "checkFailedAPI": "Проверка на YouTube не удалась, проверьте ключ YouTube API."
    },
    "videoSelectorVimeo": {
      "url": "URL видео на Vimeo"
    },
    "videoSelectorOther": {
      "explain1": "История не может проигрывать необработанное видео (например, формата avi, mpeg), но проигрывает размещенные видео-файлы, которые содержат встроенные видео-плейеры (YouTube или Vimeo).",
      "explain2": "Большинство сервисов для размещения видео-роликов позволяют использовать эту функцию. Вам необходимо найти соответствующую опцию, скопировать код и использовать в %WEBPAGE%.",
      "explain3": "Или вы можете разместить видео самостоятельно, затем создать страницу HTML, которая использует видео-плейер, например %EXAMPLE% и разместить ссылку на эту страницу на %WEBPAGE%.",
      "webpage": "Функция веб-страницы"
    },
    "webpageSelectorHome": {
      "lblUrl": "URL веб-страницы",
      "lblEmbed": "Встроенный код",
      "lblOR": "ИЛИ",
      "lblError1": "Ошибка, очистите одно из двух входных полей.",
      "lblError2": "Внедренный код может содержать только один %IFRAMETAG%",
      "configure": "Настроить"
    },
    "mediaConfigure": {
      "lblURL": "URL-адрес",
      "lblURLPH": "URL-адрес изображения должен начинаться с http:// и заканчиваться .jpg или .png",
      "lblURLError": "Возможно изображение некорректно. Укажите прямую ссылку на файл изображения (URL скорей всего будет заканчиваться на .jpg или .png). Ссылка на веб-страницу, содержащую изображение, может не работать.",
      "lblURLCheck": "Проверка изображения...",
      "lblLabel": "Заголовок изображения",
      "lblLabel1": "Заголовок",
      "lblLabel2": "Наведите курсор на текст",
      "lblLabel3": "Нет",
      "lblLabelPH": "Введите текст...",
      "lblMaximize": "Добавить кнопку увеличения размера до максимального в угол изображения",
      "lblMaximizeHelp": "Рекомендуется только для фотографий высокого качества",
      "lblPosition": "Положение",
      "lblPosition1": "По центру",
      "lblPosition2": "Заливка",
      "lblPosition3": "Разместить",
      "lblPosition4": "Растяжка",
      "lblPosition5": "Настраиваемый",
      "tooltipDimension": "Значение можно задать в 'px' или '%'",
      "tooltipDimension2": "Значение можно задать в 'px'",
      "lblPosition2Explain": "(может быть урезано)",
      "lblPosition3Explain": "(не будет урезаться)",
      "lblPosition3Explain2": "(ширина всегда будет соответствовать панели)",
      "lblPosition4Explain": "(может исказиться)",
      "unloadLbl": "Выгрузить, когда читатель уйдет",
      "unloadHelp": "Если на веб-странице есть аудио или видео медиа, оставьте эту опцию включенной, чтобы остановить проигрывание ресурса при уходе читателя. Отключите ее, например, чтобы саундтрек проигрывался, пока читатель перемещается по истории.<br /> Если веб-страница является приложением, отключите эту опцию, чтобы приложение не перезагружалось при возврате читателя в этот раздел.",
      "embedProtocolLabel": "Ж_Load page over a secure connection (HTTPS)______________Я",
      "embedProtocolWarning1": "Ж_Your story is configured to load over a secure connection (https), so web page show in the story must also use a secure connection. If the page does not load it may be because it is not available over a secure connection or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab________________________________________________________________________________________________________________Я.",
      "embedProtocolWarning2": "Ж_Your story is configured to load over an insecure connection (http), so you can choose to load this page over a secure (recommended) or insecure connection. If the page does not load, it may be because it does not support the connection type you selected or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab__________________________________________________________________________________________________________________________Я."
    },
    "editorActionGeocode": {
      "lblTitle": "Найдите адрес или место",
      "mapMarkerExplain": "При нажатии на ссылку пользователь увидит маркер карты"
    },
    "editorActionMedia": {
      "lblTitle": "Изменить ресурсы основной площадки"
    },
    "editorInlineMedia": {
      "lblTitle": "Вставить изображение, видео или веб-страницу"
    }
  }
});