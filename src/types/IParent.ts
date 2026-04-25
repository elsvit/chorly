export interface IParent {
  id: string;
  name: string;
  lastName?: string;
  email?: string; // not for now
  passwordHash?: string; // not for now
  updatedAt?: string;
  createdAt: string;
}

export type ParentFormProps = Omit<IParent, 'id' | 'updatedAt' | 'createdAt'>;
