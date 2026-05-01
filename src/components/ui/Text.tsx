import React from 'react';
import type { ComponentProps } from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { Text as PaperText } from 'react-native-paper';

export type PaperTextProps = ComponentProps<typeof PaperText>;

type FontFamily = 'rubik' | 'roboto' | 'fredoka';

type Props = PaperTextProps & {
  weight?: 'regular' | 'medium' | 'bold';
  fontFamily?: FontFamily;
  variant?: PaperTextProps['variant'];
};

const getFontFamily = (family: FontFamily, weight: string) => {
  switch (family) {
    case 'roboto':
      return {
        regular: 'Roboto_400Regular',
        medium: 'Roboto_500Medium',
        bold: 'Roboto_700Bold',
      }[weight];

    case 'fredoka':
      return {
        regular: 'Fredoka_400Regular',
        medium: 'Fredoka_500Medium',
        bold: 'Fredoka_700Bold',
      }[weight];
    case 'rubik':
    default:
      return {
        regular: 'Rubik_400Regular',
        medium: 'Rubik_500Medium',
        bold: 'Rubik_700Bold',
      }[weight];
  }
};

export const Text: React.FC<Props> = ({
  weight = 'regular',
  fontFamily = 'roboto',
  variant = 'bodyMedium',
  style,
  children,
  ...rest
}) => {
  const font = getFontFamily(fontFamily, weight);

  const textStyle: StyleProp<TextStyle> = {
    fontFamily: font,
    fontWeight: undefined, // IMPORTANT: avoid conflict with custom fonts
  };

  return (
    <PaperText variant={variant} style={[textStyle, style]} {...rest}>
      {children}
    </PaperText>
  );
};
