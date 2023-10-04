import {Image, Modal, Pressable, Text, View} from "react-native";

export default function DetailedCardPiece({modalVisibleDetails, setModalVisibleDetails, part, setCurrentPart, erasePart}) {
    return (
        <Modal transparent={true} animationType='slide'
               visible={modalVisibleDetails} onRequestClose={() => setModalVisibleDetails(false)}>

            <View className="m-5 p-5 rounded-xl bg-[#3b3b48]/95 space-y-2">
                <Text className="text-white text-center font-extrabold mb-7 text-2xl">Detalles</Text>

                <View className="items-center my-6 rounded-full">
                    <Image
                        source={require("../assets/tools.png")}
                        className="h-40 w-40"
                    />
                </View>

                <View className="px-4 flex">
                    <View className="flex-row">
                        <Text className="text-white font-bold">Pieza: </Text>
                        <Text className="text-white">{part?.piece} </Text>
                    </View>

                    <View className="flex-row">
                        <Text className="text-white font-bold">Marca: </Text>
                        <Text className="text-white">{part?.brand}</Text>
                    </View>

                    <View className="flex-row">
                        <Text className="text-white font-bold">No. serie: </Text>
                        <Text className="text-white">{part?.serial}</Text>
                    </View>

                    <View className="flex-row">
                        <Text className="text-white font-bold">Precio: </Text>
                        <Text className="text-white">${parseFloat(part?.price)?.toFixed(2)}</Text>
                    </View>

                    <View className="flex-row">
                        <Text className="text-white font-bold">Fecha de cambio: </Text>
                        <Text className="text-white">{part?.changeDate}</Text>
                    </View>
                </View>

                <View className="flex-row justify-between space-x-2">
                    <Pressable className="py-3 px-14 mt-8 rounded-full bg-[#ee9442]"
                               onPress={() => {
                                   erasePart(part);
                                   setModalVisibleDetails(false);
                                   setCurrentPart(null);
                               }}>
                        <Text className="text-white text-center font-bold">Eliminar</Text>
                    </Pressable>

                    <Pressable className="py-3 px-10 mt-8 rounded-full bg-[#ea5583]"
                               onPress={() => setModalVisibleDetails(false)}>
                        <Text className="text-white text-center font-bold">Cerrar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}