import React from 'react';
import { Location, Order, OrderDetail } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import themeReducer from './stores/themeReducer';
import Tabs from "./navigation/tabs";
import {
    OnBoarding,
    SignIn,
    SignUp,
    ForgotPassword,
} from './screens'

const Stack = createStackNavigator();

const store = createStore(
    themeReducer,
    applyMiddleware(thunk)
)

const App = () => {

    React.useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'OnBoarding'}
                    >
                    <Stack.Screen
                        name="OnBoarding"
                        component={OnBoarding}
                    />

                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                    />

                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                    />

                    <Stack.Screen
                        name="ForgotPassword"
                        component={ForgotPassword}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Tabs}
                    />

                    <Stack.Screen
                        name="Location"
                        component={Location}
                    />

                    <Stack.Screen
                        name="Order"
                        component={Order}
                    />

                    <Stack.Screen
                        name="OrderDetail"
                        component={OrderDetail}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App;