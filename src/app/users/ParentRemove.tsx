import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useRouter } from 'expo-router';
// import { useDispatch } from 'react-redux';

import { SafeAreaBackground } from '~/components/blocks/SafeAreaBackground';
import { Button } from '~/components/ui/Button/Button';
import { useI18nHeaderTitle } from '~/hooks/useI18nHeaderTitle';
import { t } from '~/services';

export default function ParentRemove() {
  useI18nHeaderTitle('users.delete');
  // const dispatch = useDispatch();
  const router = useRouter();

  const handleRemove = () => {
    // dispatch(clearParents());
    if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <SafeAreaBackground>
      <View style={styles.container}>
        <Button
          mode="contained"
          isFullSize
          buttonColor="#e53935" // destructive color
          onPress={handleRemove}
        >
          {t('users.delete')}
        </Button>
      </View>
    </SafeAreaBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
