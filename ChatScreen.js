import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View, BackHandler } from 'react-native'

//定义全局变量msg，将TextInput中用户输入内容传递给发送按钮的onepress
var msg = ""
export class ChatScreen extends Component {
    //1.初始化state
    constructor(props) {
        super(props)
        this.state = {
            msg: ""
        }
    }
    render() {
        const data = this.props.navigation.state.params
        const name = data.name
        return (
            <View>
                <Text>正在与{name}聊天</Text>
                <Text>{this.state.msg}</Text>
                <View style={{ flexDirection: "row" }}>
                    <TextInput
                        ref="input"
                        //给组件取引用，方便其他地方调用该组件对象
                        style={{
                            height: 40,
                            width: 150,
                            borderBottomWidth: 1,
                            paddingHorizontal: 5,
                            borderBottomColor: "#ccc"
                        }}
                        onChangeText={(text) => {
                            msg = text
                        }}

                    />
                    <TouchableOpacity
                        onPress={() => {
                            //2.修改state
                            this.setState({ msg: msg })
                            //清空文本输入框
                            this.refs.input.clear()
                        }}
                    >
                        <Text style={{
                            height: 40,
                            width: 50,
                            borderWidth: 1,
                            borderRadius: 3,
                            borderColor: "#ccc",
                            textAlign: "center",
                            paddingTop: 10,
                            paddingLeft: 5,
                            color: "#444"
                        }}>
                            发送
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}