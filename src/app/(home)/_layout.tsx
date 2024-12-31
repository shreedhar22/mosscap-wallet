// import React from 'react'
// import {View, Text} from "react-native"
// import { Stack } from "expo-router"

// const HomeLayout = () => {
//   return (
    
//     <Stack>
//       <Stack.Screen name= "index" options = {{headerShown: false, title: "Home"}} />
//     </Stack>
   
//   )
// }

// export default  HomeLayout;


import {Tabs} from  "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet } from "react-native"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome5Brand from "react-native-vector-icons/FontAwesome5"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
const HomeLayout = () => {

    return (
        <SafeAreaView style = {styles.safeArea}> 
    
            <Tabs 
                screenOptions={{
                    tabBarActiveTintColor: '#1BC464',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabelStyle: { fontSize: 16 },
                    tabBarStyle: {
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      paddingTop: 10,
                    },
                headerShown: false,}}
            >
            <Tabs.Screen 
                name='index'
                options = {{ headerShown: false, tabBarShowLabel: false,title:"Home", tabBarIcon() {return (<FontAwesome name="home" size={27} color= "#000"/> )}}}
            />
            <Tabs.Screen 
                name='profile'
                options = {{ headerShown: false, tabBarShowLabel: false,title: "Profile", tabBarIcon() {return (<MaterialIcons name="payment" size={27} color= "#000"/> )}}}
            />
            <Tabs.Screen 
                name='transactions'
                options = {{ headerShown: false,tabBarShowLabel: false, title:"CryptoTransactions", tabBarIcon() {return (<FontAwesome6 name="money-bill-transfer" size={27} color= "#000"/>)}}}
            />
            </Tabs>
        </SafeAreaView>
    
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    }
})
export default HomeLayout