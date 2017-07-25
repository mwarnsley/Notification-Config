import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "body": {
        "background": "#F1F5FC",
        "color": "#435464",
        "letterSpacing": 0.5,
        "marginTop": 50,
        "marginRight": 0,
        "marginBottom": 50,
        "marginLeft": 0,
        "height": "100%"
    },
    "html": {
        "height": "100%"
    },
    "footer": {
        "background": "#435464",
        "height": 50,
        "marginTop": 25,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "footer footer-text": {
        "color": "#FFF"
    },
    "container": {
        "maxWidth": 900,
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "width": "auto"
    },
    "navbarnavbar-inverse": {
        "background": "#435464"
    },
    "navbar-inverse navbar-brand": {
        "color": "#FFF"
    },
    "navbar-inverse navbar-nav > li > a": {
        "color": "#FFF"
    },
    "navbar-inverse navbar-nav > li > a:hover": {
        "color": "#13B690"
    },
    "navbar-inverse navbar-brand:hover": {
        "color": "#13B690"
    },
    "description": {
        "marginBottom": 25,
        "textAlign": "center"
    },
    "card-panelpanel": {
        "background": "#13B690",
        "color": "#FFF",
        "height": 315,
        "maxHeight": 315
    },
    "card-containerwell": {
        "background": "#435464",
        "height": 400,
        "maxHeight": 400
    },
    "manage-container": {
        "position": "relative"
    },
    "add-icon": {
        "color": "#435464",
        "fontSize": 16,
        "marginRight": 5
    },
    "edit-btn": {
        "color": "#FFF",
        "backgroundColor": "#13B690",
        "borderColor": "#13B690",
        "paddingTop": 7,
        "paddingRight": 10,
        "paddingBottom": 7,
        "paddingLeft": 10
    },
    "btnbtn-danger": {
        "paddingTop": 7,
        "paddingRight": 10,
        "paddingBottom": 7,
        "paddingLeft": 10
    },
    "create-container": {
        "color": "#435464",
        "fontSize": 16
    },
    "create-link": {
        "position": "absolute",
        "right": 15,
        "top": 10
    },
    "create-card-title": {
        "marginBottom": 20,
        "textAlign": "center"
    },
    "form-controlapi-text-input": {
        "height": 100,
        "maxHeight": 100,
        "width": "100%"
    },
    "btn-save": {
        "background": "#435464",
        "borderRadius": 10,
        "color": "#FFF",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "btn-save:hover": {
        "background": "#13B690"
    },
    "save-btn-container": {
        "textAlign": "center"
    },
    "api-input": {
        "marginBottom": 10
    },
    "type-container type-check": {
        "marginRight": 10
    },
    "event-container event-check": {
        "marginRight": 10
    },
    "type-container": {
        "marginBottom": 10
    },
    "event-container": {
        "marginBottom": 10
    },
    "manage-title-container": {
        "marginBottom": 20,
        "textAlign": "center"
    },
    "notification-list-title": {
        "marginBottom": 20,
        "textAlign": "center"
    },
    "create-notification-title": {
        "marginBottom": 20,
        "textAlign": "center"
    },
    "switch": {
        "position": "relative",
        "display": "inline-block",
        "width": 60,
        "height": 34
    },
    "switch input": {
        "display": "none"
    },
    "slider": {
        "position": "absolute",
        "cursor": "pointer",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "backgroundColor": "#ccc",
        "WebkitTransition": ".4s",
        "transition": ".4s"
    },
    "slider:before": {
        "position": "absolute",
        "content": "",
        "height": 26,
        "width": 26,
        "left": 4,
        "bottom": 4,
        "backgroundColor": "white",
        "WebkitTransition": ".4s",
        "transition": ".4s"
    },
    "input:checked + slider": {
        "backgroundColor": "#13B690"
    },
    "input:focus + slider": {
        "boxShadow": "0 0 1px #13B690"
    },
    "input:checked + slider:before": {
        "WebkitTransform": "translateX(26px)",
        "MsTransform": "translateX(26px)",
        "transform": "translateX(26px)"
    }
});