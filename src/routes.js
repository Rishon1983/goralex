import HomeComponent from './components/HomeComponent';
import CodingComponent from "./components/CodingComponent";
import PageNotFoundComponent from "./components/PageNotFoundComponent";
import TestComponent from "./components/TestComponent";
import ProjectsComponent from "./components/ProjectsComponent";

/*Create the router with route components*/
export default [
    {
        path: '/',
        name: 'GorAlex',
        component: HomeComponent,
        tags: [
            {
                name: 'About Me',
                path: 'about',
                active: false
            },
            {
                name: 'Education',
                path: 'education',
                active: false
            },
            {
                name: 'Programming skills',
                path: 'skills',
                active: false
            },
            {
                name: 'Portfolio',
                path: 'portfolio',
                active: false
            },
            {
                name: 'Contact',
                path: 'contact',
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
        path: '/projects',
        name: 'Projects',
        component: ProjectsComponent,
        tags: []
    },
    {
        path: '/test',
        name: 'Test',
        component: TestComponent,
        tags: []
    },
    {
        path: "*",
        name: '404',
        component: PageNotFoundComponent,
        tags: []
    }
]