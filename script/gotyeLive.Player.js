/**
 * 创建于 2016-10-5
 */

 /**
  * @author					  一元杀网络
  * @description			亲加直播-播放器模块
  * @namespace				QJ
  * @version					1.0.0
  */
!function(window){
  var player = {
    init: function(args){
      var player = api.require('gotyeLivePlayer');
      
   
       
      player.init({
      //url: args.videoURL  //阿里云自建改亲加加回去大斌
      	session:{  //阿里云自建改亲加加回去大斌
      		roomId: args.roomId,  //阿里云自建改亲加加回去大斌
			    password: args.password, //阿里云自建改亲加加回去大斌
			   nickname:args.nickname  //阿里云自建改亲加加回去大斌
      	}
      });
      
     
    },
    play: function(args){
      var player = api.require('gotyeLivePlayer');
      player.play({
      	playView: args.playView,
      	fixed: args.fixed || false,
      	quality: args.quality || 'high'
      });
    },
    stop: function(args){
      var player = api.require('gotyeLivePlayer');
      player.stop();
      console.log(5)
    },
    setMute: function(args){
      var player = api.require('gotyeLivePlayer');
      player.setMute({
      	mute: args.mute
      });
    },
    getMuteStatus: function(args){
      var player = api.require('gotyeLivePlayer');
      player.getMuteStatus({
      	mute: args.mute
      },function(ret,err){
      	if(typeof callback == 'function'){
					callback(ret);
				}
      	if (err) {
	        alert(JSON.stringify(err));
	    	}
      });
    },
    getInfo: function(args){
      var player = api.require('gotyeLivePlayer');
    },
    setDisplayMode: function(args){
      var player = api.require('gotyeLivePlayer');
      player.setDisplayMode({
      	mode: args.mode || 'aspectFill'
      })
    },
    switchToQuality: function(args){
      var player = api.require('gotyeLivePlayer');
    },
    getVideoQuality: function(args){
      var player = api.require('gotyeLivePlayer');
    },
    getAvailableQualities: function(args){
      var player = api.require('gotyeLivePlayer');
    },
    addEventListener: function(args){
      var player = api.require('gotyeLivePlayer');
       player.addEventListener({
        name: args.name
      }, function(ret, err){
        switch(args.name){
          case 'connected':
            if(typeof args.connected === 'function'){
              args.connected(ret);
            }
            break;
          case 'disconnected':
            if(typeof args.disconnected === 'function'){
              args.disconnected(ret);
            }
            break;
          case 'reconnecting':
            if(typeof args.reconnecting === 'function'){
              args.reconnecting(ret);
            }
            break;
          case 'buffering':
            if(typeof args.buffering === 'function'){
              args.buffering(ret);
            }
            break;
          case 'bufferCompleted':
            if(typeof args.bufferCompleted === 'function'){
              args.bufferCompleted(ret);
            }
            break;
          case 'statusUpdate':
            if(typeof args.statusUpdate === 'function'){
              args.statusUpdate(ret);
            }
            break;
          case 'error':
            if(typeof args.error === 'function'){
              args.error(ret);
            }
            break;
          case 'liveStop':
            if(typeof args.liveStop === 'function'){
              args.liveStop(ret);
            }
            break;
          case 'liveStart':
            if(typeof args.liveStart === 'function'){
              args.liveStart(ret);
            }
            break;
        }
      });
    },
    removeEventListener: function(args){
      var player = api.require('gotyeLivePlayer');
    },
    removeAllEventListeners: function(args){
      var player = api.require('gotyeLivePlayer');
    }
  };
  if(!window.QJ){
    window.QJ = {};
  }
  QJ.Player = player;
}(window);
