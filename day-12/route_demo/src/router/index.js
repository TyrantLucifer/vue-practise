import VueRouter from 'vue-router'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import NewsPage from '../pages/NewsPage'
import MessagePage from '../pages/MessagePage'
import MessageDetail from '../pages/MessageDetail'

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: AboutPage
        },
        {
            path: '/Home',
            component: HomePage,
            children: [
                {
                    path: 'news',
                    component: NewsPage
                },
                {
                    path: 'message',
                    component: MessagePage,
                    children: [
                        {
                            path: 'detail',
                            component: MessageDetail
                        }
                    ]
                }
            ]
        }
    ]
})