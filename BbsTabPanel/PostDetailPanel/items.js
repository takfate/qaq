import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Card, Drawer, InputItem, List, Toast,Modal} from 'antd-mobile';
import Icon from 'react-native-vector-icons/FontAwesome';
import httpRequest from "../../httpRequest";
import {makeCommonImageUrl} from "../../CommonComponent";

function mapStateToProps(state,ownProps) {
    return state.MainF;
}

function mapDispatchToProps(dispatch) {
    return {

    }
}




class PostMainItemPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            key:props.item.key,
            UserId : props.item.UserId,
            UserNickName : props.item.UserNickName,
            UserImageUrl : props.item.UserImageUrl,
            PostTime : props.item.PostTime,
            Content : props.item.Content,
            Collected : props.item.Collected,
            Images : props.item.Images,
            Score : props.item.Score,
        };
    }

    _navigateToUser =(ToUserId) =>{
        const {userId} = this.props;
        const {navigate} = this.props.navigation;
        navigate("UserInfo",{
            isLoginUser :userId===ToUserId,
            UserId : ToUserId
        });
    };

    requestValueTopic = (sessionId,topicId,isLike)=>{
        httpRequest.post('/bbs/topic/value', {
            session_id:sessionId,
            topic_id:topicId,
            value:isLike
        })
            .then((response) => {
                let data = response.data;
                if (data['code'] === 0) {
                    this.setState({Score:this.state.Score+isLike});
                } else {
                    Toast.fail(data['msg']);
                }
            })
            .catch((error) => {
                Toast.fail('网络好像有问题~');
            });
    };

    requestDeleteTopic = (sessionId,TopicId)=>{
        httpRequest.post('/bbs/topic/remove', {
            session_id:sessionId,
            topic_id :TopicId
        })
            .then((response) => {
                let data = response.data;
                if (data['code'] === 0) {
                    Toast.success('删除成功',1);
                } else {
                    Toast.fail(data['msg']);
                }
            })
            .catch((error) => {
                Toast.fail('网络好像有问题~');
            });
    };

    requestCollectTopic = (sessionId,TopicId)=>{
        httpRequest.post('/bbs/topic/user-collect', {
            session_id:sessionId,
            topic_id:TopicId
        })
            .then((response) => {
                let data = response.data;
                if (data['code'] === 0) {
                    this.setState({Collected:true});
                } else {
                    Toast.fail(data['msg']);
                }
            })
            .catch((error) => {
                Toast.fail('网络好像有问题~');
            });
    };

    requestUncollectTopic = (sessionId,TopicId)=>{
        httpRequest.post('/bbs/topic/user-cancel-collect', {
            session_id:sessionId,
            topic_id:TopicId
        })
            .then((response) => {
                let data = response.data;
                if (data['code'] === 0) {
                    this.setState({Collected:false});
                } else {
                    Toast.fail(data['msg']);
                }
            })
            .catch((error) => {
                Toast.fail('网络好像有问题~');
            });
    };

    _submitCollectTopic = ()=>{
        const {sessionId,topicId} = this.props;
        this.requestCollectTopic(sessionId,topicId);
    };

    _submitUncollectTopic = ()=>{
        const {sessionId,topicId} = this.props;
        this.requestUncollectTopic(sessionId,topicId);
    };

    _submitDeleteTopic = ()=>{
        Modal.alert('删除话题','确定要删除该话题吗?', [
            {
                text:'取消',
                onPress:()=>{}
            },
            {
                text:'确定',
                onPress:()=>{
                    const {sessionId,topicId} = this.props;
                    this.requestDeleteTopic(sessionId,topicId);
                }
            },
        ]);

    };

    render(){
        const {navigate} = this.props.navigation;
        const {userId} = this.props;
        const isMine = (userId === this.state.UserId);
        const isCollected = this.state.Collected;

        return (
            <Card full>
                <Card.Header
                    title={
                        <View style={{flexDirection:'row',alignItems:'center',width:'100%'}}>
                            <View style={{flex:1}}>
                                <TouchableOpacity
                                    onPress={()=>this._navigateToUser(this.state.UserId)}
                                >
                                    <Text style={{color:'black'}}>{this.state.UserNickName}</Text>
                                </TouchableOpacity>
                                <Text style={{fontSize:10}}>楼主 {this.state.PostTime}</Text>
                            </View>
                            <View style={{width:100,paddingLeft:85}}>
                                <TouchableOpacity
                                    onPress={isMine?this._submitDeleteTopic:isCollected?this._submitUncollectTopic:this._submitCollectTopic}
                                >
                                    <Icon name={isMine?'trash':'star'} color={isMine?null:isCollected?'orange':null} size={14} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    }
                    thumb={
                        <TouchableOpacity
                            onPress={()=>this._navigateToUser(this.state.UserId)}
                        >
                            <Image source={{uri:makeCommonImageUrl(this.state.UserImageUrl)}} style={{width:25,height:25,borderRadius:12,marginRight:10}}/>
                        </TouchableOpacity>
                    }
                />
                <Card.Body>
                    <Text style={{color:'black',marginLeft:15,marginRight:15,fontSize:13}}>
                        {this.state.Content}
                    </Text>
                </Card.Body>
                <Card.Footer
                    content={
                        <View
                            style={{
                                width:120,
                                height:45,
                                flexDirection:'row',
                                alignItems:'center'
                            }}
                        >
                            <Button
                                size="small"
                                onClick={()=>{
                                    const {sessionId} = this.props;
                                    const {params} = this.props.navigation.state;
                                    this.requestValueTopic(sessionId,params.topicId,1);
                                }}
                            >
                                <Icon name="caret-up" size={15}/>
                                <Text>{this.state.Score}</Text>
                            </Button>
                            <Button
                                size="small"
                                style={{marginLeft:5}}
                                onClick={()=>{
                                    const {sessionId} = this.props;
                                    const {params} = this.props.navigation.state;
                                    this.requestValueTopic(sessionId,params.topicId,-1);
                                }}
                            >
                                <Icon name="caret-down" size={15}/>
                            </Button>
                        </View>
                    }
                    style={{
                        height:30,
                        width:'100%',
                        flexDirection:'row',
                        alignItems:'center',
                        borderTopWidth:1,
                        borderTopColor:'#DDDDDD',
                        paddingTop:5
                    }}
                />
            </Card>
        );
    }
}

class PostCommonItemPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            key:props.item.key,
            PostId : props.item.PostId,
            UserId : props.item.UserId,
            UserNickName : props.item.UserNickName,
            UserImageUrl : props.item.UserImageUrl,
            PostTime : props.item.PostTime,
            Content : props.item.Content,
            Images : props.item.Images,
            Score : props.item.Score,
            CommentCount : props.item.CommentCount,
        };
    }

    _navigateToUser =(ToUserId) =>{
        const {userId} = this.props;
        const {navigate} = this.props.navigation;
        navigate("UserInfo",{
            isLoginUser :userId===ToUserId,
            UserId : ToUserId
        });
    };


    requestValuePost = (sessionId,postId,isLike) => {
        httpRequest.post('/bbs/topic/lord-reply/value', {
            session_id:sessionId,
            topic_lord_reply_id:postId,
            value:isLike
        })
            .then((response) => {
                let data = response.data;
                if (data['code'] === 0) {
                    this.setState({Score:this.state.Score+isLike});
                } else {
                    Toast.fail(data['msg']);
                }
            })
            .catch((error) => {
                Toast.fail('网络好像有问题~');
            });
    };

    requestDeletePost = (sessionId,PostId)=>{
        httpRequest.post('/bbs/topic/lord-reply/remove', {
            session_id:sessionId,
            topic_lord_reply_id:PostId
        })
            .then((response) => {
                let data = response.data;
                if (data['code'] === 0) {
                    Toast.success('删除成功');
                } else {
                    Toast.fail(data['msg']);
                }
            })
            .catch((error) => {
                Toast.fail('网络好像有问题~');
            });
    };

    _submitDeletePost = ()=>{
        Modal.alert('删除跟帖','确定要删除该跟帖吗?', [
            {
                text:'取消',
                onPress:()=>{}
            },
            {
                text:'确定',
                onPress:()=>{
                    const {sessionId} = this.props;
                    this.requestDeletePost(sessionId,this.state.PostId);
                }
            },
        ]);
    };

    render(){
        const {navigation} = this.props;
        return (
            <Card style={{marginLeft:10,marginRight:5}}>
                <Card.Header
                    title={
                        <View style={{flexDirection:'row',alignItems:'center',width:'100%'}}>
                            <View style={{flex:1}}>
                                <TouchableOpacity
                                    onPress={()=>this._navigateToUser(this.state.UserId)}
                                >
                                    <Text style={{color:'black'}}>{this.state.UserNickName}</Text>
                                </TouchableOpacity>
                                <Text style={{fontSize:10}}>{this.state.key}楼 {this.state.PostTime}</Text>
                            </View>
                            {
                                this.state.UserId===this.props.userId?
                                    <View style={{width:100,paddingLeft:85}}>
                                        <TouchableOpacity onPress={this._submitDeletePost} >
                                            <Icon name="trash" size={14} />
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    null
                            }

                        </View>

                    }
                    thumb={
                        <TouchableOpacity
                            onPress={()=>this._navigateToUser(this.state.UserId)}
                        >
                            <Image source={{uri:makeCommonImageUrl(this.state.UserImageUrl)}} style={{width:25,height:25,borderRadius:12,marginRight:10}}/>
                        </TouchableOpacity>
                    }
                />
                <Card.Body>
                    <Text style={{color:'black',marginLeft:15,marginRight:15,fontSize:13}}>
                        {this.state.Content}
                    </Text>
                </Card.Body>
                <Card.Footer
                    content={
                        <View style={{flexDirection:'row',alignItems:'center',width:'100%'}}>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Button
                                    size="small"
                                    onClick={()=>{
                                        const {sessionId} = this.props;
                                        const {params} = this.props.navigation.state;
                                        this.requestValuePost(sessionId,this.state.PostId,1);
                                    }}
                                >
                                    <Icon name="caret-up" size={15}/>
                                    <Text>{this.state.Score}</Text>
                                </Button>
                                <Button
                                    size="small"
                                    style={{marginLeft:5}}
                                    onClick={()=>{
                                        const {sessionId} = this.props;
                                        const {params} = this.props.navigation.state;
                                        this.requestValuePost(sessionId,this.state.PostId,-1);
                                    }}
                                >
                                    <Icon name="caret-down" size={15}/>
                                </Button>
                            </View>
                            <TouchableOpacity
                                onPress={()=>{this.props.transGetCommentList(this.state.PostId,this.state.key)}}
                            >
                                <View
                                    style={{
                                        width:75,
                                        height:45,
                                        flexDirection:'row',
                                        justifyContent:'flex-end',
                                        alignItems:'center'
                                    }}
                                >
                                    <Icon name="comment" size={15}/>
                                    <Text style={{fontSize:12,marginLeft:3}}>{this.state.CommentCount}条评论</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }

                    style={{
                        height:30,
                        width:'100%',
                        flexDirection:'row',
                        alignItems:'center',
                        borderTopWidth:1,
                        borderTopColor:'#DDDDDD',
                        paddingTop:5
                    }}
                />

            </Card>
        );
    }
}

