import React, { useState, useEffect } from 'react'
import {SafeAreaView,StyleSheet ,Text ,FlatList, Image} from 'react-native'
import ProjectItem from './src/components/projectitem';
import Data from './src/data/data.json';

 

const App = () => {

  const [ResponseStatus,ResponseStatusChecker] = useState([]);
  useEffect(() => {
    Data.forEach((item)=>{
      fetch(item.website)
      .then((response)=>{
        status = response.status;
        if(status!=200){
          ResponseStatusChecker(ResponseStatus => [...ResponseStatus, [item.website,"#e74c3c"]]);
        }
        else{
          ResponseStatusChecker(ResponseStatus => [...ResponseStatus, [item.website , "#2ecc71"]]);
        }
      })
    })
  }, [true]); 

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>
        Plan29 Websites For Check
      </Text>
      {ResponseStatus.length>0}
      <FlatList
             data={ResponseStatus ? ResponseStatus : []}
             showsVerticalScrollIndicator={false}
             renderItem={({item}) =><ProjectItem onPress={() => {
              
             }} styleColor={item[1]} text={item[0]}/>}
             keyExtractor={(item, index) => index.toString()}
           />

        <Image source={{uri:"https://plan29.com/img/logo.png"}} style={{width:260,height:100,position:'absolute',left:70,bottom:40}} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
     flex:1,
     backgroundColor:'#f1f1f1'
  },
  headerText:{
    fontSize:30,
    margin:20,
    textAlign:'center'
  }
});


export default App;