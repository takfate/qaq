import React,{PropTypes,Component} from 'react';
import {connect} from 'react-redux';
import {View,Text,TextInput,TouchableOpacity } from 'react-native';
import {TabBar,Button,InputItem,WhiteSpace } from 'antd-mobile';
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

function mapStateToProps(state) {
}

function mapDispatchToProps(dispatch) {
}




class Forget2Panel extends Component{

    constructor(props){
        super(props);
    }

    static navigationOptions = ({ navigation }) =>({
        headerTitle: "找回账号",
        headerStyle:{
            height:55,
        }
    });

    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={{height:'100%',width:'100%',backgroundColor:'white',paddingLeft:15,paddingRight:15}}>
                <View style={{width:'100%',height:100,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:25,color:'black'}}>
                        第二步：输入新密码
                    </Text>
                </View>

                <InputItem    placeholder='请输入新密码' maxLength={6}  type="password">新密码</InputItem>
                <WhiteSpace size='lg'/>
                <Button type="primary" >完成修改</Button>

            </View>

        );

    }

}


export default connect()(Forget2Panel);