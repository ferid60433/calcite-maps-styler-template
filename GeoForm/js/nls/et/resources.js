﻿define(
   ({
    map: {
      error: "Š_Unable to create map_ä"
    },
    onlineStatus: {
      offline: "Š_You are currently working offline. Form submissions will be saved locally until a connection to the server can be made_ä.",
      reconnecting: "Š_Reconnecting&hellip;_ä",
      pending: "Š_${total} pending edit(s) will be submitted when a network connection is re-established_ä."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "Š_My Organization_ä",
          onlineLabel: "Š_ArcGIS Online_ä",
          contentLabel: "Š_My Content_ä",
          favoritesLabel: "Š_My Favorites_ä"
        },
        title: "Š_Select Web Map_ä",
        searchTitle: "Š_Search_ä",
        ok: "Š_Ok_ä",
        cancel: "Š_Cancel_ä",
        placeholder: "Š_Enter search term_ä"
      },
      groupdlg: {
        items: {
          organizationLabel: "Š_My Organization_ä",
          onlineLabel: "Š_ArcGIS Online_ä",
          contentLabel: "Š_My Content_ä",
          favoritesLabel: "Š_My Favorites_ä"
        },
        title: "Š_Select Group_ä",
        searchTitle: "Š_Search_ä",
        ok: "Š_Ok_ä",
        cancel: "Š_Cancel_ä",
        placeholder: "Š_Enter search term_ä"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "Š_Here is a link to a GeoForm_ä"
      }
    },
    user: {
      mgrs: "Š_MGRS_ä",
      usng: "Š_USNG_ä",
      utm: "Š_UTM_ä",
      utm_northing: "Š_Northing_ä",
      utm_easting: "Š_Easting_ä",
      utm_zone_number: "Š_Zone Number_ä",
      selectLayerTabText: "Š_${formSection} Select Form_ä",
      geoFormGeneralTabText: "Š_${formSection} Enter Information_ä",
      locationInformationText: "Š_${formSection} Select Location_ä",
      submitInformationText: "Š_${formSection} Complete Form_ä",
      submitInstructions: "Š_Add this information to the map_ä.",
      myLocationText: "Š_Current Location_ä",
      locationDescriptionForMoreThanOneOption: "Š_Specify the location for this entry by clicking/tapping the map or by using one of the following options_ä.",
      locationDescriptionForOneOption: "Š_Specify the location for this entry by clicking/tapping the map or by using the following option_ä.",
      locationDescriptionForNoOption: "Š_Specify the location for this entry by clicking/tapping the map_ä.",
      addressText: "Š_Search_ä",
      geographic: "Š_Lat/Lon_ä",
      locationTabText: "Š_Location_ä",
      locationPopupTitle: "Š_Location_ä",
      submitButtonText: "Š_Submit Entry_ä",
      submitButtonTextLoading: "Š_Submitting&hellip;_ä",
      formValidationMessageAlertText: "Š_The following fields are required_ä:",
      selectLocation: "Š_Please select a location for your submission_ä.",
      emptylatitudeAlertMessage: "Š_Please enter a ${openLink}latitude${closeLink} coordinate_ä.",
      emptylongitudeAlertMessage: "Š_Please enter a ${openLink}longitude${closeLink} coordinate_ä.",
      shareUserTitleMessage: "Š_Thank you for your contribution_ä!",
      entrySubmitted: "Š_Your entry has been submitted to the map_ä.",
      shareThisForm: "Š_Share This Form_ä",
      shareUserTextMessage: "Š_Tell others to contribute using the following options_ä.",
      addAttachmentFailedMessage: "Š_Unable to add attachment to layer_ä",
      addFeatureFailedMessage: "Š_Unable to add feature to layer_ä",
      noLayerConfiguredMessage: "Š_An error occurred loading or finding an editable feature layer. In order to display the form and start collecting submissions, add an editable Feature Layer to the Webmap_ä.",
      placeholderLatitude: "Š_Latitude (Y)_ä",
      placeholderLongitude: "Š_Longitude (X)_ä",
      latitude: "Š_Latitude_ä",
      longitude: "Š_Longitude_ä",
      findMyLocation: "Š_Locate Me_ä",
      finding: "Š_Locating&hellip;_ä",
      backToTop: "Š_Back to top_ä",
      addressSearchText: "Š_Your submission will appear here. You can drag the pin to correct the location_ä.",
      shareModalFormText: "Š_Form Link_ä",
      close: "Š_Close_ä",
      locationNotFound: "Š_Location could not be found_ä.",
      setLocation: "Š_Set Location_ä",
      find: "Š_Find address or place_ä",
      attachment: "Š_Attachment_ä",
      toggleDropdown: "Š_Toggle Dropdown_ä",
      invalidString: "Š_Please enter valid value_ä.",
      invalidSmallNumber: "Š_Please enter valid ${openStrong}integer${closeStrong} value between -32768 and 32767_ä.",
      invalidNumber: "Š_Please enter valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647_ä.",
      invalidFloat: "Š_Please enter valid ${openStrong}floating point${closeStrong} value_ä.",
      invalidDouble: "Š_Please enter valid ${openStrong}double${closeStrong} value_ä.",
      invalidLatLong: "Š_Please enter valid latitude and longitude coordinates_ä.",
      invalidUTM: "Š_Please enter valid UTM coordinates_ä.",
      invalidUSNG: "Š_Please enter valid USNG coordinates_ä.",
      invalidMGRS: "Š_Please enter valid MGRS coordinates_ä.",
      geoformTitleText: "Š_GeoForm_ä",
      domainDefaultText: "Š_Select&hellip;_ä",
      applyEditsFailedMessage: "Š_Sorry your entry cannot be submitted. Please try again_ä.",
      requiredFields: "Š_There are some errors. Please correct them below_ä.",
      requiredField: "Š_(required)_ä",
      error: "Š_Error_ä",
      textRangeHintMessage: "Š_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}_ä",
      dateRangeHintMessage: "Š_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}_ä",
      remainingCharactersHintMessage: "Š_${value} characters remaining_ä",
      mapFullScreen: "Š_Full Screen_ä",
      mapRestore: "Š_Restore_ä",
      filterSelectEmptyText: "Š_Select_ä",
      invalidLayerMessage: "Š_Form layer does not exist. Please configure the application and set the layer_ä.",
      selectedLayerText: "Š_All_ä"
    },
    builder: {
      invalidUser: "Š_Sorry, you dont have permission to view this item_ä",
      invalidWebmapSelectionAlert: "Š_The selected webmap does not contain a valid layer to use. Please add an editable FeatureLayer into your webmap to continue_ä.",
      invalidWebmapSelectionAlert2: "Š_For More Information please refer to ${openLink}What is Feature Service?${closeLink}_ä",
      selectFieldsText: "Š_Select Form Fields_ä",
      selectThemeText: "Š_Select Form Theme_ä",
      webmapText: "Š_Webmap_ä",
      layerText: "Š_Layer_ä",
      detailsText: "Š_Details_ä",
      fieldsText: "Š_Fields_ä",
      styleText: "Š_Style_ä",
      optionText: "Š_Options_ä",
      previewText: "Š_Preview_ä",
      publishText: "Š_Publish_ä",
      optionsApplicationText: "Š_Options_ä",
      titleText: "Š_Builder_ä",
      descriptionText: "Š_GeoForm is a configurable template for form-based data editing of a ${link1}Feature Service${closeLink}. This application allows users to enter data through a form instead of a mapâ€™s pop-up while leveraging the power of the ${link2}Web Map${closeLink} and editable Feature Services. Use the following steps to customize and deploy your GeoForm_ä.",
      btnPreviousText: "Š_Previous_ä",
      btnNextText: "Š_Next_ä",
      webmapTabTitleText: "Š_Select a Webmap_ä",
      viewWebmap: "Š_View webmap_ä",
      webmapDetailsText: "Š_The selected webmap is ${webMapTitleLink}${webMapTitle}${closeLink}. To select a different webmap please click on 'Choose Webmap' button_ä",
      btnSelectWebmapText: "Š_Choose Webmap_ä",
      btnSelectWebmapTextLoading: "Š_Loading&hellip;_ä",
      layerTabTitleText: "Š_Select Editable Layer_ä",
      selectLayerLabelText: "Š_Layer_ä",
      selectLayerDefaultOptionText: "Š_Select Layer_ä",
      defaultBasemap: "Š_Basemap Toggle_ä",
      secondaryBasemap: "Š_Default Basemap_ä",
      detailsTabTitleText: "Š_Form Details_ä",
      detailTitleLabelText: "Š_Title_ä",
      detailLogoLabelText: "Š_Logo Image_ä",
      descriptionLabelText: "Š_Form Instructions & Details_ä",
      fieldDescriptionLabelText: "Š_Help Text (optional)_ä",
      fieldTabFieldHeaderText: "Š_Field_ä",
      fieldTabLabelHeaderText: "Š_Label_ä",
      fieldTabDisplayTypeHeaderText: "Š_Display As_ä",
      fieldTabOrderColumnText: "Š_Order_ä",
      fieldTabVisibleColumnText: "Š_Enabled_ä",
      selectMenuOption: "Š_Select Menu_ä",
      selectRadioOption: "Š_Radio Button_ä",
      selectTextOption: "Š_Text_ä",
      selectDateOption: "Š_Date Picker_ä",
      selectRangeOption: "Š_Touch-Spinner_ä",
      selectCheckboxOption: "Š_Checkbox_ä",
      selectMailOption: "Š_Email_ä",
      selectUrlOption: "Š_URL_ä",
      selectTextAreaOption: "Š_Text Area_ä",
      previewApplicationText: "Š_Preview Application_ä",
      saveApplicationText: "Š_Save Application_ä",
      saveText: "Š_Save_ä",
      toggleNavigationText: "Š_Toggle navigation_ä",
      formPlaceholderText: "Š_My Form_ä",
      shareBuilderInProgressTitleMessage: "Š_Publishing GeoForm_ä",
      shareBuilderProgressBarMessage: "Š_Please Wait&hellip;_ä",
      shareBuilderTitleMessage: "Š_Success! Item saved_ä",
      shareBuilderTextMessage: "Š_You can start collecting information by sharing with others_ä",
      shareModalFormText: "Š_Form Link_ä",
      shareBuilderSuccess: "Š_Your GeoForm has been updated & published_ä!",
      geoformTitleText: "Š_Geo Form_ä",
      layerTabText: "Š_This is the layer that the GeoForm will be built from. The layer must be a feature service that is enabled for editing with sharing permissions appropriate for your audience_ä.",
      detailsTabText: "Š_Use the Form Detail boxes below to customize the Title, add a custom logo, and provide a short description for your GeoForm audience. In the description you can add links to other resources, contact information, and even point your audience to a web mapping application featuring all of the data collected with the GeoForm_ä.",
      fieldsTabText: "Š_Here you can select which fields will be visible to your GeoForm audience, edit the Labels they will see, and add a short Description to help with data entry_ä.",
      styleTabText: "Š_Style your GeoForm using the themes below based on your preference_ä.",
      publishTabText: "Š_If you are finished customizing your GeoForm, save the application and begin sharing with your audience. You can always return to this builder and continue customizing it based on feedback_ä.",
      headerSizeLabel: "Š_Header Size_ä",
      smallHeader: "Š_Use Small Header_ä",
      bigHeader: "Š_Use Large Header_ä",
      pushpinText: "Š_Push pin_ä",
      doneButtonText: "Š_Save and Exit_ä",
      fieldTabPlaceHolderHeaderText: "Š_Hint (optional)_ä",
      enableAttachmentLabelText: "Š_${openStrong}Enable Attachments${closeStrong}_ä",
      enableAttachmentLabelHint: "Š_You can enable/disable the attachments here_ä",
      attachmentIsRequiredLabelText: "Š_${openStrong}Attachment Required${closeStrong}_ä",
      attachmentIsRequiredLabelHint: "Š_If necessary, users can be required to enter an attachment_ä.",
      attachmentLabelText: "Š_Attachment Button Label_ä",
      attachmentLabelHint: "Š_This text will appear next to the Attachment Button. You can use this space to describe what you would like your audience to attach (photo, video, document, etc.), the file format you are asking for (.jpeg, .png, .docx, .pdf, etc.), and any additional instructions_ä",
      attachmentDescription: "Š_Attachment Description_ä",
      attachmentHint: "Š_If necessary, you can provide additional attachment instructions here_ä.",
      jumbotronDescription: "Š_Use large or small heading for your form. A large header may help define the purpose of your application but it takes up more room on your screen_ä",
      shareGeoformText: "Š_Share Geoform_ä",
      shareDescription: "Š_The sharing panel makes it easy for your audience to share the GeoForm with other collaborators once they have made a submission - this can be disabled at any time_ä.",
      defaultMapExtent: "Š_Default Map Extent_ä",
      defaultMapExtentDescription: "Š_The map will reset to the default extent in your web map after submission - this can be disabled at any time_ä.",
      pushpinOptionsDescription: "Š_Choose from a variety of colors for the map pushpin, it should be different from the map symbology to help the user put their submission on the map_ä",
      selectLocationText: "Š_Select Location By_ä",
      myLocationText: "Š_My Location_ä",
      searchText: "Š_Search_ä",
      coordinatesText: "Š_Latitude & Longitude Coordinates_ä",
      usng: "Š_USNG Coordinates_ä",
      mgrs: "Š_MGRS Coordinates_ä",
      utm: "Š_UTM Coordinates_ä",
      selectLocationSDescription: "Š_Allow users to select a location using these methods_ä.",
      dragTooltipText: "Š_Drag the field where you want it to appear_ä",
      showHideLayerText: "Š_Show Layer_ä",
      showHideLayerHelpText: "Š_You can configure the GeoForm to Show/Hide Layer.This option only applies to a single layer setup_ä.",
      labelHelpMessage: "Š_Label_ä",
      placeHolderHintMessage: "Š_Hint Text_ä",
      placeHolderHelpMessage: "Š_Help Text_ä",
      selectTextOptionValue: "Š_Filter Select_ä",
      disableLogo: "Š_Disable Logo_ä",
      disableLogoDescription: "Š_You can configure the GeoForm to Show/Hide the Logo in the form header_ä",
      locateOnLoadText: "Š_Locate On Load_ä",
      locateOnLoadDescription: "Š_You can configure the GeoForm to use the current location on page load_ä",
      selectLayerFieldTabText: "Š_Select Layer_ä",
      allLayerSelectOptionText:"Š_All_ä"
    }
  })
);