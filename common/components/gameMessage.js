import {
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {
  Component
} from 'react';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';
const { height, width } = Dimensions.get('window')
import { captureRef } from 'react-native-view-shot';
import RNFetchBlob from 'react-native-fetch-blob'
const styles = {
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'hidden',
    backgroundColor: 'rgba(238, 228, 218, 0.5)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    width: width - 40,
    height: 120,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  won: {
    fontSize: 45,
    color: '#776E65',
    textAlign: 'center',
  },
  logo: {
    fontSize: 45,
    color: '#776E65',
    textAlign: 'center',
    fontWeight: "bold"
  },
  levelChamp: {
    fontSize: 20,
    color: '#776E65',
    textAlign: 'center',
  },
  yourTime: {
    fontSize: 20,
    color: '#776E65',
    textAlign: 'center',
  },
  over: {
    fontSize: 60,
    color: '#776E65',
    textAlign: 'center',
  },
  lower: {
    flex: 1,
    height: 120,
    flexDirection: 'row'
  },
  keepGoingContainer: {
    height: 40,
    backgroundColor: '#8f7a66',
    borderRadius: 3,
    paddingHorizontal: 15,
  },
  keepGoing: {
    fontSize: 24,
    color: '#f9f6f2',
    textAlign: 'center',
  },
  tryAgainContainer: {
    height: 40,
    backgroundColor: '#8f7a66',
    borderRadius: 3,
    paddingHorizontal: 15,
  },
  tryAgain: {
    fontSize: 24,
    color: '#f9f6f2',
    textAlign: 'center',
  }
  ,
  buttonText: {
    color: '#faf8ef',
    fontSize: width / 20,
    fontWeight: "bold",
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#F48729',
    // width:width/5,
    height: 40,
    borderRadius: 3,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 2.5
  },
}
let RNFS = require('react-native-fs');
class GameMessage extends Component {


  constructor(props) {
    super(props);
  }

  shareFacebook = () => {
    //  const {uriImage} = this.state;
    const {level}=this.props;

    const levelTest=level.toString();

    captureRef(this.refs.viewRef, {
      format: 'jpg',
      quality: 0.9,
    }).then(async (uri) => {
      console.log(uri);
      // this.setState({
      //   uriImage: uri.toString(),
      // });
      // alert(uri)

      let self=this;

      const url =  uri ;
      const title = '2048xTreme';
      const message = 'Level ' + levelTest + ' Completed';
      const icon = ({ uri: uri });




      // const fs = RNFetchBlob.fs;
      // const base64 = RNFetchBlob.base64;

      const options = Platform.select({
        ios: {
          activityItemSources: [
            {
              // For sharing url with custom title.
              placeholderItem: { type: 'url', content: url },
              item: {
                default: { type: 'url', content: url },
              },
              subject: {
                default: title,
              },
              linkMetadata: { originalUrl: url, url, title },
            },
            {
              // For sharing text.
              placeholderItem: { type: 'text', content: message },
              item: {
                default: { type: 'text', content: message },
                message: null, // Specify no text to share via Messages app.
              },
              linkMetadata: {
                // For showing app icon on share preview.
                title: message,
                image:url
              },
            },
            {
              // For using custom icon instead of default text icon at share preview when sharing with message.
              placeholderItem: {
                type: 'url',
              },
              item: {
                default: {
                  type: 'text',
                  content: `${message} `,
                  icon: icon
                },
              },
              linkMetadata: {
                title: message,
                image:url

              },
            },
          ],
        },
        default: {
          title,
          subject: title,
          message: `${message} ${url}`,
          icon: icon

        },
      });

      Share.open(options);

    //   const configOptions = { fileCache: true };
    //   RNFetchBlob.config(configOptions)
    // .fetch('GET', uri)
    // .then(resp => {
    //   filePath = resp.path();
    //   return resp.readFile('base64');
    // })
    // .then(async base64Data => {
    //   base64Data = `data:${type};base64,` + base64Data;
    //   await Share.open({ url: base64Data, title :'2048xTreme',message:'Level Completed' });
    //   // remove the image or pdf from device's storage
    //   await RNFS.unlink(filePath);
    // });






    
    });
  };
  genMessage() {
    if (this.props.won) {

      return (<View style={styles.row}>

        <ViewShot
          ref="viewRef"
          options={{ format: 'jpg', quality: 0.9 }}
          captureMode="mount">
          <Text style={styles.logo}>2048xTREME</Text>
          <Text style={styles.levelChamp}>Level {this.props.level} Completed</Text>
          <Text style={styles.won}>You win!</Text>
          <Text style={styles.yourTime}>Your Time : {this.props.yourTime}</Text>
        </ViewShot>


        <View style={styles.lower}>
          <TouchableWithoutFeedback onPress={this.props.onKeepGoing}>
            <View style={styles.button}>
              <Text style={styles.buttonText}> 👉 Keep going</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={this.shareFacebook}>
            <View style={styles.button}>
              <Text style={styles.buttonText}> 🤙 Challenge </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>)
    }
    if (this.props.over) {
      return (<View style={styles.row}>
        <Text style={styles.over}>Game over!</Text>
        <View style={styles.lower}>
          <TouchableWithoutFeedback onPress={this.props.onTryAagin}>
            <View style={styles.tryAgainContainer}>
              <Text style={styles.tryAgain}>Try again</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>)
    }
    return (<View></View>)
  }

  render() {
    const message = this.genMessage()
    const containerStyle = (this.props.won || this.props.over) ? { width: width - 40, height: width - 40 } : { width: 0, height: 0 }
    return (
      <View style={[styles.container, containerStyle]}>{message}</View>
    )
  }
}

export default GameMessage
