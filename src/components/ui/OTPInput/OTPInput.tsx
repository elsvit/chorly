import React from 'react';
import { View } from 'react-native';

import { OTPInput as OTPInputNative } from 'input-otp-native';

import { Button, ButtonColors, Text } from '~/components/ui';
import { t } from '~/services';

import { styles } from './styles';

interface OTPInputProps {
  maxLength: number;
  value: string;
  onChange: (newValue: string) => void;
  onComplete?: (value: string) => void;
}

export const OTPInput = ({
  maxLength,
  value,
  onChange,
  onComplete,
}: OTPInputProps) => {
  return (
    <View style={styles.container}>
      <OTPInputNative
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        onComplete={onComplete}
        render={({ slots }) => (
          <View style={styles.slotsRow}>
            {slots.map((slot, index) => (
              <View
                key={index}
                style={[
                  styles.slot,
                  {
                    borderColor: slot.isActive ? '#3B82F6' : '#D1D5DB',
                  },
                ]}
              >
                <Text style={styles.slotText}>{slot.char ?? ''}</Text>
              </View>
            ))}
          </View>
        )}
      />
      <View style={styles.footer}>
        <Button mode="contained" bgColor={ButtonColors.Gray} onPress={() => {}}>
          {t('button.reset') || 'Reset'}
        </Button>
        <Button
          mode="contained"
          onPress={() => {}}
          bgColor={ButtonColors.Green}
          disabled={value.length < maxLength}
        >
          {t('button.save') || 'Save'}
        </Button>
      </View>
    </View>
  );
};

