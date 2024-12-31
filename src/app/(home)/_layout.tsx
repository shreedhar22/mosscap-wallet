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
            {/* <Tabs.Screen 
                name = "transactions"
                options = {{ headerShown: false, title: "Transactions"}}
            /> */}
            <Tabs.Screen 
                name = "profile"
                options = {{ headerShown: false, title: "Profile"}}
            />
            <Tabs.Screen 
                name = "transactions"
                options = {{ headerShown: false, title: "CryptoTransactions"}}
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