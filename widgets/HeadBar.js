import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { elevateModal } from "../features/slices/modalSlice";
export default function HeadBar() {
    const dispatch = useDispatch();

    return (
        <AppBar
            contentContainerStyle={{backgroundColor: '#5626C4'}}
            title="Products List"
            leading={props => (
              <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
            )}
              
            trailing={props => (
              <HStack>
                
                <IconButton
                  onPress={() => dispatch(elevateModal())}
                  icon={props => <Icon name="cookie-plus-outline" {...props} />}
                  {...props}
                />
                <IconButton
                   icon={props => <Icon name="dots-vertical" {...props} />}
                  {...props}
                />
              </HStack>
            )}
          />
    )
}