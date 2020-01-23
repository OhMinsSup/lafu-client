import { useReducer, useCallback } from 'react';

type UseErrorAction = {
  type: string;
  error: boolean;
  name: string;
  message: string;
};

function reducer<T>(state: T, action: UseErrorAction) {
  switch (action.type) {
    case 'ERROR':
      return {
        ...state,
        error: action.error,
        name: action.name,
        message: action.message,
      };
    default:
      throw new Error();
  }
}

export default function useError<T>(defaultValues: T) {
  const [state, dispatch] = useReducer(reducer, defaultValues as any);
  const onChange = useCallback(({ name, message }) => {
    dispatch({
      type: 'ERROR',
      error: true,
      name,
      message,
    });
  }, []);

  const onReset = useCallback(() => {
    dispatch({
      type: 'ERROR',
      error: false,
      name: '',
      message: '',
    });
  }, []);

  return [state, onChange, onReset, dispatch] as [
    typeof state,
    typeof onChange,
    typeof onReset,
    typeof dispatch,
  ];
}
