import React, {useState,useRef,useEffect}from 'react';
import { View ,Text,ScrollView,Image,FlatList,Dimensions,TouchableOpacity} from "react-native";
import { styles } from "./styles";
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
const Homescreen=({route})=>{
    const passedValue = route.params?.value || 'No value passed';
    const videoRef = useRef(null);
    const [playpauseIcon,setplaypauseIcon]=useState(true);
    const [current,setcurrent]=useState(0);
    const[slidevalue,setslidevalue]=useState(0);
    const videoforword = useRef(null);
    const [seekable,setseekable]=useState(0);
   
    const data = [
        { id: '1',type: 'vedio', title: 'React native', imageUrl: require('../images/my_video.mp4') },
        { id: '2',type: 'image', title: 'React native', imageUrl: require('../images/React-icon.svg.png') },
        { id: '3',type: 'image', title: 'Java', imageUrl: require('../images/Java_programming_language_logo.svg.png') },
        { id: '4',type: 'image', title: 'c++', imageUrl: require('../images/images.jpeg') },
        { id: '5',type: 'image', title: 'React native', imageUrl: require('../images/Python-logo-notext.svg.png') },
        { id: '6', type: 'image', title: 'Java', imageUrl: require('../images/Java_programming_language_logo.svg.png') },
        { id: '7', type: 'image', title: 'c++', imageUrl: require('../images/Java_programming_language_logo.svg.png') },
        { id: '8', type: 'image', title: 'React native', imageUrl: require('../images/azure.png') },
        { id: '9', type: 'image', title: 'Java', imageUrl: require('../images/firebase.png') },
        { id: '10', type: 'image', title: 'c++', imageUrl: require('../images/psql.jpeg') },
        { id: '11',type: 'image',  title: 'React native', imageUrl: require('../images/logoimage.png') },
      ];

      const passedvalue=({ item })=>{
        if(item.type=='image'){
            return(
                <View style={styles.scrollviewitems} >
                <Image source={item.imageUrl}  style={styles.imageSize}    resizeMode="contain" />
                <Text style={styles.scrollviewtext}>
                   {item.title}
                </Text>
                </View>
            )

        }
        else if(item.type=='vedio'){
            return(
                <View style={styles.scrollviewitems} > 
                <Video ref={videoforword} paused={!playpauseIcon}
                  onProgress={onProgress}  
                source={item.imageUrl}  
                style={{width:screenWidth,height:150}} 
                resizeMode="contain" 
                isLooping={true} 
                 />
                 
                <View style={styles.controls}>
                <TouchableOpacity onPress={backwardVideo}  styles={styles.bottonadjustments} >
                <Icon name={'navigate-before'} size={50} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleControls}  styles={styles.bottonadjustments} >
                <Icon name={playpauseIcon ? 'play-arrow' : 'pause'} size={50} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={forwardVideo}  styles={styles.bottonadjustments} >
                <Icon name={'navigate-next'} size={50} color="black" />
                </TouchableOpacity>
                </View>
                <View style={styles.controlseeker}>
                <Slider style={{width: 200, height: 40} } 
                 minimumValue={0}
                 maximumValue={seekable}
                 minimumTrackTintColor="#FF0000"
                 maximumTrackTintColor="#000000"
                 thumbTintColor="#FF0000"
                 value={slidevalue}  
                 onValueChange={handleSlidingComplete}             
                />
                </View>
                </View>
            )

        }

      };
       

  const forwardVideo = () => {
    videoforword.current.seek(current+5);

  };
  const toggleControls = () => {
    setplaypauseIcon(!playpauseIcon)
      };
  const backwardVideo = () => {
    if(current){
        videoforword.current.seek(current-5);    
        setslidevalue(current+5)
    }
  };
  const handleSlidingComplete = (value) => {
    if (videoforword.current) {
        videoforword.current.seek(value);
    }
  };
      const { width: screenWidth } = Dimensions.get('window');
      const { height: screenheight } = Dimensions.get('window');
    const onProgress= (data)=>{
        // if(data.playableDuration!=0){
            setslidevalue(data.currentTime)
            setseekable(data.seekableDuration)
        // }
        // console.log("seekable"+data.+"playback"+data.playableDuration+"current"+data.currentTime)
        setcurrent(data.currentTime)

    }
    const scrollevent=(event)=>{
        const verticalScrollPosition = event.nativeEvent.contentOffset.y;
        if(verticalScrollPosition >0&&verticalScrollPosition<100){
            setplaypauseIcon(false);

        }
    };
  

    return(
         <ScrollView onScroll={scrollevent}>
            <Text style={styles.welcomeScreen}>
               Welcome {passedValue}!
            </Text>
            <FlatList data={data} renderItem={passedvalue} keyExtractor={data => data.id}/>
            </ScrollView>

            
            /* <ScrollView>
            <View style={styles.scrollviewitems} >
            <Video ref={videoRef}  source={require('../images/my_video.mp4')}  style={styles.imageSize} resizeMode="contain"  onEnd={handleEnd} />
            </View>
                <View style={styles.scrollviewitems} >
                <Image source={require('../images/React-icon.svg.png')}  style={styles.imageSize}    resizeMode="contain" />
                <Text style={styles.scrollviewtext}>
                    React native
                </Text>
                </View>
                <View style={styles.scrollviewitems}>
                <Image source={require('../images/images.jpeg')}    style={styles.imageSize}    resizeMode="contain" />
                <Text style={styles.scrollviewtext}>
                    C++
                </Text>
                </View>
                <View style={styles.scrollviewitems}>
                <Image source={require('../images/Python-logo-notext.svg.png')}  style={styles.imageSize}    resizeMode="contain" />
                <Text style={styles.scrollviewtext}>
                    Python
                </Text>
                </View>
                
                <View style={styles.scrollviewitems}>
                <Image source={require('../images/Java_programming_language_logo.svg.png')}  style={styles.imageSize}    resizeMode="contain"/>
                <Text style={styles.scrollviewtext}>
                    Java
                </Text>
                </View>

                <View style={styles.scrollviewitems}>
                <Image source={require('../images/logoimage.png')}  style={styles.imageSize}    resizeMode="contain"/>
                <Text style={styles.scrollviewtext}>
                    Mysql
                </Text>
                </View>

                <View style={styles.scrollviewitems}>
                <Image source={require('../images/psql.jpeg')}  style={styles.imageSize}    resizeMode="contain"/>
                <Text style={styles.scrollviewtext}>
                    PostgreSql
                </Text>
                </View>

                <View style={styles.scrollviewitems}>
                <Image source={require('../images/firebase.png')}  style={styles.imageSize}    resizeMode="contain"/>
                <Text style={styles.scrollviewtext}>
                    firebase
                </Text>
                </View>

                <View style={styles.scrollviewitems}>
                <Image source={require('../images/mangodb.png')}  style={styles.imageSize}    resizeMode="contain"/>
                <Text style={styles.scrollviewtext}>
                    Mangodb
                </Text>
                </View>

                <View style={styles.scrollviewitems}>
                <Image source={require('../images/azure.png')}  style={styles.imageSize}    resizeMode="contain"/>
                <Text style={styles.scrollviewtext}>
                    Azure
                </Text>
                </View>
            </ScrollView> */
            
    );

};

Homescreen.prototype={

}
export default Homescreen;