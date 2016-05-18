﻿/*global define */
/*
 | Copyright 2012 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
  "map": {
    "error": "Det gick inte att skapa kartan"
  },
  "tooltips": {
    "search": "Sök",
    "locate": "Aktuell plats",
    "markup": "Skicka in rättelse",
    "collect": "Filtrera/redigera",
    "dijitLegend": "Visa teckenförklaringen",
    "filter": "Filtrera kartlager",
    "basemap": "Byt baskarta",
    "share": "Dela",
    "shareViaEmail": "Dela via e-post",
    "shareViaFacebook": "Dela via Facebook",
    "shareViaTwitter": "Dela via Twitter",
    "print": "Skriv ut karta",
    "fetchPrint": "Visa kartutskriften",
    "landscape": "Liggande sidorientering",
    "portrait": "Stående sidorientering",
    "help": "Hjälp"
  },
  "labels": {
    "email": "e-post",
    "Facebook": "Facebook",
    "Twitter": "Twitter",
    "title": "rubrik",
    "author": "upphovsman"
  },
  "prompts": {
    "search": "Sök:",
    "markup": "Rita",
    "mapLayers": "Kartlager:",
    "layerFields": "Sök lagerfält:"
  },
  "messages": {
    "geolocationDenied": "Den här webbplatsen har inte behörighet att hämta den aktuella platsen",
    "geolocationUnavailable": "Webbläsaren kunde inte hämta den aktuella platsen",
    "geolocationTimeout": "Webbläsaren kunde inte hämta den aktuella platsen inom rimlig tid",
    "noSearchLayerConfigured": "Inget söklager har konfigurerats",
    "searchLayerMissing": "Det här söklagret finns inte i kartan",
    "searchLayerNotSearchable": "Det gick inte att hitta fält för kartlagret.<br><br>Kontrollera att lagret finns i roten för kartinnehållet. Inbäddade tjänster, till exempel dynamiska karttjänster i ArcGIS for Server, måste läggas till i kartan ett lager i taget (inklusive lagerindexnummer) för att användas som söklager. Tiletjänster går inte att använda som söklager.",
    "searchFieldMissing": "Det här fältet finns inte i kartans söklager",
    "allSearchFieldsMissing": "Inget av dessa fält hittades i kartans söklager",
    "fieldNotFound": "Det här fältet finns inte i något av kartlagren",
    "yourContentSubmitted": "Ditt innehåll har skickats in. Tack.",
    "noConfiguration": "Det gick inte att få åtkomst till applikationens konfiguration",
    "unableToLaunchApp": "Det gick inte att starta applikationen"
  }
});