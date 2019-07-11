import { AxiosStatic, AxiosInstance } from 'axios'
declare module 'vue/types/vue' {
    interface Vue {
      $ajax: any
    }
}
