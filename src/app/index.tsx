import React from 'react';

import { Redirect } from 'expo-router';
import 'react-native-get-random-values';

import { EMainTabs } from '~/types/ENavigation';

// Redirect the root path "/" to the default tab route (route groups are invisible)
export default function Index() {
  // Note: EMainTabs has no "Home" entry; use a valid tab, e.g., Tasks
  return <Redirect href={`/${EMainTabs.Tasks}`} />;
}
