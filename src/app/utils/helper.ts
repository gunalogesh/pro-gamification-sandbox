export const trackCode = (newCode: any, key: string) => {
  let oldCode = JSON.parse(sessionStorage.getItem('codeChanges') ?? '{}');
  const a = codeChanged(key, newCode);
  console.log(newCode);
  console.log(oldCode);

  if (newCode && oldCode && a) {
    oldCode[key]?.length
      ? oldCode[key].push(newCode)
      : (oldCode[key] = [newCode]);
    sessionStorage.setItem('codeChanges', JSON.stringify(oldCode));
  }
  console.log(a);
  console.log(oldCode);

  return a;
};

export const codeChanged = (key: string, newCode: any) => {
  let oldCode = JSON.parse(sessionStorage.getItem('codeChanges') ?? '{}');
  console.log(sessionStorage.getItem('codeChanges'));

  if (oldCode[key]?.length >= 0) {
    let lastIndex = oldCode[key]?.length - 1;

    if (newCode?.userId == oldCode[key][lastIndex - 1]?.userId) {
      return false;
    }
  }
  return true;
};
