import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native'
import React, { act, useEffect, useRef, useState } from 'react'
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';


const slider = () => {

    const flatlistRef = useRef<FlatList<any>>(null);

    //dimensions for screen
    const ScreenWidth = Dimensions.get("window").width;

    const [activeIndex, setActiveIndex] = useState(0);

    // Data for image slider
    const sliderData = [
        {
            id: "1",
            image: require("@/_images/steptodown.com133499.jpg")
        },
        {
            id: "2",
            image: require("@/_images/steptodown.com443846.jpg")
        },
        {
            id: "3",
            image: require("@/_images/steptodown.com469316.jpg")
        },
        {
            id: "4",
            image: require("@/_images/steptodown.com525012.jpg")
        },
        {
            id: "5",
            image: require("@/_images/steptodown.com633227.jpg")
        },
        {
            id: "6",
            image: require("@/_images/steptodown.com898711.jpg")
        },
        {
            id: "7",
            image: require("@/_images/group-of-young-people-talking.jpg")
        }
    ];

    //auto scrolling for images
    useEffect(() => {
        const interval = setInterval(() => {
            if (activeIndex === sliderData.length - 1) {
                if (flatlistRef.current) {
                    flatlistRef.current.scrollToIndex({
                        index: 0,
                        animated: true
                    });
                }
            } else {
                if (flatlistRef.current) {
                    flatlistRef.current.scrollToIndex({
                        index: activeIndex + 1,
                        animated: true
                    });
                }
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [activeIndex, sliderData.length]);

    const getItemLayout = (data: ArrayLike<{ id: string; image: any; }> | null | undefined, index: number) => ({
        length: ScreenWidth,
        offset: ScreenWidth * index,
        index: index,
    });
    // images displayed
    const renderItem = ({ item, index }: { item: { id: string; image: any }; index: number }) => {
        return (
            <View style={{ width: ScreenWidth, alignItems: "center" }}>
                <Image source={item.image} style={{height:160, width: ScreenWidth * 0.95, marginTop: 65, borderRadius: 15, }} />
            </View>
        );
    };
  
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = scrollPosition / ScreenWidth;
        setActiveIndex(index);
    };
// dot indicators
    const renderDotIndicators = () => {
        return sliderData.map((dot, index)=>{

            if(activeIndex === index){
                return(
                    <View
                    key={index} 
                    style={{
                    backgroundColor: "blue",
                    height: 10, 
                    width: 10, 
                    borderRadius: 5, 
                    marginHorizontal: 6}}>

                    </View>
                )
            } else{
                return(
                <View
                key={index} 
                style={{
                    backgroundColor: "#D4D4D4",
                    height: 10, 
                    width: 10, 
                    borderRadius: 5, 
                    marginHorizontal: 6
                    }}>

                </View>
            );
            }
        }); 
    };


  return (
    <View>
      <FlatList 
      data={sliderData}
      renderItem={renderItem}
      ref = {flatlistRef}
      getItemLayout={getItemLayout}
      keyExtractor={(item) => item.id}
      horizontal = {true}
      pagingEnabled = {true}
      onScroll={handleScroll}
      showsHorizontalScrollIndicator={false}
      />

      <View style={{flexDirection: "row", justifyContent: "center", marginTop: 10}}>
        {renderDotIndicators()}
      </View>

      
    </View>
  )
}

export default slider