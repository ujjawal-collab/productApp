import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList,Image, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 


function ShowList(props){
    return(
        <FlatList
		style={{marginBottom:70}}
        data={props.itemData}
        renderItem={(items) => (
			<View style={styles.container}>
				<View style={{ padding:4 ,flexDirection:"row" ,flex:1 }}>
					<Text  style={{fontSize:16, fontWeight:"700"}}>
						{items.item.Name}
					</Text>

					<TouchableOpacity  style={{position:"absolute" , right:70, top:5}}  onPress={()=>{props.viewProduct(items.item)}}>
						<MaterialIcons name="visibility" size={24} color="blue" />
					</TouchableOpacity>

					<TouchableOpacity  style={{position:"absolute" , right:40, top:5}}  onPress={()=>{props.editData(items.item)}}>
						<MaterialCommunityIcons name="file-edit"  size={24} color="blue" />
					</TouchableOpacity>
			
					<TouchableOpacity  style={{position:"absolute" , right:10, top:5}}  onPress={()=>{props.onDelete(items.item.Id)}}>
						<MaterialCommunityIcons name="delete"  size={24} color="red" />
					</TouchableOpacity>
				</View>
				<TouchableOpacity   onPress={()=>{}}>
					<View  style={styles.image}  >
						<Image
							style={styles.tinyLogo}
							source={{
                                uri: items.item.Image ? items.item.Image : "data:image/jpeg;base64,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"
							}}
						/>
					</View>
				</TouchableOpacity>
			
				<View style={{padding:4}}>
					<Text>Department: {items.item.Department}</Text>
				</View>
				<View style={{padding:4}}>
					<Text>Color: {items.item.Color}</Text>
				</View>
				<View style={{padding:4}}>
					<Text>Price(INR): {items.item.Price}</Text>
				</View>        
			</View>
        )}
        keyExtractor={(item) => item.Id}
      />
    );
}

export default ShowList;

const styles = StyleSheet.create({
    container: {
      margin: 5,
      height: 320,
      borderRadius: 10,
      borderWidth: 1,
      overflow:"hidden"
    },
    tinyLogo: {
      margin: 2,
      resizeMode:"cover",
      height: "100%",
      width: "100%",
    },
    image:{
     width:"100%",
     height:200,
    },
    text:{
        padding:4      
    }
});
  