import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    VrButton,
    Environment,
    asset
} from 'react-360';
import Slide from './Slide';
import config from '../config/config.json';
import End from './End';

class Home extends React.Component {
    state = {
        index: 0
    };

    componentDidMount(){
        
        Environment.setBackgroundImage(asset('/panos/'+ config.scenes[this.state.index].image));
    }

    componentDidUpdate(){
        if(this.state.index === 0)
        Environment.setBackgroundImage(asset('/panos/'+ config.scenes[this.state.index].image));
    }


    siguienteEscena = () => {
        this.setState({
            index: this.state.index + 1
        });
    }
    anteriorEscena = () => {
        this.setState({
            index: this.state.index - 1
        });
    }

    reinicarEscenas = () => {
        this.setState({
            index: 0
        });
    }

    render(){

        let index = this.state.index;
        let sliderData = config.scenes[index];

        return(

            <View style={styles.wrapper}>

            {(index > 0 && index < config.scenes.length) &&
            
                <Slide 
                    index={index} 
                    title={sliderData.title} 
                    subtitle={sliderData.subtitle} 
                    siguienteEscena={this.siguienteEscena} 
                    anteriorEscena={this.anteriorEscena}
                    image={sliderData.image}
                /> 
            }

            {(index === config.scenes.length) &&
        
                <End 
                    siguienteEscena={this.siguienteEscena} 
                    anteriorEscena={this.anteriorEscena} 
                    reinicarEscenas={this.reinicarEscenas}
                    image={'school.jpg'}
                 />
            }

            {(index <= 0) &&

            <View style={styles.controls}>

            <View>
                <Text style={styles.title}>ESTE ES EL HOME</Text>
            </View>
            
            <VrButton onClick={this.siguienteEscena} style={styles.button}>
                <Text style={styles.buttonText}>{'>'}</Text>
            </VrButton>
            </View>  

            }

            </View>
        
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 600,
      width: 1000,
    },
    controls: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 600,
      padding: 10,
    },
    title: {
      color: '#ffffff',
      textAlign: 'left',
      fontSize: 36,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#c0c0d0',
      borderRadius: 5,
      width: 40,
      height: 44,
    },
    buttonText: {
      textAlign: 'center',
      color: '#000000',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });
module.exports = Home;
