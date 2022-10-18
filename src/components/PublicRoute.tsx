import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PublicRoute({ children }: Props) {
  return <>{children}</>;
}
