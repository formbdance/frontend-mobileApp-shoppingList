import { Button, IconButton } from "@react-native-material/core";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../features/slices/cardSlice";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


export default function Card(props) {
    const data = {
        id: props.id,
        title: props.title,
        leading: props.leading,
        _id: props.id,
    }
    const dispatch = useDispatch();
    const [isSelected, setIsSelected] = useState(false);
    const [longPressed, setLongPressed] = useState(false);

    const handleDelete = () => {
        dispatch(deleteCard({data: {_id: data._id}}))
        setLongPressed(false)

    }

    return(
        <Pressable 
        onPressIn={() => setIsSelected(!isSelected)}  
        onLongPress={() => setLongPressed(!longPressed)}
        style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              textDecorationLine: isSelected ? 'line-through' : 'none',
              backgroundColor: isSelected ? '#ff6666' : 'none',
            },
            styles.card,
          ]}
        >
            <View style={longPressed ? styles.optionsModal : styles.optionsModalDisabled}>
                <Text style={longPressed ? null : styles.optionsModalDisabled}>
                    <IconButton onPress={() => handleDelete()} icon={props => <Icon style={{backgroundColor: '#fc6156', borderRadius: 100, padding: 3 }} name="trash-can-outline" {...props} />} />
                </Text>
            </View>

            {data.leading}
            <Text style={styles.cardText}>{data.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    optionsModal: {
        position: 'absolute',
        backgroundColor: '#f5f5f5',
        top: 0,
        left: 0,
        zIndex: 10,
        width: '100%',
        height: '100%',
        borderRadius: 5,
        display: 'flex',
    },
    optionsModalDisabled: {
        display: 'none',
    },
    card: {
        display:'flex', 
        alignItems: 'center',
        flexDirection:'row', 
        gap: 12,
        padding: 6,
        borderRadius: 5,
        position: 'relative',
    },
    cardText: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      borderBottomWidth: .5, // Толщина нижнего подчеркивания
      borderBottomColor: '#e6e6e6', // Цвет нижнего подчеркивания (можете изменить на свой)
      paddingBottom: 12,
      fontSize: 16,
      
    },
  });