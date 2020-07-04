import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const ComicsItem = ({ comics, navigation }) => {
    return (
        <TouchableOpacity
            key={comics.num}
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Details', {item: comics})}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{comics && comics.title}</Text>
                <View style={styles.date}>
                    <Text>Date: {comics && comics.year}/</Text>
                    <Text>{comics && comics.month}/</Text>
                    <Text>{comics && comics.day}</Text>
                </View>
            </View>
            <View style={styles.imgContainer}>
                <Image source={{ uri: comics.img }} style={styles.img} />
            </View>
        </TouchableOpacity>
    )
}

export default ComicsItem;

const styles = StyleSheet.create({
    itemContainer: {
        marginTop: 15,
        height: 160,
        width: '95%',
        padding: 10,
        flexDirection: "row",
        borderColor: 'rgba(0, 0, 0, 0.4)',
        borderWidth: 1.5,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
    },
    textContainer: {
        alignSelf: "flex-start",
        width: '40%',
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "500"
    },
    date: {
        paddingTop: 20,
       display: "flex",
       flexDirection: "row"
    },
    imgContainer: {
        alignSelf: "flex-end",
    },
    img: {
        width: 180,
        height: 140,
        borderColor: 'black',
        borderWidth: 1,
    }
});
