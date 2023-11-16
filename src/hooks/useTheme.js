import { ref, watchEffect } from "vue"
import { getActiveThemeName, setActiveThemeName } from "@/utils/cache/localStorage"

const DEFAULT_THEME_NAME = "normal"

/** 注册的主题名称, 其中 DefaultThemeNameType 是必填的 */



/** 主题列表 */
const themeList = [
  {
    title: "默认",
    name: DEFAULT_THEME_NAME
  },
  {
    title: "黑暗",
    name: "dark"
  },
  {
    title: "深蓝",
    name: "dark-blue"
  }
]

/** 正在应用的主题名称 */
const activeThemeName = ref(getActiveThemeName() || DEFAULT_THEME_NAME)

const setTheme = (value) => {
  activeThemeName.value = value
}

/** 在 html 根元素上挂载 class */
const setHtmlClassName = (value) => {
  document.documentElement.className = value
}

const initTheme = () => {
  watchEffect(() => {
    const value = activeThemeName.value
    setHtmlClassName(value)
    setActiveThemeName(value)
  })
}

/** 主题 hook */
export function useTheme() {
  return { themeList, activeThemeName, initTheme, setTheme }
}
