import React, { useContext, useState } from 'react'
import { TextInput, View, Alert } from 'react-native'
import omit from 'lodash.omit'
import { UIStyles } from '../../styles/ui'
import { COLORS } from '../../styles/colors'
import { MyButton } from '../common-ui/MyButton'
import { emailRegExp } from '../../constants'
import { PUBLIC_SCREENS_COMMON_STYLES } from '../../styles/public-screens-common'
import { AuthContext } from '../../context/AuthContext'
import { PublicScreenBottomText } from './components/PublicScreenBottomText'
import { PublicHeader } from './components/PublicHeader'

export const SignUpScreen = ({ navigation }) => {
    const [signUpInfo, setSignUpInfo] = useState({ username: '', email: '', password: '', confirmPassword: '' })
    const { registration } = useContext(AuthContext)

    const navigateToLogin = () => navigation.navigate('Login')

    const changeUsername = (text) => setSignUpInfo({ ...signUpInfo, username: text })
    const changeEmail = (text) => setSignUpInfo({ ...signUpInfo, email: text })
    const changePassword = (text) => setSignUpInfo({ ...signUpInfo, password: text })
    const changeConfirmPassword = (text) => setSignUpInfo({ ...signUpInfo, confirmPassword: text })

    const inputFields = [
        { placeholder: 'Username', onTextChange: changeUsername, value: signUpInfo.username, keyboardTYpe: 'default', isSecure: false },
        { placeholder: 'Email', onTextChange: changeEmail, value: signUpInfo.email, keyboardTYpe: 'email-address', isSecure: false },
        { placeholder: 'Password', onTextChange: changePassword, value: signUpInfo.password, keyboardTYpe: 'default', isSecure: true },
        { placeholder: 'Confirm password', onTextChange: changeConfirmPassword, value: signUpInfo.confirmPassword, keyboardTYpe: 'default', isSecure: true },
    ]

    const isFormValid = () => {
        const { username, email, password, confirmPassword } = signUpInfo

        if (username.trim().length < 6) {
            Alert.alert('Username', 'minimum 6 characters')
            return false
        } else if (!emailRegExp.test(email)) {
            Alert.alert('Email', 'incorrect email')
            return false
        } else if (password.trim().length < 6) {
            Alert.alert('Password', 'minimum 6 characters')
            return false
        } else if (password !== confirmPassword) {
            Alert.alert('Password', 'passwords does not mach')
            return false
        }

        return true
    }

    const onSubmit = () => {
        const isValid = isFormValid()
        if (!isValid) return
        const registrationInfo = omit(signUpInfo, ['confirmPassword'])
        registration(registrationInfo)
    }

    return (
        <View style={PUBLIC_SCREENS_COMMON_STYLES.container}>
            <PublicHeader screenTitle="Sign Up" />
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
                    <MyButton onPress={onSubmit} title="Sign Up" />
                </View>
                <PublicScreenBottomText onLinkPress={navigateToLogin} linkText="Login!" text="If you have an account please" />
            </View>
        </View>
    )
}
