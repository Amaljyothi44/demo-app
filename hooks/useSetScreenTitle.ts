import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect } from "react"

export const useSetScreenTitle = (title: string) => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({ title });
    }, [title, navigation]);
}