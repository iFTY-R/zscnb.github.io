(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{300:function(t,e,r){},336:function(t,e,r){"use strict";var o=r(3),n=r(45).every,i=r(32),c=r(23),s=i("every"),a=c("every");o({target:"Array",proto:!0,forced:!s||!a},{every:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},337:function(t,e,r){var o=r(3),n=r(338);o({global:!0,forced:parseFloat!=n},{parseFloat:n})},338:function(t,e,r){var o=r(7),n=r(117).trim,i=r(118),c=o.parseFloat,s=1/c(i+"-0")!=-1/0;t.exports=s?function(t){var e=n(String(t)),r=c(e);return 0===r&&"-"==e.charAt(0)?-0:r}:c},339:function(t,e,r){"use strict";var o=r(300);r.n(o).a},366:function(t,e,r){"use strict";r.r(e);r(336),r(91),r(30),r(89),r(337),r(183),r(17);var o=r(21),n={props:{width:{type:Number,default:500},height:{type:Number,default:500},row:{type:Number,default:3},col:{type:Number,default:3},img:{type:String,required:!0}},computed:{blockWidth:function(){return this.width/this.col},blockHeight:function(){return this.height/this.row},correctPoints:function(){for(var t=this.row,e=this.blockWidth,r=this.blockHeight,o=[],n=0;n<t;n++)for(var i=0;i<t;i++)o.push({x:i*e,y:n*r,id:(new Date).getTime()+100*Math.random()});return o},blockPoints:function(){var t=this.correctPoints,e=t.length,r=t[e-1],n=Object(o.a)(t);return n.length=e-1,n.sort((function(){return Math.random()-.5})),n.push(r),n}},methods:{handleClick:function(t){var e=t.target,r=this.$refs.empty[0];if(this.isAdjacent(e,r)){var o=e.style,n=o.left,i=o.top;e.style.left=r.style.left,e.style.top=r.style.top,r.style.left=n,r.style.top=i,this.checkWin()&&this.winGame(r)}},isAdjacent:function(t,e){var r=t.style,o=r.left,n=r.top,i=r.width,c=r.height,s=e.style,a=s.left,l=s.top,u=Math.floor(Math.abs(parseFloat(o)-parseFloat(a))),h=Math.floor(Math.abs(parseFloat(n)-parseFloat(l)));return o===a&&h===parseInt(c)||n===l&&u===parseInt(i)},checkWin:function(){return this.$refs.block.every((function(t){var e=t.style,r=e.left,o=e.top,n=t.dataset,i=n.correctx,c=n.correcty;return parseInt(r)===parseInt(i)&&parseInt(o)===parseInt(c)}))},winGame:function(t){var e=this;setTimeout((function(){alert("Do you got it!"),t.style.opacity=1,setTimeout((function(){e.goToNextLevel()}),300)}),300)},goToNextLevel:function(){console.log("aaa"),window.confirm("继续下一关？")&&this.$emit("next")}}},i=(r(339),r(2)),c=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"puzzle",style:{width:t.width+"px",height:t.height+"px"}},t._l(t.blockPoints,(function(e,o){return r("div",{key:e.id,ref:o===t.blockPoints.length-1?"empty":"block",refInFor:!0,staticClass:"puzzle__block",style:{width:t.blockWidth+"px",height:t.blockHeight+"px",left:e.x+"px",top:e.y+"px",backgroundImage:"url("+t.img+")",backgroundPosition:"-"+t.correctPoints[o].x+"px  -"+t.correctPoints[o].y+"px",opacity:o===t.blockPoints.length-1&&0,cursor:"poiner"},attrs:{"data-correctX":t.correctPoints[o].x,"data-correctY":t.correctPoints[o].y},on:{click:t.handleClick}})})),0)}),[],!1,null,null,null);e.default=c.exports}}]);