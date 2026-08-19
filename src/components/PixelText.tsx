import { PressStart2P_400Regular, useFonts } from "@expo-google-fonts/press-start-2p";
import { Text, type TextProps } from "react-native";

type PixelTextProps = TextProps & {
  children: React.ReactNode;
};

export default function PixelText({ children, style, ...props }: PixelTextProps) {
  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: "PressStart2P_400Regular",
        },
        style,
      ]}>
      {children}
    </Text>
  );
}
