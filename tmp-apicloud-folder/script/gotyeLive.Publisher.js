/**
 * 创建于 2016-10-5
 */

/**
 * @author					  一元杀网络
 * @description			亲加直播-直播模块
 * @namespace				QJ
 * @version					1.0.0
 */! function(window) {
	//	var per = api.require('gotyeLivePublisher');

	var pub = {
		init : function(args) {
			this.publisher = api.require('gotyeLivePublisher');
			var userid = $api.getStorage(CONFIG.memberId);
			//加UID作为阿里云流

			this.publisher.init({
				//url : 'rtmp://47.93.198.248/live/' + userid
				//如果是阿里云推流则注释掉session,改为 url: 'rtmp://video-center.alivecdn.com/app/yiyuansha?vhost=live.yiyuansha.com'
				session: {
					roomId: args.roomId,
				password: args.password,
				nickname: args.nickname
				}
			});
		},
		startPreview : function(args) {
			this.publisher.startPreview({
				preview : args.preview,
				position : args.position || 'front',
				rect : args.rect || ''
			}, function(ret, err) {
				if ( typeof args.success == 'function') {
					args.success(ret);
				}
				if (err) {
					//alert(JSON.stringify(err));
					alert("请检查拍照、闪光灯权限");
				}
			});
		},
		publish : function(args) {
			//模式一需要先登录直播间
			this.publisher.publish();
		},
		unpublish : function(args) {
			//			var publisher = api.require('gotyeLivePublisher');
			this.publisher.unpublish();
		},
		stop : function(args) {
			//			var publisher = api.require('gotyeLivePublisher');
			this.publisher.stop();
		},
		switchCamera : function(args) {
			//			var publisher = api.require('gotyeLivePublisher');
			api.require('gotyeLivePublisher').switchCamera();
		},
		addWatermark : function(args) {
			var publisher = api.require('gotyeLivePublisher');
		},
		clearWatermark : function(args) {
			var publisher = api.require('gotyeLivePublisher');
		},

		setTorchOn : function(args) {
			var publisher = api.require('gotyeLivePublisher');
			// console.log('args:' + JSON.stringify(args, null, 2))
			publisher.setTorchOn(args);
		},

		getTorchStatus : function(args) {
			//不能正常获取闪光灯状态
			var publisher = api.require('gotyeLivePublisher');
			publisher.getTorchStatus(function(ret, err) {
				// console.log(JSON.stringify(ret, null, 2))
				if (ret) {
					if ( typeof args.success == 'function') {
						args.success(ret);
					}
				}
			});
		},
		setMute : function(args) {
			var publisher = api.require('gotyeLivePublisher');
		},
		getMuteStatus : function(args) {
			var publisher = api.require('gotyeLivePublisher');
		},
		setVideoPreset : function(args) {
			/**
			 * 宽高比例 540 : 960
			 */
			//			var publisher = api.require('gotyeLivePublisher');
			//ipad特殊处理
			//			if(/ipad/i.test(api.deviceModel)){
			//				args.width = args.width / 2;
			//				args.height = args.height / 2;
			//			}
			// var w = args.width,	//拷贝原始宽度
			// 		h = args.height;	//拷贝原始高度

			// console.log(w + ':' + h);
			// args.width = 360;
			// args.height = args.width * h / w;
			// console.log(args.width + ':' + args.height)
			/*
			this.publisher.setVideoPreset({
				width : 360, //api.screenWidth,
				height : 640, //api.screenHeight,
				bps : 600,
				fps : 20
			});
			*/
			this.publisher.setVideoPreset({
				width: args.width, //648,	//756,
				height: args.height, //1152, //1344,
				bps: args.bps,
				fps: args.fps
			});
		},
		getVideoPreset : function(args) {
			//			var publisher = api.require('gotyeLivePublisher');
			this.publisher.getVideoPreset(function(ret, err) {
				if (ret) {
					if ( typeof args.success == 'function') {
						args.success();
					}
				} else {
					if ( typeof args.error == 'function') {
						args.error();
					}
				}
			});
		},
		setFilter : function(args) {
			/*	args
			filter:'normal'     //normal  表示不添加滤镜，smoothSkin  表示美白磨皮滤镜
			* */
			//			var publisher = api.require('gotyeLivePublisher');
			this.publisher.setFilter(args)
		},
		getFilter : function(args) {
			//			var publisher = api.require('gotyeLivePublisher');
			this.publisher.getFilter(function(ret) {
				if (ret) {
					if ( typeof args.success == 'function') {
						args.success();
					}
				}
			});

		},
		setSmoothSkinFactor : function(args) {
			//			var publisher = api.require('gotyeLivePublisher');
			this.publisher.setSmoothSkinFactor(args)
		},
		getSmoothSkinFactor : function(args) {
			//			var publisher = api.require('gotyeLivePublisher');
			this.publisher.getSmoothSkinFactor(function(ret) {
				if (ret) {
					if ( typeof args.success == 'function') {
						args.success();
					}
				}
			});
		},
		getInfo : function(args) {
			var publisher = api.require('gotyeLivePublisher');
		},
		addEventListener : function(args) {
			//			var publisher = api.require('gotyeLivePublisher');
			this.publisher.addEventListener({
				name : args.name
			}, function(ret, err) {
				if ( typeof args.success === 'function') {
					args.success(ret, err);
				}
			})
		},
		removeEventListener : function(args) {
			var publisher = api.require('gotyeLivePublisher');
		},
		removeAllEventListeners : function(args) {
			var publisher = api.require('gotyeLivePublisher');
		},
		login : function(args, callback) {
			//			var publisher = api.require('gotyeLivePublisher');
			this.publisher.login({
				force : true
			}, function(ret, err) {
				if ( typeof args == 'function') {
					args();
				} else if ( typeof callback == 'function') {
					callback();
				}
				if (err) {
					//					alert(JSON.stringify(err));
					console.log(JSON.stringify(err, null, 2))
				}
			});
		},
		logout : function(args) {
			//			var publisher = api.require('gotyeLivePublisher');
			this.publisher.logout();
		},
		beginRecording : function(args) {
			//			var publisher = api.require('gotyeLivePublisher');
			this.publisher.beginRecording();
		},
		endRecording : function(args) {
			//			var publisher = api.require('gotyeLivePublisher');
			this.publisher.endRecording(function(ret, err) {
				if ( typeof args == 'function') {
					args(ret, err);
				}
			});
		}
	};
	if (!window.QJ) {
		window.QJ = {};
	}
	QJ.Publisher = pub;
}(window);
