import React from "react";
import { LinkRoute } from "../components/LinkRoute";
import { ROOT } from "./Constants";

export const NotFound = () => {
  return (
    <>
      {/* Page Not Found! */}
      <LinkRoute to={ROOT}>Anasayfa</LinkRoute>
      <div>404: sayfa bulunamadı!</div>
    </>
  );
};
