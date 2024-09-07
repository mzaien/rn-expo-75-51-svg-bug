import { Image, StyleSheet, Platform, I18nManager } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Illustration } from '@/components/Illustration';

export default function HomeScreen() {
  return (
    <Illustration style={{
      start: -8,
      transform: [{ scaleX: -1 }],
      // works with transform: [{ rotateY: I18nManager.isRTL ? '0deg' : '180deg'},],
    }} />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
