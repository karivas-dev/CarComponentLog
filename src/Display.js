import {Pressable, ScrollView, Text} from "react-native";
import CardPiece from "./CardPiece";

const Display = ({modalVisibleForm, setModalVisibleForm}) => {
    return (
        <ScrollView className="flex-1 m-5">
            <Text className="text-white text-center text-2xl my-5 font-extrabold">Car Component Log</Text>

            <Pressable className="py-3 px-12 my-4 rounded-full bg-[#ee9442]"
                       onPress={() => {setModalVisibleForm(!modalVisibleForm)}}>
                <Text className="text-white font-bold text-center">Agregar pieza</Text>
            </Pressable>

            <CardPiece />
        </ScrollView>
    );
}

export default Display;
