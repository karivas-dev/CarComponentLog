import {Modal, Pressable, Text, View} from "react-native";
import TxtInput from "./TxtInput";
import {useFormik} from "formik";
import * as Yup from 'yup';
import shortid from 'react-id-generator';
import {Picker} from "@react-native-picker/picker";

export default function FormModal({modalVisibleForm, setModalVisibleForm, addPart}) {
    const formik = useFormik({
        initialValues: {
            piece: '', brand: '', serial: '', price: '', changeDate: '',
        }, validationSchema: Yup.object().shape({
            piece: Yup.string().required().min(3),
            brand: Yup.string().required().min(3),
            serial: Yup.string().required().min(8),
            price: Yup.string().required().matches('^(\\d{1,3}(,\\d{3})*(\\.\\d{2})?|\\d+(\\.\\d{2})?)$', 'the price must be in 00.00 format'),
            changeDate: Yup.string().required().matches('^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$', 'the date must be in YYYY-MM-DD'),
        }), onSubmit: (part) => {
            addPart({...part, id: shortid()});
            formik.resetForm();
            setModalVisibleForm(false);
        }
    });

    const pieces = ["Filtro de aceite", "Filtro de aire", "Filtro de combustible", "Batería", "Alternador",
        "Motor de arranque", "Bombilla del faro", "Pastillas de freno", "Discos de freno", "Amortiguadores", "Bujías",
        "Correa de distribución", "Embrague", "Bobina de encendido", "Radiador", "Termostato", "Sistema de escape",
        "Silenciador", "Sensor de oxígeno", "Suspensión", "Eje de transmisión", "Palanca de cambios", "Juntas homocinéticas",
        "Ruedas", "Llantas", "Espejos retrovisores", "Parabrisas", "Limpiaparabrisas", "Cerraduras", "Manijas de puerta",
        "Asientos", "Volante", "Tablero de instrumentos", "Sistema de audio", "Aire acondicionado", "Sistema de encendido",
        "Sistema de inyección de combustible", "Sensores", "Centralita electrónica",];

    return (<Modal transparent={true} animationType='slide'
                   visible={modalVisibleForm}
                   onRequestClose={() => setModalVisibleForm(!modalVisibleForm)}>

        <View className="m-5 p-5 rounded-xl bg-[#3b3b48]/95 space-y-2">
            <Text className="text-white text-center font-extrabold text-2xl mb-8">Añade los detalles</Text>

            <View className="flex-row items-center justify-between">
                <Text className="text-white">Pieza: </Text>
                <View className="border border-white rounded-2xl w-3/4">
                    <Picker style={{color: 'white', padding: 0}} selectedValue={formik.values.piece} onValueChange={formik.handleChange('piece')}>
                        <Picker.Item label="Selecciona una pieza" value=""/>
                        { pieces.map((piece) => (
                            <Picker.Item label={piece} value={piece}/>
                        ))}
                    </Picker>
                </View>
            </View>
            <Text className="text-red-500 capitalize-first text-right">
                { formik.touched.piece && formik.errors.piece }
            </Text>

            <TxtInput label="Marca:" valueName="brand" formik={formik}/>
            <TxtInput label="No. Serie:" valueName="serial" formik={formik}/>
            <TxtInput label="Precio: $" valueName="price" formik={formik} placeholder="00.00"/>
            <TxtInput label="Fecha de cambio:" valueName="changeDate" formik={formik} placeholder="YYYY-MM-DD"/>

            <View className="flex-row items-center justify-between space-x-2">
                <Pressable className="py-3 px-16 mt-8 rounded-full bg-[#ee9442]" onPress={formik.handleSubmit}>
                    <Text className="text-white text-center font-bold">Añadir</Text>
                </Pressable>

                <Pressable className="py-3 px-10 mt-8 rounded-full bg-[#ea5583]"
                           onPress={() => setModalVisibleForm(false)}>
                    <Text className="text-white text-center font-bold">Cancelar</Text>
                </Pressable>
            </View>
        </View>
    </Modal>);
}