import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Videos() {
    return (
        <View style={styles.Videos}>
            <Text style={styles.videosTitle}>Fitness Videos</Text>
            <View style={styles.videoBox}>
                {videos.map((item) => (
                    <YoutubePlayer
                        height={220}
                        play={false}
                        videoId={item.videourl}
                        key={item.videourl}
                    />
                ))}
            </View>
        </View>
    );
}

const videos = [
    { videourl: 'Yko3GMseY40' },
    { videourl: 'Yko3GMseY40' },
];


const styles = StyleSheet.create({
    Videos: {
        flex: 1
    },
    videosTitle: {
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    videoBox: {
        flexDirection: 'column',
        overflow: 'scroll',
        borderRadius: 20,
        shadowOpacity: 0.5,
    }
});