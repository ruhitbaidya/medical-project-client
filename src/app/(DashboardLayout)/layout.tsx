import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generateed By Ruhit",
};
const layout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
