import { lazy } from 'react'

// project imports
import MainLayout from '@/layout/MainLayout'
import Loadable from '@/ui-component/loading/Loadable'

import { RequireAuth } from '@/routes/RequireAuth'

// chatflows routing
 => ))

// agents routing
 => ))

// marketplaces routing
 => ))

// apikey routing
 => ))

// tools routing
 => ))

// assistants routing
 => ))
 => ))
 => ))
 => ))

// credentials routing
 => ))

// variables routing
 => ))

// documents routing
 => ))
 => ))
 => ))
 => ))
 => ))
 => ))

// Evaluations routing
 => ))
 => ))
 => ))
 => ))
 => ))

// account routing
 => ))
 => ))

// files routing
 => ))

// logs routing
 => ))

// executions routing
 => ))

// enterprise features
 => ))
 => ))
 => ))
 => ))
 => ))
 => ))
 => ))

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: (
                <RequireAuth permission={'chatflows:view'}>
                    <Chatflows />
                </RequireAuth>
            )
        },
        {
            path: '/chatflows',
            element: (
                <RequireAuth permission={'chatflows:view'}>
                    <Chatflows />
                </RequireAuth>
            )
        },
        {
            path: '/agentflows',
            element: (
                <RequireAuth permission={'agentflows:view'}>
                    <Agentflows />
                </RequireAuth>
            )
        },
        {
            path: '/executions',
            element: (
                <RequireAuth permission={'executions:view'}>
                    <Executions />
                </RequireAuth>
            )
        },
        {
            path: '/marketplaces',
            element: (
                <RequireAuth permission={'templates:marketplace,templates:custom'}>
                    <Marketplaces />
                </RequireAuth>
            )
        },
        {
            path: '/apikey',
            element: (
                <RequireAuth permission={'apikeys:view'}>
                    <APIKey />
                </RequireAuth>
            )
        },
        {
            path: '/tools',
            element: (
                <RequireAuth permission={'tools:view'}>
                    <Tools />
                </RequireAuth>
            )
        },
        {
            path: '/assistants',
            element: (
                <RequireAuth permission={'assistants:view'}>
                    <Assistants />
                </RequireAuth>
            )
        },
        {
            path: '/assistants/custom',
            element: (
                <RequireAuth permission={'assistants:view'}>
                    <CustomAssistantLayout />
                </RequireAuth>
            )
        },
        {
            path: '/assistants/custom/:id',
            element: (
                <RequireAuth permission={'assistants:view'}>
                    <CustomAssistantConfigurePreview />
                </RequireAuth>
            )
        },
        {
            path: '/assistants/openai',
            element: (
                <RequireAuth permission={'assistants:view'}>
                    <OpenAIAssistantLayout />
                </RequireAuth>
            )
        },
        {
            path: '/credentials',
            element: (
                <RequireAuth permission={'credentials:view'}>
                    <Credentials />
                </RequireAuth>
            )
        },
        {
            path: '/variables',
            element: (
                <RequireAuth permission={'variables:view'}>
                    <Variables />
                </RequireAuth>
            )
        },
        {
            path: '/document-stores',
            element: (
                <RequireAuth permission={'documentStores:view'}>
                    <Documents />
                </RequireAuth>
            )
        },
        {
            path: '/document-stores/:storeId',
            element: (
                <RequireAuth permission={'documentStores:view'}>
                    <DocumentStoreDetail />
                </RequireAuth>
            )
        },
        {
            path: '/document-stores/chunks/:storeId/:fileId',
            element: (
                <RequireAuth permission={'documentStores:view'}>
                    <ShowStoredChunks />
                </RequireAuth>
            )
        },
        {
            path: '/document-stores/:storeId/:name',
            element: (
                <RequireAuth permission={'documentStores:view'}>
                    <LoaderConfigPreviewChunks />
                </RequireAuth>
            )
        },
        {
            path: '/document-stores/vector/:storeId',
            element: (
                <RequireAuth permission={'documentStores:view'}>
                    <VectorStoreConfigure />
                </RequireAuth>
            )
        },
        {
            path: '/document-stores/vector/:storeId/:docId',
            element: (
                <RequireAuth permission={'documentStores:view'}>
                    <VectorStoreConfigure />
                </RequireAuth>
            )
        },
        {
            path: '/document-stores/query/:storeId',
            element: (
                <RequireAuth permission={'documentStores:view'}>
                    <VectorStoreQuery />
                </RequireAuth>
            )
        },
        {
            path: '/datasets',
            element: (
                <RequireAuth permission={'datasets:view'} display={'feat:datasets'}>
                    <EvalDatasets />
                </RequireAuth>
            )
        },
        {
            path: '/dataset_rows/:id',
            element: (
                <RequireAuth permission={'datasets:view'} display={'feat:datasets'}>
                    <EvalDatasetRows />
                </RequireAuth>
            )
        },
        {
            path: '/evaluations',
            element: (
                <RequireAuth permission={'evaluations:view'} display={'feat:evaluations'}>
                    <EvalEvaluation />
                </RequireAuth>
            )
        },
        {
            path: '/evaluation_results/:id',
            element: (
                <RequireAuth permission={'evaluations:view'} display={'feat:evaluations'}>
                    <EvaluationResult />
                </RequireAuth>
            )
        },
        {
            path: '/evaluators',
            element: (
                <RequireAuth permission={'evaluators:view'} display={'feat:evaluators'}>
                    <Evaluators />
                </RequireAuth>
            )
        },
        {
            path: '/logs',
            element: (
                <RequireAuth permission={'logs:view'} display={'feat:logs'}>
                    <Logs />
                </RequireAuth>
            )
        },
        {
            path: '/files',
            element: (
                <RequireAuth display={'feat:files'}>
                    <Files />
                </RequireAuth>
            )
        },
        {
            path: '/account',
            element: (
                <RequireAuth display={'feat:account'}>
                    <Account />
                </RequireAuth>
            )
        },
        {
            path: '/users',
            element: (
                <RequireAuth permission={'users:manage'} display={'feat:users'}>
                    <UsersPage />
                </RequireAuth>
            )
        },
        {
            path: '/user-profile',
            element: <UserProfile />
        },
        {
            path: '/roles',
            element: (
                <RequireAuth permission={'roles:manage'} display={'feat:roles'}>
                    <RolesPage />
                </RequireAuth>
            )
        },
        {
            path: '/login-activity',
            element: (
                <RequireAuth permission={'loginActivity:view'} display={'feat:login-activity'}>
                    <LoginActivityPage />
                </RequireAuth>
            )
        },
        {
            path: '/workspaces',
            element: (
                <RequireAuth permission={'workspace:view'} display={'feat:workspaces'}>
                    <Workspaces />
                </RequireAuth>
            )
        },
        {
            path: '/workspace-users/:id',
            element: (
                <RequireAuth permission={'workspace:view'} display={'feat:workspaces'}>
                    <WorkspaceDetails />
                </RequireAuth>
            )
        },
        {
            path: '/sso-config',
            element: (
                <RequireAuth permission={'sso:manage'} display={'feat:sso-config'}>
                    <SSOConfig />
                </RequireAuth>
            )
        },
        {
            path: '/sso-success',
            element: <SSOSuccess />
        }
    ]
}

export default MainRoutes
