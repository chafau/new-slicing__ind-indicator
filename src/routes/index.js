import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Workspace from '../views/Administrator/Workspace/Workspace.vue'
import Account from '../views/Administrator/Account/Account.vue'
import Layout from '../layout/Layouts.vue'
import AdminLayout from '../views/Administrator/AdministratorLayouts.vue'
import About from '../views/About.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Layout,
			redirect: 'dashboard',
			children: [
				{
					path: 'dashboard',
					name: 'dashboard',
					component: Dashboard
				},
				{
					path: '/about',
					component: About
				},
			]
		},
		{
			path: '/administrator',
			component: Layout,
			redirect: '/administrator/workspace/create',
			children: [
				{
					path: 'workspace',
					name: 'workspace',
					component: AdminLayout,
					children: [
						{
							path: 'create',
							name: 'workspaceCreate',
							component: Workspace,
						}
					]
				},
				{
					path: 'account',
					name: 'account',
					component: AdminLayout,
					children: [
						{
							path: 'create',
							name: 'accountCreate',
							component: Account,
						}
					]
				},
			]
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: '/dashboard'
		}
	],
})

export default router