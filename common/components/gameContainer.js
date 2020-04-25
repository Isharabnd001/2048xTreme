import {
  View,

}  from 'react-native'
import React,{
	Component
} from 'react';

import GameMessage from './gameMessage'
import GridContainer from './gridContainer'
import TileContainer from './tileContainer'
	
import Dimensions from '../utils/dimensions'
const {height, width} = Dimensions.get('window')

	
const styles = {
  container: {
    width: width - Dimensions.size["10"],
    height: width - Dimensions.size["10"],
    backgroundColor: '#bbada0',
    borderRadius: Dimensions.size["2"],
    marginTop: Dimensions.size["5"],
  }
}

const GameContainer = (props) => {
	const{level="NOOB",tiles=[],yourTime='00:00:00.000'}=props;
	let legendText=level;

	if(legendText=='ULEGEND'){
		legendText='ULTRA LEGEND'
	}
	  return (
		<View style={styles.container}>
		  <GridContainer />
		  <TileContainer tiles={tiles} level={level}/>
		  <GameMessage
			won={props.won}
			over={props.over}
			onKeepGoing={props.onKeepGoing}
			onTryAagin={props.onTryAagin}
			level={legendText}
			yourTime={yourTime}
		  />
		</View>
	  )
}

export default GameContainer
