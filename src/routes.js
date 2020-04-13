import HomeComponent from './components/HomeComponent';
import CodingComponent from "./components/CodingComponent";
import PageNotFoundComponent from "./components/PageNotFoundComponent";

/*Create the router with route components*/
export default [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
        tags: [
            {
                name: 'About Me',
                path: '#about',
                active: false
            },
            {
                name: 'Education',
                path: '#education',
                active: false
            },
            {
                name: 'Programming skills',
                path: '#skills',
                active: false
            },
            {
                name: 'Contact',
                path: '#contact',
                active: false
            },
            {
                name: 'Portfolio',
                path: '#portfolio',
                active: false
            },
        ]
    },
    {
        path: '/coding',
        name: 'Coding',
        component: CodingComponent,
        tags: []
    },
    {
        path: "*",
        name: '404',
        component: PageNotFoundComponent,
        tags: []
    }
]