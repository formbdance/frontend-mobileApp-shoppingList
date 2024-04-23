import { AppBar, FAB, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { elevateModal } from "../features/slices/modalSlice";
export default function FooterBar() {
    const dispatch = useDispatch();
    return (
        <AppBar
            contentContainerStyle={{backgroundColor: '#5626C4'}}
            variant="bottom"
            leading={props => (
                <IconButton icon={props => <Icon name="cart-outline" {...props} />} {...props} />
                )}
                trailing={props => (
                <IconButton
                    icon={props => <Icon name="link-variant" {...props} />}
                    {...props}
                />
                )}
                style={{ position: "absolute", start: 0, end: 0, bottom: 0 }}
            >
            <FAB
                onPress={() => dispatch(elevateModal())}
                icon={props => <Icon name="plus" {...props} />}
                style={{ position: "absolute", top: -28, alignSelf: "center" }}
            />
        </AppBar>
        )
}