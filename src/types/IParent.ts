import { CreatedProps } from "../../types";
import { ERole } from "~/store/settings";


export interface IParent extends CreatedProps  {
  id: string;
  name: string;
  lastName?: string;
  role?: ERole;
  email?: string; // not for now
  passwordHash?: string; // not for now
}

export type ParentFormProps = Omit<IParent, 'id' | 'createdBy' | 'createdAt' | 'updatedBy' | 'updatedAt'>;
