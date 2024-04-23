import {StyleSheet, View, SafeAreaProvider, Pressable, StatusBar, SafeAreaView} from "react-native";
import { AppBar, HStack, IconButton, ListItem, Text, Stack, TextInput, Button, FAB } from "@react-native-material/core";
import { store } from './features/store'
import { Provider, useDispatch } from 'react-redux'
import CardsList from "./widgets/CardsList";
import { useState } from "react";
import ModalView from "./widgets/ModalView";
import HeadBar from "./widgets/HeadBar";
import FooterBar from "./widgets/FooterBar";
import StatusCustom from "./components/StatusCustom";



export default function App() {

  return (
    <Provider store={store}>
      <StatusCustom />
      
      <ModalView  />
      <SafeAreaView style={{height: '100%'}}>
        <HeadBar />
        <View style={styles.container}>
          
          <View
          style={{marginTop: '24px'}}>
          
          <Stack m={4} spacing={4} style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            <Text variant="h4" style={{fontWeight:600}}>Список покупок</Text>
              <Text variant="subtitle1" style={{textAlign:'center'}}>
                Создавай список и покупай в магазине с умом!
            </Text>
          </Stack>

          <CardsList />

          </View>

          
        </View>

        <FooterBar />
      </SafeAreaView>

    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
