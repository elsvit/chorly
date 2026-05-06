export interface IChild extends CreatedProps {
  id: string;
  name: string;
  birthday?: string;
  color?: string;
  avatar?: string;
  passwordPattern?: string;
}

export type ChildFormProps = OmitCreatedKeys<IChild>;
