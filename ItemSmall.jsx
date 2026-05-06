import { View, Text, Image, StyleSheet } from "react-native";
import { PlayCircle } from "lucide-react-native";
import { colors } from "../../assets/theme";

export default function ItemSmall({ item }) {
  return (
    <View style={styles.cardItem}>
      <Image
        style={styles.cardImage}
        source={{ uri: item.image }}
      />

      <View style={styles.cardContent}>
        <Text style={styles.cardCategory}>{item.category}</Text>

        <Text style={styles.cardTitle} numberOfLines={2}>
          {item.title}
        </Text>

        <View style={styles.cardInfo}>
          <PlayCircle size={14} color={colors.primary()} />
          <Text style={styles.cardText}>
            {item.type === "video" ? "Video tersedia" : "Artikel"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    backgroundColor: colors.secondary(0.08),
    flexDirection: "row",
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.secondary(),
    fontSize: 10,
    fontFamily: "Pjs-SemiBold",
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: "Pjs-Bold",
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: "Pjs-Medium",
    color: colors.grey(),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
  },
  cardInfo: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  cardContent: {
    gap: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
    flex: 1,
  },
});