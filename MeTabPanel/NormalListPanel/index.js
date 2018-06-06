import React,{PropTypes,Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableHighlight
} from 'react-native';
import {Button, NavBar,Card,List,ListView,WhiteSpace} from 'antd-mobile';
import CommonListPanel from '../CommonListPanel';
import Icon from 'react-native-vector-icons/FontAwesome';
const Brief = List.Item.Brief;




export class MyWatchListPanel extends Component{

    static navigationOptions = {
        headerTitle:"我关注的人",
        headerStyle:{
            height:55,
        },
    };
    constructor(props){
        super(props);
        this.state =  {
            Data : [
                {
                    Image:"",
                    NickName : "竹曦雨露1",
                    key : "1"
                },
                {
                    Image:"",
                    NickName : "竹曦雨露2",
                    key : "2"
                },
                {
                    Image:"",
                    NickName : "竹曦雨露3",
                    key : "3"
                },
                {
                    Image:"",
                    NickName : "竹曦雨露4",
                    key : "4"
                },
                {
                    Image:"",
                    NickName : "竹曦雨露5",
                    key : "5"
                },
                {
                    Image:"",
                    NickName : "竹曦雨露6",
                    key : "6"
                }
                ,
                {
                    Image:"",
                    NickName : "竹曦雨露7",
                    key : "7"
                }
                ,
                {
                    Image:"",
                    NickName : "竹曦雨露8",
                    key : "8"
                }
                ,
                {
                    Image:"",
                    NickName : "竹曦雨露9",
                    key : "9"
                },
                {
                    Image:"",
                    NickName : "竹曦雨露10",
                    key : "10"
                }
            ]
        };
    }
    _renderItem = (item)=>{
        const { navigate } = this.props.navigation;
        return (
            <TouchableHighlight
                onPress={()=>{navigate("UserInfo",{
                    IsLoginUser :false,
                    UserId : '100'
                })}}
            >
                <Card full>
                    <Card.Header
                        title={item.item.NickName}
                        thumb = {
                            <Image
                                source={require('./head.jpg')}
                                style={{
                                    height:40,
                                    width:40,
                                    marginRight:10,
                                    borderRadius:20,
                                }}
                            />
                        }
                    >
                    </Card.Header>
                </Card>
            </TouchableHighlight>

        ) ;
    };

    render(){
        return (
            <View style={{height:'100%',width:'100%'}}>
                <View style={{height:30,flexDirection:'row',justifyContent:'space-between',
                    alignItems:'center',paddingLeft:12,paddingRight:12}}>
                    <Text >共关注了15个糖友</Text>
                </View>
                <CommonListPanel
                    RealData = {this.state.Data}
                    InitNum = {10}
                    RenderItem = {this._renderItem}
                    style={{height:'100%'}}
                />
            </View>
        );
    }
}

export class WatchMeListPanel extends Component{

    static navigationOptions = {
        headerTitle:"关注我的人",
        headerStyle:{
            height:55,
        },
    };
    constructor(props){
        super(props);
        this.state =  {
            Data : [
                {
                    Image:"",
                    NickName : "竹曦雨露1",
                    key : "1"
                },
                {
                    Image:"",
                    NickName : "竹曦雨露2",
                    key : "2"
                },
                {
                    Image:"",
                    NickName : "竹曦雨露3",
                    key : "3"
                },
                {
                    Image:"",
                    NickName : "竹曦雨露4",
                    key : "4"
                },
                {
                    Image:"",
                    NickName : "竹曦雨露5",
                    key : "5"
                },
                {
                    Image:"",
                    NickName : "竹曦雨露6",
                    key : "6"
                }
                ,
                {
                    Image:"",
                    NickName : "竹曦雨露7",
                    key : "7"
                }
                ,
                {
                    Image:"",
                    NickName : "竹曦雨露8",
                    key : "8"
                }
                ,
                {
                    Image:"",
                    NickName : "竹曦雨露9",
                    key : "9"
                },
                {
                    Image:"",
                    NickName : "竹曦雨露10",
                    key : "10"
                }
            ]
        };
    }
    _renderItem = (item)=>{
        const { navigate } = this.props.navigation;
        return (

            <TouchableHighlight
                onPress={()=>{navigate("UserInfo",{
                    IsLoginUser :false,
                    UserId : '100'
                })}}
            >
                <Card full>
                    <Card.Header
                        title={item.item.NickName}
                        thumb = {
                            <Image
                                source={require('./head.jpg')}
                                style={{
                                    height:40,
                                    width:40,
                                    marginRight:10,
                                    borderRadius:20,
                                }}
                            />
                        }
                    >
                    </Card.Header>
                </Card>
            </TouchableHighlight>

        ) ;
    };

