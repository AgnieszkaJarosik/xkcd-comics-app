import React from "react";
import { Image, StyleSheet } from "react-native";

const ComicsItem = ({ route, navigation }) => {
    console.log(route, navigation)
    const item = route && route.params.item;

    return <Image source={{ uri: item.img }} style={styles.img} resizeMode={"contain"}/>
}

export default ComicsItem;

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: "100%",
        backgroundColor: "white"
    }
});
