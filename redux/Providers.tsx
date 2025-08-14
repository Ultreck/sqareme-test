"use client";
import { Provider } from "react-redux";
import store from "./store";
import { ReactNode } from "react";
import { EnhancedStore } from "@reduxjs/toolkit";
// import store from "./store";

// interface ProvidersProps {
//   children: ReactNode;
//   store: EnhancedStore;
// }
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
