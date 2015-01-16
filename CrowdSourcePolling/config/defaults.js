﻿/*global define */
/*jslint browser:true,sloppy:true */
/*
 | Copyright 2014 Esri
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
    //Default configuration settings for the application. This is where you'll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings and url parameters.
    "appid": "",
    "webmap": "85a0cb1b165c45a0bf1321ce0d44b25b",
    "oauthappid": null, //"AFTKRmv16wj14N3z",
    //Group templates must support a group url parameter. This will contain the id of the group.
    //group: "",
    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "./proxy/proxy.ashx",

    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    "title": "Title",
    "action": "New",
    "color": "#206bdb",
    "allowUpVotes": false,
    "allowFacebook": false,
    "allowTwitter": false,
    "ideasLayer": null,
    "commentsTable": null,



    // ** CROWD SOURCING PARAMETERS **//
    "types" : "Bike Path,Bike Stand,Off-road Bike Path",
    "enableComments" : true,
    "crowdFields" : ["Date", "Type", "Name", "Avatar", "Comment", "Likes"],
    "commentFields" : ["ParentId", "Date", "Name", "Avatar", "Comment"],
    "locatorURL": "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",

    // ** SOCIAL MEDIA PARAMETERS **//
    "twitterUrl" : location.protocol + "//utility.arcgis.com/tproxy/proxy/1.1/search/tweets.json",
    "twitterAccountUrl" : location.protocol + "//utility.arcgis.com/tproxy/proxy/1.1/account/settings.json",
    "twitterUsersUrl" : location.protocol + "//utility.arcgis.com/tproxy/proxy/1.1/users/show.json",
    "twitterSigninUrl" : location.protocol + "//utility.arcgis.com/tproxy/signin",
    "facebookAppId" : "778596385537220", // "778404965556362",




    "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    "units": null,
    //If your application needs to edit feature layer fields set this value to true. When false the map will
    //be created with layers that are not set to editable which allows the FeatureLayer to load features optimally.
    "editable": true,
    "helperServices": {
        "geometry": {
            "url": "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
        },
        "printTask": {
            "url": null
        },
        "routeTask": {
            "url": null
        },
        "elevationSync": {
            "url": null
        },
        "geocode": [{
            "url": null
        }]
    }
});