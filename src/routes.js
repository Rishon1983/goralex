import HomeComponent from './components/HomeComponent';
import CodingComponent from "./components/CodingComponent";
import PageNotFound from "./components/PageNotFound";

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
                name: 'Education and Skills',
                path: '#educationAndSkills',
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
        component: PageNotFound,
        tags: []
    }
];