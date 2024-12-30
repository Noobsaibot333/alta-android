import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Test.style";
const Test = () => {
    return(
        <View style={styles.container}>
        <View style={styles.item}>
            <Text>Hello World!</Text>
        </View>
        <View style={styles.item1}>
            <Text>Hello World!</Text>
        </View>
        </View>
    )
}
export default Test;