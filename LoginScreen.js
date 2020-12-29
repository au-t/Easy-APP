import React, { Component } from 'react'
import { ToastAndroid, View, Text, TextInput, TouchableOpacity, Image } from 'react-native'

//case1:点击登录按钮后，获取用户在密码框中输入的内容，并用Toast显示
var passInput = ""
export class LoginScreen extends Component {

    //case2：关于state，页面状态发生更改。当用户在密码框中输入内容，登录按钮高亮显示。
    //state第一步：初始化state
    constructor(props) {
        super(props)
        this.state = {
            pass: null
        }
    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "#fff",
                //borderWidth:1,

            }}>
                <Image
                    style={{
                        width: 80,
                        height: 80,
                        alignSelf: "center",
                        marginTop: 70
                    }}
                    source={require("./img/mark.jpg")}
                />
                <Text style={{
                    fontSize: 18,
                    color: "#012",
                    alignSelf: "center",
                    marginTop: 5
                }}>
                    1588888847
                </Text>
                {/* 密码模块 */}
                <View style={{
                    flexDirection: "row",
                    height: 40,
                    //borderWidth: 1
                    marginTop: 30,
                    borderBottomWidth: 1,
                    borderBottomColor: "#55c09b",
                    marginHorizontal: 10
                }}>
                    <Text style={{
                        fontSize: 14,
                        color: "#333",
                        marginLeft: 7,
                        alignSelf: "center"
                    }}>
                        密码
                    </Text>
                    <TextInput
                        onChangeText={(input) => {
                            //case1
                            passInput = input
                            //case2
                            //state第二步：修改state的值
                            this.setState({
                                pass: input
                            })

                        }}
                        style={{
                            flex: 1,
                            marginLeft: 50,
                            marginRight: 100
                        }}
                        placeholder="请填写密码"
                        fontSize={14}
                        placeholderTextColor="#ddd"
                        maxLength={16}
                        secureTextEntry
                        autoFocus={true}
                    />
                </View>
                <Text style={{
                    fontSize: 13,
                    color: "#67707f",
                    marginTop: 12,
                    marginLeft: 17
                }}>
                    用短信验证码登录
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        //case1
                        // ToastAndroid.show(passInput, 1)
                        //点击登录按钮，跳转到主页
                        this.props.navigation.navigate("Main")
                    }
                    }
                >
                    <View style={{
                        //state第三步：取state的值
                        opacity: this.state.pass == null ? 0.5 : 1,
                        height: 44,
                        backgroundColor: "#05c160",
                        borderRadius: 3,
                        marginTop: 45,
                        marginHorizontal: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={{
                            color: "#fff",
                            fontSize: 16
                        }}>
                            登录
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    ///borderWidth: 1,
                    justifyContent: "flex-end"
                }}>
                    <TouchableOpacity>
                        <Text style={{
                            alignSelf: "center",
                            fontSize: 13,
                            color: "#67707f",
                            marginBottom: 15
                        }}>
                            退出
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}