    render(){
        return (
            <View style={{height:'100%',width:'100%'}}>
                <View style={{height:30,flexDirection:'row',justifyContent:'space-between',
                    alignItems:'center',paddingLeft:12,paddingRight:12}}>
                    <Text >共有15个糖友关注我</Text>
                </View>
                <CommonListPanel
                    RealData = {this.state.Data}
                    InitNum = {10}
                    RenderItem = {this._renderItem}
                    style={{height:'100%'}}
                />
            </View>
        );
    }
}



export class MyCollectedArticleListPanel extends Component{

    static navigationOptions = {
        headerTitle:"我收藏的文章",
        headerStyle:{
            height:55,
        },
    };
    constructor(props){
        super(props);
        this.state =  {
            Data : [
                {
                    Title:"糖友，生活规律，别睡懒觉",
                    Content:"随着糖尿病教育的开展，对糖尿病的正确认识可减轻糖尿病患者的心理压力。我们要时不时的对糖友们进行心理分析。",
                    key : "1"
                },
                {
                    Title:"糖友，生活规律，别睡懒觉",
                    Content:"随着糖尿病教育的开展，对糖尿病的正确认识可减轻糖尿病患者的心理压力。我们要时不时的对糖友们进行心理分析。",
                    key : "2"
                },
                {
                    Title:"糖友，生活规律，别睡懒觉",
                    Content:"随着糖尿病教育的开展，对糖尿病的正确认识可减轻糖尿病患者的心理压力。我们要时不时的对糖友们进行心理分析。",
                    key : "3"
                },
                {
                    Title:"糖友，生活规律，别睡懒觉",
                    Content:"随着糖尿病教育的开展，对糖尿病的正确认识可减轻糖尿病患者的心理压力。我们要时不时的对糖友们进行心理分析。",
                    key : "4"
                },
                {
                    Title:"糖友，生活规律，别睡懒觉",
                    Content:"随着糖尿病教育的开展，对糖尿病的正确认识可减轻糖尿病患者的心理压力。我们要时不时的对糖友们进行心理分析。",
                    key : "5"
                },
                {
                    Title:"糖友，生活规律，别睡懒觉",
                    Content:"随着糖尿病教育的开展，对糖尿病的正确认识可减轻糖尿病患者的心理压力。我们要时不时的对糖友们进行心理分析。",
                    key : "6"
                },
                {
                    Title:"糖友，生活规律，别睡懒觉",
                    Content:"随着糖尿病教育的开展，对糖尿病的正确认识可减轻糖尿病患者的心理压力。我们要时不时的对糖友们进行心理分析。",
                    key : "7"
                },
                {
                    Title:"糖友，生活规律，别睡懒觉",
                    Content:"随着糖尿病教育的开展，对糖尿病的正确认识可减轻糖尿病患者的心理压力。我们要时不时的对糖友们进行心理分析。",
                    key : "8"
                },
                {
                    Title:"糖友，生活规律，别睡懒觉",
                    Content:"随着糖尿病教育的开展，对糖尿病的正确认识可减轻糖尿病患者的心理压力。我们要时不时的对糖友们进行心理分析。",
                    key : "9"
                },
                {
                    Title:"糖友，生活规律，别睡懒觉",
                    Content:"随着糖尿病教育的开展，对糖尿病的正确认识可减轻糖尿病患者的心理压力。我们要时不时的对糖友们进行心理分析。",
                    key : "10"
                }
            ]
        };
    }
    _renderItem = (item)=>{
        const { navigate } = this.props.navigation;
        return (

            <TouchableHighlight
                onPress={()=>{navigate("UserInfo",{
                    IsLoginUser :false,
                    UserId : '100'
                })}}
            >
                <Card full>
                    <Card.Header
                        title={item.item.Title}
                    />
                    <Card.Body>
                        <Text style={{paddingLeft:15}}>{item.item.Content}</Text>
                    </Card.Body>
                </Card>
            </TouchableHighlight>

        ) ;
    };

