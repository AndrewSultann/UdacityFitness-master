import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native'
import { FontAwesome, Entypo} from '@expo/vector-icons'
import {white, gray, purple} from '../utils/colors'


export default function UdacitySteppers ({value, onIncrement, onDecrement, max, unit, step}){
    return (
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
            {Platform.OS === 'ios' 
                ? <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={[styles.iosBtn, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}
                        onPress={onDecrement} 
                        maximumValue={max} 
                        step={step}>
                        <Entypo name='minus' size={30} color={purple} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.iosBtn, {borderTopLeftRadius: 0, borderBottomLeftRadius: 0}]}
                        onPress={onIncrement} 
                        maximumValue={max} 
                        step={step}>
                        <Entypo name='plus' size={30} color={purple} />
                    </TouchableOpacity>           
                </View>
           
                : <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={[styles.andriodBtn, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}
                        onPress={onDecrement} 
                        maximumValue={max} 
                        step={step}>
                        <FontAwesome name='minus' size={30} color={white} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.andriodBtn, {borderTopLeftRadius: 0, borderBottomLeftRadius: 0}]}
                        onPress={onIncrement} 
                        maximumValue={max} 
                        step={step}>
                        <FontAwesome name='plus' size={30} color={white} />
                    </TouchableOpacity>           
                </View>
            }
            <View style={styles.metricCounter}>
                <Text style={{fontSize: 24, textAlign: "center"}}>{value}</Text>
                <Text style={{fontSize: 18, color: gray}}>{unit}</Text>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: "center"
    },
    iosBtn: {
        backgroundColor: white,
        borderColor: purple,
        borderWidth: 1, 
        borderRadius: 3,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25
    },
    andriodBtn: {
        backgroundColor: purple,
        margin: 5,
        padding: 10,
        borderRadius: 2
    },
    metricCounter: {
        width: 85,
        justifyContent: "center",
        alignItems: "center"
    }
})