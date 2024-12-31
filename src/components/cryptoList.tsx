import { FlatList } from "react-native-gesture-handler"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Coin from "../types/Coin"
import PriceCard from "./priceCard";
import { ScrollView } from "react-native";
import { coins } from "../../assets/data/coins"

const CryptoList = () => {

    return (
        <FlatList 
            data = {coins}
            renderItem={({item})=> {return( <PriceCard coin = {item} /> )}}
            numColumns={1}
        />

    //     <ScrollView>
    //         {coins.map((item) => (
    //             <PriceCard coin = {item}  />
    //         ))}
    //   </ScrollView>
    )
}

export default CryptoList;