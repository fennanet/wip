import { invoke } from "@tauri-apps/api/core";
import { getCurrentWindow } from '@tauri-apps/api/window';

console.log('yes');

let opening = false;

document.getElementById('new')?.addEventListener('click', open_new);


function open_new() {
  console.log('hdhd');
  if (opening) return;
  opening = true;
  invoke("new_window")
  
    .catch((err) => console.error("Failed to open new project:", err))
    .finally(() => { opening = false; });
  console.log('gurt');

  handleClose();
}

function handleClose() {
  getCurrentWindow().close().catch(console.error);
}