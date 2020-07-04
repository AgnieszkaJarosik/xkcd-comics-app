import {FlatList, Text, TouchableOpacity, Image, StyleSheet, View} from "react-native";
import useFetch from "../hooks/useFetch";
import React from "react";
import ListHeader from './ListHeader';

const ComicsList = () => {
    const { response, error, doFetch } = useFetch();

    return (
        <FlatList
            data={response}
            ListHeaderComponent={<ListHeader  />}
            ListHeaderComponentStyle={styles.header}
            contentContainerStyle={styles.container}
            renderItem={ ({item}) => {
                // console.log(item);
                return(
                    <TouchableOpacity key={item.num} style={styles.itemContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item && item.title}</Text>
                        </View>
                        <View style={styles.imgContainer}>
                            <Image source={{ uri: item.img }} style={styles.img} />
                        </View>
                    </TouchableOpacity>
                )
            }}
        >
        </FlatList>
    )
}

export default ComicsList;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        width: "100%",
        padding: 0,
        margin: 0
    },
    itemContainer: {
        marginTop: 15,
        height: 160,
        width: '95%',
        padding: 10,
        flexDirection: "row",
        borderColor: 'rgba(0, 0, 0, 0.4)',
        borderWidth: 1.5,
        borderRadius: 5,
        backgroundColor: 'rgba(242, 242, 242, 0.5)'
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
