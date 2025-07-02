import { PropsWithChildren } from 'react';

export default function PageLayout({ children }: PropsWithChildren) {
  return <div className="flex flex-col min-h-full">{children}</div>;
}
