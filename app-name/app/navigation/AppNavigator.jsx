import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../screens/common-ui/Loader'
import { useNavigationStore } from '../store/navigation-store'
import { HomeScreen } from '../screens/private/HomeScreen'
import { CameraScreen } from '../screens/private/CameraScreen/CameraScreen'
import { UserProfileScreen } from '../screens/private/UserProfileScreen'
import { publicScreens } from './routes'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppNavigator = () => {
    const { isLoading, userToken } = useContext(AuthContext)
    const { isHomeScreen, isCameraScreen, isUserProfileScreen } = useNavigationStore()

    const setScreen = () => {
        if (isHomeScreen) return HomeScreen
        else if (isCameraScreen) return CameraScreen
        else if (isUserProfileScreen) return UserProfileScreen
    }

    const CurrentScreen = setScreen()

    if (isLoading) {
        return <Loader />
    }

    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {!userToken && publicScreens.map(({ name, component }) => <Screen key={name} name={name} component={component} />)}
                {userToken && <Screen name={'CurrentScreen'} component={CurrentScreen} />}
            </Navigator>
        </NavigationContainer>
    )
}
