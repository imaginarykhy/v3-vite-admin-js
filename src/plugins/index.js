import { loadElementPlus } from "./element-plus"
import { loadElementPlusIcon } from "./element-plus-icon"

export function loadPlugins(app) {
  loadElementPlus(app)
  loadElementPlusIcon(app)
}
