import React from 'react'
import {View, Text} from "react-native"
import { Stack } from "expo-router"

const TransactionsLayout = () => {
  return (
    
    <Stack>
      <Stack.Screen name= "index" options = {{headerShown: false, title: "CryptoTransactions"}} />
    </Stack>
   
  )
}

export default  TransactionsLayout;