import { StyleSheet } from 'react-native';

import { spacing } from '~/styles';
import { Colors } from '~/styles';

export const styles = StyleSheet.create({
  errorText: {
    color: Colors.red500,
    marginTop: spacing(1),
  },
  label: {
    marginBottom: 8,
  },
  swatchGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  swatchOuter: {
    width: 40,
    height: 40,
    borderRadius: 999,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swatchInner: {
    width: 32,
    height: 32,
    borderRadius: 999,
  },
});
