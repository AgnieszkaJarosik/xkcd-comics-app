import React from "react";
import { Image, StyleSheet } from "react-native";

type ComicsDetailsProps = { route: any, navigation: any };

const ComicsDetails = ({ route, navigation }: ComicsDetailsProps) => {
    const item = route && route.params.item;

    return <Image source={{ uri: item.img }} style={styles.img} resizeMode={"contain"}/>
}

export default ComicsDetails;

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: "100%",
        backgroundColor: "white"
    }
});
