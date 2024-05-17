import { RouteProp, NavigationProp } from "@react-navigation/native";
import { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import { COLORS, SIZES } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import SearchFilter from "../assets/svg/SearchFilter";
import SearchIcon from "../assets/svg/navigation/Search";

type ScreenRouteProp = RouteProp<StackParamList, "SearchScreen">;
type NavProp = NavigationProp<StackParamList, "SearchScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const SearchScreen: React.FC<Props> = ({ route, navigation }) => {
  const [values, setValues] = useState({
    searchText: "",
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingTop: StatusBar.currentHeight ?? 0 }}>
        <View style={styles.searchHeader}>
          <Ionicons
            style={{ padding: SIZES.xxs, marginBottom: SIZES.xxs }}
            size={30}
            name={Platform.OS === "android" ? "arrow-back" : "chevron-back"}
            onPress={() => navigation?.goBack()}
          />

          <TextInput
            autoFocus
            autoCapitalize="none"
            placeholder="Search..."
            theme={{ roundness: SIZES.xs }}
            left={
              <TextInput.Icon
                icon={() => (
                  <TextInput.Icon
                    icon={() => (
                      <View style={{ marginBottom: SIZES.xs }}>
                        <SearchIcon />
                      </View>
                    )}
                  />
                )}
              />
            }
            right={
              <TextInput.Icon
                icon={() => (
                  <TextInput.Icon
                    icon={() => (
                      <View style={{ marginBottom: SIZES.xs }}>
                        <SearchFilter />
                      </View>
                    )}
                  />
                )}
              />
            }
            style={{ ...styles.textInputField, flex: 1 }}
            mode="outlined"
            autoCorrect={false}
            outlineColor="#F5F5F5"
            activeOutlineColor={"#545454"}
            placeholderTextColor={"#545454"}
            textColor={COLORS.black}
            value={values.searchText}
            onChangeText={(searchText) => {
              setValues({ ...values, searchText });
            }}
          />
        </View>

        {/* {services
  .filter((item) => {
    if (values.searchText === "") return false;
    return (
      item.title
        .toLowerCase()
        .includes(values.searchText.toLowerCase()) ||
      item.desc.toLowerCase().includes(values.searchText.toLowerCase()) ||
      item.type.toLowerCase().includes(values.searchText.toLowerCase())
    );
  })
  .map((item) => (
    <Service
      key={item.id}
      service={item}
      bookmarked={values.bookmarks.includes(item.id)}
      onBookmark={bookmarkService}
    />
  ))} */}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.xs,
  },
  textInputField: {
    backgroundColor: "#F5F5F5",
    color: COLORS.black,
    marginBottom: SIZES.sm,
  },
});
