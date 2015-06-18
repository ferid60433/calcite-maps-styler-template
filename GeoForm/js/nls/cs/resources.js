﻿define(
   ({
    map: {
      error: "Nelze vytvořit mapu"
    },
    onlineStatus: {
      offline: "Právě pracujete v režimu offline. Odeslané formuláře se uloží lokálně, dokud nebude navázáno spojení se serverem.",
      reconnecting: "Obnovuje se připojení&hellip;",
      pending: "Po opětovném navázání síťového připojení bude odesláno ${total} neuložených úprav."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "Moje organizace",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Můj obsah",
          favoritesLabel: "Moje oblíbené"
        },
        title: "Výběr webové mapy",
        searchTitle: "Vyhledávání",
        ok: "OK",
        cancel: "Zrušit",
        placeholder: "Zadejte hledaný výraz"
      },
      groupdlg: {
        items: {
          organizationLabel: "Moje organizace",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Můj obsah",
          favoritesLabel: "Moje oblíbené"
        },
        title: "Výběr skupiny",
        searchTitle: "Vyhledávání",
        ok: "OK",
        cancel: "Zrušit",
        placeholder: "Zadejte hledaný výraz"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "Zde se nachází odkaz na formulář GeoForm."
      }
    },
    user: {
      all: "Ř_All__ů",
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "Odsazení v severním směru",
      utm_easting: "Odsazení ve východním směru",
      utm_zone_number: "Číslo zóny",
      selectLayerTabText: "${formSection} Vyberte formulář",
      geoFormGeneralTabText: "${formSection} Zadejte informace",
      locationInformationText: "${formSection} Vyberte umístění",
      submitInformationText: "${formSection} Vyplňte formulář",
      submitInstructions: "Přidejte tyto informace do mapy.",
      myLocationText: "Aktuální umístění",
      locationDescriptionForMoreThanOneOption: "Zadejte polohu pro tento záznam kliknutím/klepnutím na mapu, nebo pomocí jedné z následujících možností.",
      locationDescriptionForOneOption: "Zadejte polohu pro tento záznam kliknutím/klepnutím na mapu, nebo pomocí následující možnosti.",
      locationDescriptionForNoOption: "Zadejte polohu pro tento záznam kliknutím/klepnutím na mapu.",
      addressText: "Vyhledávání",
      geographic: "Zem. šířka/délka",
      locationTabText: "Umístění",
      locationPopupTitle: "Umístění",
      submitButtonText: "Odeslat záznam",
      submitButtonTextLoading: "Odesílání&hellip;",
      formValidationMessageAlertText: "Následující pole jsou povinná:",
      selectLocation: "Vyberte umístění odeslaného obsahu.",
      emptylatitudeAlertMessage: "Zadejte souřadnice ${openLink}zeměpisné šířky${closeLink}.",
      emptylongitudeAlertMessage: "Zadejte souřadnice ${openLink}zeměpisné délky${closeLink}.",
      shareUserTitleMessage: "Děkujeme za váš příspěvek!",
      entrySubmitted: "Váš záznam byl odeslán do mapy.",
      shareThisForm: "Sdílet tento formulář",
      shareUserTextMessage: "Požádejte ostatní o přispění pomocí následujících možností.",
      addAttachmentFailedMessage: "K vrstvě nelze připojit přílohu.",
      addFeatureFailedMessage: "K vrstvě nelze přidat prvek.",
      noLayerConfiguredMessage: "Došlo k chybě při nahrávání nebo hledání editovatelné vrstvy prvků. Aby bylo možné zobrazit formulář a začít sbírat údaje, přidejte do webové mapy editovatelnou vrstvu prvků.",
      placeholderLatitude: "Zeměpisná šířka (Y)",
      placeholderLongitude: "Zeměpisná délka (X)",
      latitude: "Zeměpisná šířka",
      longitude: "Zeměpisná délka",
      findMyLocation: "Najít mou polohu",
      finding: "Vyhledávání polohy&hellip;",
      backToTop: "Zpět na začátek",
      addressSearchText: "Váš příspěvek se objeví zde. Špendlík můžete přetáhnout na správné místo.",
      shareModalFormText: "Odkaz na formulář",
      close: "Zavřít",
      locationNotFound: "Umístění nebylo nalezeno.",
      setLocation: "Nastavit polohu",
      find: "Najít adresu nebo místo",
      attachment: "Příloha",
      toggleDropdown: "Přepnout rozbalovací seznam",
      invalidString: "Ř_Please enter a valid value_________ů.",
      invalidSmallNumber: "Ř_Please enter a valid ${openStrong}integer${closeStrong} value between -32768 and 32767___________________________ů.",
      invalidNumber: "Zadejte platnou ${openStrong}celočíselnou${closeStrong} hodnotu mezi −2147483648 a 2147483647.",
      invalidFloat: "Zadejte platnou hodnotu ${openStrong}s plovoucí desetinnou čárkou${closeStrong}.",
      invalidDouble: "Zadejte platnou ${openStrong}číselnou hodnotu s dvojitou přesností${closeStrong}.",
      invalidLatLong: "Zadejte platné souřadnice zeměpisné šířky a zeměpisné délky.",
      invalidUTM: "Zadejte platné souřadnice souřadnicového systému UTM.",
      invalidUSNG: "Zadejte platné souřadnice souřadnicového systému USNG.",
      invalidMGRS: "Zadejte platné souřadnice souřadnicového systému MGRS.",
      geoformTitleText: "GeoForm",
      domainDefaultText: "Výběr&hellip;",
      applyEditsFailedMessage: "Vaši položku bohužel není možné odeslat. Zkuste to znovu.",
      requiredFields: "Ř_The following field is required. Please provide a valid entry____________________ů.",
      requiredField: "(vyžadováno)",
      error: "Chyba",
      textRangeHintMessage: "${openStrong}Tip:${closeStrong} Minimální hodnota ${minValue} a Maximální hodnota ${maxValue}",
      dateRangeHintMessage: "${openStrong}Tip:${closeStrong} Minimální datum ${minValue} a Maximální datum ${maxValue}",
      remainingCharactersHintMessage: "Počet zbývajících znaků: ${value}",
      mapFullScreen: "Celá obrazovka",
      mapRestore: "Obnovit",
      filterSelectEmptyText: "Výběr",
      invalidLayerMessage: "Vrstva formuláře neexistuje. Nakonfigurujte aplikaci a nastavte tuto vrstvu.",
      selectedLayerText: "Vše",
      fileUploadStatus: "Stav nahrávání souboru",
      uploadingBadge: "&nbsp;Nahrávání&hellip;",
      successBadge: "&nbsp;Nahráno",
      retryBadge: "Zkusit znovu",
      errorBadge: "Při nahrávání došlo k chybě&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "Soubor nelze připojit, protože je příliš velký.",
      exceededFileCountError: "Ř_Exceeded maximum number of attachments allowed_______________ů",
      selectFileTitle: "Vyberte soubor",
      btnSelectFileText: "Ř_Select File____ů",
      btnViewSubmissions: "Zobrazit odeslané položky"
    },
    builder: {
      gettingStarted: "Ř_Getting Started______ů",
      dateSettings: "Ř_Date Settings_____ů",
      hiddenDateField: "Ř_Hide this date field_______ů",
      preventPastDates: "Ř_Prevent past dates______ů",
      preventFutureDates: "Ř_Prevent future dates_______ů",
      useCurrentDate: "Ř_Set this field with the current date and time_______________ů",
      configure: "Ř_Configure____ů",
      configureField: "Ř_Configure Field '${fieldName}'__________ů",
      invalidUser: "Nemáte bohužel oprávnění prohlížet tuto položku.",
      invalidWebmapSelectionAlert: "Vybraná webová mapa neobsahuje platnou vrstvu vhodnou k použití. Pokud chcete pokračovat, přidejte do webové mapy editovatelnou vrstvu s prvky.",
      invalidWebmapSelectionAlert2: "Další informace naleznete v části ${openLink}Co je služba Feature Service?${closeLink}",
      selectFieldsText: "Vyberte pole formuláře",
      selectThemeText: "Vybrat motiv formuláře",
      setViewerText: "Ř_Configure Viewer______ů",
      introText: "Ř_Start___ů",
      webmapText: "Webová mapa",
      layerText: "Vrstva",
      detailsText: "Podrobnosti",
      fieldsText: "Pole",
      styleText: "Styl",
      viewerText: "Ř_Viewer___ů",
      optionText: "Možnosti",
      previewText: "Náhled",
      publishText: "Publikovat",
      optionsApplicationText: "Možnosti",
      titleText: "Nástroj pro tvorbu",
      descriptionText: "GeoForm je konfigurovatelná šablona určená k úpravě dat služeb typu ${link1}Feature Service${closeLink} formou formulářů. Tato aplikace uživatelům umožňuje zadávat data prostřednictvím formuláře namísto vyskakovacího okna v mapě a využívá výhod ${link2}webové mapy${closeLink} a editovatelných služeb typu Feature Service. Následující postup vám pomůže upravit a vydat vlastní formulář GeoForm.",
      btnPreviousText: "Předchozí",
      btnNextText: "Další",
      webmapTabTitleText: "Vyberte webovou mapu",
      viewWebmap: "Zobrazit webovou mapu",
      webmapDetailsText: "Je zvolena webová mapa ${webMapTitleLink}${webMapTitle}${closeLink}. Chcete-li zvolit jinou webovou mapu, klikněte na tlačítko Zvolit webovou mapu.",
      btnSelectWebmapText: "Zvolit webovou mapu",
      btnSelectWebmapTextLoading: "Načítání&hellip;",
      layerTabTitleText: "Ř_Select Editable Layer(s)________ů",
      selectLayerLabelText: "Vrstva",
      selectLayerDefaultOptionText: "Vybrat vrstvu",
      enableBasemapToggle: "Ř_Show Basemap Toggle_______ů",
      enableBasemapToggleDescription: "Ř_You can configure the GeoForm to Show/Hide the Basemap Toggle___________________ů",
      defaultBasemap: "Přepnout podkladovou mapu",
      secondaryBasemap: "Výchozí podkladová mapa",
      detailsTabTitleText: "Podrobnosti formuláře",
      detailTitleLabelText: "Název",
      detailLogoLabelText: "Obrázek loga",
      descriptionLabelText: "Pokyny a podrobnosti k formuláři",
      fieldDescriptionLabelText: "Text nápovědy (volitelný)",
      fieldDescriptionHelpText: "Ř_Provide a short description or instructions for this field___________________ů.",
      fieldHintHelpText: "Ř_Placeholder text for the field__________ů.",
      fieldTabFieldHeaderText: "Pole",
      fieldTabLabelHeaderText: "Popisek",
      fieldTabDisplayTypeHeaderText: "Zobrazit jako",
      fieldTabOrderColumnText: "Pořadí",
      fieldTabVisibleColumnText: "Povoleno",
      displayFieldText: "Zobrazované pole",
      selectMenuOption: "Vybrat nabídku",
      selectRadioOption: "Přepínač",
      selectTextOption: "Text",
      selectDateOption: "Výběr data",
      selectRangeOption: "Dotykový číselník",
      selectCheckboxOption: "Zaškrtávací políčko",
      selectMailOption: "E-mail",
      selectUrlOption: "URL",
      selectTextAreaOption: "Textová oblast",
      previewApplicationText: "Náhled aplikace",
      saveApplicationText: "Uložit aplikaci",
      saveText: "Uložit",
      toggleNavigationText: "Přepnout navigaci",
      formPlaceholderText: "Můj formulář",
      shareBuilderInProgressTitleMessage: "Publikování formuláře GeoForm",
      shareBuilderProgressBarMessage: "Čekejte prosím&hellip;",
      shareBuilderTitleMessage: "Podařilo se! Položka je uložena.",
      shareBuilderTextMessage: "Můžete začít sbírat informace sdílením s ostatními.",
      shareModalFormText: "Odkaz na formulář",
      shareBuilderSuccess: "Váš formulář GeoForm byl aktualizován a publikován!",
      geoformTitleText: "Geo Form",
      layerTabText: "Ř_This is the layer(s) that the GeoForm will be built from. The layer must be a feature service that is enabled for editing with sharing permissions appropriate for your audience. If all layers are selected, the form will allow a user to choose which form layer to submit to___________________________________________________________________________________ů.",
      detailsTabText: "Pomocí polí Podrobnosti formuláře můžete přizpůsobit nadpis, přidat vlastní logo a zadat krátký popis pro uživatele svého formuláře GeoForm. Do popisu můžete přidat odkazy na další zdroje, kontaktní informace, nebo odkázat uživatele na aplikaci webového mapování obsahující všechna data shromážděná prostřednictvím formuláře GeoForm.",
      fieldsTabText: "Zde můžete vybrat, která pole se zobrazí uživatelům vašeho formuláře GeoForm, upravit popisky, které uvidí, a přidat krátký popis, který jim pomůže se zadáváním dat.",
      styleTabText: "Upravte styl svého formuláře GeoForm podle svých představ pomocí níže uvedených motivů.",
      viewerTabText: "Ř_Set options for viewing submissions collected from the GeoForm____________________ů.",
      publishTabText: "Pokud jste s přizpůsobením formuláře GeoForm hotovi, uložte aplikaci a začněte ji sdílet se svými uživateli. Do tohoto nástroje pro tvorbu se můžete kdykoli vrátit a na základě zpětné odezvy pokračovat v úpravách.",
      headerSizeLabel: "Velikost záhlaví",
      smallHeader: "Použít malé záhlaví",
      bigHeader: "Používat velké záhlaví",
      pushpinText: "Připínáček",
      doneButtonText: "Uložit a ukončit",
      fieldTabPlaceHolderHeaderText: "Tip (volitelný)",
      enableAttachmentLabelText: "${openStrong}Povolit přílohy${closeStrong}",
      enableAttachmentLabelHint: "Zde můžete také povolit nebo zakázat přílohy.",
      attachmentIsRequiredLabelText: "${openStrong}Je požadována příloha${closeStrong}.",
      attachmentIsRequiredLabelHint: "V případě potřeby může být po uživatelích požadováno, aby vložili přílohu.",
      attachmentLabelText: "Popisek tlačítka přílohy",
      attachmentLabelHint: "Tento text se bude zobrazovat vedle tlačítka Příloha. Můžete zde uvést, jaký druh přílohy mají uživatelé vložit (fotografie, video, dokumenty atd.), formát souboru (.jpeg, .png, .docx, .pdf atd.) a další případné pokyny.",
      attachmentDescription: "Popis přílohy",
      attachmentHint: "V případě potřeby zde můžete uvést dodatečné pokyny týkající se příloh.",
      jumbotronDescription: "Pro svůj formulář můžete použít velké nebo malé záhlaví. Velké záhlaví pomáhá přesněji určit účel vaší aplikace, zabírá však více místa.",
      shareGeoformText: "Ř_Social media sharing buttons_________ů",
      shareDescription: "Ř_Social media buttons allow your audience to easily share your GeoForm once they have made a submission________________________________ů",
      defaultMapExtent: "Výchozí rozsah mapy",
      defaultMapExtentDescription: "Po odeslání se mapa obnoví na výchozí rozsah webové mapy. Tuto možnost lze kdykoliv vypnout.",
      pushpinOptionsDescription: "Zvolte si z řady barev určených pro připínáček do mapy. Barva by měla být odlišná od symbolů mapy, aby uživatelé mohli příspěvky snadno umísťovat do mapy.",
      selectLocationText: "Vybrat polohu podle",
      myLocationText: "Moje poloha",
      searchText: "Vyhledávání",
      coordinatesText: "Souřadnice zeměpisné šířky a délky",
      usng: "Souřadnice USNG",
      mgrs: "Souřadnice MGRS",
      utm: "Souřadnice UTM",
      selectLocationSDescription: "Umožňuje uživatelům vybírat polohu těmito způsoby.",
      dragTooltipText: "Přetáhněte pole na požadované místo",
      showHideLayerText: "Zobrazit vrstvu",
      showHideLayerHelpText: "Ř_You can configure the GeoForm to Show/Hide Layer. This option only applies to a single layer setup_______________________________ů.",
      labelHelpMessage: "Popisek",
      placeHolderHintMessage: "Text nápovědy",
      placeHolderHelpMessage: "Text nápovědy",
      selectTextOptionValue: "Výběr filtru",
      disableLogo: "Zakázat logo",
      disableLogoDescription: "Umožňuje nastavit skrytí nebo zobrazení loga v záhlaví formuláře GeoForm.",
      locateOnLoadText: "Najít umístění po spuštění",
      locateOnLoadDescription: "Umožňuje nastavit, aby po načtení stránky použil formulář GeoForm aktuální umístění.",
      selectLayerFieldTabText: "Vybrat vrstvu",
      allLayerSelectOptionText: "Ř_All Layers____ů",
      disableViewer: "Zakázat prohlížeč",
      disableViewerDescription: "Ř_You can configure the GeoForm to disable/enable the viewer__________________ů",
      displayFieldHintText: "Ř_Selected display field will be shown in the viewer as a title___________________ů"
    },
    viewer: {
      geocoderCancelText: "Zrušit",
      viewMapTabText: "Mapa",
      sortHeaderText: "Třídit podle:",
      geocoderPlaceholderText: "PSČ, město atd.",
      noSearchResult: "Nebyly nalezeny žádné výsledky.",
      recordsTabTooltip: "Zobrazit odeslané položky",
      legendTabTooltip: "Legenda",
      aboutUsTabTooltip: "Ř_About Us___ů",
      mapTabTooltip: "Mapa",
      btnDescendingText: "Sestupně",
      btnAscendingText: "Vzestupně",
      geometryUnavailableErrorMessage: "Ř_Erorr finding the geometry of the feature_____________ů",
      infoPopupOffErrorMessage: "Ř_No information to display_________ů",
      btnLoadMoreText: "Načíst další",
      unavailableTitleText: "Bez názvu",
      unavailableConfigMessage: "Nepodařilo se načíst konfiguraci.",
      share: "Ř_Share___ů",
      viewReportsTabText: "Ř_Reports___ů",
      viewLegendTabText: "Legenda",
      viewAboutusTabText: "O nás",
      btnSubmitReportText: "Odeslat zprávu",
      appLoadingFailedMessage: "Ř_There was an error loading the viewer____________ů"
    }
  })
);