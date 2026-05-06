import { StyleSheet } from 'react-native';

import { INPUT_HEIGHT } from '~/constants/sizes';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
  },
  outlineStyle: {
    borderRadius: 12,
    borderColor: '#9E9E9E',
  },
  input: {
    height: INPUT_HEIGHT,
  },
  menuScroll: {
    maxHeight: 320,
  },
  menuItem: {
    paddingVertical: 8,
  },
});
