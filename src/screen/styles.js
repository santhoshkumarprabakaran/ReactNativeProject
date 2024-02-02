
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:20,
    marginTop:150,
  },
  textinputborder:{
    width:350,
    padding:10,
    borderBottomColor:'#8000FF',
    borderBottomWidth:2,
  },
  textinputbordererror:{
    width:350,
    padding:10,
    borderBottomColor:'red',
    borderBottomWidth:2,
  },
  inputError:{
    borderBottomColor:'red',
  },
  textstyle:{
    fontWeight:'bold',
    color:'black',
  },
  toublebutton:{
    height:50,
    backgroundColor:"#8000FF",
    marginTop:20,
    width:150,
    borderRadius:50,
    marginLeft:100,
  },
  textstylefortochable:{
    fontWeight:"bold",
    color:"white",
    fontSize:20,
    paddingTop:10,
    paddingLeft:50,

  },
  welcomeScreen:{
    fontWeight:'bold',
    fontSize:15,
    color:'black',

  },
  scrollviewitems:{
    flexDirection: 'row',
    borderBottomWidth:2,
  },
  imageSize:{
    width: 200, 
    height: 150,
  },
  scrollviewtext:{
    fontWeight:'bold',
    fontSize:15,
    color:'black',
    padding:50,

  },
  errormessage:{
    color:"red",

  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  bottonadjustments:{
    marginTop:-15,
  },
  controls: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlseeker:{
    position:'absolute',
    width: '100%',
    padding:100,
    justifyContent: 'center',
    alignItems: 'center',
 
  }
  

  
});
