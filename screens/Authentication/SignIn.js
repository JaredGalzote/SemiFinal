import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { AuthLayout } from "../";
import { FONTS, COLORS, SIZES, icons } from "../../constants";

import {
    FormInput,
    CustomSwitch,
    TextButton,
    TextIconButton
} from "../../components";
import { utils } from "../../utils";

const SignIn = ({ navigation }) => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")

    const [showPass, setShowPass] = React.useState(false)
    const [saveMe, setSaveMe] = React.useState(false)

    function isEnableSignIn() {
        return email != "" && password != "" && emailError == ""

    }
    const userLogin = () => {
          auth()
          .signInWithEmailAndPassword(email, password)
          .then((res) => {
            console.log(res)
            console.log('User logged-in successfully!')
          })
          .catch((e) => Alert.alert('Your password is incorrect or this account doesn’t exist'));
        }
    return (
        <AuthLayout
            title="Let's Sign You In"
            subtitle="Welcome back, You've been missed"
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >
                {/* form inputs */}
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
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => setPassword(value)}
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
                                            green : COLORS.coffee
                                }}
                            />
                        </TouchableOpacity>
                    }
                />

                {/* forgot password */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'space-between'
                    }}
                >
                    <CustomSwitch
                        value={saveMe}
                        onChange={(value) => setSaveMe(value)}
                    />
                    <TextButton
                        label="Forgot Password"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                        onPress={() => navigation.navigate("ForgotPassword")}
                    />

                </View>

                {/* sign in */}
                <TextButton
                    label="Sign In"
                    disabled={isEnableSignIn() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignIn() ? COLORS.primary :
                            COLORS.transparentPrimary
                    }}
                    onPress={userLogin}
                />

                {/* sign up */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >
                        Don't have an account?
                    </Text>

                    <TextButton
                        label="Sign Up"
                        buttonContainerStyle={{
                            marginLeft: 3,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.navigate("SignUp")}
                    />

                </View>
                {/* footer*/}

            </View>
        </AuthLayout>
    )
}

export default SignIn;