import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from '~/App.tsx'
import Home from '~/pages/Home'
import Catalog from '~/pages/Catalog'
import About from '~/pages/About'
import Error from '~/pages/Error'
import '~/index.css'
import {BASE_PATH} from '~/config/constants';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'catalog',
                element: <Catalog/>,
            },
            {
                path: 'about',
                element: <About/>,
            },
            {
                path: '404',
                element: <Error/>,
            },
            {
                path: '*',
                element: <Error/>,
            },
        ],
    },
], {
    basename: BASE_PATH,
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
