import React, { useContext } from "react";
import { SnackbarContext } from "../components/Snackbar/Snackbar";

export const useSnackbar = () => {
  const { show } = useContext(SnackbarContext);

  return show;
};
