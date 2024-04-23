import { Stack } from '@react-native-material/core';
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Text } from 'react-native';
import { useEffect, useState } from 'react';
import { getCards } from '../features/slices/cardSlice';

export default function CardsList() {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cardsStatus)

    useEffect(() => {
        dispatch(getCards());
    }, [dispatch, cards.saveStatus, cards.delStatus])


    return (
        <Stack m={20} spacing={4} style={{display: 'flex', gap: 26}} >



        {
          cards.loadError ? (
            <Text>Ошибка загрузки</Text>
          ) : (
            !cards.cards ? (
              <Text>Загрузка списка...</Text>
            ) : (
              Array.isArray(cards.cards) && cards.cards.length <= 0 ? (
                <Text>Список необнаружен</Text>
              ) : (
                cards.cards.map((item, index) => {
                  return(
                    <Card
                    key={index}
                      title={item.title}
                      leading={<Icon name="food" size={24} />}
                      id={item._id.$oid}
                  
                />
                  )
                })
              )
            )
          )
        }

      </Stack>
    )
}