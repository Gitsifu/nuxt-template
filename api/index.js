export function getUserInfo({$axios, data}) {
  return $axios.$get(
    '/ports/web/index.php?_mall_id=2&r=api/kc/page-footer/get-footer-info',
    {
      params: data
    }
  )
}
