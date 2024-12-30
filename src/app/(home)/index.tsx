import React from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8; // Width of each card
const CARD_HEIGHT = 200; // Height of each card
const CARD_SPACING = 10; // Reduced space between cards
const CARDS = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];

type CardProps = {
  label: string;
  index: number;
  scrollX: Animated.SharedValue<number>;
};

const WalletCards: React.FC = () => {
  const scrollX = useSharedValue(0);

  // Use useAnimatedScrollHandler to track the scroll position
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x; // Track horizontal scroll position
    },
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.carouselWrapper}>
        <Animated.ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH + CARD_SPACING} // Enable snapping to card width
          contentContainerStyle={styles.carousel}
          onScroll={scrollHandler} // Using useAnimatedScrollHandler
          scrollEventThrottle={16}
          decelerationRate="fast"
          snapToAlignment="center"
        >
          {CARDS.map((card, index) => (
            <Card key={index} label={card} index={index} scrollX={scrollX} />
          ))}
        </Animated.ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};

const Card: React.FC<CardProps> = ({ label, index, scrollX }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const offset = index * (CARD_WIDTH + CARD_SPACING);

    // Interpolation for scaling the cards (larger scale for the selected one)
    const scale = interpolate(
      scrollX.value,
      [offset - CARD_WIDTH, offset, offset + CARD_WIDTH],
      [0.8, 1, 0.8],
      Extrapolate.CLAMP
    );

    // Elevate the selected card (move it upwards) and lower the other cards
    const translateY = interpolate(
      scrollX.value,
      [offset - CARD_WIDTH, offset, offset + CARD_WIDTH],
      [30, 0, 30], // Elevating selected card
      Extrapolate.CLAMP
    );

    // Determine if the card is selected (centered in the view)
    const isSelected = Math.abs(scrollX.value - offset) < CARD_WIDTH / 2;

    // Adjust brightness and opacity for the selected card
    const brightness = interpolate(
      scrollX.value,
      [offset - CARD_WIDTH, offset, offset + CARD_WIDTH],
      [0.6, 1, 0.6], // Dimming non-selected cards, brightening the selected one
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      scrollX.value,
      [offset - CARD_WIDTH, offset, offset + CARD_WIDTH],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );

    // Define background color (highlighting the selected card)
    const backgroundColor = isSelected ? '#6200ee' : '#9e77ff'; // Brighter version of the card color for the selected one

    // Adjust translateX to make sure the cards are stacked behind the selected one
    const translateX = interpolate(
      scrollX.value,
      [offset - CARD_WIDTH / 2, offset, offset + CARD_WIDTH / 2],
      [-width / 2 + CARD_WIDTH / 2, 0, width / 2 - CARD_WIDTH / 2],
      Extrapolate.CLAMP
    );

    // Apply zIndex to make the selected card appear on top
    const zIndex = isSelected ? 1 : 0; // Selected card on top, others at the back

    // Adjust translateX for the non-selected cards to be behind the selected card
    const backCardTranslateX = isSelected ? 0 : translateX;

    return {
      transform: [{ scale }, { translateY }, { translateX: backCardTranslateX }],
      opacity,
      backgroundColor,
      zIndex, // Ensure the selected card is on top
      filter: `brightness(${brightness})`, // Apply the brightness change to the selected card
    };
  });

  return (
    <Animated.View style={[styles.card, animatedStyle]}>
      <Text style={styles.cardText}>{label}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  carouselWrapper: {
    marginTop: 50, // Position the cards at the top
    height: CARD_HEIGHT + 40, // Set height to ensure space for cards
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  carousel: {
    flexDirection: 'row', // Horizontal scrolling
    alignItems: 'center',
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginHorizontal: CARD_SPACING / 2, // Reduced space between cards
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WalletCards;
