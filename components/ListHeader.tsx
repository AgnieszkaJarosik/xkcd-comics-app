import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const ListHeader = () => {
    return (
        <View style={styles.title}>
            <Text style={styles.titleText}>xkcd</Text>
        </View>
    );
};

export default ListHeader;

const styles = StyleSheet.create({
    title: {
        width: "100%",
        marginTop: "10%",
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        alignItems: "center",
        justifyContent: "center",
        height: 70,
    },
    titleText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 32
    }
});
