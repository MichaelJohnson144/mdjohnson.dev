import { useFormContext, Controller } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FocusEvent, ChangeEvent } from 'react';

import { CustomTextField } from '../CustomTextField';

export default function Name() {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={null}
      name={'fullName'}
      render={({ field: { ref, value } }) => (
        <CustomTextField
          autoComplete={'name'}
          className={'!w-full'}
          error={!!errors.fullName}
          helperText={errors.fullName ? 'Please enter your full name with leading caps ' : null}
          id={'fullName'}
          InputProps={{
            endAdornment: (
              <InputAdornment
                className={'!h-fit !text-2xl !text-pink-400 sm:!text-3xl'}
                position={'end'}
              >
                <FontAwesomeIcon icon={faUser} />
              </InputAdornment>
            ),
          }}
          inputRef={ref}
          label={'Full Name *'}
          placeholder={'John / Jane Doe'}
          {...register('fullName', {
            onBlur: (event: FocusEvent<HTMLInputElement>) => event,
            onChange: (event: ChangeEvent<HTMLInputElement>) => event,
            pattern: /^(\p{L}+[',. -])*(\p{L}+[',.-][\p{L} ])*(?:(?!A)\p{L})+$/gmu,
            required: true,
            value: value,
          })}
          type={'text'}
          variant={'outlined'}
        />
      )}
    />
  );
}
