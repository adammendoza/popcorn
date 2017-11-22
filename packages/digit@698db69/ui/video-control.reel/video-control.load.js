montageDefine("698db69","ui/video-control.reel/video-control",{dependencies:["montage/ui/component","montage/ui/base/abstract-button"],factory:function(t,e,o){var i=t("montage/ui/component").Component,n=t("montage/ui/base/abstract-button").AbstractButton;e.VideoControl=i.specialize({constructor:{value:function(){this["super"](),this.defineBinding("time",{"<-":"videoController.position"}),this.addPathChangeListener("videoController.status",this,"handleControllerStatusChange")}},videoController:{value:null},_time:{value:0},time:{set:function(t){if(!isNaN(t)){var e=+t;e>=0&&e!==this._time&&(this._time=e,this.formattedTime=this._prettyTime(e,this.videoController.duration))}},get:function(){return this._time}},formattedTime:{value:null},handlePlayAction:{value:function(t){this.videoController.status===this.videoController.PLAYING?this.videoController.pause():this.videoController.status===this.videoController.PAUSED?this.videoController.unpause():this.videoController.play()}},handleFullScreenAction:{value:function(t){this.video.toggleFullScreen()}},handleControllerStatusChange:{value:function(t,e,o){this.videoController&&(t===this.videoController.PLAYING?this.classList.add("digit-VideoControl--playing"):this.classList.remove("digit-VideoControl--playing"))}},_prettyTime:{value:function(t,e){var o,i,n,l;return t=.5+t<<0,o=~~(e/3600)>0,0===t?o?"00:00:00":"00:00":(i=t%60,n=~~(t/60)%60,l=~~(t/3600),(0===l?o?"00:":"":l<10?"0"+l+":":l+":")+(n<10?"0"+n:n)+":"+(i<10?"0"+i:i))}}}),e.Button=n.specialize({hasTemplate:{value:!1}})}});