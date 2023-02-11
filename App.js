import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    View,
} from 'react-native';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentTimer: 0,
            buttonTitle: 'Começar',
            lasttime: null
        };

        // clock time variable
        this.timer = null;

        this.goTimer = this.goTimer.bind(this);
        this.ClearTimer = this.ClearTimer.bind(this);
    }

    goTimer() {
        if(this.timer != null) {
            //here stop timer 
            clearInterval(this.timer);
            this.timer = null;

            this.setState({
                buttonTitle: 'Começar'
            })
        } else {
            // go to timer 
            this.timer = setInterval(() => {
                this.setState({ currentTimer: this.state.currentTimer + 0.1});
            }, 100);

            this.setState({
                buttonTitle: 'Parar'
            })
        }

        
    }

    ClearTimer() {
        if(this.timer != null) {
            clearInterval(this.timer);
            this.timer = null
        }
        this.setState({ 
            lasttime: this.state.currentTimer,
            currentTimer: 0, 
            buttonTitle: 'Começar'
        })
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Image 
                    source={require('./src/assets/cronometro.png')}  
                    style={styles.imgTimer}
                />
                <Text style={styles.textTimer}>{this.state.currentTimer.toFixed(1)}</Text>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.buttom} onPress={this.goTimer}>
                        <Text style={styles.buttonText}>{this.state.buttonTitle}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttom} onPress={this.ClearTimer}>
                        <Text style={styles.buttonText}>Limpar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.areaLastTime}>
                    <Text style={styles.textLastTime}>
                        {this.state.lasttime > 0 ? `Último tempo: ${this.state.lasttime.toFixed(1)}s` : ''}
                    </Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6300DB"
    },
    textTimer: {
        marginTop: -160,
        color: "#FFF",
        fontSize: 65,
        fontWeight: "bold"
    },
    buttonArea: {
        flexDirection: "row",
        marginTop: 70,
        height: 40
    },
    buttom: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        height: 40,
        margin: 25,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#6300DB"
    },
    areaLastTime: {
        marginTop: 40
    },
    textLastTime: {
        fontSize: 25,
        fontVariant: "bold",
        fontStyle: "italic",
        color: "#FFF"
    }
});