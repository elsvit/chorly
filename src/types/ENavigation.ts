// import type { StackNavigationProp } from '@react-navigation/stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum EMainTabs {
  Tasks = 'Tasks',
  Routines = 'Routines',
  Rewards = 'Rewards',
  More = 'More',
}

export enum EScreens {
  // MainTabs = 'MainTabs',
  Settings = 'more/Settings/Settings',
  UserAdd = 'users/UserAdd',
  UserEdit = 'users/UserEdit',
  UsersRemove = 'users/UsersRemove',
  ParentAdd = 'users/ParentAdd',
  ParentEdit = 'users/ParentEdit',
  ParentRemove = 'users/ParentRemove',
  ChildAdd = 'users/ChildAdd',
  ChildEdit = 'users/ChildEdit',
  ChildRemove = 'users/ChildRemove',
  WelcomeSteps = 'users/WelcomeSteps',
}
