import { StyleSheet } from 'react-native';

import { spacing } from '~/styles';
import { Colors } from '~/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'stretch',
    gap: 20,
  },

  // OTP boxes in ONE horizontal row
  slotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing(3),
    width: '100%',
  },

  // Single PIN box
  slot: {
    width: 50,
    height: 60,
    borderWidth: 1,
    borderRadius: spacing(3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  slotText: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 28,
  },

  footer: {
    flexDirection: 'row',
    gap: spacing(2),
    width: '100%',
    justifyContent: 'flex-end',
  },
});
