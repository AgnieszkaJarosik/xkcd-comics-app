import {FlatList, Text, TouchableOpacity, Image} from "react-native";
import useFetch from "../hooks/useFetch";
import React from "react";

const ComicsList = () => {
    const { response, error, doFetch } = useFetch();

    return (
        <FlatList
            data={response}
            renderItem={ ({item}) => {
                console.log(item);
                return(
                    <TouchableOpacity >
                        <Text>{item && item.title}</Text>
                        <Image source={{ uri: item.img}} />
                    </TouchableOpacity>
                )
            }}
        >
        </FlatList>
    )
}

export default ComicsList;
