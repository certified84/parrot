import { StackNavigationProp } from "@react-navigation/stack";

export {};

declare global {
  interface NavigationProps {
    navigation: NavigationProp<any, any>;
  }

  export type StackParamList = {
    HomeScreen;
    SearchScreen;
    NotificationsScreen;
    ProfileScreen;
    ReviewsScreen;
    OffersScreen;
    BusinessInfoScreen: { business: IBusiness };
    ReviewScreen: { review: IReview };

    BookmarksScreen: { bookmarks: string[] };
    ServicesScreen: { category?: Category; bookmarks?: string[] };
    CategoryiesScreen: { bookmarks: string[] };
    BookingsScreen;
    MessagesScreen;
  };

  interface Category {
    id: string;
    title: string;
    type: string;
  }

  interface IBusiness {
    id: string;
    name: string;
    verified: boolean;
    rating: number;
    reviewCount: number;
    businessType: string;
    image: string;
    info: string;
  }

  interface IReview {
    id: string;
    name: string;
    business?: string;
    time: string;
    rating: number;
    review: string;
    profileImage: string;
    images: string[];
    likes: number;
    dislikes: number;
    comments: number;
  }
}
