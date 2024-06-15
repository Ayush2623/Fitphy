import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

export default function Banner() {
    return (
        <>
            <ImageBackground style={styles.banner} source={require('../../assets/images/BG.png')}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text>limited offer</Text>
                    <Text>30% Discount</Text>
                    <Text>Flash Sales</Text>
                </View>
                <View style={{ flex: 1 }}>
                </View>
            </ImageBackground>
            <Image source={require('../../assets/images/model.png')}
                style={styles.bannerImage}
                resizeMode="contain" />
        </>
    );
}

const styles = StyleSheet.create({
    banner: {
        marginTop: '10%',
        flex: 1,
        padding: 30,
        resizeMode: 'contain',
        borderRadius: 20,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    bannerImage: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        zIndex: 10,
        height: '100%',
        width: '50%',
        transform: [{ rotateY: '180deg' }],
    }
});
