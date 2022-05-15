import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import {AuthLayout} from '../';
import { FONTS, SIZES, COLORS, icons } from '../../constants';
import { FormInput, TextButton, TextIconButton } from '../../components';
import { utils } from '../../utils';
import { NavigationContainer } from '@react-navigation/native';


const ForgotPassword = ({ navigation }) => {

    const [email, setEmail] = React.useState("")
    const [emailError, setEmailError] = React.useState("")

    function isEnableSendEmail() {
        return email != "" && emailError == ""
    }


    return (
        <AuthLayout
            title="Password Recovery"
            subtitle="Please enter your email address to recover your password"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            {/* Form Input */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2 
                }}
            >
                <FormInput
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={

                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.green
                                }}
                            />
                        </View>
                    }
                />
                 {/* Button */}
                 
                <TextButton
                    label="Send Email"
                    disabled={isEnableSendEmail() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        backgroundColor: isEnableSendEmail() ? COLORS.primary : COLORS.transparentPrimary

                    }}
                    onPress={() => navigation.goBack()}
                />

            </View>

           
        </AuthLayout>
    )
}

export default ForgotPassword;