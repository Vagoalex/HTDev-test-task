import { useAppDispatch, useAppSelector } from '../../../store/reduxHooks';
import { addNote, plusCounterNote } from '../../../store/notesSlice';

import { onSubmitForm } from '../../../helpers/helpers';
import { INote } from '../../../types/notesTypes';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useFormik, FormikProps, FormikErrors } from 'formik';
import { motion } from 'framer-motion';

import './NotesFormPage.scss';
const NotesForm = () => {
  const countNote: number = useAppSelector((state) => state.notes.countNote);
  const dispatch = useAppDispatch();

  const notify = () =>
    toast.success('Заметка создана :)', {
      position: 'bottom-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const formik: FormikProps<INote> = useFormik<INote>({
    initialValues: {
      text: '',
      signature: '',
    },

    validate: (values: INote) => {
      let errors: FormikErrors<INote> = {};

      if (!values.signature) {
        errors.signature = 'Укажите подпись.';
      } else if (values.signature.length < 4) {
        errors.signature = 'Минимум 4 символа.';
      } else if (values.signature.length > 100) {
        errors.signature = 'Максимум 100 символов.';
      }

      return errors;
    },
    onSubmit: (values: INote, { resetForm }) => {
      resetForm();
      dispatch(addNote(onSubmitForm(values, countNote)));
      notify();
      dispatch(plusCounterNote());
    },
  });

  return (
    <motion.section
      className='NotesForm'
      initial={{ position: 'relative', left: '-50%', opacity: 0 }}
      animate={{ position: 'relative', left: '0%', opacity: 1 }}
      exit={{ position: 'absolute', left: '100%', top: 0, opacity: 0 }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className='NotesForm__container'>
        <form className='Form' onSubmit={formik.handleSubmit}>
          <div className='Form-elements'>
            <div className='Form-elements__field'>
              <label className='Form-elements__label' htmlFor='text'>
                Заметка
              </label>
              <textarea
                className='Form-elements__input Form-elements__textarea'
                id='text'
                name='text'
                value={formik.values.text}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Введите текст заметки'
              />
              {formik.touched.text && formik.errors.text ? (
                <div className='form-error-msg'>{formik.errors.text}</div>
              ) : null}
            </div>

            <div className='Form-elements__field'>
              <label className='Form-elements__label' htmlFor='signature'>
                Подпись *
              </label>

              <input
                className={`Form-elements__input ${
                  formik.touched.signature && formik.errors.signature
                    ? 'form-input-required'
                    : ''
                }`}
                id='signature'
                name='signature'
                type='text'
                value={formik.values.signature}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Введите подпись'
              />
              {formik.touched.signature && formik.errors.signature ? (
                <div className='form-error-msg'>{formik.errors.signature}</div>
              ) : null}
            </div>
          </div>

          <button
            className={`Form__btn ${
              formik.touched.signature && formik.errors.signature
                ? 'form-button-disabled'
                : ''
            }`}
            type='submit'
          >
            Создать
          </button>
        </form>
      </div>
      <ToastContainer />
    </motion.section>
  );
};

export default NotesForm;
