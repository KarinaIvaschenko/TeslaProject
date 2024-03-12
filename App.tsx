import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./redux/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import LockPage from "./screens/LockPage";
import UnlockPage from "./screens/UnlockPage";
import HomePage from "./screens/HomePage";
import OpenCarPage from "./screens/OpenCarPage";
import ClimateCarPage from "./screens/ClimateCarPage";
import ChargeCarPage from "./screens/ChargeCarPage";
import ControlCarPage from "./screens/ControlCarPage";
import CabinetPage from "./screens/CabinetPage";
import SignUpPage from "./screens/SignUpPage";
import SignInPage from "./screens/SignInPage";

export default function App() {
    const Stack = createNativeStackNavigator();
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="LockPage"
                        screenOptions={{
                            animation: "none",
                        }}
                    >
                        <Stack.Screen
                            name="LockPage"
                            component={LockPage}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="UnlockPage"
                            component={UnlockPage}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="HomePage"
                            component={HomePage}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="OpenCarPage"
                            component={OpenCarPage}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="ClimateCarPage"
                            component={ClimateCarPage}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="ChargeCarPage"
                            component={ChargeCarPage}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="ControlCarPage"
                            component={ControlCarPage}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="CabinetPage"
                            component={CabinetPage}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="SignInPage"
                            component={SignInPage}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="SignUpPage"
                            component={SignUpPage}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </QueryClientProvider>
    );
}
