import React from "react";
import {FlatList, StyleSheet} from "react-native";

import useFetch from "../hooks/useFetch";
import ComicsItem from "./ComicsItem";

const ComicsList = ({navigation=null}) => {
    const { response, error, doFetch } = useFetch();

    return (
        <FlatList
            data={response}
            contentContainerStyle={styles.container}
            renderItem={ ({item}) => <ComicsItem comics={item} navigation={navigation}></ComicsItem> } >
        </FlatList>
    )
}

export default ComicsList;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
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
