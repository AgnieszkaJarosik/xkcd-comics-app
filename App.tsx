import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ComicsList from './components/ComicsList';
import ComicsDetails from "./components/ComicsDetails";

const Stack = createStackNavigator();

const App = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        title: 'xkcd',
                        headerStyle: {
                            backgroundColor: 'rgba(255,255,255,0.9)',
                            height: 70,
                        },
                        headerTitleStyle: {
                            color: "black",
                            fontWeight: "bold",
                            fontSize: 32,
                            textAlign: 'center'
                        }
                    }} >
                    <Stack.Screen name="Home" component={ ComicsList } />
                    <Stack.Screen name="Details" component={ ComicsDetails } />
                </Stack.Navigator>
            </NavigationContainer>

        </>
    );
}

export default App;


