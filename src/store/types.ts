import { IStateSettings } from './settings/types';
import { IStateCommon } from './common/types';
import { IStateParents } from './parents/types';
import { IStateChildren } from './children/types';

export enum EStateName {
  common = 'common',
  settings = 'settings',
  parents = 'parents',
  children = 'children',
}

// export const EStateName = {
//   common: 'common',
//   account: 'account',
//   dishes: 'dishes',
//   products: 'products',
//   genericProducts: 'genericProducts',
//   users: 'users',
//   cart: 'cart',
// }

export interface IState {
  [EStateName.common]: IStateCommon;
  [EStateName.settings]: IStateSettings;
  [EStateName.parents]: IStateParents;
  [EStateName.children]: IStateChildren;
}

export type Saga = (...args: any[]) => Generator<any>;
