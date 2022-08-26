export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log('发送请求：' + config.url)
    config.headers['X-Access-Token'] = 'token'
  })
  $axios.onError(error => {
    if(error.response.status === 500) {
      redirect('/sorry')
    }else {
      console.log('error====', error)
    }
  })
}
