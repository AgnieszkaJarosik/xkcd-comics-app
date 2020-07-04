import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

const ComicsItem = ({ route, navigation }) => {
    const item = route && route.params.item;
    console.log(item)
    return (
        <View style={styles.imgContainer}>
            <Image source={{ uri: item.img }} style={styles.img} />
        </View>
    )
}

export default ComicsItem;

const styles = StyleSheet.create({
    imgContainer: {
        marginTop: 20,
    },
    img: {
        width: "100%",
        height: 500,
        borderColor: 'black',
        borderWidth: 1,
    }
});
