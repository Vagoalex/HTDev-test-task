import { useFormik, FormikProps, FormikErrors } from 'formik';
import { motion } from 'framer-motion';

import './NotesFormPage.scss';

interface FormikValues {
  note: string;
  signature: string;
  time: string;
}

const NotesForm = () => {
  const formik: FormikProps<FormikValues> = useFormik<FormikValues>({
    initialValues: {
      note: '',
      signature: '',
      time: '',
    },

    validate: (values: FormikValues) => {
      let errors: FormikErrors<FormikValues> = {};

      if (!values.signature) {
        errors.signature = 'Укажите подпись.';
      } else if (values.signature.length < 4) {
        errors.signature = 'Минимум 4 символа.';
      }

      return errors;
    },
    onSubmit: (values: FormikValues) =>
      console.log(JSON.stringify(values, null, 2)),
    // onSubmit: (values) => console.log(values),
  });

  return (
    <motion.section
      className='NotesForm'
      initial={{ position: 'relative', left: '-50%' }}
      animate={{ position: 'relative', left: '0%' }}
      exit={{ position: 'absolute', left: '100%', top: 0, opacity: 0 }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className='NotesForm__container'>
        <form className='Form' onSubmit={formik.handleSubmit}>
          <div className='Form-elements'>
            <div className='Form-elements__field'>
              <label htmlFor='note'>Запись</label>
              <input
                id='note'
                name='note'
                type='text'
                value={formik.values.note}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Введите имя'
              />
              {formik.touched.note && formik.errors.note ? (
                <div>{formik.errors.note}</div>
              ) : null}
            </div>

            <div className='Form-elements__field'>
              <label htmlFor='signature'>Подпись *</label>

              <input
                id='signature'
                name='signature'
                type='text'
                value={formik.values.signature}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Введите имя'
              />
              {formik.touched.signature && formik.errors.signature ? (
                <div>{formik.errors.signature}</div>
              ) : null}
            </div>

            <div className='Form-elements__field'>
              <label htmlFor='time'>Точное время по:</label>
              <select
                id='time'
                name='time'
                value={formik.values.time}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value=''>Выберите валюту</option>
                <option value='USD'>USD</option>
                <option value='UAH'>UAH</option>
                <option value='RUB'>RUB</option>
              </select>

              {formik.touched.time && formik.errors.time ? (
                <div>{formik.errors.time}</div>
              ) : null}
            </div>
          </div>

          <button type='submit'>Создать</button>
        </form>
      </div>
    </motion.section>
  );
};

export default NotesForm;
