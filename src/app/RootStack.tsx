import { useEffect } from 'react';

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { useFonts } from 'expo-font';

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from '@expo-google-fonts/rubik';

import {
  Fredoka_400Regular,
  Fredoka_500Medium,
  Fredoka_600SemiBold,
  Fredoka_700Bold,
} from '@expo-google-fonts/fredoka';

import { Loading } from '~/components/ui/Loading';
import { useColorScheme } from '~/hooks/use-color-scheme';
import { AppDispatch } from '~/store';
import { selectParentIds } from '~/store/parents/selectors';
import { initLanguage } from '~/store/settings';
import { selectIsLangInitiating, selectLang } from '~/store/settings/selectors';
import { ELang } from '~/types/ELang';

export default function RootStack() {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch<AppDispatch>();

  const lang = useSelector(selectLang) ?? ELang.es;

  const isLangInitiating = useSelector(selectIsLangInitiating) || false; // TODO remove this
  // const parentIds = useSelector(selectParentIds);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,

    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,

    Fredoka_400Regular,
    Fredoka_500Medium,
    Fredoka_600SemiBold,
    Fredoka_700Bold,
  });

  useEffect(() => {
    dispatch(initLanguage());
  }, [dispatch]);

  if (!fontsLoaded || isLangInitiating) {
    return <Loading />;
  }

  const minimalHeaderBackOptions: NativeStackNavigationOptions = {
    headerBackTitle: '',
    headerBackButtonDisplayMode: 'minimal',
  };

  return (
    <PaperProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          key={`stack-${lang}`}
          // initialRouteName={parentIds.length === 0 ? 'parents/ProfileSteps' : '(tabs)'}
          initialRouteName={'(tabs)'}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/*<Stack.Screen*/}
          {/*  name="users/ProfileSteps"*/}
          {/*  options={{ headerShown: false }}*/}
          {/*/>*/}
          {/*<Stack.Screen*/}
          {/*  name="modal"*/}
          {/*  options={{ presentation: 'modal', title: 'Modal' }}*/}
          {/*/>*/}

          {/*<Stack.Screen*/}
          {/*  name="more/Settings/Settings"*/}
          {/*  options={minimalHeaderBackOptions}*/}
          {/*/>*/}

          {/*<Stack.Screen*/}
          {/*  name="users/UserAdd"*/}
          {/*  options={minimalHeaderBackOptions}*/}
          {/*/>*/}
          {/*<Stack.Screen*/}
          {/*  name="users/UserEdit"*/}
          {/*  options={minimalHeaderBackOptions}*/}
          {/*/>*/}
          {/*<Stack.Screen*/}
          {/*  name="users/UsersRemove"*/}
          {/*  options={minimalHeaderBackOptions}*/}
          {/*/>*/}
        </Stack>
      </ThemeProvider>
    </PaperProvider>
  );
}
