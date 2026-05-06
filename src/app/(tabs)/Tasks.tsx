import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '~/components/ui/collapsible';
import { ExternalLink } from '~/components/external-link';
import ParallaxScrollView from '~/components/parallax-scroll-view';
import { ThemedText } from '~/components/ui/themed-text';
import { ThemedView } from '~/components/ui/themed-view';
import { IconSymbol } from '~/components/ui/icon-symbol';
import { Fonts } from '~/constants/theme';
import bgImgSrc from '~/assets/img/bg.png';
import { ScreenHeaderWithLogo } from '~/components/blocks';
import React from 'react';
import { SafeAreaBackground } from '~/components/blocks/SafeAreaBackground';

export default function TabOneScreen() {
  return (
    <SafeAreaBackground hasTopInsets bgImg={bgImgSrc}>
      <ScreenHeaderWithLogo containerStyle={{backgroundColor: 'transparent'}} />
    {/*<ParallaxScrollView*/}
    {/*  headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}*/}
    {/*  headerImage={*/}
    {/*    <IconSymbol*/}
    {/*      size={310}*/}
    {/*      // color="#808080"*/}
    {/*      name="chevron.left.forwardslash.chevron.right"*/}
    {/*      style={styles.headerImage}*/}
    {/*    />*/}
    {/*  }>*/}


    {/*</ParallaxScrollView>*/}
    </SafeAreaBackground>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
