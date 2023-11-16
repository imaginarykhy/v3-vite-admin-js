import SvgIcon from "@/components/SvgIcon/index.vue" // Svg Component
import "virtual:svg-icons-register"

export function loadSvg(app) {
  app.component("SvgIcon", SvgIcon)
}
