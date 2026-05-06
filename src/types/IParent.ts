import { EFamilyRole, ERole } from '~/store/settings/enums';

export interface IParent extends CreatedProps {
  id: string;
  name: string;
  familyRole?: EFamilyRole;
  role?: ERole;
  color?: string;
  avatar?: string;
  email?: string; // not for now
  passwordHash?: string; // not for now
  passwordPattern?: string;
}

export type ParentFormProps = OmitCreatedKeys<IParent>;
