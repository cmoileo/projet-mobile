import MyStack from './routes/Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    return (
        <>
            <SafeAreaProvider>
                <MyStack/>
            </SafeAreaProvider>
        </>
    );
}
