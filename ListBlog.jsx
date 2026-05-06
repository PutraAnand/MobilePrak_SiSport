import { ScrollView, View, StyleSheet } from "react-native";
import { colors } from "../../assets/theme";
import ListHorizontal from "./ListHorizontal";
import ItemSmall from "./ItemSmall";
import { blogs } from "../data/blogs";

export default function ListBlog({ styles, category }) {
  // 🔥 Filter berdasarkan kategori
  const filteredBlogs =
    category === "Semua"
      ? blogs
      : blogs.filter((item) => item.category === category);

  return (
    <ScrollView>
      <View style={styles.listBlog}>

        {/* === HORIZONTAL (FEATURED SPORT) === */}
        <ListHorizontal data={blogs} />

        {/* === VERTICAL (LIST ENSIKLOPEDIA) === */}
        <View style={localStyles.listCard}>
          {filteredBlogs.map((item) => (
            <ItemSmall key={item.id} item={item} />
          ))}
        </View>

      </View>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
});