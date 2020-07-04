import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ComicsList from './components/ComicsList';
import ComicsDetails from "./components/ComicsDetails";

const Stack = createStackNavigator();

const List = ({navigation}) => (
    <View style={styles.container}>
        <ComicsList navigation={navigation} />
    </View>
)

const App = () => {
    return (
        <>
            <StatusBar backgroundColor="white" />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        title: 'xkcd',
                        headerStyle: {
                            backgroundColor: 'gray',
                            height: 70,
                        },
                        headerTitleStyle: {
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 32,
                            textAlign: 'center'
                        }
                    }}
                >
                    <Stack.Screen name="Home" component={List} />
                    <Stack.Screen name="Details" component={ComicsDetails} />
                </Stack.Navigator>
            </NavigationContainer>

        </>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 0,
        padding: 0,
        width: "100%"
    }
});

