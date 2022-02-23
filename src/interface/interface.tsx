import { ReactNode } from "react";

export interface ChildrenProps {
	children: ReactNode;
}

export interface DrumProps {
  children: ReactNode;
  note: string | number;
  isPlay: string;
  setIsPlay: React.Dispatch<React.SetStateAction<string>>;
}