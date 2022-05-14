import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#b0906f",  
    transparentPrimary: 'rgba(227, 120, 75, 0.4)',
    secondary: "#2C2C2C",    // Gray
    orange: "#FFA133",
    lightOrange: "#FFA133",
    lightOrange2: "#FDDED4",
    lightOrange3: '#FFD9AD',
    coffee: "#b0906f",
    skined:"#EDD8BB",
    lovely:"#E2AA87",
    cream: "#FEF7E1",
    greenlime:"#A2D3C7",
    rose:  "#EF8E7D",
    lightPurple: '#7B789F',
    purple: "#b0906f",
    yellow: '#FEF7E1',
    lightYellow: '#FFD88A',
    white: "#fff",
    white1: "#F1E6D8",
    lightGreen: "#7EBDA2",
    lightGreen2: '#BED2BB',
    red: "#EF8E7D",
    red2: "#FF7363",
    black: "#000000",
    gray: "#6E6E6E",
    gray1: "#363636",
    gray2: "#4B4B4B",
    gray3: "#4D4D4D",
    lightGray: "#3B3B3B",
    lightGray2: '#707070',
    lightGray3: '#f0f0f0',

    pink: '#EF8E7D',
    lightPink: '#FEF7E1',

    transparentWhite: 'rgba(255, 255, 255, 0.2)',
    transparentBlack: 'rgba(0, 0, 0, 0.4)',
    transparent: 'transparent',
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Poppins-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Poppins-Bold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "Poppins-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Poppins-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Poppins-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Poppins-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Poppins-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};


export const darkTheme = {
    name: "dark",
    backgroundColor: COLORS.secondary,
    textColor: COLORS.white,
    tabBackgroundColor: COLORS.lightGray,
    cardBackgroundColor: COLORS.gray3,
    bottomTabBarBackgroundColor: COLORS.gray3,
    headerColor: COLORS.yellow,
}

export const lightTheme = {
    name: "light",
    backgroundColor: COLORS.lightGray3,
    textColor: COLORS.black,
    tabBackgroundColor: COLORS.yellow,
    cardBackgroundColor: COLORS.lightYellow,
    bottomTabBarBackgroundColor: COLORS.lightYellow,
    headerColor: COLORS.red,
}

export const selectedTheme = darkTheme

const appTheme = { COLORS, SIZES, FONTS, darkTheme, lightTheme };

export default appTheme;
