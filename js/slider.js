(function() {
    function Slider(option) {
        this.wrap = option.wrap;
        this.imgList = option.imgList;
        this.imgNum = this.imgList.length;
        this.width = option.width || $(this.wrap).width();
        this.height = option.height || $(this.wrap).height();
        this.isAuto = option.isAuto || true;
        this.moveTime = option.moveTime;
        this.direction = option.direction || 'right';
        this.btnWidth = option.btnWidth;
        this.btnHeight = option.btnHeight;
        this.spanWidth = option.spanWidth;
        this.spanHeight = option.spanHeight;
        this.spanColor = option.spanColor;
        this.backgroundImage = option.backgroundImage;
        // this.activeSpanColor = option.activeSpanColor;
        this.btnBackgroundColor = option.btnBackgroundColor;
        this.spanRadius = option.spanRadius;
        this.spanMargin = option.spanMargin;
        this.flag = false;
        this.nowIndex = 0;
        this.createDom();
        this.initStyle();
        this.bindEvent();
        if (this.isAuto) {
            this.autoMove()
        }
    }
    Slider.prototype.createDom = function() {
        let oUl = $('<ul class="imgList"></ul>');
        let Spot = $('<div class="spot"></div>')
        this.imgList.forEach(function(item) {
            let oLi = ('<li><a href=" ' + item.a + ' "><img src=" ' + item.img + ' "; style="width:100%; height:100%"; draggable="false"></a></li>');
            oUl.append(oLi);
            let span = ('<span></span>');
            Spot.append(span);
        });
        let leftBtn = $('<div class="left-btn">&lt</div>');
        let rightBtn = $('<div class="right-btn">&gt</div>');
        this.wrap.append(oUl).append(leftBtn).append(rightBtn).append(Spot);
    }
    Slider.prototype.initStyle = function() {
        $('*', this.wrap).css({
            margin: 0,
            padding: 0,
            listStyle: 'none',
        });
        $(this.wrap).css({
            overflow: 'hidden',
            position: 'relative',
            borderRadius: '5px'

        })
        $('.imgList', this.wrap).css({
            width: this.width,
            height: this.height,
            position: 'relative',
        });
        $('.imgList li', this.wrap).css({
            width: this.width,
            height: this.height,
            position: 'absolute',
            left: 0,
            top: 0,
            display: 'none',
        }).eq(this.nowIndex).css({
            display: 'block',
        })
        $('.imgList li a, .imgList li a img', this.wrap).css({
            display: 'inline-block',
            width: this.width,
            height: this.height,
        });
        $('.left-btn, .right-btn', this.wrap).css({
            width: this.btnWidth,
            height: this.btnHeight,
            backgroundColor: this.btnBackgroundColor,
            color: '#fff',
            textAlign: 'center',
            lineHeight: this.btnHeight + 'px',
            position: 'absolute',
            top: '50%',
            marginTop: -this.btnHeight / 2,
            cursor: 'pointer',
            display: 'none'
        });
        $('.right-btn', this.wrap).css({
            right: 0,
        });
        $('.spot', this.wrap).css({
            height: this.spanHeight + (this.spanMargin * 2),
            position: 'absolute',
            left: '50%',
            marginLeft: -this.imgNum * (this.spanWidth + (this.spanMargin) * 2) / 2,
            bottom: 10,
        })
        $('.spot span', this.wrap).css({
            display: 'inline-block',
            width: this.spanWidth,
            height: this.spanHeight,
            margin: this.spanMargin,
            backgroundColor: this.spanColor,
            borderRadius: this.spanRadius,
            backgroundImage: 'none',
            cursor: 'pointer',
            transition: 'all .2s',
            boxShadow: '0px 0px 15px  #fff'

        }).eq(this.nowIndex).css({
            backgroundImage: this.backgroundImage,
            backgroundSize: 'cover',
            boxShadow: '0px 0px 15px 5px #3385ff',
            transform: 'scale(1.8)'
        })
    }
    Slider.prototype.bindEvent = function() {
        let self = this;
        $('.left-btn', this.wrap).click(function() {
            self.move('prev');
        });
        $('.right-btn', this.wrap).click(function() {
            self.move('next');
        });
        $('.spot span').click(function(e) {
            self.move($(this).index())
        });
        $(this.wrap).mouseenter(function() {
            $('.left-btn, .right-btn').fadeIn(1000)
            clearInterval(self.time);
        }).mouseleave(function() {
            $('.left-btn, .right-btn').fadeOut(1000)
            self.autoMove()
        })
    }
    Slider.prototype.move = function(dir) {
        if (this.flag) {
            return false;
        }
        this.flag = true;
        switch (dir) {
            case 'prev':
                if (this.nowIndex === 0) {
                    this.nowIndex = this.imgNum - 1;
                } else {
                    this.nowIndex--;
                }
                break;
            case 'next':
                if (this.nowIndex === this.imgNum - 1) {
                    this.nowIndex = 0;
                } else {
                    this.nowIndex++;
                }
                break;
            default:
                this.nowIndex = dir;
                break;
        }
        let self = this;
        $('.imgList li', this.wrap).fadeOut(800).eq(this.nowIndex).fadeIn(function() {
            self.flag = false;
        });
        $('.spot  span', this.wrap).css({
            backgroundColor: this.spanColor,
            backgroundImage: 'none',
            boxShadow: '0px 0px 15px #fff'
        }).eq(this.nowIndex % this.imgNum).css({
            backgroundImage: this.backgroundImage,
            backgroundSize: 'cover',
            boxShadow: '0px 0px 15px 5px #3385ff'
        })
    }
    Slider.prototype.autoMove = function() {
        let self = this;
        this.time = setInterval(function() {
            if (this.direction == 'left') {
                $('.left-btn', this.wrap).trigger('click');
            } else {
                $('.right-btn', this.wrap).trigger('click');
            }
        }, self.moveTime)
    }
    $.fn.extend({
        slider: function(option) {
            option.wrap = this;
            new Slider(option);
        }
    })
}())