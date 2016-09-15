﻿define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "Twitter-Suche"
    },
    errors:{
      createMap: "Karte kann nicht erstellt werden",
      general: "Fehler"
    }
  },
  tools:{
     time: {
      // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
      // yyyy: full year, e.g. 2011
      // MMMM: full month name, e.g. December
      // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
      // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
      // a: am/pm
      // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
      // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
      // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
      datePattern: "d. MMMM, h:mm a",
      timeRange: "<b>Tweets von:</b> ${start_time} bis ${end_time}"
    },
    tweets: {
        "screenName": "Name der Bildfläche",
        "signIn": "Melden Sie sich an,",
        "switchAccount": "Konto wechseln",
        label: "Tweets",
        title: "Tweets",
        status: "Tweets werden abgerufen und die Zeitachse wird generiert...",
        error: "Keine Ergebnisse gefunden",
        datePattern: "d MMM yy",
        timePattern: "h:mma",
		search:{
			label: "Suchen",
			title: "Twitter durchsuchen",
			placeholder: "Twitter nach Schlagwörtern durchsuchen"
		},
		clear:{
			label: "Löschen",
			title: "Karte löschen"
		}
			
	 }
    }
})
);