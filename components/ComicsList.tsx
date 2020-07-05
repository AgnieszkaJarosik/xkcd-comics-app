import React from "react";
import {FlatList, StyleSheet, Text} from "react-native";

import useFetch from "../hooks/useFetch";
import ComicsItem from "./ComicsItem";

const ComicsList = ({ navigation=null }) => {
    const { response, error, loading, doFetch } = useFetch();

    const handleEnd = async () => {
        await doFetch();
    }

    if(error){
        return <Text>Error...</Text>
    }

    return (
        <FlatList
            data={response}
            // refreshing={loading}
            // scrollEnabled={loading}
            onEndReached={()=> handleEnd()}
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
    }
});
