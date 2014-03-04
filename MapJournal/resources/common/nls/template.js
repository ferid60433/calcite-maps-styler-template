define({
	root: ({
		common: {
			inlineFieldEdit: {
				editMe: "Edit me !"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% Builder",
				buttonSave: "SAVE",
				buttonShare: "SHARE",
				buttonSettings: "SETTINGS",
				buttonHelp: "HELP",
				noPendingChange: "No pending change",
				unSavedChangeSingular: "1 unsaved change",
				unSavedChangePlural: "unsaved changes",
				popoverSaveWhenDone: "Don't forget to save when you are done",
				closeWithPendingChange: "Are you sure to want to confirm the action ? Your changes will be lost.",
				ok: "Ok",
				savingApplication: "Saving application",
				saveError: "Save failed, please try again",
				saveError3: "The title can't be empty",
				// TODO
				signIn: "Please sign in with an account on",
				shareStatus1: "Application is not saved",
				shareStatus2: "Application is shared publicly",
				shareStatus3: "Application is shared within the organization",
				shareStatus4: "Application is not shared"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Title",
				addPopupTitle: "Add",
				addPopupDescription: "Add a new view to your series.",
				addPopupButton: "ADD",
				// Edit
				editPopupTitle: "Edit",
				editPopupDescription: "Edit the selected view",
				editPopupButton: "APPLY",
				// Add/Edit
				addEditPopupCancelButton: "CANCEL",
				addEditPopupMyContentBtn: "Select from my content",
				addEditPopupConfigureWebMapBtn: " Configure"
			},
			share: {
				firstSaveTitle: "Application successfully saved",
				firstSaveHeader: "Your application is now saved in ArcGIS Online. Please read the following answers to frequent questions.",
				firstSaveA1: "If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%",
				firstSaveA1bis: "The application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>.",
				firstSaveQ2: "Is my application shared?",
				firstSaveA2: "Currently your application is not shared. To share it, use the SHARE button.",
				shareTitle: "Share your application",
				sharePrivateHeader: "Your application is not shared, would you like to share it?",
				sharePrivateBtn1: "Share publicly",
				sharePrivateBtn2: "Share with my Organization",
				sharePrivateWarning: "Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>.",
				sharePrivateWarningWith1: "publicly",
				sharePrivateWarningWith2: "publicly and with the Organization",
				sharePrivateProgress: "Sharing in progress...",
				sharePrivateErr: "Sharing failed, try again or",
				sharePrivateOk: "Sharing updated successfully, loading...",
				sharePreviewAsUser: "Preview",
				shareHeader1: "Your application is <strong>publicly accessible</strong>.",
				shareHeader2: "Your application is accessible by your organization members (login is required).",
				shareLinkHeader: "Share the application with your audience",
				shareLinkOpen: "OPEN",
				shareQ1Opt1: "How do I keep the application private?",
				shareQ1Opt2: "How do I keep the application private or share it publicly?",
				shareA1: "Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the webmap, use <a href='%LINK2%' target='_blank'>the webmap item page</a>.",
				shareA1bis: "If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>.",
				shareQ2: "How do I edit the application later?",
				shareQ2bis: "How do I get back to the authoring interface?",
				shareA2div1: "Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>.",
				shareA2div2: "As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:",				
				shareQ3: "Where is the data stored?",
				shareA3: "The application configuration is stored in <a href='%LINK1%' target='_blank'>this webmap item</a> and <a href='%LINK2%' target='_blank'>this web application item</a>. If you have used Flickr, Picasa, Facebook or YouTube import, your images and videos remains stored there and aren't duplicated in ArcGIS Online.",
				learnMore: "Learn more",
				close: "Close"
			},
			settings: {
				header: "Application settings",
				cancel: "Cancel",
				apply: "Apply",
				tabError: "Please check for errors in all tabs"
			},
			settingsLayout: {
				title: "Layout",
				explain: "Select the layout you want to use.",
				explainInit: "You will always be able to change the layout through the settings.",
				selected: "Selected layout",
				select: "Select this layout"
			},
			settingsTheme: {
				title: "Theme",
				explain: "Choose an app theme or define your own colors.",
				label: "Header and side panel background colors"
			},
			settingsHeader: {
				title: "Header",
				explain: "Customize the header logo (maximum is 250 x 50px).",
				logoEsri: "Esri logo",
				logoNone: "No logo",
				logoCustom: "Custom logo",
				logoCustomPlaceholder: "Image URL",
				logoCustomTargetPlaceholder: "Click-through link",
				logoSocialExplain: "Customize the header top right link.",
				logoSocialText: "Text",
				logoSocialLink: "Link",
				logoSocialDisabled: "This feature has been disabled by the Administrator"
			},
			mediaSelector: {
				lblMap: "Map",
				lblPicture: "Picture",
				lblVideo: "Video",
				lblExternal: "External page"
			},
			webMapSelector: {
				radioCurrentWebMap: "Current web map",
				radioWebmapApp: "One of the other web map used in the application",
				radioAnotherWebmap: "Another webmap",
				btnSelect: "Select",
				lblOr: "or",
				fieldEnterWebmapId: "Enter a web map id",
				btnConfigure: "Configure the Map"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "My Organization",
					onlineLabel: "ArcGIS Online",
					contentLabel: "My Content",
					favoritesLabel: "My Favorites"
				},
				title: "Select Web Map",
				searchTitle: "Search",
				ok: "Ok",
				cancel: "Cancel",
				placeholder: "Enter search term"
			}
		}
	}),
	"ar":1,
	"cs":1,
	"da":1,
	"de":1,
	"es":1,
	"et":1,
	"fi":1,
	"fr":1,
	"he":1,
	"it":1,
	"ja":1,
	"ko":1,
	"lt":1,
	"lv":1,
	"nl":1,
	"nb":1,
	"pl":1,
	"pt-br":1,
	"pt-pt":1,
	"ro":1,
	"ru":1,
	"sv":1,
	"th": 1,
	"tr": 1,
	"zh-cn":1
});
