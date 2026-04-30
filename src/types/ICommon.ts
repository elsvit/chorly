export interface IId {
  id: string;
}

export enum EFormMode {
  Add = 'add',
  Edit = 'edit',
}

export interface IOptions<T> {
  label: string;
  value: T;
}

export interface IStringOptions extends IOptions<string> {}

export enum WeekDay {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}
