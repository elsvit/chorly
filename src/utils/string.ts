export const checkIfString= (value: any): value is string => typeof value === 'string';

export const getInitials = (fullName?: string) => {
  if (!fullName || !checkIfString(fullName)) {
    return '--';
  }

  return fullName
    .split(' ')
    .filter((letter: string) => letter)
    .map((name: string) => name[0])
    .slice(0, 2)
    .join('');
};

export const capitalizeFirst = (str: string) =>
  (str || '').charAt(0).toUpperCase() + (str || '').slice(1);

export const capitalizeAll = (str: string) => {
  return (str || '').replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
};

