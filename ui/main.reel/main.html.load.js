montageDefine("f2b6e33","ui/main.reel/main.html",{"text":"<!DOCTYPE html><html manifest=../../manifest.appcache><head><meta http-equiv=Content-Type content=\"text/html; charset=utf-8\"><style>.Main{top:0;left:0;right:0;bottom:0;font-family:Helvetica,Arial,sans-serif}.Main,.Main-content{position:fixed;overflow:hidden}.Main-details.details-fade-out{-webkit-transition:-webkit-transform .35s;-moz-transition:-moz-transform .35s;-ms-transition:-ms-transform .35s;transition:transform .35s;opacity:0}@media (min-width:501px) and (max-height:660px) and (min-height:501px){.logo{position:fixed;top:50%;left:50%;display:block;margin-top:-340px;margin-left:-210.75px;width:421.5px;height:172.5px;z-index:3;padding:0;pointer-events:none;display:none}.Main-content{top:0;left:0;right:0;bottom:0}.Main-content .Main-strip{margin-top:-530px}.Main-details{opacity:0;position:fixed;z-index:3;bottom:10px;width:500px;left:50%;margin-left:-250px;height:180px;-webkit-transform:translate3d(0,148px,0);-moz-transform:translate3d(0,148px,0);-ms-transform:translate3d(0,148px,0);transform:translate3d(0,148px,0)}.Main-details.expanded{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@media (min-width:501px) and (min-height:660px){.logo{position:fixed;top:50%;left:50%;display:block;margin-top:-365px;margin-left:-210.75px;width:421.5px;height:172.5px;z-index:3;padding:0;pointer-events:none}.Main-content{top:0;left:0;right:0;bottom:0}.Main-content .Main-strip{margin-top:-525px}.Main-details{opacity:0;position:fixed;z-index:3;top:50%;width:500px;left:50%;margin-left:-250px;margin-top:138px;height:203px}.Main-details .title:before{display:none}}@media (max-width:500px) and (orientation:portrait){.logo{display:none}.Main-content{top:0;left:0;right:0;bottom:64px}.Main-content .Main-strip{margin-top:-525px}.Main-details{opacity:0;position:fixed;z-index:1;bottom:64px;left:0;right:0;height:220px;border-radius:0;-webkit-transform:translate3d(0,177px,0);-moz-transform:translate3d(0,177px,0);-ms-transform:translate3d(0,177px,0);transform:translate3d(0,177px,0)}.Main-details.expanded{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@media (max-height:500px) and (orientation:landscape){.logo{display:none}.Main-content{top:0;left:126px;right:0;bottom:0}.Main-content .Main-strip{top:-65%;left:0;bottom:-65%;right:0;margin-top:-50px;height:auto;width:auto}.Main-details{opacity:0;position:absolute;bottom:10px;left:10px;right:10px;height:180px;max-width:600px;min-width:400px;margin:auto;-webkit-transform:translate3d(0,148px,0);-moz-transform:translate3d(0,148px,0);-ms-transform:translate3d(0,148px,0);transform:translate3d(0,148px,0)}.Main-details.expanded{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.MontageMade{position:absolute;top:0;left:25px;width:50px;height:100px;overflow:hidden;font-size:0;color:transparent;background:url(assets/image/montage-made.svg) no-repeat center;background-size:100% auto}.MontageMade:hover{opacity:.9}.MontageMade:active{top:2px}@media (min-width:501px) and (max-width:790px) and (max-height:660px) and (min-height:501px){.Overlay .film:after{display:none}}@media (min-width:501px) and (max-width:790px) and (min-height:660px){.Overlay .film:after{display:none}}@media (max-width:500px) and (orientation:portrait){.Overlay .film:after{display:none}.Overlay .top{display:none}}@media (max-height:500px) and (orientation:landscape){.Overlay .film:after{display:none}}</style><script type=text/montage-serialization>{\"owner\":{\"properties\":{\"element\":{\"#\":\"owner\"},\"mainContent\":{\"#\":\"mainContent\"}}},\"categories\":{\"prototype\":\"ui/categories.reel\",\"properties\":{\"element\":{\"#\":\"categories\"}},\"bindings\":{\"categories\":{\"<-\":\"@owner.moviesService.categories\"}}},\"details\":{\"prototype\":\"ui/details.reel\",\"properties\":{\"element\":{\"#\":\"details\"}},\"bindings\":{\"movie\":{\"<-\":\"@moviestrip.categoryContentController.selection.one()\"}}},\"moviestrip\":{\"prototype\":\"ui/moviestrip.reel\",\"properties\":{\"element\":{\"#\":\"moviestrip\"},\"movieDetails\":{\"@\":\"details\"}},\"bindings\":{\"categoryContentController\":{\"<-\":\"@owner.moviesService.categories.selection.one().contentController\"}}},\"player\":{\"prototype\":\"ui/player.reel\",\"properties\":{\"element\":{\"#\":\"player\"}}}}</script></head><body><div data-montage-id=owner class=Main><img class=logo src=../../assets/image/logo.png alt=logo><div data-montage-id=categories></div><div data-montage-id=mainContent class=Main-content><div data-montage-id=moviestrip class=Main-strip></div><div data-montage-id=details class=Main-details></div></div><a class=MontageMade href=http://montagestudio.com/montagejs/ >Made with Montage</a><div data-montage-id=player class=popup></div></div></body></html>"})