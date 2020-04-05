import HomeComponent from './components/HomeComponent';
import About from './components/AboutComponent';

/*Create the router with route components*/
export default [
    {
        path: '/home',
        component: HomeComponent
    },
    {
        path: '/about',
        component: About
    },
];