import Vue from 'vue';
import Router from 'vue-router';
import { authGuard } from "../auth/authGuard";
const Login = () => import('../pages/login');
const Tasks = () => import('../pages/tasks');
const KanbanBoard = () => import('../pages/kanbanBoard');
const Calendar = () => import('../pages/calendar');


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: window.APP_CONFIG.CONTEXT_ROOT,
    routes: [
        {
            path: '/kanban',
            name: 'KanbanBoard',
            component: KanbanBoard,
            beforeEnter: authGuard
        },
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/tasks',
            name: 'Tasks',
            component: Tasks,
            beforeEnter: authGuard
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar,
            beforeEnter: authGuard
        },
    ]
});