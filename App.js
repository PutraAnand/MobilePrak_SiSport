import { ScrollView, StyleSheet, Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bell } from "lucide-react-native";
import { colors, fontType } from "./assets/theme";
import ListBlog from "./src/components/ListBlog";
import { useFonts } from "expo-font";
import { useState } from "react";
import { categories } from "./src/data/categories";

export default function App() {
  const [loaded] = useFonts(fontType);

  // 🔥 STATE kategori aktif
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white()} />

      {/* === HEADER === */}
      <View style={styles.header}>
        <Text style={styles.title}>SiSport</Text>
        <Bell color={colors.black()} size={24} />
      </View>

      {/* === CATEGORY === */}
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (
            <View
              key={item.id}
              style={{
                ...category.item,
                marginLeft: index === 0 ? 24 : 5,
                marginRight:
                  index === categories.length - 1 ? 24 : 5,
              }}
            >
              <Text
                onPress={() => setSelectedCategory(item.name)}
                style={{
                  ...category.title,
                  color:
                    selectedCategory === item.name
                      ? colors.primary()
                      : colors.grey(),
                }}
              >
                {item.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* === LIST BLOG === */}
      <ListBlog styles={styles} category={selectedCategory} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },

  header: {
    paddingHorizontal: 24,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: colors.white(),
  },

  title: {
    fontSize: 20,
    fontFamily: "Pjs-ExtraBold",
    color: colors.primary(),
  },

  listCategory: {
    paddingVertical: 10,
  },

  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});

const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: colors.grey(0.1),
    marginHorizontal: 5,
  },

  title: {
    fontFamily: "Pjs-SemiBold",
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
});