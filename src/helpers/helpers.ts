import { INote } from '../types/notesTypes';

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

export function onSubmitForm(obj: INote, noteNumber: number) {
  const formObj = obj;
  formObj.id = Date.now();
  formObj.time = convertDate();
  formObj.noteNumber = noteNumber;
  return formObj;
}
