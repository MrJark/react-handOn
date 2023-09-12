import { AboutPage, HomePage, SearchPage } from "../components"




export const APP_ROUTES = [
    {
        path: '/',
        Component: HomePage,
    },
    {
        path: '/about',
        Component: AboutPage,
    },

]

export const APP_ROUTE_FOR_SEARCH = [
    {
        path: '/search/:query',
        Component: SearchPage,
    }
]