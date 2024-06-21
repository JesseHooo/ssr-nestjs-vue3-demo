
      // The file is provisional which will be overwritten when restart
      export const FeRoutes = [{"path":"/detail/:id","component": function dynamicComponent () {
          return import(/* webpackChunkName: "detail-id" */ '@/pages/detail/render$id.vue')
        }
        ,"webpackChunkName":"detail-id","fetch": () => import(/* webpackChunkName: "detail-id-fetch" */ '@/pages/detail/fetch.ts'),"name":"detail-id"},{"path":"/","component": function dynamicComponent () {
          return import(/* webpackChunkName: "index" */ '@/pages/index/render.vue')
        }
        ,"webpackChunkName":"index","fetch": () => import(/* webpackChunkName: "index-fetch" */ '@/pages/index/fetch.ts'),"name":"index"}] 
      export { default as Layout } from "@/components/layout/index"
      export { default as App } from "@/components/layout/App"
      export { default as layoutFetch } from "@/components/layout/fetch"
      
      
      