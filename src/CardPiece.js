import {Pressable, Text, View} from "react-native";

const CardPiece = ({part, erasePart, setCurrentPart, setModalVisibleDetails}) => {
    return (
        <Pressable className="bg-[#3b3b48] p-4 rounded-xl flex-row items-center justify-between mb-2" onPress={() => {
            setCurrentPart(part);
            setModalVisibleDetails(true);
        }}>
            <View className="">
                <View className="flex-row">
                    <Text className="text-white font-bold">Pieza: </Text>
                    <Text className="text-white">{part.piece}</Text>
                </View>

                <View className="flex-row">
                    <Text className="text-white font-bold">Fecha de cambio: </Text>
                    <Text className="text-white">{part.changeDate}</Text>
                </View>
            </View>

            <Pressable className="py-3 px-5 rounded-full bg-[#ea5583]" onPress={() => erasePart(part)}>
                <Text className="text-white font-bold">Eliminar</Text>
            </Pressable>
        </Pressable>
    );
}

export default CardPiece;