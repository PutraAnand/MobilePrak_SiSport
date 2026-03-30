import { ScrollView, View, StyleSheet, Text, ImageBackground, Image } from "react-native";
import { colors } from "../../assets/theme";
import { PlayCircle, Clock, Bookmark } from "lucide-react-native";

export default function ListBlog({ styles }) {
  return (
    <ScrollView>
      <View style={styles.listBlog}>

        {/* === HORIZONTAL (FEATURED SPORT) === */}
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 15 }}
        >
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              imageStyle={{ borderRadius: 15 }}
              source={{ uri: "https://images.unsplash.com/photo-1517649763962-0c623066013b" }}
            >
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Bersepeda</Text>
                  <Text style={itemHorizontal.cardText}>
                    Olahraga yang memacu adrenalin dan fokus pada kecepatan
                  </Text>
                </View>
                <View style={itemHorizontal.cardIcon}>
                  <Bookmark color={colors.white()} size={20} />
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              imageStyle={{ borderRadius: 15 }}
              source={{ uri: "https://images.unsplash.com/photo-1546519638-68e109498ffc" }}
            >
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Basket</Text>
                  <Text style={itemHorizontal.cardText}>
                    Memasukkan bola ke ring lawan
                  </Text>
                </View>
                <View style={itemHorizontal.cardIcon}>
                  <Bookmark color={colors.white()} size={20} />
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={{ ...itemHorizontal.cardItem, marginRight: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              imageStyle={{ borderRadius: 15 }}
              source={{ uri: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf" }}
            >
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Lari</Text>
                  <Text style={itemHorizontal.cardText}>
                    Olahraga untuk melatih jantung & daya tahan tubuh
                  </Text>
                </View>
                <View style={itemHorizontal.cardIcon}>
                  <Bookmark color={colors.white()} size={20} />
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>

        {/* === VERTICAL (LIST ENSIKLOPEDIA) === */}
        <View style={itemVertical.listCard}>

          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{ uri: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5" }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={itemVertical.cardCategory}>Lari</Text>
              <Text style={itemVertical.cardTitle}>
                Olahraga sederhana untuk meningkatkan stamina
              </Text>
              <View style={itemVertical.cardInfo}>
                <PlayCircle size={14} color={colors.primary()} />
                <Text style={itemVertical.cardText}>Video tersedia</Text>
              </View>
            </View>
          </View>

          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{ uri: "https://images.unsplash.com/photo-1518611012118-696072aa579a" }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={itemVertical.cardCategory}>Fitness</Text>
              <Text style={itemVertical.cardTitle}>
                Latihan untuk kekuatan dan kebugaran tubuh
              </Text>
              <View style={itemVertical.cardInfo}>
                <PlayCircle size={14} color={colors.primary()} />
                <Text style={itemVertical.cardText}>Tutorial latihan</Text>
              </View>
            </View>
          </View>

          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{ uri: "https://images.unsplash.com/photo-1517649763962-0c623066013b" }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={itemVertical.cardCategory}>Bersepeda</Text>
              <Text style={itemVertical.cardTitle}>
                Teknik dasar: Breathing, Pacing, dan Teknik Kayuh
              </Text>
              <View style={itemVertical.cardInfo}>
                <PlayCircle size={14} color={colors.primary()} />
                <Text style={itemVertical.cardText}>Dasar permainan</Text>
              </View>
            </View>
          </View>

        </View>
      </View>
    </ScrollView>
  );
}

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
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

const itemHorizontal = StyleSheet.create({
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