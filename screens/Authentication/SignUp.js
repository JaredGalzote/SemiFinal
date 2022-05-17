import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import { AuthLayout } from '../';
import { FONTS, SIZES, COLORS, icons } from '../../constants';
import { FormInput, TextButton, TextIconButton } from '../../components';
import { utils } from '../../utils';

import auth from '@react-native-firebase/auth';

const SignUp = ({ navigation }) => {

    const [email, setEmail] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [showPass, setShowPass] = React.useState(false)

    const [emailError, setEmailError] = React.useState("")
    const [usernameError, setUsernameError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")
    
    function isEnableSignUp() {
        return email != "" && username != "" && password != "" &&
            emailError == "" && passwordError == "" && usernameError == ""
    
    }
    
    const createUser =()=> {
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('This email address is already in use!');
          }
        });
               
    }
    return (
        <AuthLayout
            title="Getting Started"
            subtitle="Create an account to continue!"
            titleContainerStyle={{
                marginTop: SIZES.radius
            }}
        >
            {/* Forn Input And Sign Up*/}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding
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
                <FormInput
                    label="Username"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        setUsername(value)
                    }}
                    errorMsg={usernameError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={username == "" ||
                                    (username != "" && usernameError == "") ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: username == "" ?
                                        COLORS.gray : (username != "" && usernameError == "") ?
                                            COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />
                <FormInput
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        utils.validatePassword(value,
                            setPasswordError)
                        setPassword(value)
                    }}
                    errorMsg={passwordError}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image
                                source={showPass ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: email == "" ?
                                        COLORS.gray : (email != "" &&
                                            emailError == "") ? COLORS.
                                            green : COLORS.red
                                }}
                            />
                        </TouchableOpacity>
                    }
                />
                {/* Sign Up & Sign In  */}
                <TextButton
                    label="Sign Up"
                    disabled={isEnableSignUp() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignUp() ?
                            COLORS.primary : COLORS.transparentPrimary
                    }}
                    onPress={createUser}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
                        Already have an account?</Text>
                    <TextButton
                        label="Sign In"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.goBack()}
                    />

                </View>
            </View>

        </AuthLayout>
    )
}

export default SignUp;