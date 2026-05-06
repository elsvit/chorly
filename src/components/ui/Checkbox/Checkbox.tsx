import React from 'react';
import type { ComponentProps } from 'react';

import { Checkbox as PaperCheckbox } from 'react-native-paper';

export type PaperCheckboxProps = ComponentProps<typeof PaperCheckbox>;

export const Checkbox: React.FC<PaperCheckboxProps> = ({ ...rest }) => {
  return <PaperCheckbox {...rest} />;
};
