import MyStack from './routes/Routes';
import {NativeBaseProvider} from "native-base";

export default function App() {
    return (
        <>
            <NativeBaseProvider>
                <MyStack/>
            </NativeBaseProvider>
        </>
    );
}
