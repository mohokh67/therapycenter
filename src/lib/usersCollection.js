import { find } from './firestoreHelper';
import { isEmpty } from './utility';

const collectionName = 'users';

export async function findName(id) {
  const user = await find({
    collectionName,
    id
  });

  if(!isEmpty(user)){
    return user.name;
  }

  return '';
}