import { QueryClientProvider } from 'react-query';
import { getClient } from './queryClient';
import { ReactQueryDevtools } from 'react-query/devtools';

import { useRoutes } from 'react-router-dom';
import { routes } from "./routes";

const App = () => {
    const element = useRoutes(routes);
    const queryClient = getClient();
    
    return (
        <QueryClientProvider client={queryClient}>
            {element}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;