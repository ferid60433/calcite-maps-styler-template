﻿define(
   ({
    map: {
      error: "æ_Unable to create map_Â"
    },
    onlineStatus: {
      offline: "æ_You are currently working offline. Form submissions will be saved locally until a connection to the server can be made_Â.",
      reconnecting: "æ_Reconnecting&hellip;_Â",
      pending: "æ_${total} pending edit(s) will be submitted when a network connection is re-established_Â."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "æ_My Organization_Â",
          onlineLabel: "æ_ArcGIS Online_Â",
          contentLabel: "æ_My Content_Â",
          favoritesLabel: "æ_My Favorites_Â"
        },
        title: "æ_Select Web Map_Â",
        searchTitle: "æ_Search_Â",
        ok: "æ_Ok_Â",
        cancel: "æ_Cancel_Â",
        placeholder: "æ_Enter search term_Â"
      },
      groupdlg: {
        items: {
          organizationLabel: "æ_My Organization_Â",
          onlineLabel: "æ_ArcGIS Online_Â",
          contentLabel: "æ_My Content_Â",
          favoritesLabel: "æ_My Favorites_Â"
        },
        title: "æ_Select Group_Â",
        searchTitle: "æ_Search_Â",
        ok: "æ_Ok_Â",
        cancel: "æ_Cancel_Â",
        placeholder: "æ_Enter search term_Â"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "æ_Here is a link to a GeoForm_Â"
      }
    },
    user: {
      mgrs: "æ_MGRS_Â",
      usng: "æ_USNG_Â",
      utm: "æ_UTM_Â",
      utm_northing: "æ_Northing_Â",
      utm_easting: "æ_Easting_Â",
      utm_zone_number: "æ_Zone Number_Â",
      selectLayerTabText: "æ_${formSection} Select Form_Â",
      geoFormGeneralTabText: "æ_${formSection} Enter Information_Â",
      locationInformationText: "æ_${formSection} Select Location_Â",
      submitInformationText: "æ_${formSection} Complete Form_Â",
      submitInstructions: "æ_Add this information to the map_Â.",
      myLocationText: "æ_Current Location_Â",
      locationDescriptionForMoreThanOneOption: "æ_Specify the location for this entry by clicking/tapping the map or by using one of the following options_Â.",
      locationDescriptionForOneOption: "æ_Specify the location for this entry by clicking/tapping the map or by using the following option_Â.",
      locationDescriptionForNoOption: "æ_Specify the location for this entry by clicking/tapping the map_Â.",
      addressText: "æ_Search_Â",
      geographic: "æ_Lat/Lon_Â",
      locationTabText: "æ_Location_Â",
      locationPopupTitle: "æ_Location_Â",
      submitButtonText: "æ_Submit Entry_Â",
      submitButtonTextLoading: "æ_Submitting&hellip;_Â",
      formValidationMessageAlertText: "æ_The following fields are required_Â:",
      selectLocation: "æ_Please select a location for your submission_Â.",
      emptylatitudeAlertMessage: "æ_Please enter a ${openLink}latitude${closeLink} coordinate_Â.",
      emptylongitudeAlertMessage: "æ_Please enter a ${openLink}longitude${closeLink} coordinate_Â.",
      shareUserTitleMessage: "æ_Thank you for your contribution_Â!",
      entrySubmitted: "æ_Your entry has been submitted to the map_Â.",
      shareThisForm: "æ_Share This Form_Â",
      shareUserTextMessage: "æ_Tell others to contribute using the following options_Â.",
      addAttachmentFailedMessage: "æ_Unable to add attachment to layer_Â",
      addFeatureFailedMessage: "æ_Unable to add feature to layer_Â",
      noLayerConfiguredMessage: "æ_An error occurred loading or finding an editable feature layer. In order to display the form and start collecting submissions, add an editable Feature Layer to the Webmap_Â.",
      placeholderLatitude: "æ_Latitude (Y)_Â",
      placeholderLongitude: "æ_Longitude (X)_Â",
      latitude: "æ_Latitude_Â",
      longitude: "æ_Longitude_Â",
      findMyLocation: "æ_Locate Me_Â",
      finding: "æ_Locating&hellip;_Â",
      backToTop: "æ_Back to top_Â",
      addressSearchText: "æ_Your submission will appear here. You can drag the pin to correct the location_Â.",
      shareModalFormText: "æ_Form Link_Â",
      close: "æ_Close_Â",
      locationNotFound: "æ_Location could not be found_Â.",
      setLocation: "æ_Set Location_Â",
      find: "æ_Find address or place_Â",
      attachment: "æ_Attachment_Â",
      toggleDropdown: "æ_Toggle Dropdown_Â",
      invalidString: "æ_Please enter valid value_Â.",
      invalidSmallNumber: "æ_Please enter valid ${openStrong}integer${closeStrong} value between -32768 and 32767_Â.",
      invalidNumber: "æ_Please enter valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647_Â.",
      invalidFloat: "æ_Please enter valid ${openStrong}floating point${closeStrong} value_Â.",
      invalidDouble: "æ_Please enter valid ${openStrong}double${closeStrong} value_Â.",
      invalidLatLong: "æ_Please enter valid latitude and longitude coordinates_Â.",
      invalidUTM: "æ_Please enter valid UTM coordinates_Â.",
      invalidUSNG: "æ_Please enter valid USNG coordinates_Â.",
      invalidMGRS: "æ_Please enter valid MGRS coordinates_Â.",
      geoformTitleText: "æ_GeoForm_Â",
      domainDefaultText: "æ_Select&hellip;_Â",
      applyEditsFailedMessage: "æ_Sorry your entry cannot be submitted. Please try again_Â.",
      requiredFields: "æ_There are some errors. Please correct them below_Â.",
      requiredField: "æ_(required)_Â",
      error: "æ_Error_Â",
      textRangeHintMessage: "æ_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}_Â",
      dateRangeHintMessage: "æ_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}_Â",
      remainingCharactersHintMessage: "æ_${value} characters remaining_Â",
      mapFullScreen: "æ_Full Screen_Â",
      mapRestore: "æ_Restore_Â",
      filterSelectEmptyText: "æ_Select_Â",
      invalidLayerMessage: "æ_Form layer does not exist. Please configure the application and set the layer_Â.",
      selectedLayerText: "æ_All_Â"
    },
    builder: {
      invalidUser: "æ_Sorry, you dont have permission to view this item_Â",
      invalidWebmapSelectionAlert: "æ_The selected webmap does not contain a valid layer to use. Please add an editable FeatureLayer into your webmap to continue_Â.",
      invalidWebmapSelectionAlert2: "æ_For More Information please refer to ${openLink}What is Feature Service?${closeLink}_Â",
      selectFieldsText: "æ_Select Form Fields_Â",
      selectThemeText: "æ_Select Form Theme_Â",
      webmapText: "æ_Webmap_Â",
      layerText: "æ_Layer_Â",
      detailsText: "æ_Details_Â",
      fieldsText: "æ_Fields_Â",
      styleText: "æ_Style_Â",
      optionText: "æ_Options_Â",
      previewText: "æ_Preview_Â",
      publishText: "æ_Publish_Â",
      optionsApplicationText: "æ_Options_Â",
      titleText: "æ_Builder_Â",
      descriptionText: "æ_GeoForm is a configurable template for form-based data editing of a ${link1}Feature Service${closeLink}. This application allows users to enter data through a form instead of a mapâ€™s pop-up while leveraging the power of the ${link2}Web Map${closeLink} and editable Feature Services. Use the following steps to customize and deploy your GeoForm_Â.",
      btnPreviousText: "æ_Previous_Â",
      btnNextText: "æ_Next_Â",
      webmapTabTitleText: "æ_Select a Webmap_Â",
      viewWebmap: "æ_View webmap_Â",
      webmapDetailsText: "æ_The selected webmap is ${webMapTitleLink}${webMapTitle}${closeLink}. To select a different webmap please click on 'Choose Webmap' button_Â",
      btnSelectWebmapText: "æ_Choose Webmap_Â",
      btnSelectWebmapTextLoading: "æ_Loading&hellip;_Â",
      layerTabTitleText: "æ_Select Editable Layer_Â",
      selectLayerLabelText: "æ_Layer_Â",
      selectLayerDefaultOptionText: "æ_Select Layer_Â",
      defaultBasemap: "æ_Basemap Toggle_Â",
      secondaryBasemap: "æ_Default Basemap_Â",
      detailsTabTitleText: "æ_Form Details_Â",
      detailTitleLabelText: "æ_Title_Â",
      detailLogoLabelText: "æ_Logo Image_Â",
      descriptionLabelText: "æ_Form Instructions & Details_Â",
      fieldDescriptionLabelText: "æ_Help Text (optional)_Â",
      fieldTabFieldHeaderText: "æ_Field_Â",
      fieldTabLabelHeaderText: "æ_Label_Â",
      fieldTabDisplayTypeHeaderText: "æ_Display As_Â",
      fieldTabOrderColumnText: "æ_Order_Â",
      fieldTabVisibleColumnText: "æ_Enabled_Â",
      selectMenuOption: "æ_Select Menu_Â",
      selectRadioOption: "æ_Radio Button_Â",
      selectTextOption: "æ_Text_Â",
      selectDateOption: "æ_Date Picker_Â",
      selectRangeOption: "æ_Touch-Spinner_Â",
      selectCheckboxOption: "æ_Checkbox_Â",
      selectMailOption: "æ_Email_Â",
      selectUrlOption: "æ_URL_Â",
      selectTextAreaOption: "æ_Text Area_Â",
      previewApplicationText: "æ_Preview Application_Â",
      saveApplicationText: "æ_Save Application_Â",
      saveText: "æ_Save_Â",
      toggleNavigationText: "æ_Toggle navigation_Â",
      formPlaceholderText: "æ_My Form_Â",
      shareBuilderInProgressTitleMessage: "æ_Publishing GeoForm_Â",
      shareBuilderProgressBarMessage: "æ_Please Wait&hellip;_Â",
      shareBuilderTitleMessage: "æ_Success! Item saved_Â",
      shareBuilderTextMessage: "æ_You can start collecting information by sharing with others_Â",
      shareModalFormText: "æ_Form Link_Â",
      shareBuilderSuccess: "æ_Your GeoForm has been updated & published_Â!",
      geoformTitleText: "æ_Geo Form_Â",
      layerTabText: "æ_This is the layer that the GeoForm will be built from. The layer must be a feature service that is enabled for editing with sharing permissions appropriate for your audience_Â.",
      detailsTabText: "æ_Use the Form Detail boxes below to customize the Title, add a custom logo, and provide a short description for your GeoForm audience. In the description you can add links to other resources, contact information, and even point your audience to a web mapping application featuring all of the data collected with the GeoForm_Â.",
      fieldsTabText: "æ_Here you can select which fields will be visible to your GeoForm audience, edit the Labels they will see, and add a short Description to help with data entry_Â.",
      styleTabText: "æ_Style your GeoForm using the themes below based on your preference_Â.",
      publishTabText: "æ_If you are finished customizing your GeoForm, save the application and begin sharing with your audience. You can always return to this builder and continue customizing it based on feedback_Â.",
      headerSizeLabel: "æ_Header Size_Â",
      smallHeader: "æ_Use Small Header_Â",
      bigHeader: "æ_Use Large Header_Â",
      pushpinText: "æ_Push pin_Â",
      doneButtonText: "æ_Save and Exit_Â",
      fieldTabPlaceHolderHeaderText: "æ_Hint (optional)_Â",
      enableAttachmentLabelText: "æ_${openStrong}Enable Attachments${closeStrong}_Â",
      enableAttachmentLabelHint: "æ_You can enable/disable the attachments here_Â",
      attachmentIsRequiredLabelText: "æ_${openStrong}Attachment Required${closeStrong}_Â",
      attachmentIsRequiredLabelHint: "æ_If necessary, users can be required to enter an attachment_Â.",
      attachmentLabelText: "æ_Attachment Button Label_Â",
      attachmentLabelHint: "æ_This text will appear next to the Attachment Button. You can use this space to describe what you would like your audience to attach (photo, video, document, etc.), the file format you are asking for (.jpeg, .png, .docx, .pdf, etc.), and any additional instructions_Â",
      attachmentDescription: "æ_Attachment Description_Â",
      attachmentHint: "æ_If necessary, you can provide additional attachment instructions here_Â.",
      jumbotronDescription: "æ_Use large or small heading for your form. A large header may help define the purpose of your application but it takes up more room on your screen_Â",
      shareGeoformText: "æ_Share Geoform_Â",
      shareDescription: "æ_The sharing panel makes it easy for your audience to share the GeoForm with other collaborators once they have made a submission - this can be disabled at any time_Â.",
      defaultMapExtent: "æ_Default Map Extent_Â",
      defaultMapExtentDescription: "æ_The map will reset to the default extent in your web map after submission - this can be disabled at any time_Â.",
      pushpinOptionsDescription: "æ_Choose from a variety of colors for the map pushpin, it should be different from the map symbology to help the user put their submission on the map_Â",
      selectLocationText: "æ_Select Location By_Â",
      myLocationText: "æ_My Location_Â",
      searchText: "æ_Search_Â",
      coordinatesText: "æ_Latitude & Longitude Coordinates_Â",
      usng: "æ_USNG Coordinates_Â",
      mgrs: "æ_MGRS Coordinates_Â",
      utm: "æ_UTM Coordinates_Â",
      selectLocationSDescription: "æ_Allow users to select a location using these methods_Â.",
      dragTooltipText: "æ_Drag the field where you want it to appear_Â",
      showHideLayerText: "æ_Show Layer_Â",
      showHideLayerHelpText: "æ_You can configure the GeoForm to Show/Hide Layer.This option only applies to a single layer setup_Â.",
      labelHelpMessage: "æ_Label_Â",
      placeHolderHintMessage: "æ_Hint Text_Â",
      placeHolderHelpMessage: "æ_Help Text_Â",
      selectTextOptionValue: "æ_Filter Select_Â",
      disableLogo: "æ_Disable Logo_Â",
      disableLogoDescription: "æ_You can configure the GeoForm to Show/Hide the Logo in the form header_Â",
      locateOnLoadText: "æ_Locate On Load_Â",
      locateOnLoadDescription: "æ_You can configure the GeoForm to use the current location on page load_Â",
      selectLayerFieldTabText: "æ_Select Layer_Â",
      allLayerSelectOptionText:"æ_All_Â"
    }
  })
);