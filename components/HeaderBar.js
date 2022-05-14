import React from 'react';
import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Text,
    TouchableOpacityBase
} from 'react-native';
import { connect } from 'react-redux';

import { SIZES, COLORS, FONTS, icons } from "../constants";
import { toggleTheme} from '../stores/themeAction';


const HeaderBar = ({appTheme, toggleTheme}) => {
   function toggleThemeHandler(){
    if(appTheme.name == "light"){
        toggleTheme("dark")
    } else {
        toggleTheme("light")
    }
   }
    return (
        <SafeAreaView
            style={{
                height: 100,
                width: "100%",
                backgroundColor: COLORS.purple,
                flexDirection: 'row'
            }}
        >
            {/*Greetings */}
            <View
                style={{
                    flex: 1,
                    paddingLeft: SIZES.padding
                }}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Loyd,
                </Text>
                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Welcome Back!
                </Text>
            </View>
            {/* toggle Button */}
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginHorizontal: SIZES.padding,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: COLORS.white
                }}
                onPress={() => toggleThemeHandler()}
            >{/* light */}
            <View
                style={{
                    width: 40,
                    height: 40,
                    alignItems:'center',
                    justifyContent: 'center',
                    ...(appTheme.name == "light") ? 
                    styles.selectedLightModeStyle : {}
                }}
            
            >
                <Image
                source={icons.sunny}
                style={{
                    height: 30,
                    width: 30,
                    tintColor: COLORS.lightGray2
            }}
                />
            </View>
            {/* dark */}
            <View
                style={{
                    width: 40,
                    height: 40,
                    alignItems:'center',
                    justifyContent: 'center',
                    ...(appTheme.name == "dark") ? styles.selectedNightModeStyle: {}
                }}
            
            >
                <Image
                source={icons.night}
                style={{
                    height: 30,
                    width: 30,
                    tintColor: COLORS.lightGray2
            }}
                />
            </View>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    selectedNightModeStyle:{
        borderRadius: 25,
        backgroundColor: COLORS.black
    },
    selectedLightModeStyle:{
        borderRadius: 25,
        backgroundColor: COLORS.skined

    }
})

function mapStateToProps(state){
    return{
        appTheme: state.appTheme,
        error: state.error
    }
}

function mapDispatchToProps(dispatch){
    return{
        toggleTheme: (themetype) => { return dispatch(toggleTheme(themetype))}
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(HeaderBar);