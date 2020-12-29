import React, { Component } from 'react'
import { Text, Image, View, FlatList, TouchableOpacity } from 'react-native'
// import { createAppContainer } from "react-navigation"
// import { createStackNavigator } from "react-navigation-stack"
// import { ChatSrceen } from "./ChatScreen"

//消息列表页——>聊天页
// export default LoadingToMain = createAppContainer(
//     createStackNavigator(
//         {
//             Message: { screen: MessageScreen },
//             Chat: { screen: ChatSrceen }

//         },
//         {
//             //取消头部
//             defaultNavigationOptions: { headerShown: false }
//         }
//     ))
//滚动长列表1：编写条目组件
class ItenmView extends Component {
    render() {
        return (
            <View style={{
                flexDirection: "row",
                height: 66,
                // borderColor: "red",
                // borderWidth: 1,
                paddingHorizontal: 12
            }}>
                <Image
                    style={{
                        width: 45,
                        height: 45,
                        alignSelf: "center",
                        borderRadius: 3

                    }}
                    source={this.props.img}
                />
                <View style={{
                    flexDirection: "row",
                    flex: 1,
                    borderColor: "#ccc",
                    borderBottomWidth: 0.3,
                    // borderWidth: 1,
                    marginLeft: 12
                }}>
                    <View style={{
                        flex: 1,
                        alignSelf: "center",
                        // bordrColor: "red",
                        // borderWidth: 1,
                    }}>
                        <Text style={{
                            fontSize: 14,
                            color: "#111",
                            // marginTop: 3
                        }}>
                            {this.props.name}
                        </Text>
                        <Text style={{
                            fontSize: 11,
                            color: "#888",
                            marginTop: 3
                        }}
                            numberOfLines={1}
                        >
                            {this.props.msg}
                        </Text>
                    </View>
                    <Text style={{
                        width: 45,
                        fontSize: 9,
                        color: "#999",
                        marginTop: 17,
                        textAlign: "right"
                    }}>
                        {this.props.time}
                    </Text>
                </View>

            </View>
        )
    }
}
//数据
var dataArr = [{ img: require("./img/head/h0.jpg"), name: "Warriors", msg: "Warriors championship", time: "AM9:11" },
{ img: require("./img/head/h1.jpg"), name: "a Stephen Curry", msg: "Warriors championship", time: "AM9:11" },
{ img: require("./img/head/h2.jpg"), name: "a Klay Thompson", msg: "Warriors championship", time: "AM9:11" },
{ img: require("./img/head/h3.jpg"), name: "a Kevin Durant", msg: "Warriors championship", time: "AM9:11" },
{ img: require("./img/head/h4.jpg"), name: "a Draymond Green", msg: "Warriors championship", time: "AM9:11" },
{ img: require("./img/head/h5.jpg"), name: "Andre Iguodala", msg: "Warriors championship", time: "AM9:11" },
{ img: require("./img/head/h6.jpg"), name: "b Shaun Livingston", msg: "Warriors championship", time: "AM9:11" },
{ img: require("./img/head/h7.jpg"), name: "b JaVale McGee", msg: "Warriors championship", time: "AM9:11" },
{ img: require("./img/head/h8.jpg"), name: "b Nick Young", msg: "Warriors championship", time: "AM9:11" },
{ img: require("./img/head/h9.jpg"), name: "c Patrick McCaw", msg: "Warriors championship", time: "AM9:11" }]

export class MessageScreen extends Component {
    render() {
        return (
            <FlatList
                //滚动长列表2.定义数据源
                data={dataArr}
                //滚动长列表3，用数据源渲染条目布局
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("Chat", {
                                    name: item.name
                                })
                            }}>
                            <ItenmView
                                // 定义ItemView，以便传递给子组件ItemView
                                img={item.img}
                                name={item.name}
                                msg={item.msg}
                                time={item.time}
                            />
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }
}