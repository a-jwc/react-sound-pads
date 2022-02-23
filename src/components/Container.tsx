import { ReactNode } from "react";
import { ChildrenProps } from "../interface/interface";

export const Container = ({ children }: ChildrenProps) => {
	return <div className="mx-auto px-5">{children}</div>;
};