    render(){
        return (
            <View style={{height:'100%',width:'100%'}}>
                <View style={{height:30,flexDirection:'row',justifyContent:'space-between',
                    alignItems:'center',paddingLeft:12,paddingRight:12}}>
                    <Text >共收藏了10篇文章</Text>
                </View>
                <CommonListPanel
                    RealData = {this.state.Data}
                    InitNum = {10}
                    RenderItem = {this._renderItem}
                    style={{height:'100%'}}
                />
            </View>
        );
    }
}

export class MyCommentListPanel extends Component{

    static navigationOptions = {
        headerTitle:"我的评论",
        headerStyle:{
            height:55,
        },
    };
    constructor(props){
        super(props);
        this.state =  {
            Data : [
                {
                    CommentContent:"你是真的强你是真的强你是真的强",
                    ArticleTitle : "糖尿病",
                    Score : "12",
                    ArticleId:'123',
                    PostTime:'1',
                    key : "1"
                },
                {
                    CommentContent:"你是真的强你是真的强你是真的强",
                    ArticleTitle : "糖尿病",
                    Score : "12",
                    ArticleId:'123',
                    PostTime:'1',
                    key : "2"
                },
                {
                    CommentContent:"你是真的强你是真的强你是真的强",
                    ArticleTitle : "糖尿病",
                    Score : "12",
                    ArticleId:'123',
                    PostTime:'1',
                    key : "3"
                },
                {
                    CommentContent:"你是真的强你是真的强你是真的强",
                    ArticleTitle : "糖尿病",
                    Score : "12",
                    ArticleId:'123',
                    PostTime:'1',
                    key : "4"
                },
                {
                    CommentContent:"你是真的强你是真的强你是真的强",
                    ArticleTitle : "糖尿病",
                    Score : "12",
                    ArticleId:'123',
                    PostTime:'1',
                    key : "5"
                },
                {
                    CommentContent:"你是真的强你是真的强你是真的强",
                    ArticleTitle : "糖尿病",
                    Score : "12",
                    ArticleId:'123',
                    PostTime:'1',
                    key : "6"
                }
                ,
                {
                    CommentContent:"你是真的强你是真的强你是真的强",
                    ArticleTitle : "糖尿病",
                    Score : "-5",
                    ArticleId:'123',
                    PostTime:'1',
                    key : "7"
                }
                ,
                {
                    CommentContent:"你是真的强你是真的强你是真的强",
                    ArticleTitle : "糖尿病",
                    Score : "0",
                    ArticleId:'123',
                    PostTime:'1',
                    key : "8"
                }
                ,
                {
                    CommentContent:"你是真的强你是真的强你是真的强",
                    ArticleTitle : "糖尿病",
                    Score : "12",
                    ArticleId:'123',
                    PostTime:'1',
                    key : "9"
                },
                {
                    CommentContent:"你是真的强你是真的强你是真的强",
                    ArticleTitle : "糖尿病",
                    Score : "12",
                    ArticleId:'123',
                    PostTime:'1',
                    key : "10"
                }
            ]
        };
    }
    _renderItem = (item)=>{
        const { navigate } = this.props.navigation;
        let FooterContent = null;
        let score = parseInt(item.item.Score);
        if(score>0){
            FooterContent =
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                        <Text>
                            2018-05-05 23:00
                        </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Icon name='thumbs-up' color='red' style={{marginRight:5,marginTop:4}}/>
                        <Text>{item.item.Score}</Text>
                    </View>
                </View>

        }else if(score<0){
            FooterContent =
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                        <Text>
                            2018-05-05 23:00
                        </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Icon name='thumbs-down' color='blue' style={{marginRight:5,marginTop:4}}/>
                        <Text>{item.item.Score}</Text>
                    </View>
                </View>
        }
        return (
            <TouchableHighlight
                onPress={()=>{}}
            >
                <Card full>
                    <Card.Header
                        title={item.item.ArticleTitle}

                    />
                    <Card.Body>
                        <Text style={{color:'black',paddingLeft:15}}>
                            评论：{item.item.CommentContent}
                        </Text>
                    </Card.Body>
                    <Card.Footer content={FooterContent} />
                </Card>
            </TouchableHighlight>

        ) ;
    };

