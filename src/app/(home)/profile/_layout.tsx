import React from 'react'
import {View, Text} from "react-native"
import { Stack } from "expo-router"

const ProfileLayout = () => {
  return (
    
    <Stack>
      <Stack.Screen name= "index" options = {{headerShown: false, title: "Profile"}} />
    </Stack>
   
  )
}

export default  ProfileLayout;