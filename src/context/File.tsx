'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

interface ActiveFileContextProps {
  activeFileName: string;
  setActiveFileName: (name: string) => void;
}

const ActiveFileContext = createContext<ActiveFileContextProps | undefined>(
  undefined,
);

export const ActiveFileProvider = ({ children }: { children: ReactNode }) => {
  const [activeFileName, setActiveFileName] = useState<string>('/');

  return (
    <ActiveFileContext.Provider value={{ activeFileName, setActiveFileName }}>
      {children}
    </ActiveFileContext.Provider>
  );
};

export const useActiveFile = () => {
  const context = useContext(ActiveFileContext);
  if (context === undefined) {
    throw new Error('useActiveFile must be used within an ActiveFileProvider');
  }
  return context;
};
