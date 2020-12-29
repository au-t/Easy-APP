import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createAppContainer } from "react-navigation"
import { MessageScreen } from "./MessageScreen"
import { ContactsScreen } from "./ContactsScreen"
import { createStackNavigator } from 'react-navigation-stack'
import { ChatScreen } from './ChatScreen'

//消息列表页——>聊天页
export const MsgToChat = createAppContainer(
    createStackNavigator(
        {
            Message: { screen: MessageScreen },
            Chat: { screen: ChatScreen },
        },
        {
            defaultNavigationOptions: { headerShown: false }
        }
    ))
export const MainScreen = createAppContainer(
    createBottomTabNavigator(
        {
            Message: {
                screen: MsgToChat,
                navigationOptions: {
                    //渲染导航栏的图标和标签
                    tabBarIcon: ({ focused }) => renderTabBar("icon", 0, focused),
                    tabBarLabel: ({ focused }) => renderTabBar("label", 0, focused),
                }
            },
            Contacts: {
                screen: ContactsScreen,
                navigationOptions: {
                    tabBarIcon: ({ focused }) => renderTabBar("icon", 1, focused),
                    tabBarLabel: ({ focused }) => renderTabBar("label", 1, focused),

                }
            }
        }
    ))

function renderTabBar(part, page, focused) {
    var icon = null
    //渲染图标
    if (part == "icon") {
        //page==0,代表消息列表页
        //focused:是否获取焦点
        if (page == 0) {
            icon = focused ? require("./img/message_f.png") :
                require("./img/message_nof.png")
        } else {
            //page==1,代表通讯录
            icon = focused ? require("./img/contacts_f.png") :
                require("./img/contacts_nof.png")
        }
        return <Image style={{ width: 20, height: 20 }} source={icon} />
    } else {
        //渲染Label标签
        var label = (page == 0 ? "消息" : "通讯录")
        var color = (focused ? "green" : "#ccc")
        return (
            <Text style={{ fontSize: 12, color: color, alignSelf: "center" }}>
                {label}
            </Text>
        )
    }
}