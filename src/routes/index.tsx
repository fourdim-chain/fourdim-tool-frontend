import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { pathname } = useLocation();

    return (
        <Suspense fallback={null}>
            <Component {...props} />
        </Suspense>
    );
};

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { element: <HomePage />, index: true },
            ]
        },
    ]);
}

// MAIN
const HomePage = Loadable(lazy(() => import('../pages/Home')));