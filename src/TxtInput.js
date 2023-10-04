import {Text, TextInput, View} from "react-native";


export default function TxtInput({label, valueName, formik, placeholder}) {
    return (<>
    <View className="flex-row items-center justify-between">
        <Text className="text-white">{label}</Text>
        <TextInput className="border text-white border-white px-2 py-1 rounded-2xl ml-2 grow placeholder:text-white"
                   value={formik.values[valueName]}
                   onChangeText={formik.handleChange(valueName)}
                   placeholder={placeholder}/>
    </View>
    <Text className="text-red-500 capitalize-first text-right">
        { formik.touched[valueName] && formik.errors[valueName] }
    </Text>
    </>);
}