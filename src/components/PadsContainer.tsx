import { ChildrenProps } from "../interface/interface";

export const PadsContainer = ({children}: ChildrenProps) => {
  return (
    <div className="bg-neutral-500 flex flex-row flex-wrap">{children}</div>
  )
};