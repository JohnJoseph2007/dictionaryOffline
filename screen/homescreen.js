import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    View,
    Dimensions
} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../localdb';

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

export default class Homescreen extends React.Component {
    constructor() {
        super();
        this.state = {
            word: '',
            type: '',
            definition: '',
            wordShow: ''
        }
    }

    getApi = (input) => {
        let wordData = db[input].word;
        let typeData = db[input].type;
        let defData = db[input].definition;
        this.setState({
            wordShow:wordData,
            type:typeData,
            definition:defData
        });
    }

    render() {
        return (
            <View style={{width:w, height:h}}>
                <Header backgroundColor="blue" centerComponent={{text: "Dictionary", style: st.h}}></Header>
                <TextInput style={st.ti} placeholder="Enter Your Word" placeholderTextColor="red"
                    onChangeText={
                        (abc) => {
                            this.setState({word: abc});
                        }
                }></TextInput>
                <TouchableOpacity style={st.opacitystyle}
                    onPress={() => {
                            var searchterm = this.state.word.toLowerCase();
                            this.getApi(searchterm);
                    }}>
                    <Text style={st.opacitytext}>Search</Text>
                </TouchableOpacity>
                <View style={st.v}>
                    <Text style={st.w}>Word:</Text>
                    <Text style={st.wd}>{this.state.searchterm}</Text>
                </View>
                <View style={st.v}>
                    <Text style={st.w}>Type:</Text>
                    <Text style={st.wd}>{this.state.type}</Text>
                </View>
                <View style={st.vd}>
                    <Text style={st.d}>Definition:</Text>
                    <Text style={st.wd}>{this.state.definition}</Text>
                </View>
            </View>
        )
    }
}

const st = StyleSheet.create({
    h: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'monospace',
        fontWeight: 'bold'
    },

    ti: {
        textAlign: 'center',
        paddingTop: 40,
        fontSize: 20,
        color: "red",
        fontFamily: 'monospace'
    },

    opacitytext: {
        color:'white',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'monospace'
    },

    opacitystyle: {
        backgroundColor: 'blue',
        padding: 15,
        marginLeft: 110,
        marginRight: 110,
        marginTop: 10,
        borderRadius: 30
    },

    w: {
        fontFamily: 'monospace',
        color: "red",
        fontSize: 20
    },

    v: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50
    },

    wd: {
        fontFamily: 'monospace',
        color: "blue",
        fontSize: 20,
        flexWrap:'wrap',
        textAlign:'center'
    },

    vd: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50,
        flexDirection:'row',
        flexWrap: 'wrap'
    },

    d:{
        fontFamily: 'monospace',
        color: "red",
        fontSize: 20,
        marginLeft:20,
        marginRight:20
    }
});
