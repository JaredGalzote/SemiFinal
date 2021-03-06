import React from "react";
import {
    TouchableOpacity,
    Text,
    ColorPropType
} from 'react-native';
import { FONTS, SIZES, COLORS } from "../constants";

const VerticalTextButton = ({ containerStyle, label, selected, onPress}) => {
    return(
        <TouchableOpacity
            style={{
                alignItems: 'center',
                transform: [{ rotate: '-90deg'}],
                ...containerStyle
            }}
            onPress={onPress}

            >
                <Text
                style={{
                    color: selected ? COLORS.white : COLORS.lightYellow,
                    ...FONTS.body2,
                    fontSize: 20
                }}>
                    {label}
                </Text>
            </TouchableOpacity>
    )
}

export default VerticalTextButton;

