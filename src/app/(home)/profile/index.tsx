import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { TapGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import IndexPage from './animatingIndex';

const screenWidth = Dimensions.get('window').width;

const PortfolioGraph = () => {
  const [graphData, setGraphData] = useState<number[]>([1200, 1250, 1270, 1260, 1300, 1280, 1320]);
  const [totalValue, setTotalValue] = useState<number>(1320);
  const [timeframe, setTimeframe] = useState('daily');

  useEffect(() => {
    const generateGraphData = () => {
      if (timeframe === 'daily') {
        return [1200, 1220, 1210, 1250, 1260, 1280, 1300, 
            1200, 1220, 1210, 1250, 1260, 1280, 1300,
            1200, 1220, 1210, 1250, 1260, 1280, 1300,
            1200, 1220, 1210, 1250, 1260, 1280, 1300];
      } else if (timeframe === 'monthly') {
        return [1100, 1150, 1200, 1250, 1300, 1400, 1450,
            1200, 1220, 1210, 1250, 1260, 1280, 1300,
            1200, 1220, 1210, 1250, 1260, 1280, 1300,
            1200, 1220, 1210, 1250, 1260, 1280, 1300,];
      } else if (timeframe === 'yearly') {
        return [1000, 1100, 1200, 1300, 1400, 1500, 1600,
            1200, 1220, 1210, 1250, 1260, 1280, 1300,
            1200, 1220, 1210, 1250, 1260, 1280, 1300,
            1200, 1220, 1210, 1250, 1260, 1280, 1300,];
      }
      return [];
    };

    setGraphData(generateGraphData());
    setTotalValue(graphData[graphData.length - 1]);
  }, [timeframe]);

  // Handle touch event
  const handleGraphTouch = (event: any) => {
    const touchX = event.nativeEvent.x; // x is the horizontal touch position in the graph

    // Determine the index based on the x-coordinate of the touch
    const touchIndex = Math.floor((touchX / screenWidth) * graphData.length);

    if (touchIndex >= 0 && touchIndex < graphData.length) {
      setTotalValue(graphData[touchIndex]);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      
       
        {/* <IndexPage/> */}
        <View style={styles.graphContainer}>
          <Text style={styles.graphTitle}>Portfolio Value: ${totalValue.toFixed(2)}</Text>
          <TapGestureHandler onHandlerStateChange={(event) => handleGraphTouch(event)}>
            <View style={styles.chartWrapper}>
              <LineChart
                data={{
                  labels: ['12:00', '12:05', '12:10', '12:15', '12:20', '12:25', '12:30',
                  ],
                  datasets: [{ data: graphData }],
                }}
                width={screenWidth - 20}
                height={200}
                withVerticalLines={false}
                withHorizontalLines={false}
                yAxisLabel="$"
                yAxisInterval={1}
                chartConfig={{
                  backgroundColor: '#fff',
                  backgroundGradientFrom: '#fff',
                  backgroundGradientTo: '#fff',
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(63, 0, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(85, 85, 85, ${opacity})`,
                  style: { borderRadius: 8 },
                  // Remove grid lines
                
                  // Remove the dots at each point
                  propsForDots: {
                    r: '0', // Remove the dots
                  }
                }}
                bezier
                style={styles.graphStyle}
              />
            </View>
          </TapGestureHandler>
        </View>

        <View style={styles.timeframeButtonsContainer}>
          <TouchableOpacity onPress={() => setTimeframe('daily')} style={[styles.timeframeButton, timeframe === 'daily' && styles.activeButton]}>
            <Text style={styles.buttonText}>Daily</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTimeframe('monthly')} style={[styles.timeframeButton, timeframe === 'monthly' && styles.activeButton]}>
            <Text style={styles.buttonText}>Monthly</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTimeframe('yearly')} style={[styles.timeframeButton, timeframe === 'yearly' && styles.activeButton]}>
            <Text style={styles.buttonText}>Yearly</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.container}>
            <View style={styles.assetsContainer}>
            <Text style={styles.assetsTitle}>Your Assets</Text>
            <View style={styles.assetContainer}>
                <View style= {styles.leftContainer}>
                    <Text style={styles.assetName}>Bitcoin (BTC)</Text>
                    <Text style={styles.assetAmount}>Amount: 0.25 BTC</Text>
                </View>
                <View style= {styles.rightContainer}>
                    <Text style={styles.assetValue}>Value: ${totalValue.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.assetContainer}>
                <View style= {styles.leftContainer}>
                    <Text style={styles.assetName}>Ethereum (ETH)</Text>
                    <Text style={styles.assetAmount}>Amount: 3.50 ETH</Text>
                </View>
                
                <View style= {styles.rightContainer}>
                    <Text style={styles.assetValue}>Value: ${totalValue.toFixed(2)}</Text>
                </View> 
            </View>
            <View style={styles.assetContainer}>
                <View style= {styles.leftContainer}>
                    <Text style={styles.assetName}>Solana (SOL)</Text>
                    <Text style={styles.assetAmount}>Amount: 5.9 SOL</Text>
                </View>
                
                <View style= {styles.rightContainer}>
                    <Text style={styles.assetValue}>Value: ${totalValue.toFixed(2)}</Text>
                </View> 
            </View>
            <View style={styles.assetContainer}>
                <View style= {styles.leftContainer}>
                    <Text style={styles.assetName}>Tether (TET)</Text>
                    <Text style={styles.assetAmount}>Amount: 1300 TET</Text>
                </View>
                
                <View style= {styles.rightContainer}>
                    <Text style={styles.assetValue}>Value: ${totalValue.toFixed(2)}</Text>
                </View> 
            </View>
            <View style={styles.assetContainer}>
                <View style= {styles.leftContainer}>
                    <Text style={styles.assetName}>Dogecoin (DOGE)</Text>
                    <Text style={styles.assetAmount}>Amount: 13340 DOGE</Text>
                </View>
                
                <View style= {styles.rightContainer}>
                    <Text style={styles.assetValue}>Value: ${totalValue.toFixed(2)}</Text>
                </View> 
            </View>
            
            </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  graphContainer: {
    marginBottom: 0,
  },
  graphTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  graphStyle: {
    marginVertical: 0,
    borderRadius: 8,
  },
  chartWrapper: {
    alignItems: 'center',
  },
  timeframeButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  timeframeButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  activeButton: {
    backgroundColor: '#3F00FF',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  assetsContainer: {
    marginBottom: 40,
  },
  assetsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  assetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#ffffff',
  },
  assetName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  assetAmount: {
    fontSize: 14,
    color: '#666',
  },
  leftContainer: {
    flex: 3,
  },
  rightContainer: {
    flex: 2,
    alignItems: 'flex-end',
  },
  assetValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3F00FF',
  },
});

export default PortfolioGraph;
