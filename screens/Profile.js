import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ImageBackground,
    ImageBackgroundBase,

} from 'react-native';

import { HeaderBar, CustomButton } from '../components';
import { dummyData, COLORS, FONTS, SIZES, icons } from '../constants';
import auth from '@react-native-firebase/auth';
import { connect } from 'react-redux'

const Profile = ({ navigation, appTheme }) => {

    const signOutUser = async () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
   
    function renderRewardPointSection() {
        
            return (
                <View
                    style={{
                        alignItems: 'center',
                        marginVertical: SIZES.padding
                    }}
                >
                    {/* Text */}
                    <Text
                        style={{
                            color: COLORS.primary,
                            ...FONTS.h1,
                            fontSize: 35
                        }}
                    >
                        Profile
                    </Text>

                    <Text style={{ marginTop: 10, color: appTheme.textColor, width: SIZES.width * 0.6, textAlign: 'center', ...FONTS.h3, lineHeight: 18 }}>
                        Name: 
                    </Text>
                </View>
            )
        }



        function renderButtons() {
            return (
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}

                >
                    {/* Logout */}
                    <CustomButton
                        isSecondaryButton={true}
                        label="LOGOUT"
                        containerStyle={{
                            width: 130,
                            paddingVertical: 5,
                            borderRadius: SIZES.radius * 2
                        }}
                        labelStyle={{
                            ...FONTS.h3
                        }}
                        onPress={() => { signOutUser() }}
                    >
                    </CustomButton>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                {/* Header */}
                <HeaderBar />

                {/* Details */}
                <FlatList
                    style={{
                        marginTop: -25,
                        borderTopLeftRadius: SIZES.radius * 2,
                        borderTopRightRadius: SIZES.radius * 2,
                        backgroundColor: appTheme.backgroundColor
                    }}
                    data={dummyData.availableProfile}
                    keyExtractor={item => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View>
                            {/* Reward Point */}
                            {renderRewardPointSection()}
                            {/* Buttons */}
                            {renderButtons()}
                        </View>
                    }
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginHorizontal: SIZES.padding,
                                    marginBottom: SIZES.base,
                                    paddingVertical: SIZES.base,
                                    borderRadius: 20,
                                    backgroundColor: item.eligible ? COLORS.yellow : COLORS.gray2
                                }}
                            >
                                <Text
                                    style={{
                                        color: item.eligible ? COLORS.black : COLORS.lightGray2,
                                        ...FONTS.body3
                                    }}
                                >
                                    {item.title}
                                </Text>
                            </View>
                        )
                    }}
                    ListFooterComponent={
                        <View style={{ marginBottom: 120 }} />
                    }
                />
            </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,

        }
    })

    function mapStateToProps(state) {
        return {
            appTheme: state.appTheme,
            error: state.error
        }
    }

    function mapDispatchToProps(dispatch) {
        return {

        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(Profile);