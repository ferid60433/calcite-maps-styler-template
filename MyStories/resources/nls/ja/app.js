define({
	header: {
		start: "開始",
		searchStories: "ストーリーの検索...",
		filter: "フィルター",
		sort: "並べ替え",
		sortColon: "並べ替え:",
		numResults: "結果: {{NUM_RESULTS}}",
		sortBy: "並べ替え",		
		dateModified: "変更日",		
		title: "タイトル",
		type: "種類",
		views: "ビュー",
		errors: "エラー",
		filterBy: "フィルター",
		filterItems: "フィルター アイテム",
		apps: "アプリ",
		sharing: "共有",
		clearAll: "すべてクリア",
		clearSearch: "検索をクリア",
		logOut: "ログ アウト",
		mainQuote: "ストーリーテリングは、今日の世界にアイデアを伝えるための最も説得力のある方法です。",
		quoteSource: "Robert McKee",
		checkYourStories: "ストーリーの確認",
		createStory: "ストーリーの作成",
		totalStories: "ストーリーの合計数: {{NUM_STORIES}}",
		noIssues: "正常に動作しています",
		userStories: "{{USER_NAME}} のストーリー",
		headerDisabledTooltip: "処理中です。しばらくお待ちください...",
		notOnTouch: "タッチ デバイスでは使用できません",		
	},
	deleteModal: {
		title: "削除の確認",
		warningText: "このストーリーを削除しますか？ 削除すると元に戻せなくなります。",
		deleteText: "削除",
		cancel: "キャンセル" 
	},
	loading: {
		loadingText: "ストーリーを読み込んでいます..." 
	},
	cantFindStories: {
		whereAreStories: "ストーリーが表示されない理由は？",
		notSeeExplanation: "[マイ ストーリー] は、{{STORY_MAP_TOUR}}、{{JOURNAL}}、{{MAP_SERIES}} および {{SWIPE_SPYGLASS}} アプリケーションを使用して作成された、ArcGIS Online でホストされているストーリー マップだけをリスト表示します。詳細については、{{FAQ}} をご参照ください。",
		faq: "FAQ",
		followingStoriesToUpdate: "以前のバージョンのアプリケーションで作成された次のストーリーは、[マイ ストーリー] にリスト表示するために更新する必要があります。",
		gettingStories: "以前のバージョンのアプリケーションで作成され、更新する必要のあるストーリーを検索しています...",
		title: "タイトル",
		typeOfStoryMap: "種類",
		lastModified: "最終更新日",
		allUpToDate: "以前のバージョンのアプリケーションで作成されたストーリーのうち、更新が必要なものはありません。",
		updateAll: "すべて更新",
		errorScanningForStories: "ストーリーの検索中にエラーが発生しました。",
		close: "閉じる",
		updates: "更新",
		updatingNumberOfNumber: "更新状況: {{CURRENT_NUMBER}}/ {{TOTAL}}",
		updatingNumberOfNumberAlt: "更新状況: {{CURRENT_NUMBER}}/ {{TOTAL}}",
		updateSucceeded: "更新が正常に完了しました。",
		reloadingStories: "ストーリーを再度読み込んでいます...",
		errorUpdatingStories: "ストーリーの更新中にエラーが発生しました。",
		partialUpdateMessage: "ストーリーの更新が正常に完了しました: {{NUM_UPDATED}}" 
	},
	signIn: {
		signInTitle: "ストーリー マップにサイン イン",
		signInTo: "既存の ArcGIS Online アカウントでサイン イン:",
		explanationOne: "説得力のあるストーリー マップを作成して、ストーリーを伝えます。",
		explanationTwo: "ストーリー マップに ArcGIS Online のマップとデータを使用します。",
		explanationThree: "ストーリー マップを管理して、コンテンツの状態を確認します。",
		dontHaveAccount: "ArcGIS Online アカウントをお持ちではないですか？ サイン アップ:",
		publicAccount: "無料の非商用個人向けプランのアカウント",
		orgAccount: "無料のトライアル ArcGIS サブスクリプション",
		timeExpired: "このサイン インは期限切れです。もう一度サイン インして、終了した場所を選択します。",
		apiDidntLoad: "一部のコンテンツが正常に読み込まれていません。ページを更新してください。",
		needAccount: "アカウントが必要な場合",
		letsGo: "次に進みましょう" 
	},
	sharingLevel: {
		public: "すべての人に公開",
		private: "プライベート",
		organization: "組織",
		changedSharing: "共有レベルが変更されました。",
		unableToChange: "共有レベルを変更できません。",
		partOfMap: "このアイテムはマップ内にあります。その共有レベルを変更するには、マップの共有レベルを変更する必要があります。",
		storyPublicContentOrg: "ストーリーは一般ユーザーに公開されているため、そのコンテンツを組織のみと共有することはできません。",
		storyPublicContentPrivate: "ストーリーは一般ユーザーに公開されているため、そのコンテンツを未共有にすることはできません。",
		mapOrg: "組織とマップを共有すると、マップに問題が生じる恐れがあります",
		layerOrg: "組織とレイヤーを共有すると、マップに問題が生じる恐れがあります",
		mapPrivate: "マップを未共有にすると、マップに問題が生じる恐れがあります",
		layerPrivate: "レイヤーを未共有にすると、マップに問題が生じる恐れがあります" 		
	},
	collectionList: [
		"主義主張",
		"建築とデザイン",
		"環境保全と持続可能性",
		"文化",
		"観光",       
		"災害と復旧",           
		"経済と発展",
		"エンターテイメント",
		"歴史",
		"インフラストラクチャ",                  
		"マーケティング",                        
		"自然と環境",
		"ニュースとイベント",
		"海洋",                         
		"公園とレクリエーション",
		"人々と社会",               
		"計画と分析",
		"パブリック アート",
		"科学技術",
		"スポーツ",                           
		"旅行記" 
	],
	types: {
		custom: "カスタム",
		notSpecified: "種類が指定されていません" 
	},
	storyMap: {
		shared: "共有",		
		saveFailed: "保存中にエラーが発生しました",
		numViews: "閲覧数: {{NUM_VIEWS}}",
		editStory: "ストーリーの編集",
		viewLive: "ライブ ビュー",
		preview: "プレビュー",
		"delete": "削除",
		modified: "変更済み {{DATE}}",
		summary: "サマリー",
		loading: "読み込んでいます...",		
		collapse: "折りたたむ",
		close: "閉じる",
		hide: "非表示",
		notAvailableWhenBroken: "ストーリーに次の問題があります",
		cantBeDeleted: "このストーリーは、削除保護が有効になっています。無効にするには、ArcGIS Online のアイテム ページをご参照ください。",
		shareDialog: {
		title: "世界中の人々とストーリーを共有しましょう",
		notPublicWarning: "ストーリーは組織と共有されています。組織のメンバーのみが表示できます。",
		embedStory: "ストーリーの組み込み",
		shortLink: "ショートリンク",
		hideHeaderBar: "ヘッダー バーの非表示",
		copied: "コピー済み",
		small: "小",
		medium: "中",
		large: "大",
		custom: "カスタム",
		widthAbbreviation: "W キー",
		heightAbbreviation: "H キー",
		emptyDimension: "寸法を入力します。",
		seeExample: "組み込みストーリーのプレビュー",
		removeHeader: "アプリケーション ヘッダーの非表示" 
		},		
		maps: {
		unableRetrieveTitle: "マップを取得できません",
		unableRetrieveDescription: "このストーリー マップのマップを取得できませんでした。" 
		},
		images: {
		unableRetrieveTitle: "画像を取得できません",
		unableRetrieveDescription: "このストーリー マップの画像を取得できませんでした。" 
		},
		tags: {
		tags: "タグ",
		collectionTags: "主題",
		selectASubject: "主題の選択",
		save: "保存",
		saved: "保存済み",
		errorSaving: "保存中にエラーが発生しました",
		tagTip: "ヒント: タグを付けると、ユーザーは ArcGIS Online 上であなたのストーリーを見つけやすくなります。タグの関連性が高いほど、あなたのストーリー マップが閲覧される可能性が高くなります。" 
		},
		submitToGallery: {
		gallerySubmission: "ストーリー マップ ギャラリー",
		canSubmitIf: "ストーリーに次の内容が含まれている場合、ストーリーをギャラリーに推薦できます。",
		hasOwnImage: "カスタム サムネイル",
		chosenSubject: "主題と複数のタグ",
		chosenSubjectAlt: "{{SUBJECT}} と複数のタグ",
		storyMapTopicSubject: "主題",
		sharedPublicly: "すべての人に公開",
		noBrokenContent: "コンテンツにリンク切れがない",
		nominateToGallery: "ギャラリーに推薦",
		comingSoon: "近日中に公開予定",
		submitted: "送信済み",
		errorSubmitting: "送信中にエラーが発生しました",
		ourGallery: "ストーリー マップ ギャラリー",
		galleryTip: "{{THE_GALLERY}} は、ストーリー マップの一覧で、優れたストーリー マップの例を紹介しています。あなたのストーリーが選ばれた場合、そのストーリーは送信後 10 日以内に追加されます。推薦された数により、あなたのストーリーが追加されることをお約束するものではありません。" 
		},
		placeholders: {
		noSummary: "サマリーがありません。クリックして追加してください。" 
		},
		errors: {
		cantDeleteStory: "ストーリーを削除できません。",
		unableToFind: "コンテンツが見つかりません",
		unableToRetrieve: "このストーリー マップのコンテンツを取得できませんでした。" 		
		},
		socialSharing: {
		availableWhenPublic: "このオプションは、ストーリーが一般に公開されると利用可能になります" 
		},
		dialog: {
		back: "戻る",
		close: "閉じる",
		cancel: "キャンセル" 
		},
		imagePicker: {
		changeDefault: "デフォルト イメージの変更",
		changeImage: "サムネイルの変更",
		uploadImage: "サムネイルのアップロード",
		chooseImage: "サムネイルの選択",
		chooseAnImage: "画像の選択",
		notInIEVersion: "この機能は、Internet Explorer {{VERSION_NUMBER}} では利用できません。",
		or: "または",
		uploadAnImage: "画像のアップロード",
		supportedFileTypes: ".png、.jpg、.gif をサポート",
		imageSizeMessage: "画像は、幅 286 ピクセル、高さ 190 ピクセル以上が必要です。",
		minimumDimensions: "最小: 286 x 190 ピクセル",
		imagesLoading: "画像を読み込んでいます...",
		noImages: "このストーリーには画像がありません",
		errorLoading: "このストーリーに画像を取得できません",
		clickBelowTip: "下のボタンをクリックして画像をアップロードします。",
		dragAndDrop: "ドラッグ アンド ドロップ",
		cropImage: "画像のトリミング",
		saveImage: "画像の保存",
		save: "保存",		
		savingImage: "画像を保存しています...",
		saved: "保存されました",
		errorSaving: "画像を保存できません。",
		skipAndCrop: "スキップして自動でトリミング",
		wrongFormat: "このファイル タイプはサポートされていません。",		
		noCropWarning: "この画像はトリミングできませんが、ストーリーのサムネイルとして、元の寸法 ({{WIDTH_PIXELS}} x {{HEIGHT_PIXELS}} ピクセル) で保存できます。" 
		}
	},
	content: {
		media: {
		maps: "マップ",
		images: "画像",
		videos: "ビデオ",
		webpages: "Web ページ",
		tags: "タグ",
		gallery: "ギャラリー" 
		},
		headers: {		
		status: "ステータス",
		source: "ソース",
		name: "名前",
		shared: "共有" 
		},		
		component: {
		mapTour: "ポイント番号",
		bullet: "箇条書き",
		tab: "タブ",
		accordion: "セクション",		
		mapJournal: "セクション" 
		},
		titleType: {
		mapTour: "キャプション",
		mapJournal: "URL",
		mapSeries: "URL" 
		},		
		actions: {
		viewMap: "マップの表示",
		editMap: "マップの編集",
		viewLayer: "レイヤーの表示" 		
		},
		contentType: {
		mainStage: "主要なステージ アクション",
		sidePanel: "サイド パネル コンテンツ" 
		},
		notification: {
		refreshExplanation: "ストーリーをもう一度確認してください",
		checking: "チェック中...",
		foundSomeIssues: "問題が見つかりました",
		noIssuesFound: "問題は見つかりませんでした",
		storyPublic: "ストーリーはすべての人に公開されました",
		storyOrg: "ストーリーは組織と共有されました",
		storyPrivate: "ストーリーは未共有になりました",
		mapPublic: "マップはすべての人に公開されました",
		mapOrg: "マップは組織と共有されました",
		mapPrivate: "マップは未共有になりました",
		layerPublic: "レイヤーはすべての人に公開されました",
		layerOrg: "レイヤーは組織と共有されました",
		layerPrivate: "レイヤーは未共有になりました",
		contentPublic: "コンテンツはすべての人に公開されました",
		contentOrg: "コンテンツは組織と共有されました",
		contentPrivate: "コンテンツは未共有になりました",
		storyAndContentPublic: "ストーリーとそのコンテンツはすべての人に公開されました",
		storyAndContentOrg: "ストーリーとそのコンテンツは組織と共有されました",
		storyAndContentPrivate: "ストーリーとそのコンテンツは未共有になりました",
		shareBulkPrompt: "ストーリーのコンテンツを共有しますか？",
		yes: "はい",
		no: "なし",
		premiumPublicSuccess: "プレミアム コンテンツに誰でもアクセスできるようになりました",
		subscriptionPublicSuccess: "サブスクリプション コンテンツに誰でもアクセスできるようになりました" 
		},
		errors: {
		publicDisabled: "[すべの人への公開] は管理者によって無効化されています",
		noMapName: "マップ名を取得できませんでした",
		notPublic: "公開されていません",
		inaccessible: "アクセスできません",
		deleted: "削除済み",
		cantAccessVideo: "ビデオにアクセスできませんでした",
		noStoriesFound: "コンテンツにストーリー マップが見つかりませんでした。",
		cantShowStories: "ストーリー マップを表示できません。後でもう一度お試しください。",
		consolationSearch: "ストーリーが見つかりませんでした。",
		notCompatibleWithBrowser : "ストーリーは、バージョン {{VERSION_NUMBER}} 以前の Internet Explorer ではサポートされていません。",
		pleaseUpdateBrowser: "ブラウザーを更新してください。",
		searchTip: "ストーリー マップをもう少し簡素化してみてください。",
		consolationNoStories: "マイ ストーリーへようこそ！",
		noStoriesTip: "初めてのストーリー マップ作成のために、アプリの種類を確認しましょう。",
		letsGo: "次に進む",		
		cantChangeSharingLevel: "共有レベルを変更できません",
		cantChangeSharingLevels: "共有レベルを変更できません",
		errorUpdatingTitle: "タイトルを更新中にエラーが発生しました",
		errorUpdatingSummary: "サマリーを更新中にエラーが発生しました",
		noEmptyTitle: "タイトルは空にできません",
		cantUpdatePremiumContent: "プレミアム コンテンツを更新できません",
		cantUpdateSubscriptionContent: "サブスクリプション コンテンツを更新できません",
		createFirstStory: "最初のマイ ストーリーの作成" 
		},
		tooltipErrors: {
		mapHasBeenDeleted: "マップは削除されています",
		layerHasBeenDeleted: "レイヤーは削除されています",
		mapIsInaccessible: "マップにアクセスできません",
		layerIsInaccessible: "レイヤーにアクセスできません",		
		mapNotYoursNotAccessible: "マップが他のユーザーに所有されているためアクセスできません",
		layerNotYoursNotAccessible: "レイヤー「{{LAYER_NAME}}」が他のユーザーに所有されているためアクセスできません",
		layerServiceOkItemNot: "レイヤー「{{LAYER_NAME}}」は、削除される、またはアクセスできないアイテムとして追加されました",
		mapOthersSharedBelowLevel: "マップがあなたに所有されておらず、すべての人に公開されていません",
		layerOthersSharedBelowLevel: "レイヤー「{{LAYER_NAME}}」があなたに所有されておらず、すべての人に公開されていません",
		noMapNoDetails: "マップの詳細がないため、レイヤーについて説明できません。",
		mapIsPrivate: "マップは未共有です",
		mapIsOrg: "マップは組織のみと共有されています",
		layerIsPrivate: "レイヤー「{{LAYER_NAME}}」は未共有です",
		layerIsOrg: "レイヤー「{{LAYER_NAME}}」は組織のみと共有されています",
		imageInaccessible: "この画像にアクセスできません",
		videoInaccessible: "このビデオにアクセスできません",
		webpageInaccessible: "この Web ページにアクセスできません",
		layerSecureService: "レイヤー「{{LAYER_NAME}}」はセキュアなサービスです",
		mapSecureService: "マップはセキュアなサービスです",
		layerConsumesCredits: "レイヤー「{{LAYER_NAME}}」はプレミアム コンテンツで、クレジットを消費します",
		layerSubscriptionContent: "レイヤー「{{LAYER_NAME}}」は、サブスクリプション コンテンツです",
		mapConsumesCredits: "マップは、プレミアム コンテンツで、クレジットを消費します",
		mapSubscriptionContent: "マップは、サブスクリプション コンテンツです" 
		},
		tooltipWarnings: {
		cantScanThisTypeAlt: "このタイプのレイヤーを確認できません",
		cantScanThisType: "レイヤー「{{LAYER_NAME}}」は、確認できるタイプのレイヤーではありません",
		webpageNotScanned: "Web ページの問題は確認されていません" 
		},
		scanningErrors: {
		deletedMap: "削除されたコンテンツ",
		inaccessibleMap: "アクセスできないマップ コンテンツ",
		notYoursNotAccessible: "コンテンツがあなたに所有されておらず、すべての人に公開されていません",
		serviceOkItemNot: "動作中のレイヤーですが、アクセスできないアイテム",
		someContentNotPublic: "コンテンツがすべての人に公開されていません",
		someContentPrivate: "未共有のコンテンツ",
		othersSharedBelowLevel: "コンテンツがあなたに所有されておらず、すべての人に公開されていません",
		premiumContent: "プレミアム コンテンツ",
		subscriptionContent: "サブスクリプション コンテンツ",
		secureService: "セキュアなサービス",
		inaccessibleImage: "アクセスできない画像",
		inaccessibleVideo: "アクセスできないビデオ",
		inaccessibleWebpage: "アクセスできない Web ページ" 			
		},
		scanningErrorTips: {
		deletedMapTip: "ヒント: Web マップを開き、リンクが切れたコンテンツを削除するか、ストーリーから Web マップを削除します。",
		inaccessibleMapTip: "ヒント: Web マップを開き、リンクが切れたコンテンツを削除するか、ストーリーから Web マップを削除します。",
		notYoursNotAccessibleTip: "ヒント: Web マップを開き、ストーリーからレイヤーまたはマップを削除します。",
		serviceOkItemNotTip: "レイヤーは、アクセスできない、または削除されるアイテムとして追加されました。レイヤーは動作していますが、これがマップに影響する可能性があります (ポップアップ、シンボル)。",
		ignore: "無視",
		fix: "修正",
		clickToShareOrg: "ボタンをクリックして、このコンテンツすべてを組織と共有するか、共有ボタンをクリックして各アイテムを手動で変更します。",
		clickToSharePublic: "ボタンをクリックして、このコンテンツ全体をすべての人に公開するか、共有ボタンをクリックして各アイテムを手動で変更します。",
		shareOrg: "組織と共有",
		sharePublicly: "すべての人に公開",
		othersSharedBelowLevelTip: "ヒント: ストーリーのコンテンツの一部は、{{USER_NAME}} によって所有されているため、ストーリーを閲覧する他のユーザーは表示できない場合があります。",		
		secureServiceTip: "ヒント: ストーリーからプレミアム サービスを削除するか、{{HERE}} に記載の手順に従います。",
		blogArticle: "こちら",
		premiumContentTip: "ストーリーには、すべての人に公開にすると{{CREDITS}}を消費するプレミアム コンテンツが含まれています。ストーリーをすべての人に公開して続行するか、ストーリーからレイヤーを削除します。",
		premiumContentPublicTip: "ストーリーには、すべての人が利用可能になると{{CREDITS}}を消費するプレミアム コンテンツが含まれています。これらのレイヤーをすべての人に公開して確認するか、ストーリーからレイヤーを削除します。",
		subscriptionContentTip: "ストーリーに、デフォルトではすべての人に公開されていないサブスクリプション コンテンツが含まれています。これらのレイヤーを公開する (クレジットは消費されません) か確認し、ストーリーからレイヤーを削除します。",		
		agolCredits: "ArcGIS Online クレジット",
		credits: "クレジット",
		makePublic: "すべての人に公開する",
		confirm: "確認",
		inaccessibleImageTip: "ヒント:  不足している画像を指定するか、その画像に対する参照を削除します。",
		inaccessibleVideoTip: "ヒント: 不足しているビデオを指定するか、その画像に対する参照を削除します。",
		inaccessibleWebpageTip: "ヒント: 不足している Web ページを指定するか、その画像に対する参照を削除します。" 
		},
		removeLayer: {
		title: "レイヤーの問題の解決",
		layersWithIssue: "この問題があるレイヤー: {{NUM_WITH_ISSUE}}",
		issueExplanation: "レイヤー「{{LAYER_NAME}}」は、アクセスできない、または削除されるアイテムとして追加されました。レイヤーは動作していますが、これがマップに影響する可能性があります (ポップアップ、シンボル)。アイテムがストーリーに重要だったのかわかりません。",
		issueSolution: "この問題を解決するには、次の URL を使用して、マップを編集し、レイヤーを削除して、レイヤーをマップに追加できます。",
		editMap: "マップの編集",
		clickBelowWhenDone: "編集が完了したら、以下のボタンをクリックします。",
		rescanAndClose: "再スキャンして閉じる" 
		},		
		info: {
		ownedBy: "このアイテムの所有者: {{USER_NAME}}",
		unknownUser: "他のユーザー",
		untitledSection: "(無題のセクション)",
		introRecord: "はじめに" 
		},		
		layers: {
		layersHeader: "レイヤー",
		noLayers: "(レイヤーなし)",
		basemapParens: "(ベースマップ)" 
		},
		images: {
		thumbnails: "サムネイル",
		thumbnail: "サムネイル",
		thumbnailParens: "(サムネイル)" 
		},
		general: {
		noTitle: "(無題)",
		loading: "読み込んでいます..." 
		}		
	},
	infographics: {
		mapJournal: {
		firstTitle: "セクション",
		secondTitle: "シンボル",
		secondValueA: "サイド パネル",
		secondValueB: "フローティング パネル",
		thirdTitle: "マップ" 
		},
		mapTour: {
		firstTitle: "ツアー ポイント",
		secondTitle: "シンボル",
		secondValueA: "統合済み",
		secondValueB: "3 パネル",
		thirdTitle: "ベースマップ",
		thirdValueLoading: "読み込んでいます...",
		thirdValueUnknown: "不明" 
		},
		mapSeries: {		
		firstTitleA: "箇条書き",
		firstTitleB: "セクション",
		firstTitleC: "タブ",
		secondTitle: "シンボル",
		secondValueA: "箇条書き",
		secondValueB: "サイド アコーディオン",
		secondValueC: "タブ付き",
		thirdTitle: "マップ" 
		},
		swipeSpyglass: {
		firstTitle: "主要地",
		secondTitle: "シンボル",
		secondValueA: "スワイプ",
		secondValueB: "スパイグラス",
		thirdTitle: "マップ" 
		}
	},
	progress: {
		checkingStories: "ストーリーに問題がないか確認しています...",
		stop: "停止",
		exit: "終了",
		dismiss: "終了",
		done: "確認が完了しました。",
		noStoriesWithIssuesLower: "問題は見つかりませんでした。",
		storiesErrorFree: "ストーリーに問題はありません",
		scanAllError: "スキャンできません - ストーリーを取得できませんでした",
		scanProgress: "{{NUM_SCANNED}} / {{NUM_TOTAL}}",
		scanStopped: "確認したストーリー数:  {{NUM_SCANNED}}、問題のあるストーリー数: {{ISSUE_STORIES}}",
		storiesWithIssues: "問題のあるストーリー数: {{NUM_STORIES}}" 
	}	
});
