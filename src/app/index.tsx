import React from 'react';
import 'react-native-get-random-values';

import { Redirect } from 'expo-router';
import { useSelector } from 'react-redux';

import { selectParentIds } from '~/store/parents/selectors';
import { EMainTabs } from '~/types/ENavigation';
import { selectCurrentUser, selectCurrentRole } from '~/store/settings';

export default function Index() {
  const parentIds = useSelector(selectParentIds);
  const currentUserId = useSelector(selectCurrentUser);
  const currentUserRole = useSelector(selectCurrentRole);

  if (parentIds.length === 0) {
    return <Redirect href="/users/WelcomeSteps" />;
  }

  if (!currentUserId || !currentUserRole) {
    return <Redirect href="/users/Users" />;
  }

  return <Redirect href={`/users/WelcomeSteps`} />;
}
