import { useState } from 'react'
import { View, Text, TextInput, Image } from 'react-native'

const FormField = ({ title, value, placeholder, handleChangeText, icon, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
    <View className="mt-8 w-full space-y-2">
        <Text className="font-pmedium text-xl">{title}</Text>
        <View className="flex-row items-center rounded-xl py-3 px-4 border border-primary-black focus:border-primary-blue">
            <Image 
                source={icon}
                resizeMode="contain"
                className="mr-2 w-4"
            />
            <TextInput 
                className="text-base flex-1 font-pregular"
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#777777"
                onChangeText={handleChangeText}
                secureTextEntry={title === "Пароль" && !showPassword}
            />
        </View>
    </View>
    )
}

export default FormField