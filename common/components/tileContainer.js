import {
  View,
  Text,
} from 'react-native'
import React from 'react'
import Tile from './tile'
import Dimensions from '../utils/dimensions'
const {height, width} = Dimensions.get('window')

const styles = {
  container: {
    width: width-Dimensions.size["10"],
    height: width-Dimensions.size["10"],
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'hidden',
  }
}

const TileContainer = (props) => {
  const children = props.tiles
  const{level="NOOB"}=props;
  return (
    <View style={styles.container}>
      {children.map((item) => {
   
      
        return <Tile x={item.x} y={item.y} value={item.value?item.value:2} key={item.prog?item.prog:2} level={level} />
        
      })}
    </View>
  )
}

export default TileContainer
