import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import NewProduct from '../productApp/NewProduct'
import ShowList from '../productApp/ShowList'
import ShowProduct from '../productApp/ShowProduct'

function MainPage(){
    
    let [ProductList,setProductList]= useState([]);
    let [showModal,setshowModal]= useState('false');
    let [showProductModal,setshowProductModal]= useState('false');
    let [product,setProduct]= useState({Id:'0',Name:'',Department:'',Color:'',Price:'',Image:''});

    function SaveProduct(data){
        if(data.Id=='0'){
            data.Id=Math.random().toString()
        }
        setProductList((Pre)=>[...Pre.filter((p)=>p.Id!=data.Id),data])
        setshowModal(false);
    }
    
    const deleteHandler = (Id) => {
        Alert.alert(
            "Delete",
            "Are you sure?",
            [
                { 
                    text: "DELETE", 
                    onPress: () => {
                        setProductList((Pre)=>[...Pre.filter((p)=>p.Id!=Id)])
                    } 
                },
                {   
                    text: "CANCEL", 
                }
            ],
        ); 
        
    };
    
    const editHandler=(data)=>{
        setProduct(data)
        setshowModal(true);
    }

    const viewHandler=(data)=>{
        setProduct(data);
        setshowProductModal(true);
    }

    return(
        <View style={Styles.container}>
            <View>
                <Text style={Styles.textHeader}>Products</Text>
            </View>
            <TouchableOpacity onPress={() => {setProduct({Id:'0',Name:'',Department:'',Color:'',Price:'',Image:''});setshowModal(true);}}>
                <View>
                    <Text style={Styles.button}>Add Product</Text>
                </View>
            </TouchableOpacity>

            <ShowList editData={ editHandler}  onDelete={deleteHandler} viewProduct={viewHandler} itemData={ProductList} />

            <Modal animationType="slide" visible={showModal} onRequestClose={() => {setshowModal(false);}}>
                <NewProduct data={product} save={SaveProduct} />
                <TouchableOpacity onPress={() => {setshowModal(false);}} style={{ position: "absolute", top: 10, right: 10 }}>
                    <Ionicons name="close-circle-sharp" size={36} color="black" />
                </TouchableOpacity>
            </Modal>

            <Modal animationType="slide" visible={showProductModal} onRequestClose={() => {setshowProductModal(false);}}>
                <ShowProduct item={product} />
                <TouchableOpacity onPress={() => {setshowProductModal(false);}} style={{ position: "absolute", top: 10, right: 10 }}>
                    <Ionicons name="close-circle-sharp" size={36} color="black" />
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

export default MainPage;

let Styles=StyleSheet.create({
    container: {
        width:"95%",
        padding: 5
    },
    textHeader: {
        fontSize: 20,
    },
    button: {
        alignSelf: "center",
        textAlign:"center",
        backgroundColor: "#007bff",
        width: 95,
        margin: 5,
        borderRadius: 15,
        color: "white",
        textDecorationColor: "white"
    }
});