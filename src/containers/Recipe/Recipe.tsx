import { ReactElement, FC } from 'react';

const Recipe: FC<{ children: ReactElement }> = ({ children }) => {
  return <div className="tw-mx-auto tw-px-2 tw-pb-2 tw-max-w-2xl">{children}</div>;
};

export default Recipe;
