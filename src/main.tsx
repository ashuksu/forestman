import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {HeadProvider} from 'react-head';
import App from '~/App.tsx';
import Home from '~/pages/Home';
import Catalog from '~/pages/Catalog';
import About from '~/pages/About';
import Error from '~/pages/Error';
import '~/index.css';
import {BASE_PATH} from '~/config/constants';
import i18n from './i18n';
import {I18nextProvider} from 'react-i18next';

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
                path: '*',
                element: <Error/>,
            },
        ],
    },
], {
    basename: BASE_PATH,
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <I18nextProvider i18n={i18n}>
            <HeadProvider>
                <RouterProvider router={router}/>
            </HeadProvider>
        </I18nextProvider>
    </StrictMode>
);