import type { ReactNode } from 'react';

export default function ErrorMesage({ children }: { children: ReactNode }) {
  return <p className="mt-2 text-sm text-red-500">{children}</p>;
}
