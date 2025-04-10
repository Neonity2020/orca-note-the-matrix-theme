export async function load(pluginName) {
  orca.themes.register(pluginName, "the-matrix-theme", "theme.css");
}

export async function unload() {
  orca.themes.unregister("the-matrix-theme");
}
