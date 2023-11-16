import { reactive } from "vue"



/** 默认的分页参数 */
const defaultPaginationData = {
  total: 0,
  currentPage: 1,
  pageSizes: [10, 20, 50],
  pageSize: 10,
  layout: "total, sizes, prev, pager, next, jumper"
}

export function usePagination(_paginationData = {}) {
  /** 合并分页参数 */
  const paginationData = reactive(Object.assign({ ...defaultPaginationData }, _paginationData))

  /** 改变当前页码 */
  const handleCurrentChange = (value) => {
    paginationData.currentPage = value
  }

  /** 改变页面大小 */
  const handleSizeChange = (value) => {
    paginationData.pageSize = value
  }

  return { paginationData, handleCurrentChange, handleSizeChange }
}
