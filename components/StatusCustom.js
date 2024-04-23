import { useState } from "react";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

export default function StatusCustom() {
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );
    const modalStatus = useSelector((state) => state.modalStatus.modalStatus)
    return (
        <StatusBar
        animated={true}
        backgroundColor={modalStatus ? "#200D49" : "#5626C4" }
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
      />
    )
}