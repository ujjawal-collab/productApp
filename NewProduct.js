import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

function MainPage(Props){
    // let [product,setProduct]= useState({Id:0,Name:'ABC',Department:'',Color:'',Price:'',Image:''});
    let [Name,setName]= useState('');
    let [Department,setDepartment]= useState('');
    let [Color,setColor]= useState('');
    let [Price,setPrice]= useState('');
    let [Image,setImage]= useState('');

    useEffect(() => {
        if (Props.data.Id!='0') {
            setName(Props.data.Name)
            setDepartment(Props.data.Department);
            setColor(Props.data.Color);
            setPrice(Props.data.Price);
            setImage(Props.data.Image);
        }
    }, [Props.data]);
    return(
        <View style={Styles.container}>
            <View>
                <Text style={Styles.textHeader}>Product</Text>
            </View>
            <View>
                <Text style={Styles.text}>Name</Text>
            </View>
            <View style={Styles.textinput}>
                {/* <TextInput placeholder="Name" defaultValue={product.Name} onChangeText={(text) => {
                        var obj=product;
                        obj.Name=text;
                        console.log(obj.Name);
                        setProduct(obj);
                        console.log(product.Name);
                    }
                    } />
                <Text>{product}</Text> */}
                <TextInput style={{padding:3}} placeholder="Name" value={Name} onChangeText={(text) => {setName(text);}} />
            </View>
            <View>
                <Text style={Styles.text}>Department</Text>
            </View>
            <View style={Styles.textinput}>
                <TextInput style={{padding:3}} placeholder="Department" value={Department} onChangeText={(text) => {setDepartment(text);}} />
            </View>
            <View>
                <Text style={Styles.text}>Color</Text>
            </View>
            <View style={Styles.textinput}>
                <TextInput style={{padding:3}} placeholder="Color" value={Color} onChangeText={(text) => {setColor(text);}} />
            </View>
            <View>
                <Text style={Styles.text}>Price</Text>
            </View>
            <View style={Styles.textinput}>
                <TextInput style={{padding:3}} placeholder="Price" value={Price} onChangeText={(text) => {setPrice(text);}} />
            </View>
            <View>
                <Text style={Styles.text}>Image</Text>
            </View>
            <View style={Styles.textinput}>
                <TextInput style={{padding:3}} placeholder="Image" value={Image} onChangeText={(text) => {setImage(text);}} />
            </View>
            <TouchableOpacity onPress={() => {Props.save({Id:Props.data.Id,Name,Department,Color,Price,Image})}}>
                <View>
                    <Text style={Styles.button}>Save</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default MainPage;

let Styles=StyleSheet.create({
    container: {
        // borderWidth:1,
        // width:"95%",
        padding: 5
    },
    text: {
        fontSize: 15,
        marginTop: 5
    },
    textHeader: {
        fontSize: 20,
    },
    textinput: {
        borderWidth:1,
        borderRadius:15,
    },
    button: {
        alignSelf: "center",
        textAlign:"center",
        backgroundColor: "#007bff",
        width: 75,
        margin: 5,
        borderRadius: 15,
        color: "white",
        textDecorationColor: "white"
    }
});