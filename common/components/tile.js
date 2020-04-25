import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import React from 'react'
	
import Dimensions from '../utils/dimensions'
const {height, width} = Dimensions.get('window')

const MARGIN_WIDTH = Dimensions.size["2"]
const ITEM_WIDTH = (width-Dimensions.size["10"]-MARGIN_WIDTH*10)/4

const styles = StyleSheet.create({
  tile:{
    position: 'absolute',
    borderRadius: Dimensions.size["1"],
	flexDirection:"row",
	justifyContent:"center",
    alignItems:"center"
  },
  tileText: {
    fontSize: Dimensions.size["9"],
    color: '#776E65',
    textAlign: 'center',
	textAlignVertical:"center",
	flex:1
  },
  tile2: {
    backgroundColor: '#eee4da',
  },
  tile4: {
    backgroundColor: '#eee1c9',
  },
  tile8: {
    backgroundColor: '#f3b27a',
  },
  tile8Text: {
    color: '#f9f6f2',
  },
  tile16: {
    backgroundColor: '#f69664',
  },
  tile16Text: {
    color: '#f9f6f2',
  },
  tile32: {
    backgroundColor: '#f77c5f',
  },
  tile32Text: {
    color: '#f9f6f2',
    marginTop: Dimensions.size["2"],
  },
  tile64: {
    backgroundColor: '#f75f3b',
  },
  tile64Text: {
    color: '#f9f6f2',
  },
  tile128: {
    backgroundColor: '#edd073',
  },
  tile128Text: {
    color: '#f9f6f2',
    fontSize: Dimensions.size["10"]
  },
  tile256: {
    backgroundColor: '#edcc62',
  },
  tile256Text: {
    color: '#f9f6f2',
    fontSize: Dimensions.size["8"],
    marginTop: Dimensions.size["2"],
  },
  tile512: {
    backgroundColor: '#edc950',
  },
  tile512Text: {
    color: '#f9f6f2',
    fontSize:Dimensions.size["8"],
  },
  tile1024: {
    backgroundColor: '#edc53f',
  },
  tile1024Text: {
    color: '#f9f6f2',
    fontSize: Dimensions.size["6"],
  },
  tile2048: {
    backgroundColor: '#edc22e',
  },
  tile2048Text: {
    color: '#f9f6f2',
    fontSize: Dimensions.size["6"],
    marginTop: Dimensions.size["4"],
  },
  tilesuper: {
    backgroundColor: '#3c3a33',
    fontSize: Dimensions.size["5"]
  },
  tilesuperText: {
    color: '#f9f6f2',
  },
})

const coma=(val)=>{
  let random=Math.floor(Math.random() * 25) + 1 
  //let random2=Math.floor(Math.random() * 10) + 1 
  return ((random*val)+"/"+random);
}



const Tile = (props) => {
  const{x=0,y=0,value=2}=props;
  let tileStyle = value<= 2048 ? styles['tile' + value] : styles['tilesuper']

  if(props.level=='ULEGEND'){
    tileStyle = value<= 2048 ? styles['tile2'] : styles['tilesuper']
  }

  const tilePositionStyle = {
    left: x*(ITEM_WIDTH+MARGIN_WIDTH*2)+MARGIN_WIDTH*2,
    top: y*(ITEM_WIDTH+MARGIN_WIDTH*2)+MARGIN_WIDTH*2,
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
  }
  let tileTextStyle = value<= 2048 ? styles['tile' + value + 'Text'] : styles['tilesuperText']

  if(props.level=='ULEGEND'){
    tileTextStyle = value<= 2048 ? styles['tile2Text'] : styles['tilesuperText']

  }

  
  //const twoWays= ['2','2!',coma(2),]
  

  const{level='NOOB'}=props;
  let stringVal=value;
  if(level!='NOOB'){
  let random=Math.floor(Math.random() * 5) + 1 

  if(random%4==0){
    stringVal=value
  }else{
     stringVal=coma(value)
  }

}
  
  
  
  return (
    <View style={[styles.tile, tileStyle, tilePositionStyle]}>
      <Text style={[ styles.tileText,tileTextStyle]}>{stringVal}</Text>
    </View>
  )
}

export default Tile
