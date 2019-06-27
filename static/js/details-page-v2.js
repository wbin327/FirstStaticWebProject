//将右方导航栏下移
$(document).ready(function () {
    $(".right-sidebar-ico img").css({'top': '0.645rem'});
})
// 滑动滚轮放大图片
let size = 1
$(".image-box").mousewheel(
    function (event, delta) {
        size = size + delta/10;
        if(size < 1 ){
            size = 1;
            move(0, 0);
        }
        let scale = 'scale(' + size + ')' ;
        $(".image-box img").css({'transform': scale});
    }
)

// 图片回复原来的大小和位置
function move(left, top){
    let css={
        'position': 'absolute',
        'left': left ,
        'top': top,
        'transition': 'transform 100ms'
    }
    $(".image-box img").css(css);
}

// 鼠标按下事件
let isDrag = false;  //是否开始拖拽 false 不拖拽
let disX,disY;//图片相对于图片的位置
$(".image-box img").hover(function () {
    $(".image-box").css({'cursor': 'move'});
})
$(".image-box img").mousedown(
    function(e) {
        isDrag = true;

        //鼠标位置
        let x=e.clientX;
        let y=e.clientY;
        //鼠标相对于图片的位置
        disX = x - this.offsetLeft;
        disY = y - this.offsetTop;
        // console.log(disX, disY);

        // 取消浏览器的点击鼠标拖动文件效果
        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnvalue = false;
        }
    }
)

// 鼠标移动时
$(".image-box img").mousemove(
    function (e) {
        if(!isDrag)
            return ;
        // let move_x = -(e.pageX - 1920/1191*100*3.645);
        // let move_y = -(e.pageY - 1920/1191*100*0.645);
        let x = e.clientX;
        let y = e.clientY;

        move(x-disX, y-disY);
    }
)

//鼠标抬起时
$(".image-box img").mouseup(
    function (e) {
        isDrag = false;
        // $(".image-box").css({'cursor': 'default'});
    }
)