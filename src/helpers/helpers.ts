import { INote } from '../types/notesTypes';
import { v4 as createId } from 'uuid';

export function convertDate() {
  let date = new Date();
  return (
    String(date.getDate()).padStart(2, '0') +
    '/' +
    String(date.getMonth() + 1).padStart(2, '0') +
    '/' +
    date.getFullYear()
  );
}

export function onSubmitForm(obj: INote) {
  const formObj = obj;
  formObj.id = createId();
  formObj.time = convertDate();
  return formObj;
}
