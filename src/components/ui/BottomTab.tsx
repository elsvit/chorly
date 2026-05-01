import React from 'react';
import {
  Dimensions,
  Image,
  type ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';

import { Text } from './Text';

export type BottomTabProps = {
  Icon: ImageSourcePropType;
  ActiveIcon: ImageSourcePropType;
  focused?: boolean;
  label?: string;
  badge?: number | string;
  badgeBackgroundColor?: string;
  badgeTextColor?: string;
};

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const ICON_SIZE = SCREEN_WIDTH * 0.28;

const ACTIVE_COLOR = '#FEF30C';
const INACTIVE_COLOR = '#4FB3FF';

export const BottomTab: React.FC<BottomTabProps> = ({
  Icon,
  ActiveIcon,
  focused = false,
  label,
  badge,
  badgeBackgroundColor = '#FF3B30',
  badgeTextColor = '#fff',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        {/* ICON */}
        <Image
          source={focused ? ActiveIcon : Icon}
          style={{ width: ICON_SIZE, height: ICON_SIZE }}
          resizeMode="contain"
        />

        {/* LABEL OVERLAY (BOTTOM INSIDE IMAGE) */}
        {label ? (
          <View style={styles.labelOverlay}>
            <Text
              fontFamily="fredoka"
              // fontFamily="rubik"
              // fontFamily="roboto"
              weight="bold"
              style={[
                styles.labelText,
                { color: focused ? ACTIVE_COLOR : INACTIVE_COLOR },
              ]}
              numberOfLines={1}
            >
              {label}
            </Text>
          </View>
        ) : null}

        {/* BADGE */}
        {badge ? (
          <View
            style={[styles.badge, { backgroundColor: badgeBackgroundColor }]}
          >
            <Text style={[styles.badgeText, { color: badgeTextColor }]}>
              {String(badge)}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

  labelOverlay: {
    position: 'absolute',
    bottom: -8,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
    elevation: 10,
  },

  labelText: {
    fontSize: 16,
    textAlign: 'center',
  },

  badge: {
    position: 'absolute',
    top: 0,
    right: 10,
    minWidth: 20,
    height: 20,
    paddingHorizontal: 4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 20,
  },

  badgeText: {
    fontSize: 10,
  },
});

export default BottomTab;
