import React from 'react'
import {Stack} from 'expo-router'

const RootLayout = ()  => {
  
    return (
     <Stack>
        <Stack.Screen 
            name = "(home)"
            options = {{headerShown: false, title:"home"}}
        />

        <Stack.Screen  
            name = "auth"
            options = {{headerShown: false, title:"auth"}}
        />
     </Stack>
    )
}


export default  RootLayout;

