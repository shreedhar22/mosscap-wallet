import React from 'react'
import {Stack} from 'expo-router'
import AppHeader  from '../components/header'

const RootLayout = ()  => {
  
    return (
     <Stack>
        <Stack.Screen 
            name = "(home)"
            options = {{header : (navigation:any, scene:any) => { return (<AppHeader title="Wallets"
            item={''}
            navigation={navigation}
            scene={scene}
            routeLink= "(home)" />)}, headerShown: true, title:"home"}}
        />

        <Stack.Screen  
            name = "auth"
            options = {{headerShown: false, title:"auth"}}
        />

        <Stack.Screen  
            name = "transactions"
            options = {{headerShown: false, title:"transactions"}}
        />
     </Stack>
    )
}


export default  RootLayout;

