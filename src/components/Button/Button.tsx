import classNames from 'classnames';
import type { ReactNode } from 'react';

export interface Props {
  status?: string;
  children: ReactNode;
}

function Button({ status = 'primary', children }: Props) {
  return (
    <button
      type="button"
      className={classNames(
        'inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ',
        {
          'bg-red-600 hover:bg-red-700 focus:ring-red-500': status === 'danger',
          'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500':
            status === 'primary',
        }
      )}
    >
      {children}
    </button>
  );
}

export default Button;
