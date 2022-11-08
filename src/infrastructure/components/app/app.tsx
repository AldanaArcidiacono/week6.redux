import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/app.routes';

export function App() {
    return (
        <>
            <Layout>
                <AppRoutes></AppRoutes>
            </Layout>
            <div>App inicial de React</div>
        </>
    );
}
