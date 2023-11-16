import { reactive, ref } from "vue"
import { defineStore } from "pinia"
import { getSidebarStatus, setSidebarStatus } from "@/utils/cache/localStorage"

export const DeviceType = {
  Mobile: 0,
  Desktop: 1
};



export const useAppStore = defineStore("app", () => {
  const sidebar = reactive({
    opened: getSidebarStatus() !== "closed",
    withoutAnimation: false
  })
  const device = ref(DeviceType.Desktop)

  const toggleSidebar = (withoutAnimation) => {
    sidebar.opened = !sidebar.opened
    sidebar.withoutAnimation = withoutAnimation
    if (sidebar.opened) {
      setSidebarStatus("opened")
    } else {
      setSidebarStatus("closed")
    }
  }
  const closeSidebar = (withoutAnimation) => {
    sidebar.opened = false
    sidebar.withoutAnimation = withoutAnimation
    setSidebarStatus("closed")
  }
  const toggleDevice = (value) => {
    device.value = value
  }

  return { device, sidebar, toggleSidebar, closeSidebar, toggleDevice }
})
