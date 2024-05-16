import { PATTERNS } from '@common/constants';

export const rules = (tc: (msg: string, sep?: string) => string) => {
  return {
    nickname: {
      required: { value: true, message: 'nickname is required' },
      validate: (value: string) => {
        return /^[A-Za-z0-9\-_.]+$/.test(value)
          ? true
          : tc(
              'the name can contain numbers, uppercase and lowercase letters, dashes, underscores, periods'
            );
      },
      minLength: {
        value: 4,
        message: tc('nickname should be longer than or equal to 4 symbols'),
      },
      maxLength: {
        value: 20,
        message: tc('nickname must be shorter than or equal to 20 characters'),
      },
    },
    phone: {
      required: { value: true, message: 'Phone number is required' },
      minLength: {
        value: 15,
        message: 'Phone number too short',
      },
    },
    email: {
      required: { value: true, message: tc('email is required') },
      pattern: { value: PATTERNS.EMAIL, message: tc('incorrect email format') },
    },
    telegram: {
      required: { value: true, message: tc('telegram login is required') },
      pattern: {
        value: PATTERNS.TELEGRAM,
        message: tc('incorrect telegram login format'),
      },
    },
    firstName: {
      required: { value: true, message: tc('first name is required') },
      minLength: {
        value: 3,
        message: tc('first name should be longer than or equal to 3 symbols'),
      },
    },
    lastName: {
      required: { value: true, message: tc('last name is required') },
      minLength: {
        value: 3,
        message: tc('last name should be longer than or equal to 3 symbols'),
      },
    },
  };
};
