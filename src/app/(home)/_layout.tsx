import React from 'react'
import {View, Text} from "react-native"
import { Stack } from "expo-router"

const HomeLayout = () => {
  return (
    
    <Stack>
      <Stack.Screen name= "index" options = {{headerShown: false, title: "Home"}} />
    </Stack>
   
  )
}

export default  HomeLayout;