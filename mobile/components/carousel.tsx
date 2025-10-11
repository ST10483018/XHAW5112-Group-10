import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Pressable,
  Text,
} from "react-native";
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useRouter } from "expo-router";

const { width: SRC_WIDTH } = Dimensions.get("window");

// Smaller card width to show next/previous previews
const CARD_LENGTH = SRC_WIDTH * 0.75;  
const SPACING = SRC_WIDTH * 0.02;      
const SIDECARD_LENGTH = (SRC_WIDTH - CARD_LENGTH) / 2; 

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface ItemProps {
  index: number;
  scrollX: number;
  item: { id: string; title: string; image: any };
}

function Item({ index, scrollX, item }: ItemProps) {
  const router = useRouter();

  const inputRange = [
    (index - 1) * (CARD_LENGTH + SPACING),
    index * (CARD_LENGTH + SPACING),
    (index + 1) * (CARD_LENGTH + SPACING),
  ];

  // Animate scale + opacity
  const scale = interpolate(scrollX, inputRange, [0.85, 1, 0.85], Extrapolate.CLAMP);
  const opacity = interpolate(scrollX, inputRange, [0.6, 1, 0.6], Extrapolate.CLAMP);

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <Animated.View style={[styles.card, cardStyle, { marginHorizontal: SPACING / 2 }]}>
      <Pressable
        style={{ flex: 1 }}
        onPress={() => router.push(`../program/${item.id}`)}
      >
        {/* Image + Bottom Text */}
        <View style={{ flex: 1 }}>
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
          {/* Bottom text overlay */}
          <View style={styles.bottomOverlay}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}

export default function Carousel() {
  const [scrollX, setScrollX] = useState(0);

  const DATA = [
    {
      id: "sewing",
      title: "Sewing",
      image: require("@/_images/steptodown.com898711.jpg"),
    },
    {
      id: "landscaping",
      title: "Landscaping",
      image: require("@/_images/steptodown.com133499.jpg"),
    },
    {
      id: "cooking",
      title: "Cooking",
      image: require("@/_images/steptodown.com469316.jpg"),
    },

    {
        id: "child_minding",
      title: "Child Minding",
      image: require("@/_images/steptodown.com525012.jpg"),
    },

    {
        id: "garden_maintenance",
      title: "Garden Maintenance",
      image: require("@/_images/steptodown.com633227.jpg"),
    },

    
    {
        id: "first_aid",
      title: "First Aid",
      image: require("@/_images/steptodown.com443846.jpg"),
    },

    
    {
        id: "life_skills",
      title: "Life Skills",
      image: require("@/_images/group-of-young-people-talking.jpg"),
    },
  ];

  return (
    // Carousel of programmes
    <View style={styles.container}>
      <AnimatedFlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_LENGTH + SPACING}
        decelerationRate="fast"
        bounces={false}
        contentContainerStyle={{
          paddingHorizontal: SIDECARD_LENGTH,
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Item index={index} scrollX={scrollX} item={item}/>
        )}
        onScroll={(event) => {
          setScrollX(event.nativeEvent.contentOffset.x);
        }}
        scrollEventThrottle={16}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  card: {
    width: CARD_LENGTH,
    height: 150,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#ddd",
  },
  bottomOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)", 
    padding: 8,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
