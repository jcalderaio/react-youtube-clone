import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "search-bar": {
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "textAlign": "center"
    },
    "search-bar input": {
        "width": "75%"
    },
    "video-item img": {
        "maxWidth": 64
    },
    "video-detail details": {
        "marginTop": 10,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "border": "1px solid #ddd",
        "borderRadius": 4
    },
    "list-group-item": {
        "cursor": "pointer"
    },
    "list-group-item:hover": {
        "backgroundColor": "#eee"
    }
});