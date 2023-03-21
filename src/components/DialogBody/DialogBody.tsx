import { FC, ReactNode } from 'react';

export const DialogBody: FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};
