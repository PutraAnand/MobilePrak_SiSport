import Discover from "./src/screens/Discover.jsx";
import { fontType } from "./assets/theme";
import { useFonts } from "expo-font";
export default function App() {
  const [loaded] = useFonts(fontType);
  if (!loaded) {
    return null;
  }
  return <Discover />;
}


// import Bookmark from "./src/screens/Bookmark.jsx";
// import { fontType } from "./assets/theme";
// import { useFonts } from "expo-font";
// export default function App() {
// const [loaded] = useFonts(fontType);
//   if (!loaded) {
//     return null;
//   }

//   return <Bookmark />;
// }

// import Profile from "./src/screens/Profile.jsx";
// import { fontType } from "./assets/theme";
// import { useFonts } from "expo-font";
// export default function App() {
//   const [loaded] = useFonts(fontType);
//   if (!loaded) {
//     return null;
//   }
//   return <Profile />;
// }