    render(){
        return (
            <View style={{height:'100%',width:'100%'}}>
                <View style={{height:30,flexDirection:'row',justifyContent:'space-between',
                    alignItems:'center',paddingLeft:12,paddingRight:12}}>
                    <Text >共发表了20条评论</Text>
                </View>
                <CommonListPanel
                    RealData = {this.state.Data}
                    InitNum = {10}
                    RenderItem = {this._renderItem}
                    style={{height:'100%'}}
                />
            </View>
        );
    }
}

export class MyPublishedTopicListPanel extends Component{

    static navigationOptions = {
        headerTitle:"我发布的话题",
        headerStyle:{
            height:55,
        },
    };
    constructor(props){
        super(props);
        this.state =  {
            Data : [
                {
                    TopicContent:"你这也太强了吧哈哈哈哈哈哈哈哈哈你这也太强了吧哈哈哈哈哈哈哈哈哈",
                    PublishTime : "2018-08-07 23:00",
                    PostCount : '23',
                    CollectCount : '12',
                    Score : '23',
                    TopicId: '12',
                    Images : [],
                    key : "1"
                },
                {
                    TopicContent:"你这也太强了吧哈哈哈哈哈哈哈哈哈你这也太强了吧哈哈哈哈哈哈哈哈哈",
                    PublishTime : "2018-08-07 23:00",
                    PostCount : '23',
                    CollectCount : '12',
                    Score : '23',
                    TopicId: '12',
                    Images : [],
                    key : "2"
                },
                {
                    TopicContent:"你这也太强了吧哈哈哈哈哈哈哈哈哈你这也太强了吧哈哈哈哈哈哈哈哈哈",
                    PublishTime : "2018-08-07 23:00",
                    PostCount : '23',
                    CollectCount : '12',
                    Score : '23',
                    TopicId: '12',
                    Images : [],
                    key : "3"
                },
                {
                    TopicContent:"你这也太强了吧哈哈哈哈哈哈哈哈哈你这也太强了吧哈哈哈哈哈哈哈哈哈",
                    PublishTime : "2018-08-07 23:00",
                    PostCount : '23',
                    CollectCount : '12',
                    Score : '23',
                    TopicId: '12',
                    Images : [],
                    key : "4"
                },
                {
                    TopicContent:"你这也太强了吧哈哈哈哈哈哈哈哈哈你这也太强了吧哈哈哈哈哈哈哈哈哈",
                    PublishTime : "2018-08-07 23:00",
                    PostCount : '23',
                    CollectCount : '12',
                    Score : '23',
                    TopicId: '12',
                    Images : [],
                    key : "5"
                },
                {
                    TopicContent:"你这也太强了吧哈哈哈哈哈哈哈哈哈你这也太强了吧哈哈哈哈哈哈哈哈哈",
                    PublishTime : "2018-08-07 23:00",
                    PostCount : '23',
                    CollectCount : '12',
                    Score : '23',
                    TopicId: '12',
                    Images : [],
                    key : "6"
                },
                {
                    TopicContent:"你这也太强了吧哈哈哈哈哈哈哈哈哈你这也太强了吧哈哈哈哈哈哈哈哈哈",
                    PublishTime : "2018-08-07 23:00",
                    PostCount : '23',
                    CollectCount : '12',
                    Score : '23',
                    TopicId: '12',
                    Images : [],
                    key : "7"
                },
                {
                    TopicContent:"你这也太强了吧哈哈哈哈哈哈哈哈哈你这也太强了吧哈哈哈哈哈哈哈哈哈",
                    PublishTime : "2018-08-07 23:00",
                    PostCount : '23',
                    CollectCount : '12',
                    Score : '23',
                    TopicId: '12',
                    Images : [],
                    key : "8"
                },
                {
                    TopicContent:"你这也太强了吧哈哈哈哈哈哈哈哈哈你这也太强了吧哈哈哈哈哈哈哈哈哈",
                    PublishTime : "2018-08-07 23:00",
                    PostCount : '23',
                    CollectCount : '12',
                    Score : '23',
                    TopicId: '12',
                    Images : [],
                    key : "9"
                },
                {
                    TopicContent:"你这也太强了吧哈哈哈哈哈哈哈哈哈你这也太强了吧哈哈哈哈哈哈哈哈哈",
                    PublishTime : "2018-08-07 23:00",
                    PostCount : '23',
                    CollectCount : '12',
                    Score : '23',
                    TopicId: '12',
                    Images : [],
                    key : "10"
                }
            ]
        };
    }
    _renderItem = (item)=>{
        const { navigate } = this.props.navigation;
        let FooterContent = null;
        let score = parseInt(item.item.Score);
        if(score>0){
            FooterContent =
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                        <Icon name='comment'  style={{marginRight:5,marginTop:4}}/>
                        <Text>{item.item.PostCount}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Icon name='star' color='yellow' style={{marginRight:5,marginTop:4}}/>
                        <Text>{item.item.CollectCount}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Icon name='thumbs-up' color='red' style={{marginRight:5,marginTop:4}}/>
                        <Text>{item.item.Score}</Text>
                    </View>
                </View>

        }else if(score<0){
            FooterContent =
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                        <Icon name='comment' style={{marginRight:5,marginTop:4}}/>
                        <Text>{item.item.PostCount}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Icon name='star' color='yellow' style={{marginRight:5,marginTop:4}}/>
                        <Text>{item.item.CollectCount}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Icon name='thumbs-down' color='blue' style={{marginRight:5,marginTop:4}}/>
                        <Text>{item.item.Score}</Text>
                    </View>
                </View>
        }
        return (

            <TouchableHighlight
                onPress={()=>{}}
            >
                <Card full>
                    <Card.Header
                        title={item.item.PublishTime}
                    />
                    <Card.Body>
                        <Text style={{color:'black',paddingLeft:15}}>
                            {item.item.TopicContent}
                        </Text>
                    </Card.Body>
                    <Card.Footer content={FooterContent} />
                </Card>
            </TouchableHighlight>

        ) ;
    };

