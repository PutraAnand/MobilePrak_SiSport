import { ScrollView, View, StyleSheet, Text, ImageBackground } from "react-native";
import { Bookmark } from "lucide-react-native";
import { colors } from "../../assets/theme";

export default function ListHorizontal({ data }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 15 }}
    >
      {data.map((item, index) => (
        <View
          key={item.id}
          style={{
            ...styles.cardItem,
            marginLeft: index === 0 ? 24 : 0,
            marginRight: index === data.length - 1 ? 24 : 0,
          }}
        >
          <ImageBackground
            style={styles.cardImage}
            imageStyle={{ borderRadius: 15 }}
            source={{ uri: item.image }}
          >
            <View style={styles.cardContent}>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.category}</Text>
                <Text style={styles.cardText} numberOfLines={2}>
                  {item.description}
                </Text>
              </View>

              <View style={styles.cardIcon}>
                <Bookmark color={colors.white()} size={20} />
              </View>
            </View>
          </ImageBackground>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  cardInfo: {
    justifyContent: "flex-end",
    gap: 10,
    maxWidth: "65%",
  },
  cardTitle: {
    fontFamily: "Pjs-Bold",
    fontSize: 16,
    color: colors.white(),
  },
  cardText: {
    fontSize: 12,
    color: colors.white(),
    fontFamily: "Pjs-Medium",
  },
  cardIcon: {
    backgroundColor: colors.white(0.3),
    padding: 5,
    borderRadius: 5,
  },
});