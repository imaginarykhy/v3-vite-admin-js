import { ref, onMounted } from "vue"



export function useFetchSelect(props) {
  const { api } = props

  const loading = ref(false)
  const options = ref([])
  const value = ref("")

  /** 调用接口获取数据 */
  const loadData = () => {
    loading.value = true
    options.value = []
    api()
      .then((res) => {
        options.value = res.data
      })
      .finally(() => {
        loading.value = false
      })
  }

  onMounted(() => {
    loadData()
  })

  return {
    loading,
    options,
    value
  }
}
