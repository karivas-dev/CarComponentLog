import {Image, Pressable, Text, View} from "react-native";

const Display = ({modalVisibleForm, setModalVisibleForm}) => {
    return (
        <View className="flex-1 items-center justify-center m-5">
            <View className="bg-amber-500 rounded-full">
                <Image
                    source={require("../assets/car.png")}
                />
            </View>
            <Text className="text-white text-2xl my-5 font-extrabold">Car Component Log</Text>
            <Text className="text-white mb-4">No se han registrado piezas</Text>
            <Pressable className="py-3 px-12 rounded-full bg-[#ee9442]"
                       onPress={() => setModalVisibleForm(!modalVisibleForm)}>
                <Text className="text-white font-bold">Agregar pieza</Text>
            </Pressable>
        </View>
    );
}

export default Display;
