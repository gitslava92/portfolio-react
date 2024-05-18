import { PATTERNS } from '@common/constants';

export const rules = (tc: (msg: string, sep?: string) => string) => {
  return {
    name: {
      required: { value: true, message: 'name is required' },
      maxLength: {
        value: 50,
        message: tc('name must be shorter than or equal to 50 characters'),
      },
    },
    email: {
      required: { value: true, message: tc('email is required') },
      pattern: { value: PATTERNS.EMAIL, message: tc('incorrect email format') },
    },
    message: {
      required: { value: true, message: 'message is required' },
      maxLength: {
        value: 250,
        message: tc('message must be shorter than or equal to 250 characters'),
      },
    },
  };
};
