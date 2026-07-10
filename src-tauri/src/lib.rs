// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
// #[tauri::command]
// fn greet(name: &str) -> String {
//     format!("Hello, {}! You've been greeted from Rust!", name)
// }
// 

use tauri::{AppHandle, WebviewWindowBuilder, WebviewUrl};

#[tauri::command]
fn new_window(app: AppHandle) -> Result<(), String> {
    WebviewWindowBuilder::new(&app, "window-1", WebviewUrl::App("/main".into()))
        .title("WIP WRITER")
        .build()
        .map_err(|e| e.to_string())?;
    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![new_window])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
