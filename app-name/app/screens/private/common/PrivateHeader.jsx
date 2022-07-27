import React, { useContext } from 'react'
import { View } from 'react-native'
import { HEADERS_COMMON_STYLES } from '../../../styles/headers-common'
import { AuthContext } from '../../../context/AuthContext'
import { AppLogo } from '../../common-ui/AppLogo'
import { MyButton } from '../../common-ui/MyButton'

export const PrivateHeader = () => {
    const { logout } = useContext(AuthContext)
    return (
        <View style={HEADERS_COMMON_STYLES.headerContainer}>
            <AppLogo />
            <MyButton title="logout" onPress={logout} small />
        </View>
    )
}
