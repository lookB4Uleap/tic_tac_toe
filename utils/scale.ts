import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

const scale = (size: any) => {
    "worklet"; 
    if (Platform.OS === 'android' || Platform.OS === 'ios')
        return (width / guidelineBaseWidth) * size;
    else if (width < 1080)
        return size;
    else if (width < 1440 && width >= 1080)
        return (width/height * 0.6) * size;
    else 
        return (width/height * 0.8) * size;;
};

const verticalScale = (size: any) => (height / guidelineBaseHeight) * size;

const moderateScale = (size: any, factor = 0.5) => size + (scale(size) - size) * factor;
const screenSize = Math.sqrt(width * height) / 100;

export { scale, verticalScale, moderateScale, width, height, screenSize };