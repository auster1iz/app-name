import React, { useContext, useState } from 'react'
import { TextInput, View, Alert } from 'react-native'
import { UIStyles } from '../../styles/ui'
import { COLORS } from '../../styles/colors'
import { MyButton } from '../common-ui/MyButton'
import { emailRegExp } from '../../constants'
import { PUBLIC_SCREENS_COMMON_STYLES } from '../../styles/public-screens-common'
import { AuthContext } from '../../context/AuthContext'
import { PublicScreenBottomText } from './components/PublicScreenBottomText'
import { PublicHeader } from './components/PublicHeader'

export const LoginScreen = ({ navigation }) => {
    const [loginInfo, setLoginInfo] = useState({ email: '', password: '' })
    const { login } = useContext(AuthContext)

    const navigateToSignUp = () => navigation.navigate('Sign-up')

    const changeEmail = (text) => setLoginInfo({ ...loginInfo, email: text })
    const changePassword = (text) => setLoginInfo({ ...loginInfo, password: text })

    const inputFields = [
        { placeholder: 'Email', onTextChange: changeEmail, value: loginInfo.email, keyboardTYpe: 'email-address', isSecure: false },
        { placeholder: 'Password', onTextChange: changePassword, value: loginInfo.password, keyboardTYpe: 'default', isSecure: true },
    ]

    const isFormValid = () => {
        const { email, password } = loginInfo

        if (!emailRegExp.test(email)) {
            Alert.alert('Email', 'incorrect email')
            return false
        } else if (password.trim().length < 6) {
            Alert.alert('Password', 'minimum 6 characters')
            return false
        }

        return true
    }

    const onSubmit = () => {
        const isValid = isFormValid()
        if (!isValid) return
        login(loginInfo)
    }

    return (
        <View style={PUBLIC_SCREENS_COMMON_STYLES.container}>
            <PublicHeader screenTitle="Login" />
            <View style={PUBLIC_SCREENS_COMMON_STYLES.content}>
                {inputFields.map(({ placeholder, onTextChange, value, keyboardTYpe, isSecure }) => (
                    <TextInput
                        key={placeholder}
                        value={value}
                        onChangeText={onTextChange}
                        style={UIStyles.input}
                        secureTextEntry={isSecure}
                        placeholderTextColor={COLORS.placeholderColor}
                        placeholder={placeholder}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType={keyboardTYpe}
                    />
                ))}
                <View style={PUBLIC_SCREENS_COMMON_STYLES.buttonContainer}>
                    <MyButton onPress={onSubmit} title="Login" />
                </View>
                <PublicScreenBottomText onLinkPress={navigateToSignUp} linkText="Sign Up!" text="If you don't have an account please" />
            </View>
        </View>
    )
}