const CommentListCss = StyleSheet.create({
    MainView : {
        backgroundColor : '#F5F5F5',
    },
    ItemSeparator : {
        height : 5,
        backgroundColor : '#F5F5F5'
    },
    ItemContent : {
        paddingLeft : 15,
        paddingRight : 15
    },
    ItemImage : {
        marginRight : 15,
        width : 30,
        height : 30,
        borderRadius:15
    }
});

class PostCommentItemPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            key:props.item.key,
            PostTime : props.item.PostTime,
            Content : props.item.Content,
            UserId : props.item.UserId,
            UserNickName : props.item.UserNickName,
            UserImageUrl : props.item.UserImageUrl,
            UserScore : props.item.UserScore,
        };
    }

    _navigateToUser =(ToUserId) =>{
        const {userId,navigate} = this.props;
        navigate("UserInfo",{
            isLoginUser :userId===ToUserId,
            UserId : ToUserId
        });
    };

    requestValuePostComment = (sessionId,CommentId,isLike)=> {
        httpRequest.post('/bbs/topic/layer-reply/value', {
            session_id:sessionId,
            topic_layer_reply_id:CommentId,
            value:isLike
        })
            .then((response) => {
                let data = response.data;
                if (data['code'] === 0) {
                    this.setState({UserScore:this.state.UserScore+isLike});
                } else {
                    Toast.fail(data['msg']);
                }
            })
            .catch((error) => {
                Toast.fail('网络好像有问题~');
            });
    };


    render(){
        return (
            <Card full>
                <Card.Header
                    title={
                        <TouchableOpacity
                            onPress={()=>this._navigateToUser(this.state.UserId)}
                        >
                            <Text>{this.state.UserNickName}</Text>
                        </TouchableOpacity>
                    }
                    thumb={
                        <TouchableOpacity
                            onPress={()=>this._navigateToUser(this.state.UserId)}
                        >
                            <Image source={{uri:makeCommonImageUrl(this.state.UserImageUrl)}} style={CommentListCss.ItemImage}/>
                        </TouchableOpacity>
                    }
                />

                <Card.Body style={{paddingLeft:15,minHeight:5}}>
                    <Text style={{color:'black',fontSize:13}}>{this.state.Content}</Text>
                </Card.Body>
                <Card.Footer
                    content = {
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>{
                                const {sessionId} =this.props;
                                this.requestValuePostComment(sessionId,this.state.key,1);
                            }}>
                                <Icon name='thumbs-up' size={12} color='red'/>
                            </TouchableOpacity>
                            <Text style={{fontSize:14,marginLeft:2,marginRight:6}}>
                                {this.state.UserScore}
                            </Text>
                            <TouchableOpacity onPress={()=>{
                                const {sessionId} =this.props;
                                this.requestValuePostComment(sessionId,this.state.key,-1);
                            }}>
                                <Icon name='thumbs-down' size={12} color='blue'/>
                            </TouchableOpacity>
                        </View>
                    }
                    extra={
                        <Text style={{fontSize:10,textAlign:'right'}}>
                            {this.state.PostTime}
                        </Text>
                    }
                />
            </Card>
        );
    }
}


export const TopicItem = connect(mapStateToProps,null)(PostMainItemPanel);
export const PostItem = connect(mapStateToProps,null)(PostCommonItemPanel);
export const CommentItem = connect(mapStateToProps,null)(PostCommentItemPanel);