    render(){
        return (
            <View style={{height:'100%',width:'100%'}}>
                <View style={{height:30,flexDirection:'row',justifyContent:'space-between',
                    alignItems:'center',paddingLeft:12,paddingRight:12}}>
                    <Text >共发布了20个话题</Text>
                </View>
                <CommonListPanel
                    RealData = {this.state.Data}
                    InitNum = {10}
                    RenderItem = {this._renderItem}
                    style={{height:'100%'}}
                />
            </View>
        );
    }
}


export class MyCollectedTopicListPanel extends Component{

    static navigationOptions = {
        headerTitle:"我收藏的话题",
        headerStyle:{
            height:55,
        },
    };
    constructor(props){
        super(props);
        this.state =  {
            Data : [
                {
                    UserImage:"",
                    NickName : "竹曦雨露1",
                    UserId:'23',
                    Image :'',
                    TopicContent : '你好强啊啊啊啊啊啊啊啊啊',
                    Floor: '12',
                    key : "1"
                },
                {
                    UserImage:"",
                    NickName : "竹曦雨露1",
                    UserId:'23',
                    Image :'',
                    TopicContent : '你好强啊啊啊啊啊啊啊啊啊',
                    Floor: '12',
                    key : "2"
                },
                {
                    UserImage:"",
                    NickName : "竹曦雨露1",
                    UserId:'23',
                    Image :'',
                    TopicContent : '你好强啊啊啊啊啊啊啊啊啊',
                    Floor: '12',
                    key : "3"
                },
                {
                    UserImage:"",
                    NickName : "竹曦雨露1",
                    UserId:'23',
                    Image :'',
                    TopicContent : '你好强啊啊啊啊啊啊啊啊啊',
                    Floor: '12',
                    key : "4"
                },
                {
                    UserImage:"",
                    NickName : "竹曦雨露1",
                    UserId:'23',
                    Image :'',
                    TopicContent : '你好强啊啊啊啊啊啊啊啊啊',
                    Floor: '12',
                    key : "5"
                },
                {
                    UserImage:"",
                    NickName : "竹曦雨露1",
                    UserId:'23',
                    Image :'',
                    TopicContent : '你好强啊啊啊啊啊啊啊啊啊',
                    Floor: '12',
                    key : "6"
                }
                ,
                {
                    UserImage:"",
                    NickName : "竹曦雨露1",
                    UserId:'23',
                    Image :'',
                    TopicContent : '你好强啊啊啊啊啊啊啊啊啊',
                    Floor: '12',
                    key : "7"
                }
                ,
                {
                    UserImage:"",
                    NickName : "竹曦雨露1",
                    UserId:'23',
                    Image :'',
                    TopicContent : '你好强啊啊啊啊啊啊啊啊啊',
                    Floor: '12',
                    key : "8"
                }
                ,
                {
                    UserImage:"",
                    NickName : "竹曦雨露1",
                    UserId:'23',
                    Image :'',
                    TopicContent : '你好强啊啊啊啊啊啊啊啊啊',
                    Floor: '12',
                    key : "9"
                },
                {
                    UserImage:"",
                    NickName : "竹曦雨露1",
                    UserId:'23',
                    Image :'',
                    TopicContent : '你好强啊啊啊啊啊啊啊啊啊',
                    Floor: '12',
                    key : "10"
                }
            ]
        };
    }
    _renderItem = (item)=>{
        const { navigate } = this.props.navigation;
        return (

            <TouchableHighlight
                onPress={()=>{}}
            >
                <Card full>
                    <Card.Header
                        title={item.item.NickName}
                        thumb = {
                            <Image
                                source={require('./head.jpg')}
                                style={{
                                    height:30,
                                    width:30,
                                    marginRight:10,
                                    borderRadius:15,
                                }}
                            />
                        }
                    />
                    <Card.Body>
                        <Text style={{color:'black',paddingLeft:15}}>
                            {item.item.TopicContent}
                        </Text>
                    </Card.Body>
                    <Card.Footer content={<Text>楼主更新到了{item.item.Floor}楼</Text>} />
                </Card>
            </TouchableHighlight>

        ) ;
    };

