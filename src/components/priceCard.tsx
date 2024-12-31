import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import Color from 'react-native-material-color';
import Icon from 'react-native-vector-icons/AntDesign';
import Coin from '../types/Coin';
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome5Brands from "react-native-vector-icons/FontAwesome5"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PriceCard = ({coin}: {coin:Coin}) => {
    const [timesPressed, setTimesPressed] = useState(1);
    return (
        // <View>
        //     <Text>{coin.name}</Text>
        //     <Text>{coin.price}</Text>
        //     <Text>{coin.logo}</Text>
        // </View>

        <View style={styles.contentItem}>
        <View
          style={[
            styles.bitcoinIconContentStyle,
            {backgroundColor: coin.backgroundColor},
            {paddingLeft: coin.icon === 'bitcoin' ? 8 : 10},
          ]}>
          {coin.icon === "ethereum"? (<FontAwesome5Brands
            name={coin.icon}
            size={27}
            style={styles.bitcoinIconStyle}
            color={Color.WHITE}
          />): coin.icon === "dogecoin"? (<FontAwesome
            name={coin.icon}
            size={27}
            style={styles.bitcoinIconStyle}
            color={Color.WHITE}
          />): (<FontAwesome
            name={coin.icon}
            size={27}
            style={styles.bitcoinIconStyle}
            color={Color.WHITE}
          />)}
          
        </View>
        <View style={styles.itemPriceContent}>
          <View style={styles.itemNumberBTC}>
            <Text style={styles.itemBTCSLNumber}> {coin.BTCNumber} </Text>
            <Text style={styles.itemBTCPrice}>{coin.price}</Text>
          </View>
          <View style={styles.itemNumberBTCPrice}>
            <Text style={styles.itemNumberBTCCurrentPrice}>
              {' '}
              {coin.currentPriceStatus}{' '}
            </Text>
            <Text
              style={[
                styles.itemNumberBTCCurrentPriceUpdate,
                {color: coin.currentPriceColor},
              ]}>
              {' '}
              + 4.32%
            </Text>
          </View>
        </View>
      </View>
    )
}

export default PriceCard;

const styles = StyleSheet.create({
    content: {
      flex: 1,
    },
    boxContent: {
      marginVertical: 20,
      marginHorizontal: 20,
      borderRadius: 25,
      backgroundColor: Color.WHITE,
      elevation: 5,
    },
    boxContentTitle: {
      flexDirection: 'row',
      paddingTop: 15,
    },
    walletIconContent: {
      borderWidth: 1,
      marginLeft: 10,
      width: 40,
      height: 40,
      borderRadius: 25,
      backgroundColor: Color.GREY[800],
    },
    walletIconStyle: {
      paddingLeft: 11,
      paddingTop: 10,
    },
    boxContentRight: {
      flexDirection: 'row',
      marginLeft: 80,
    },
    contentTextTotalWalet: {
      paddingLeft: 15,
      fontSize: 15,
      fontWeight: 'bold',
      paddingTop: 7,
    },
    textUSD: {
      marginTop: 8,
      fontWeight: 'bold',
      color: Color.GREY[500],
    },
    chevronDownIcon: {
      marginTop: 2,
    },
    boxContentPrice: {
      flexDirection: 'row',
      marginLeft: 10,
      marginTop: 10,
    },
    contentPriceOne: {
      fontSize: 30,
      fontWeight: 'bold',
      color: Color.GREY[800],
    },
    contentPriceSecond: {
      marginLeft: 120,
      width: 70,
      height: 23,
      borderRadius: 25,
      backgroundColor: Color.GREEN[600],
      paddingTop: 2,
      paddingLeft: 7,
      color: Color.WHITE,
    },
    boxContentPriceBTC: {
      marginLeft: 16,
      fontWeight: 'bold',
      fontSize: 17,
      color: Color.GREY[500],
    },
    chevronThisDownIconStyle: {
      marginLeft: 170,
      marginTop: 30,
      marginBottom: 20,
    },
    itemTitleContent: {
      justifyContent: 'space-between',
      marginHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    itemTitleContentHour: {
      flexDirection: 'row',
    },
    chevronDownContentIcon: {
      position: 'relative',
      left: -7,
      top: -3,
    },
    itemContent24H: {
      color: Color.GREY[500],
    },
    itemTitleShortByHigher: {
      color: Color.GREY[500],
    },
    contentItem: {
      marginTop: 20,
      marginHorizontal: 20,
      height: 80,
      flexDirection: 'row',
      backgroundColor: "#fff",
      elevation: 5,
      borderRadius: 15,
    },
    bitcoinIconContentStyle: {
      width: 43,
      height: 43,
      marginHorizontal: 20,
      marginVertical: 20,
      borderRadius: 25,
      paddingTop: 2,
    },
    bitcoinIconStyle: {
      paddingTop: 6,
      paddingLeft: 4,
    },
    itemNumberBTC: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itemNumberBTCPrice: {
      flexDirection: 'row',
    },
    itemPriceContent: {
      paddingTop: 20,
    },
    itemBTCSLNumber: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    itemBTCPrice: {
      marginLeft: 80,
      fontWeight: 'bold',
    },
    itemNumberBTCCurrentPrice: {
      color: Color.GREY[500],
    },
    itemNumberBTCCurrentPriceUpdate: {
      marginLeft: 140,
    },
  });