import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from '~/components/ui';

import { t } from '~/services';
import { spacing } from '~/styles';


export const Welcome: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">Welcome</Text>
      <Text variant="bodyMedium" style={styles.sub}>
        {t('welcome.welcome_steps')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingVertical: spacing(4),
  },
  sub: {
    marginTop: spacing(2),
    textAlign: 'center',
  },
});

export default Welcome;
