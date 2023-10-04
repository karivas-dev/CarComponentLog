import {FlatList, Pressable, ScrollView, Text, View} from "react-native";
import CardPiece from "./CardPiece";
import {useState} from "react";
import DetailedCardPiece from "./DetailedCardPiece";

const Display = ({modalVisibleForm, setModalVisibleForm, parts, erasePart}) => {
    const [currentPart, setCurrentPart] = useState(null);
    const [modalVisibleDetails, setModalVisibleDetails] = useState(false);

    return (
        <View className="flex-1 m-5">
            <Text className="text-white text-center text-2xl my-5 font-extrabold">Car Component Log</Text>

            <Pressable className="py-3 px-12 my-4 rounded-full bg-[#ee9442]"
                       onPress={() => {setModalVisibleForm(!modalVisibleForm)}}>
                <Text className="text-white font-bold text-center">Agregar pieza</Text>
            </Pressable>
            <FlatList data={parts}
                      renderItem={({item}) => <CardPiece part={item} erasePart={erasePart} setCurrentPart={setCurrentPart} setModalVisibleDetails={setModalVisibleDetails}/>}
                      keyExtractor={part => part.id} nestedScrollEnabled/>
            <DetailedCardPiece modalVisibleDetails={modalVisibleDetails} setModalVisibleDetails={setModalVisibleDetails}
                part={currentPart} setCurrentPart={setCurrentPart} erasePart={erasePart}/>
        </View>
    );
}

export default Display;
