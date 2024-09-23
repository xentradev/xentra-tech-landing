"use client";
import { RefObject, useRef } from "react";

export default function useDialog(): [
  RefObject<HTMLDialogElement>,
  () => void,
  () => void
] {
  const dialog = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialog.current?.showModal();
  };

  const closeDialog = () => {
    dialog.current?.close();
  };

  return [dialog, openDialog, closeDialog];
}
