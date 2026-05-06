import { t } from '~/services';
import { EFamilyRole, ERole } from '~/store/settings/enums';
import { IOptions } from '~/types';

export const FAMILY_ROLE_OPTIONS: IOptions<EFamilyRole>[] = [
  {
    value: EFamilyRole.mother,
    label: t('users.familyRole.mother'),
  },
  {
    value: EFamilyRole.father,
    label: t('users.familyRole.father'),
  },
  {
    value: EFamilyRole.grandmother,
    label: t('users.familyRole.grandmother'),
  },
  {
    value: EFamilyRole.grandfather,
    label: t('users.familyRole.grandfather'),
  },
  {
    value: EFamilyRole.sister,
    label: t('users.familyRole.sister'),
  },
  {
    value: EFamilyRole.brother,
    label: t('users.familyRole.brother'),
  },
  {
    value: EFamilyRole.nanny,
    label: t('users.familyRole.nanny'),
  },
  {
    value: EFamilyRole.aunt,
    label: t('users.familyRole.aunt'),
  },
  {
    value: EFamilyRole.uncle,
    label: t('users.familyRole.uncle'),
  },
  {
    value: EFamilyRole.reviewer,
    label: t('users.familyRole.reviewer'),
  },
  {
    value: EFamilyRole.reviewee,
    label: t('users.familyRole.reviewee'),
  },
  {
    value: EFamilyRole.other,
    label: t('common.other'),
  },
];

export const getFamilyRoleLabel = (familyRole: EFamilyRole) => {
  const option = FAMILY_ROLE_OPTIONS.find(o => o.value === familyRole);
  return option?.label ?? '';
};

export const ROLE_OPTIONS: IOptions<ERole>[] = [
  {
    value: ERole.admin,
    label: t('users.admin') || 'Admin',
  },
  {
    value: ERole.parent,
    label: t('users.parent') || 'Parent',
  },
  {
    value: ERole.child,
    label: t('users.child') || 'Child',
  },
];
