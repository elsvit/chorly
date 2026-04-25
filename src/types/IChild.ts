export interface IChild {
  id: string;
  name: string;
  updatedAt?: string;
  createdAt: string;
}

export type ChildFormProps = Omit<IChild, 'id' | 'updatedAt' | 'createdAt'>;
