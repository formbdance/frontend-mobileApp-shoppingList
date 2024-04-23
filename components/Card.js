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
        if(!longPressed) return;
        dispatch(deleteCard({data: {_id: data._id}}))
        setLongPressed(false)

    }

    return(
        <Pressable 
        onPress={() => {longPressed ? null : setIsSelected(!isSelected)}}  
        onLongPress={() => setLongPressed(!longPressed)}
        style={({pressed}) => [
            styles.card,
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            !isSelected ? null : styles.choseCard,
          ]}
        >
            
            <View style={longPressed ? styles.optionsModal : styles.optionsModalDisabled}>
                <Text style={longPressed ? null : styles.optionsModalDisabled}>
                    <IconButton onPress={() => handleDelete()} icon={props => <Icon style={{backgroundColor: '#fc6156', borderRadius: 100, padding: 3 }} name="trash-can-outline" {...props} />} />
                </Text>
            </View>
            <View style={styles.cardWrapper}>
                <View style={styles.cardTitle}>
                    {data.leading}
                    <Text style={!isSelected ? styles.cardText : styles.cardTextDisabled } 
                    >{data.title} </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    optionsModal: {
        position: 'absolute',
        backgroundColor: '#f5f5f5',
        zIndex: 10,
        height: '100%',
        width: '100%',
        borderRadius: 5,
        display: 'flex',
    },
    optionsModalDisabled: {
        display: 'none',
        opacity: 0,
    },
    card: {
        display:'flex', 
        alignItems: 'center',
        flexDirection:'row', 
        gap: 12,
        height: 52,
        borderRadius: 5,
        position: 'relative',
        overflow: 'hidden',
    },
    choseCard: {
        backgroundColor: '#3eb489' ,
    },
    cardWrapper: {
        display: 'flex',
        flexDirection:'row',
        padding: 12,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: .5, // Толщина нижнего подчеркивания
        borderBottomColor: '#e6e6e6', // Цвет нижнего подчеркивания (можете изменить на свой)
    },

    cardTitle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    cardText: {
      fontSize: 16,
      marginLeft: 6,
      paddingBottom: 6,
    },
    cardTextDisabled: {
        fontSize: 16,
        marginLeft: 6,
        paddingBottom: 6,
      }
  });