import { Button, Stack, TextInput } from "@react-native-material/core";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { elevateModal } from "../features/slices/modalSlice";
import { saveCard } from "../features/slices/cardSlice";

export default function ModalView(){
    const [changeText, setChangeText] = useState('')

    const dispatch = useDispatch();
    const modalStatus = useSelector((state) => state.modalStatus.modalStatus)

    const handleSaveCard = () => {
        const data = new FormData();
        data.append('title', changeText),
        data.append('user', 'admin');
        dispatch(saveCard({data: data}))
        setChangeText('')
        dispatch(elevateModal())
    }

    return (
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalStatus}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalStatus);
      }} >
                <View style={modalStatus ? styles.modalView : styles.hidden}>
          <Pressable onPress={() => dispatch(elevateModal())} style={styles.blackScreen}/>
          <Stack style={styles.modalContent} spacing={12} >
            <Text style={{fontSize: 16, fontWeight: 600}}>Добавление покупки</Text>
            <TextInput onChangeText={setChangeText} value={changeText} label="Я куплю..." variant="standard" />
            <Button title="Сохранить!" onPress={() => handleSaveCard()} />
          </Stack>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    modalView: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        display: 'flex',
        backgroundColor: 'white',
        width: '80%',
        padding: 12,
        borderRadius: 6,
      },
      blackScreen: {
        backgroundColor: 'rgba(0,0,0, .65)',
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
    
      hidden: {
        opacity: 0,
        display: 'none',
        position: 'absolute',
      },
})

/*
        <View style={modalStatus ? styles.modalView : styles.hidden}>
          <Pressable onPress={() => dispatch(elevateModal())} style={styles.blackScreen}/>
          <Stack style={styles.modalContent} spacing={12} >
            <Text style={{fontSize: 16, fontWeight: 600}}>Добавление покупки</Text>
            <TextInput onChangeText={setChangeText} value={changeText} label="Я куплю..." variant="standard" />
            <Button title="Сохранить!" onPress={() => handleSaveCard()} />
          </Stack>
        </View>
         */