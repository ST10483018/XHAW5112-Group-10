import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function customdrawer (props:any){
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props} scrollEnabled={false}>
            <View style={{padding: 20}}>
                <Image source={require("@/_images/logo.png")}
                    style={{width:100, height:100, alignSelf: 'center'}}
                />
            </View>
            <DrawerItemList {...props}/>
            
        </DrawerContentScrollView>
    </View>
  )
}

