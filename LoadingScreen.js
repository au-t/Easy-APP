import React, { Component } from 'react'
import { View, ImageBackground, StatusBar, ImageBackgroundBase } from 'react-native'
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { LoginScreen } from "./LoginScreen"
import { MainScreen } from "./MainScreen"

class LoadingScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <StatusBar
                    hidden={true}
                />
                <ImageBackground
                    style={{
                    }}
                    source={require("./img/loading.jpg")}
                />
            </View>
        )
    }

    //组件加载完毕后调用该方法
    componentDidMount() {
        //延时2秒，跳转到LoginScreen
        this.timer = setTimeout(() => {
            this.props.navigation.navigate("Login")
        }, 2000)
    }

    //组件即将被卸载时调用该方法
    componentWillMount() {
        //清空定时器
        this.timer && clearTimeout(this.timer)
    }
}

//加载页->登录页->主页
export default LoadingToMain = createAppContainer(
    createStackNavigator(
        {
            Loading: { screen: LoadingScreen },
            Login: { screen: LoginScreen },
            Main: { screen: MainScreen }

        },
        {
            //取消头部
            defaultNavigationOptions: { headerShown: false }
        }
    ))