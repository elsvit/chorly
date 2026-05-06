import { RouteProp, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { SafeAreaBackground } from '~/components/blocks/SafeAreaBackground';
import { ParentForm } from '~/components/users/UserForm/ParentForm';
// import { useI18nHeaderTitle } from '~/hooks/useI18nHeaderTitle';
import { updateParent } from '~/store/parents';
import { EFormMode } from '~/types/ICommon';
import { IParent, ParentFormProps } from '~/types/IParent';

export default function ParentEdit() {
  // useI18nHeaderTitle('users.edit_parent');
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<Record<string, { userId: string }>, string>>();
  const userId = route.params?.userId;
  const handleSave = (user: ParentFormProps) => {
    const newUser: IParent = {
      id: userId as string,
      updatedAt: new Date().toISOString(),
      ...user,
    } as IParent;

    dispatch(
      updateParent({
        entity: newUser,
      }),
    );
  };

  return (
    <SafeAreaBackground>
      <ParentForm mode={EFormMode.Edit} onSave={handleSave} />
    </SafeAreaBackground>
  );
}
