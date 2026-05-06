import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { Colors } from '~/styles';
import {
  ProgressBar as PaperProgressBar,
  ProgressBarProps,
} from 'react-native-paper';

interface Props extends Omit<ProgressBarProps, 'progress'> {
  progress: number; // 0 - 100
  color?: string; // completed part
  trackColor?: string; // empty part
  style?: StyleProp<ViewStyle>;
}

export const ProgressBar: React.FC<Props> = ({
  progress,
  color = Colors.blue600,
  trackColor = Colors.blue200,
  style,
  ...rest
}) => {
  const normalizedProgress = Math.max(0, Math.min(progress, 100)) / 100;

  return (
    <View style={[styles.track, { backgroundColor: trackColor }, style]}>
      <PaperProgressBar
        progress={normalizedProgress}
        color={color}
        style={styles.bar}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  track: {
    width: '100%',
    height: 14,
    borderRadius: 999,
    overflow: 'hidden',
  },

  bar: {
    height: '100%',
    backgroundColor: 'transparent',
  },
});
