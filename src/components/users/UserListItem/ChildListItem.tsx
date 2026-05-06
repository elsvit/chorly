import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'expo-router';

import { UserListItem } from './UserListItem';
import { selectCurrentRole } from '~/store/settings/selectors';
import { ERole } from '~/store/settings/enums';
import { selectParentById } from '~/store/parents/selectors';
import { selectChildById } from '~/store/children/selectors';

type Props = {
  id: string;
  role: ERole; // which store to read the entity from
  onPress?: () => void;
};

export const ChildListItem: React.FC<Props> = ({ id, role, onPress }) => {
  const currentRole = useSelector(selectCurrentRole);
  const isAdmin = currentRole === ERole.admin;
  const router = useRouter();

  const parent = useSelector(state => selectParentById(state as any, id));
  const child = useSelector(state => selectChildById(state as any, id));

  const entity = role === ERole.child ? child : parent;

  const handleEdit = React.useCallback(() => {
    if (role === ERole.child) {
      router.push('/users/ChildEdit');
    } else {
      router.push('/users/ParentEdit');
    }
  }, [router, role]);

  const handleDelete = React.useCallback(() => {
    if (role === ERole.child) {
      router.push('/users/ChildRemove');
    } else {
      router.push('/users/ParentRemove');
    }
  }, [router, role]);

  if (!entity) return null;

  return (
    <UserListItem
      name={(entity as any).name}
      familyRole={(entity as any).familyRole}
      avatar={(entity as any).avatar}
      color={(entity as any).color}
      onPress={onPress}
      onEdit={isAdmin ? handleEdit : undefined}
      onDelete={isAdmin ? handleDelete : undefined}
    />
  );
};

export default ChildListItem;
