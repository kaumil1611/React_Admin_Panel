// middleware.js
import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import formatErrorMessage from 'utils/formatErrorMessage';

export const rtkQueryErrorLogger = () => {
  const middleware = () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      toast.error(formatErrorMessage(action.payload.data));
    }
    return next(action);
  };

  return middleware;
};