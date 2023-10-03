import {Image, Modal, Pressable, Text, TextInput, View} from "react-native";
import * as Font from "expo-font";
import {useState} from "react";
import Display from "./src/Display";
import NoDisplay from "./src/NoDisplay";

export default function App() {
    async function loadCustomFont() {
        await Font.loadAsync({
            Caveat: require("./assets/fonts/CaveatBrush-Regular.ttf"),
            Montserrat: require("./assets/fonts/Montserrat.ttf"),
        });
    }

    const [parts, setParts] = useState(false);
    const [modalVisibleForm, setModalVisibleForm] = useState(false);
    const [modalVisibleDetails, setModalVisibleDetails] = useState(false);

    loadCustomFont();

    return (
        <View className={"bg-[#1e1f22] flex-1"}>
            <NoDisplay/>
            <Text className="text-white text-right m-1 mx-2">Illustration by Icons 8 from Ouch!</Text>
            <Modal transparent={true} animationType='slide'
                   visible={modalVisibleForm}
                   onRequestClose={() => {
                   }}>

                <View className="m-5 p-5 rounded-xl bg-[#3b3b48]/95 space-y-2">
                    <Text className="text-white text-center font-extrabold text-2xl mb-8">Añade los detalles</Text>

                    <View className="flex-row items-center justify-between">
                        <Text className="text-white">Pieza: </Text>
                        <TextInput className="border text-white border-white px-2 py-1 rounded-2xl ml-2 grow"/>
                    </View>

                    <View className="flex-row items-center justify-between">
                        <Text className="text-white">Marca: </Text>
                        <TextInput className="border text-white border-white px-2 py-1 rounded-2xl ml-2 grow"/>
                    </View>

                    <View className="flex-row items-center justify-between">
                        <Text className="text-white">No. Serie: </Text>
                        <TextInput className="border text-white border-white px-2 py-1 rounded-2xl ml-2 grow"/>
                    </View>

                    <View className="flex-row items-center justify-between">
                        <Text className="text-white">Fecha de cambio: </Text>
                        <TextInput className="border text-white border-white px-2 py-1 rounded-2xl ml-2 grow"/>
                    </View>

                    <View className="flex-row items-center justify-between space-x-2">
                        <Pressable className="py-3 px-16 mt-8 rounded-full bg-[#ee9442]"

                                   onPress={() => {
                                   }}>
                            <Text className="text-white text-center font-bold">Añadir</Text>
                        </Pressable>

                        <Pressable className="py-3 px-10 mt-8 rounded-full bg-[#ea5583]"
                                   onPress={() => {
                                   }}>
                            <Text className="text-white text-center font-bold">Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Modal transparent={true} animationType='slide'
                   visible={modalVisibleDetails}
                   onRequestClose={() => {
                   }}>

                <View className="m-5 p-5 rounded-xl bg-[#3b3b48]/95 space-y-2">
                    <Text className="text-white text-center font-extrabold mb-7 text-2xl">Detalles</Text>

                    <View className="items-center my-6 rounded-full">
                        <Image
                            source={require("./assets/tools.png")}
                            className="h-40 w-40"
                        />
                    </View>

                    <View className="px-4 flex">
                        <View className="flex-row">
                            <Text className="text-white font-bold">Pieza: </Text>
                            <Text className="text-white">Llanta </Text>
                        </View>

                        <View className="flex-row">
                            <Text className="text-white font-bold">Marca: </Text>
                            <Text className="text-white">de la buena</Text>
                        </View>

                        <View className="flex-row">
                            <Text className="text-white font-bold">No. serie: </Text>
                            <Text className="text-white">123XD</Text>
                        </View>

                        <View className="flex-row">
                            <Text className="text-white font-bold">Fecha de cambio: </Text>
                            <Text className="text-white">Hoy</Text>
                        </View>
                    </View>

                    <View className="flex-row justify-between space-x-2">
                        <Pressable className="py-3 px-14 mt-8 rounded-full bg-[#ee9442]"
                                   onPress={() => {}}>
                            <Text className="text-white text-center font-bold">Eliminar</Text>
                        </Pressable>

                        <Pressable className="py-3 px-10 mt-8 rounded-full bg-[#ea5583]"
                                   onPress={() => {}}>
                            <Text className="text-white text-center font-bold">Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
