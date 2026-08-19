import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import PixelText from "@/src/components/PixelText";

const NAV_ITEMS = [
  { name: "index", title: "HOME", icon: "H" },
  { name: "vsComputer", title: "VS CPU", icon: ">" },
  { name: "vsPlayer", title: "VS PLAYER", icon: "+" },
  { name: "liveMatch", title: "LIVE", icon: "#" },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#1a1712",
          height: 70,
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
        },
        tabBarActiveTintColor: "#c8a040",
        tabBarInactiveTintColor: "#a89878",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
          letterSpacing: 1,
          textTransform: "uppercase",
          marginTop: 1,
        },
      }}>
      {NAV_ITEMS.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            headerShown: false,
            title,
            tabBarIcon: ({ focused }) => (
              <PixelText style={[styles.icon, focused ? styles.iconFocused : styles.iconInactive]}>
                {icon}
              </PixelText>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 16,
  },

  iconFocused: {
    color: "#c8a040",
  },

  iconInactive: {
    color: "#a89878",
  },
});
