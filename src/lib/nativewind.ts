import { cssInterop } from "nativewind";
import { ImageBackground, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";

cssInterop(ImageBackground, {
  className: "style",
});
cssInterop(TouchableOpacity, {
  className: "style",
});
cssInterop(LinearGradient, {
  className: "style",
});
cssInterop(Animated.View, {
  className: "style",
});
cssInterop(Animated.Text, {
  className: "style",
});


