import React from 'react';
import type { RouteProps } from 'react-router';

export interface Props extends RouteProps {
  page: string;
}

function Lazy({ page }: Props) {
  const Component = React.useMemo(() => {
    return React.lazy(() =>
      import(`pages/${page}`).then((module) => module[page])
    );
  }, [page]);

  return (
    <React.Suspense fallback={<>...</>}>
      <Component />
    </React.Suspense>
  );
}

export default Lazy;
