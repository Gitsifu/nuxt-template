<template>
  <div>
    <Tutorial />
    <div class="tw-text-9xl">
      hello
    </div>
    {{userInfo}}
  </div>
</template>

<script>
import { getUserInfo } from '~/api'
import {mapState} from "vuex";
export default {
  name: 'IndexPage',
  data() {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.userInfo,
    }),
  },
  fetch({app, store}) {
    return getUserInfo({
      $axios: app.$axios,
    }).then(res=>{
      if(res.code === 0){
        store.commit('setUserInfo', res.data)
      }
    })
  },
  mounted () {
    getUserInfo({
      $axios: this.$axios,
    })
  }
}
</script>