    render(){
        return (
            <View style={{height:'100%',width:'100%'}}>
                <View style={{height:30,flexDirection:'row',justifyContent:'space-between',
                    alignItems:'center',paddingLeft:12,paddingRight:12}}>
                    <Text >共收藏了55个话题</Text>
                </View>
                <CommonListPanel
                    RealData = {this.state.Data}
                    InitNum = {10}
                    RenderItem = {this._renderItem}
                    style={{height:'100%'}}
                />
            </View>
        );
    }
}


export class MyResponseListPanel extends Component{

    static navigationOptions = {
        headerTitle:"我的回复",
        headerStyle:{
            height:55,
        },
    };
    constructor(props){
        super(props);
        this.state =  {
            Data : [
                {
                    type:'comment',
                    CommentContent : "我的好菜啊，我好菜啊，我好菜啊",
                    PostContent : '你好强啊啊啊啊啊啊啊啊啊',
                    PostId : '12',
                    Score: '15',
                    key : "1"
                },
                {
                    type:'comment',
                    CommentContent : "我的好菜啊，我好菜啊，我好菜啊",
                    PostContent : '你好强啊啊啊啊啊啊啊啊啊',
                    PostId : '12',
                    Score: '15',
                    key : "2"
                },
                {
                    type:'comment',
                    CommentContent : "我的好菜啊，我好菜啊，我好菜啊",
                    PostContent : '你好强啊啊啊啊啊啊啊啊啊',
                    PostId : '12',
                    Score: '15',
                    key : "3"
                },
                {
                    type:'comment',
                    CommentContent : "我的好菜啊，我好菜啊，我好菜啊",
                    PostContent : '你好强啊啊啊啊啊啊啊啊啊',
                    PostId : '12',
                    Score: '15',
                    key : "4"
                },
                {
                    type:'comment',
                    CommentContent : "我的好菜啊，我好菜啊，我好菜啊",
                    PostContent : '你好强啊啊啊啊啊啊啊啊啊',
                    PostId : '12',
                    Score: '15',
                    key : "5"
                },
                {
                    type:'comment',
                    CommentContent : "我的好菜啊，我好菜啊，我好菜啊",
                    PostContent : '你好强啊啊啊啊啊啊啊啊啊',
                    PostId : '12',
                    Score: '15',
                    key : "6"
                },
                {
                    type:'comment',
                    CommentContent : "我的好菜啊，我好菜啊，我好菜啊",
                    PostContent : '你好强啊啊啊啊啊啊啊啊啊',
                    PostId : '12',
                    Score: '15',
                    key : "7"
                },
                {
                    type:'post',
                    PostContent : "我的好菜啊，我好菜啊，我好菜啊",
                    TopicContent : '你好强啊啊啊啊啊啊啊啊啊',
                    TopicId : '12',
                    Score: '15',
                    key : "8"
                },
                {
                    type:'post',
                    PostContent : "我的好菜啊，我好菜啊，我好菜啊",
                    TopicContent : '你好强啊啊啊啊啊啊啊啊啊',
                    TopicId : '12',
                    Score: '15',
                    key : "9"
                },
                {
                    type:'post',
                    PostContent : "我的好菜啊，我好菜啊，我好菜啊",
                    TopicContent : '你好强啊啊啊啊啊啊啊啊啊',
                    TopicId : '12',
                    Score: '-15',
                    key : "10"
                }
            ]
        };
    }
    _renderItem = (item)=>{
        const { navigate } = this.props.navigation;
        let FooterContent = null;
        let score = parseInt(item.item.Score);
        if(score>0){
            FooterContent =
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:15,paddingRight:15,marginTop:5}}>
                    <View>
                        <Text >
                            2018-05-05 23:00
                        </Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <Icon name='thumbs-up' color='red' style={{marginRight:5,marginTop:4}}/>
                        <Text>{item.item.Score}</Text>
                    </View>
                </View>

        }else if(score<0){
            FooterContent =
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:15,paddingRight:15,marginTop:5}}>
                    <View>
                        <Text >
                            2018-05-05 23:00
                        </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Icon name='thumbs-down' color='blue' style={{marginRight:5,marginTop:4}}/>
                        <Text>{item.item.Score}</Text>
                    </View>
                </View>
        }

        if(item.item.type==='comment'){
            return (

                <TouchableHighlight
                    onPress={()=>{}}
                >
                    <Card full>
                        <Card.Body>
                            <Text style={{color:'black',paddingLeft:15}}>回复：{item.item.CommentContent}</Text>
                            {FooterContent}
                        </Card.Body>
                        <Card.Footer
                            content={
                                <Text >
                                    原贴：{item.item.PostContent}
                                </Text>
                            }
                            style={{borderTopWidth:1,borderTopColor:'#DDDDDD'}}
                        />
                    </Card>
                </TouchableHighlight>

            ) ;
        }else{
            return (

                <TouchableHighlight
                    onPress={()=>{}}
                >
                    <Card full>
                        <Card.Body>
                            <Text style={{color:'black',paddingLeft:15}}>回复：{item.item.PostContent}</Text>
                            {FooterContent}
                        </Card.Body>
                        <Card.Footer
                            content={
                                <Text >
                                    原贴：{item.item.TopicContent}
                                </Text>
                            }
                            style={{borderTopWidth:1,borderTopColor:'#DDDDDD'}}
                        />
                    </Card>
                </TouchableHighlight>

            ) ;
        }

    };

    render(){
        return (
            <View style={{height:'100%',width:'100%'}}>
                <View style={{height:30,flexDirection:'row',justifyContent:'space-between',
                    alignItems:'center',paddingLeft:12,paddingRight:12}}>
                    <Text >共有105条回复</Text>
                </View>
                <CommonListPanel
                    RealData = {this.state.Data}
                    InitNum = {10}
                    RenderItem = {this._renderItem}
                    style={{height:'100%'}}
                />
            </View>
        );
    }
}



