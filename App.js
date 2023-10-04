import {Image, Modal, Pressable, Text, TextInput, View} from "react-native";
import * as Font from "expo-font";
import {useEffect, useRef, useState} from "react";
import Display from "./src/Display";
import NoDisplay from "./src/NoDisplay";
import FormModal from "./src/FormModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
    async function loadCustomFont() {
        await Font.loadAsync({
            Caveat: require("./assets/fonts/CaveatBrush-Regular.ttf"),
            Montserrat: require("./assets/fonts/Montserrat.ttf"),
        });
    }

    const firstLoad = useRef(true);
    const [parts, setParts] = useState([]);
    const [modalVisibleForm, setModalVisibleForm] = useState(false);

    loadCustomFont();

    useEffect(() => {
        const updatePartsStorage = async () => {
            if (firstLoad.current)
                return;

            try {
                await AsyncStorage.setItem('parts', JSON.stringify(parts));
            } catch (error) {
                console.log(error);
            }
        }
        updatePartsStorage();
    }, [parts]);

    useEffect(() => {
        const getPartsFromStorage = async () => {
            try {
                const partsStorage = await AsyncStorage.getItem('parts');
                if (partsStorage)
                    setParts(JSON.parse(partsStorage));

                firstLoad.current = false;
            } catch (error) {
                console.log(error);
            }
        }
        getPartsFromStorage();
    }, []);

    const addPart = part => setParts([...parts, part].sort((a, b) => new Date(b.changeDate) - new Date(a.changeDate)));
    const erasePart = part => setParts(parts.filter(p => p.id !== part.id));

    return (
        <View className={"bg-[#1e1f22] flex-1"}>
            { parts.length === 0 ? (
                <NoDisplay modalVisibleForm={modalVisibleForm} setModalVisibleForm={setModalVisibleForm}/>
            ): (
                <Display modalVisibleForm={modalVisibleForm} setModalVisibleForm={setModalVisibleForm} parts={parts} erasePart={erasePart}/>
            )}
            <Text className="text-white text-right m-1 mx-2 text-sm">Illustration by Icons 8 from Ouch!</Text>
            <FormModal modalVisibleForm={modalVisibleForm} setModalVisibleForm={setModalVisibleForm} addPart={addPart}/>
        </View>
    );
}
