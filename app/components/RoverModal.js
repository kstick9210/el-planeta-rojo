import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View  } from 'react-native';

export default function RoverModal({ rover, style }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={style}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible) }
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{rover}</Text>
                    <Pressable
                        style={styles.buttonClose}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                </View>
            </Modal>
            <Pressable
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>{rover}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: 'silver',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'darkred',
        borderRadius: 25,
        elevation: 5,
        height: 110,
        justifyContent: 'center',
        margin: 5,
        paddingHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        width: 110,
    },
    buttonClose: {
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        backgroundColor: '#008080',
    },
    textStyle: {
        color: '#F5F5F5',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
      }
})