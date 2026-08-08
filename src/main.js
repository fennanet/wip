import { invoke } from "@tauri-apps/api/core";
import { getCurrentWindow } from '@tauri-apps/api/window';

let opening = false;

function open_new() {
  if (opening) return;
  opening = true;
  invoke("new_window")
  
    .catch((err) => console.error("Failed to open new project:", err))
    .finally(() => { opening = false; });

  handleClose();
}

function handleClose() {
  getCurrentWindow().close().catch(console.error);
}