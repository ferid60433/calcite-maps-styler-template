﻿define(
   ({
    map: {
      error: "ø_Unable to create map_å"
    },
    onlineStatus: {
      offline: "ø_You are currently working offline. Form submissions will be saved locally until a connection to the server can be made_å.",
      reconnecting: "ø_Reconnecting&hellip;_å",
      pending: "ø_${total} pending edit(s) will be submitted when a network connection is re-established_å."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "ø_My Organization_å",
          onlineLabel: "ø_ArcGIS Online_å",
          contentLabel: "ø_My Content_å",
          favoritesLabel: "ø_My Favorites_å"
        },
        title: "ø_Select Web Map_å",
        searchTitle: "ø_Search_å",
        ok: "ø_Ok_å",
        cancel: "ø_Cancel_å",
        placeholder: "ø_Enter search term_å"
      },
      groupdlg: {
        items: {
          organizationLabel: "ø_My Organization_å",
          onlineLabel: "ø_ArcGIS Online_å",
          contentLabel: "ø_My Content_å",
          favoritesLabel: "ø_My Favorites_å"
        },
        title: "ø_Select Group_å",
        searchTitle: "ø_Search_å",
        ok: "ø_Ok_å",
        cancel: "ø_Cancel_å",
        placeholder: "ø_Enter search term_å"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "ø_Here is a link to a GeoForm_å"
      }
    },
    user: {
      mgrs: "ø_MGRS_å",
      usng: "ø_USNG_å",
      utm: "ø_UTM_å",
      utm_northing: "ø_Northing_å",
      utm_easting: "ø_Easting_å",
      utm_zone_number: "ø_Zone Number_å",
      selectLayerTabText: "ø_${formSection} Select Form_å",
      geoFormGeneralTabText: "ø_${formSection} Enter Information_å",
      locationInformationText: "ø_${formSection} Select Location_å",
      submitInformationText: "ø_${formSection} Complete Form_å",
      submitInstructions: "ø_Add this information to the map_å.",
      myLocationText: "ø_Current Location_å",
      locationDescriptionForMoreThanOneOption: "ø_Specify the location for this entry by clicking/tapping the map or by using one of the following options_å.",
      locationDescriptionForOneOption: "ø_Specify the location for this entry by clicking/tapping the map or by using the following option_å.",
      locationDescriptionForNoOption: "ø_Specify the location for this entry by clicking/tapping the map_å.",
      addressText: "ø_Search_å",
      geographic: "ø_Lat/Lon_å",
      locationTabText: "ø_Location_å",
      locationPopupTitle: "ø_Location_å",
      submitButtonText: "ø_Submit Entry_å",
      submitButtonTextLoading: "ø_Submitting&hellip;_å",
      formValidationMessageAlertText: "ø_The following fields are required_å:",
      selectLocation: "ø_Please select a location for your submission_å.",
      emptylatitudeAlertMessage: "ø_Please enter a ${openLink}latitude${closeLink} coordinate_å.",
      emptylongitudeAlertMessage: "ø_Please enter a ${openLink}longitude${closeLink} coordinate_å.",
      shareUserTitleMessage: "ø_Thank you for your contribution_å!",
      entrySubmitted: "ø_Your entry has been submitted to the map_å.",
      shareThisForm: "ø_Share This Form_å",
      shareUserTextMessage: "ø_Tell others to contribute using the following options_å.",
      addAttachmentFailedMessage: "ø_Unable to add attachment to layer_å",
      addFeatureFailedMessage: "ø_Unable to add feature to layer_å",
      noLayerConfiguredMessage: "ø_An error occurred loading or finding an editable feature layer. In order to display the form and start collecting submissions, add an editable Feature Layer to the Webmap_å.",
      placeholderLatitude: "ø_Latitude (Y)_å",
      placeholderLongitude: "ø_Longitude (X)_å",
      latitude: "ø_Latitude_å",
      longitude: "ø_Longitude_å",
      findMyLocation: "ø_Locate Me_å",
      finding: "ø_Locating&hellip;_å",
      backToTop: "ø_Back to top_å",
      addressSearchText: "ø_Your submission will appear here. You can drag the pin to correct the location_å.",
      shareModalFormText: "ø_Form Link_å",
      close: "ø_Close_å",
      locationNotFound: "ø_Location could not be found_å.",
      setLocation: "ø_Set Location_å",
      find: "ø_Find address or place_å",
      attachment: "ø_Attachment_å",
      toggleDropdown: "ø_Toggle Dropdown_å",
      invalidString: "ø_Please enter valid value_å.",
      invalidSmallNumber: "ø_Please enter valid ${openStrong}integer${closeStrong} value between -32768 and 32767_å.",
      invalidNumber: "ø_Please enter valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647_å.",
      invalidFloat: "ø_Please enter valid ${openStrong}floating point${closeStrong} value_å.",
      invalidDouble: "ø_Please enter valid ${openStrong}double${closeStrong} value_å.",
      invalidLatLong: "ø_Please enter valid latitude and longitude coordinates_å.",
      invalidUTM: "ø_Please enter valid UTM coordinates_å.",
      invalidUSNG: "ø_Please enter valid USNG coordinates_å.",
      invalidMGRS: "ø_Please enter valid MGRS coordinates_å.",
      geoformTitleText: "ø_GeoForm_å",
      domainDefaultText: "ø_Select&hellip;_å",
      applyEditsFailedMessage: "ø_Sorry your entry cannot be submitted. Please try again_å.",
      requiredFields: "ø_There are some errors. Please correct them below_å.",
      requiredField: "ø_(required)_å",
      error: "ø_Error_å",
      textRangeHintMessage: "ø_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}_å",
      dateRangeHintMessage: "ø_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}_å",
      remainingCharactersHintMessage: "ø_${value} characters remaining_å",
      mapFullScreen: "ø_Full Screen_å",
      mapRestore: "ø_Restore_å",
      filterSelectEmptyText: "ø_Select_å",
      invalidLayerMessage: "ø_Form layer does not exist. Please configure the application and set the layer_å.",
      selectedLayerText: "ø_All_å"
    },
    builder: {
      invalidUser: "ø_Sorry, you dont have permission to view this item_å",
      invalidWebmapSelectionAlert: "ø_The selected webmap does not contain a valid layer to use. Please add an editable FeatureLayer into your webmap to continue_å.",
      invalidWebmapSelectionAlert2: "ø_For More Information please refer to ${openLink}What is Feature Service?${closeLink}_å",
      selectFieldsText: "ø_Select Form Fields_å",
      selectThemeText: "ø_Select Form Theme_å",
      webmapText: "ø_Webmap_å",
      layerText: "ø_Layer_å",
      detailsText: "ø_Details_å",
      fieldsText: "ø_Fields_å",
      styleText: "ø_Style_å",
      optionText: "ø_Options_å",
      previewText: "ø_Preview_å",
      publishText: "ø_Publish_å",
      optionsApplicationText: "ø_Options_å",
      titleText: "ø_Builder_å",
      descriptionText: "ø_GeoForm is a configurable template for form-based data editing of a ${link1}Feature Service${closeLink}. This application allows users to enter data through a form instead of a mapâ€™s pop-up while leveraging the power of the ${link2}Web Map${closeLink} and editable Feature Services. Use the following steps to customize and deploy your GeoForm_å.",
      btnPreviousText: "ø_Previous_å",
      btnNextText: "ø_Next_å",
      webmapTabTitleText: "ø_Select a Webmap_å",
      viewWebmap: "ø_View webmap_å",
      webmapDetailsText: "ø_The selected webmap is ${webMapTitleLink}${webMapTitle}${closeLink}. To select a different webmap please click on 'Choose Webmap' button_å",
      btnSelectWebmapText: "ø_Choose Webmap_å",
      btnSelectWebmapTextLoading: "ø_Loading&hellip;_å",
      layerTabTitleText: "ø_Select Editable Layer_å",
      selectLayerLabelText: "ø_Layer_å",
      selectLayerDefaultOptionText: "ø_Select Layer_å",
      defaultBasemap: "ø_Basemap Toggle_å",
      secondaryBasemap: "ø_Default Basemap_å",
      detailsTabTitleText: "ø_Form Details_å",
      detailTitleLabelText: "ø_Title_å",
      detailLogoLabelText: "ø_Logo Image_å",
      descriptionLabelText: "ø_Form Instructions & Details_å",
      fieldDescriptionLabelText: "ø_Help Text (optional)_å",
      fieldTabFieldHeaderText: "ø_Field_å",
      fieldTabLabelHeaderText: "ø_Label_å",
      fieldTabDisplayTypeHeaderText: "ø_Display As_å",
      fieldTabOrderColumnText: "ø_Order_å",
      fieldTabVisibleColumnText: "ø_Enabled_å",
      selectMenuOption: "ø_Select Menu_å",
      selectRadioOption: "ø_Radio Button_å",
      selectTextOption: "ø_Text_å",
      selectDateOption: "ø_Date Picker_å",
      selectRangeOption: "ø_Touch-Spinner_å",
      selectCheckboxOption: "ø_Checkbox_å",
      selectMailOption: "ø_Email_å",
      selectUrlOption: "ø_URL_å",
      selectTextAreaOption: "ø_Text Area_å",
      previewApplicationText: "ø_Preview Application_å",
      saveApplicationText: "ø_Save Application_å",
      saveText: "ø_Save_å",
      toggleNavigationText: "ø_Toggle navigation_å",
      formPlaceholderText: "ø_My Form_å",
      shareBuilderInProgressTitleMessage: "ø_Publishing GeoForm_å",
      shareBuilderProgressBarMessage: "ø_Please Wait&hellip;_å",
      shareBuilderTitleMessage: "ø_Success! Item saved_å",
      shareBuilderTextMessage: "ø_You can start collecting information by sharing with others_å",
      shareModalFormText: "ø_Form Link_å",
      shareBuilderSuccess: "ø_Your GeoForm has been updated & published_å!",
      geoformTitleText: "ø_Geo Form_å",
      layerTabText: "ø_This is the layer that the GeoForm will be built from. The layer must be a feature service that is enabled for editing with sharing permissions appropriate for your audience_å.",
      detailsTabText: "ø_Use the Form Detail boxes below to customize the Title, add a custom logo, and provide a short description for your GeoForm audience. In the description you can add links to other resources, contact information, and even point your audience to a web mapping application featuring all of the data collected with the GeoForm_å.",
      fieldsTabText: "ø_Here you can select which fields will be visible to your GeoForm audience, edit the Labels they will see, and add a short Description to help with data entry_å.",
      styleTabText: "ø_Style your GeoForm using the themes below based on your preference_å.",
      publishTabText: "ø_If you are finished customizing your GeoForm, save the application and begin sharing with your audience. You can always return to this builder and continue customizing it based on feedback_å.",
      headerSizeLabel: "ø_Header Size_å",
      smallHeader: "ø_Use Small Header_å",
      bigHeader: "ø_Use Large Header_å",
      pushpinText: "ø_Push pin_å",
      doneButtonText: "ø_Save and Exit_å",
      fieldTabPlaceHolderHeaderText: "ø_Hint (optional)_å",
      enableAttachmentLabelText: "ø_${openStrong}Enable Attachments${closeStrong}_å",
      enableAttachmentLabelHint: "ø_You can enable/disable the attachments here_å",
      attachmentIsRequiredLabelText: "ø_${openStrong}Attachment Required${closeStrong}_å",
      attachmentIsRequiredLabelHint: "ø_If necessary, users can be required to enter an attachment_å.",
      attachmentLabelText: "ø_Attachment Button Label_å",
      attachmentLabelHint: "ø_This text will appear next to the Attachment Button. You can use this space to describe what you would like your audience to attach (photo, video, document, etc.), the file format you are asking for (.jpeg, .png, .docx, .pdf, etc.), and any additional instructions_å",
      attachmentDescription: "ø_Attachment Description_å",
      attachmentHint: "ø_If necessary, you can provide additional attachment instructions here_å.",
      jumbotronDescription: "ø_Use large or small heading for your form. A large header may help define the purpose of your application but it takes up more room on your screen_å",
      shareGeoformText: "ø_Share Geoform_å",
      shareDescription: "ø_The sharing panel makes it easy for your audience to share the GeoForm with other collaborators once they have made a submission - this can be disabled at any time_å.",
      defaultMapExtent: "ø_Default Map Extent_å",
      defaultMapExtentDescription: "ø_The map will reset to the default extent in your web map after submission - this can be disabled at any time_å.",
      pushpinOptionsDescription: "ø_Choose from a variety of colors for the map pushpin, it should be different from the map symbology to help the user put their submission on the map_å",
      selectLocationText: "ø_Select Location By_å",
      myLocationText: "ø_My Location_å",
      searchText: "ø_Search_å",
      coordinatesText: "ø_Latitude & Longitude Coordinates_å",
      usng: "ø_USNG Coordinates_å",
      mgrs: "ø_MGRS Coordinates_å",
      utm: "ø_UTM Coordinates_å",
      selectLocationSDescription: "ø_Allow users to select a location using these methods_å.",
      dragTooltipText: "ø_Drag the field where you want it to appear_å",
      showHideLayerText: "ø_Show Layer_å",
      showHideLayerHelpText: "ø_You can configure the GeoForm to Show/Hide Layer.This option only applies to a single layer setup_å.",
      labelHelpMessage: "ø_Label_å",
      placeHolderHintMessage: "ø_Hint Text_å",
      placeHolderHelpMessage: "ø_Help Text_å",
      selectTextOptionValue: "ø_Filter Select_å",
      disableLogo: "ø_Disable Logo_å",
      disableLogoDescription: "ø_You can configure the GeoForm to Show/Hide the Logo in the form header_å",
      locateOnLoadText: "ø_Locate On Load_å",
      locateOnLoadDescription: "ø_You can configure the GeoForm to use the current location on page load_å",
      selectLayerFieldTabText: "ø_Select Layer_å",
      allLayerSelectOptionText:"ø_All_å"
    }
  })
);