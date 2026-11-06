import layout from '@/page/backend/index.vue'
const routers=[
    {
        path:'/admim',
        component:layout,
        children:[
            {
                path:'about',
                name:'About',
                component:()=> import('@/page/backend/about/index.vue')
            },
            {
                path:'news',
                name:'News',
                component:()=> import('@/page/backend/news/index.vue')
            },
            {
                path:'contact',
                name:'Contact',
                component:()=> import('@/page/backend/contact/index.vue')

            }
        ]
    },
    {
        path:'/admin/login',
        name:'Login',
        component:()=> import('@/page/backend/login/index.vue')
    },
    {
        path:'/admin/forget',
        name:'Forget',
        component:()=> import('@/page/backend/login/forget.vue')
    }
]