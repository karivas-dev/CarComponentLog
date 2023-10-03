import {Pressable, Text, View} from "react-native";

const CardPiece = (piece) => {

    return (
        <View className="bg-[#3b3b48] p-4 rounded-xl flex-row items-center justify-between">
            <View className="">
                <View className="flex-row">
                    <Text className="text-white font-bold">Pieza: </Text>
                    <Text className="text-white">Llanta </Text>
                </View>

                <View className="flex-row">
                    <Text className="text-white font-bold">Fecha de cambio: </Text>
                    <Text className="text-white">Hoy</Text>
                </View>
            </View>

            <Pressable className="py-3 px-10 rounded-full bg-[#ea5583]"
                       onPress={() => {}}>
                <Text className="text-white font-bold">Eliminar</Text>
            </Pressable>
        </View>
    );
}

export default CardPiece;