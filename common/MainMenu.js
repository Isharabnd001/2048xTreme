import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import Container from './components/container'
import { 
  AdMobBanner, 
} from 'react-native-admob'
//import { TestIds } from '@react-native-firebase/admob';

// import { 
//   AdMobBanner, 
//   AdMobInterstitial, 
//   PublisherBanner,
//   AdMobRewarded
// } from 'react-native-admob'
const deviceWidth = Dimensions.get('window').width;

// import Dimensions from '../utils/dimensions'
const {height, width} = Dimensions.get('window')
const widthHalves = deviceWidth/3;


export default class MainMenu extends React.Component {
  state = {
    
    viewDom: '',
  
  };

  componentDidMount(){
 //  this.initializeApp();
  }

 
  

 
  render() {

    let outView=[]

    const{viewDom,}= this.state;
  

    if(viewDom==''){
        outView=      <View style={styles.container}>
<View style={{alignContent:"center",justifyContent:"center",flexDirection:"row"}}>
<AdMobBanner
  adSize="largeBanner"
  adUnitID="ca-app-pub-3940256099942544/6300978111"/>
</View>
       
        <View style={{flex:1, marginLeft:20,marginRight:20,justifyContent:'center'}}>
        <View style={{height: 75}}>
        <Image source={require('./images/heading.png')} resizeMode={'contain'} style={{width: null, height: null,flex: 1}}/>
      </View>

<View style={{alignContent:"center",justifyContent:"center",alignItems:"center"}}> 
  <Text style={styles.titleText}>Pick your challenge level</Text></View>
<TouchableOpacity onPress={()=>{this.setState({viewDom:'NOOB'})}}>
  <View style={styles.button}>
      <Text style={styles.buttonText} > 👶 Noob</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{this.setState({viewDom:'LEGEND'})}}>
  <View style={styles.button}>
      <Text style={styles.buttonText}> 🤥 Legend</Text>
  </View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>{this.setState({viewDom:'ULEGEND'})}}>
  <View style={styles.button}>
      <Text style={styles.buttonText}> 🤡 Ultra Legend</Text>
  </View>
</TouchableOpacity>

        </View>
    
    </View>
    }else{
        outView=<View>
             <Container startTiles={2} size={4} level={viewDom} onBackPress={()=>{this.setState({viewDom:''})}}/>
           
        </View>
    }
    return (
        <View>
            {outView}
        </View>

    );
  }


}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        backgroundColor: '#faf8ef',
        padding: 10,

      },
 
  button: {
    backgroundColor: '#F48729',
    padding: 15,
    borderRadius:10,
    margin:20,
    alignItems:"center",
    justifyContent:"center"
  },
  buttonText:{
      color:'#faf8ef',
      fontSize:width/15,
      fontWeight:"bold"
  },
  titleText:{
    color:'#776E65',
    fontSize:width/15,
    fontWeight:"bold",
    alignContent:"center"

},


});
