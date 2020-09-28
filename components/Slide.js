import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    VrButton,
    Environment,
    asset
} from 'react-360';

class Slide extends React.Component {


    componentDidMount(){
      
        this.componentDidUpdate();
      
    }

    componentDidUpdate(){
      Environment.setBackgroundImage(asset('/panos/'+ this.props.image), {format: '2D'});
    }


    render(){
        return(
          
          <View style={styles.controls}>
            <VrButton onClick={this.props.anteriorEscena} style={styles.button}>
              <Text style={styles.buttonText}>{'<'}</Text>
            </VrButton>
          

          <View>
          <Text style={styles.title}>{this.props.title}</Text>
          </View>
      
          {/* <View>
              <Text style={styles.title}>{this.props.subtitle}</Text>
          </View> */}

          
          <VrButton onClick={this.props.siguienteEscena} style={styles.button}>
            <Text style={styles.buttonText}>{'>'}</Text>
          </VrButton>

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
module.exports = Slide;
