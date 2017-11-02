export const LOADING = 'LOADING'

export default (loading = true) => ({
  type: LOADING,
  payload: loading
})
