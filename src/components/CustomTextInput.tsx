import { ComponentPropsWithoutRef } from 'react';
import { Field, FieldProps } from 'formik';
import ErrorDisplay from './ErrorDisplay';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  id: string;
  type?: 'text' | 'date' | 'password';
  label: string;
  error?: string | null;
}

export const Input = ({
  label,
  id,
  error,
  type = 'text',
  ...rest
}: InputProps) => {
  return (
    <div className='w-full'>
      <div
        className={`flex flex-col font-ubuntu rounded bg-white-lilac py-2 px-3 border ${
          !!error ? 'border-red-600' : 'border-mercury mb-3'
        }`}
      >
        <label htmlFor={id} className='text-dusty-grey text-xs mb-1'>
          {label}
        </label>
        <input
          id={id}
          type={type}
          className='text-bluish-cyan text-sm bg-white-lilac outline-none'
          placeholder=''
          {...rest}
        />
      </div>
      {!!error && <ErrorDisplay errorMessage={error} classes='text-xs p-2' />}
    </div>
  );
};

export interface InputFieldProps extends InputProps {
  name: string;
}

const InputField = ({ name, ...rest }: InputFieldProps) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <Input
          {...field}
          {...rest}
          error={meta?.touched && meta?.error ? meta?.error : null}
        />
      )}
    </Field>
  );
};

export default InputField;
