import React, { Component } from 'react'
import { View, Text, Image, SectionList } from 'react-native'

//头部："新的朋友" "群聊" "标签" "公众号"
const item1 = require("./img/item1.png")
const item2 = require("./img/item2.png")
const item3 = require("./img/item3.png")
const item4 = require("./img/item4.png")
//好友头像
const headImageArr = [
    require("./img/head/h1.jpg"),
    require("./img/head/h2.jpg"),
    require("./img/head/h3.jpg"),
    require("./img/head/h4.jpg"),
    require("./img/head/h5.jpg"),
    require("./img/head/h6.jpg"),
    require("./img/head/h7.jpg"),
    require("./img/head/h8.jpg"),
    require("./img/head/h9.jpg"),
    require("./img/head/cc1.jpg"),
    require("./img/head/cc4.jpg")
]

//渲染分组列表需要的数组数据
var sectionArr = [

    //头部数据，也包含在整个分组列表中
    {
        title: "", data: [
            { icon: item1, name: "新的朋友" },
            { icon: item2, name: "群聊" },
            { icon: item3, name: "标签" },
            { icon: item4, name: "公众号" }

        ]
    },
    {
        title: "A", data: [
            { icon: headImageArr[0], name: "a Stephen Curry" },
            { icon: headImageArr[1], name: "a Klay Thompson" },
            { icon: headImageArr[2], name: "a Kevin Durant" },
            { icon: headImageArr[3], name: "a Draymond Green" },
            { icon: headImageArr[4], name: "Andre Iguodala" }
        ]
    },
    {
        title: "B", data: [
            { icon: headImageArr[5], name: "b Shaun Livingston" },
            { icon: headImageArr[6], name: "b JaVale McGee" },
            { icon: headImageArr[7], name: "b Nick Young" }
        ]
    },
    {
        title: "C", data: [
            { icon: headImageArr[8], name: "c Patrick McCaw" },

        ]
    },

]

//通讯录条目组件
class ItemView extends Component {
    render() {
        return (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 3,
                        marginLeft: 15,
                    }}
                    //图片数据
                    source={this.props.icon}
                />
                <View style={{
                    borderBottomWidth: 0.3,
                    borderColor: "#cdcdcd",
                    marginLeft: 13,
                    flex: 1,
                    height: 50,
                    justifyContent: "center"
                }}>
                    <Text style={{
                        fontSize: 14,
                        color: "#111"
                    }}>
                        {/* 文本数据 */}
                        {this.props.name}
                    </Text>
                </View>
            </View>
        )
    }
}
export class ContactsScreen extends Component {
    render() {
        return (
            <SectionList
                style={{
                    flex: 1,
                    backgroundColor: "#fff"
                }}
                //数据源
                sections={sectionArr}
                //渲染分组标签
                renderSectionHeader={({ section }) => {
                    return (
                        <Text
                            style={{
                                backgroundColor: "#eee",
                                fontSize: 14,
                                paddingLeft: 14,
                                paddingVertical: 4,
                                //判断头部是否需要显示分组标签
                                display: section.title == "" ? "none" : "flex"
                            }}>
                            {section.title}
                        </Text>
                    )
                }}
                //渲染列表数据
                renderItem={({ item }) => {
                    return (
                        <ItemView
                            icon={item.icon}
                            name={item.name}
                        />
                    )
                }}
                //分配key
                keyExtractor={(item, index) => index}
            />
        )
    }
}
