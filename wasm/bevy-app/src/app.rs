use bevy::prelude::*;

pub fn run() {
    let window = Window {
        canvas: Some(String::from("canvas#bevy-app")),
        resolution: (640., 360.).into(),
        resizable: false,
        ..Default::default()
    };
    let primary_window = Some(window);

    App::new()
        .add_plugins(DefaultPlugins.set(WindowPlugin {
            primary_window,
            ..Default::default()
        }))
        .run();
}
