(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{349:function(t,e,s){},470:function(t,e,s){"use strict";var i=s(349);s.n(i).a},505:function(t,e,s){"use strict";s.r(e);s(30),s(28),s(121),s(17);var i={name:"Clock",data:function(){return{timeList:[12,1,2,3,4,5,6,7,8,9,10,11],transform:"scale(1)",hourRotate:"rotatez(0deg)",minuteRotate:"rotatez(0deg)",secondRotate:"rotatez(0deg)"}},props:["time","color","border","bg","size"],computed:{clockStyle:function(){return{height:this.size,width:this.size,color:this.color,border:this.border,background:this.bg}}},watch:{time:function(){this.show()}},methods:{show:function(){var t=this;this.showTime(),this._timer&&clearInterval(this._timer),this.time||(this._timer=setInterval((function(){t.showTime()}),1e3))},showTime:function(){var t;if(this.time)t=this.time.split(":");else{var e=new Date;t=[e.getHours(),e.getMinutes(),e.getSeconds()]}var s=+t[0];s=s>11?s-12:s;var i=+t[1],o=30*s+6*i/360*30,r=6*i,n=6*(+t[2]||0);this.hourRotate="rotatez(".concat(o,"deg)"),this.minuteRotate="rotatez(".concat(r,"deg)"),this.secondRotate="rotatez(".concat(n,"deg)")}},mounted:function(){var t=this.$el.clientWidth/120;t=t>3?3:t,this.transform="scale(".concat(t,")"),this.show()},destroyed:function(){this._timer&&clearInterval(this._timer)}},o=(s(470),s(2)),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"clock",style:t.clockStyle},[s("div",{staticClass:"clock-circle"}),t._v(" "),s("div",{staticClass:"clock-hour",style:{transform:t.hourRotate}}),t._v(" "),s("div",{staticClass:"clock-minute",style:{transform:t.minuteRotate}}),t._v(" "),s("div",{staticClass:"clock-second",style:{transform:t.secondRotate}}),t._v(" "),t._l(t.timeList,(function(e){return s("b",{key:e,staticClass:"hour"},[s("span",[s("i",{style:{transform:t.transform}},[t._v(t._s(e))])])])}))],2)}),[],!1,null,"4ed38f28",null);e.default=r.exports}}]);