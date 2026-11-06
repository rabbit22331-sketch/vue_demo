export default[
    {
        path:'/',//漂亮網址
        name:'Home',//程式碼內的連結名稱
        component:()=> import('@page/frontend/home.vue')//@是VUE定義好的，代表src資料夾
    },
    {
        path:'/about',
        name:'About',
        component:()=> import('@page/frontend/about/index.vue')
    },
    {
        path:'/news',
        name:'News',
        component:()=> import('@page/frontend/news/index.vue')
    },
    {
        path:'/news-detail',
        name:'NewsIns',
        component:()=> import('@page/frontend/news/ins.vue')
    },
    {
        path:'/contact',
        name:'Contact',
        component:()=> import('@page/frontend/contact/index.vue')
    }
]