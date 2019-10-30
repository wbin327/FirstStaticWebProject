// debugger
let image_list = [];
// let subTitle = getUrlPara('subTitle');
let typeIndex = parseInt(getUrlPara('typeIndex'));
let image_index = parseInt(getUrlPara('image_index'));
if(image_index == null){
    image_index = 0;
}
render_page();

// 修改页面内容
function render_page() {
    // 设置图片数据集合
    image_list = JSON.parse(localStorage.getItem("image_list"))[typeIndex]
    // 页面显示相应的图片
    edit_image();
    // 是否需要隐藏按钮
    show_or_hide_button();
    // console.log(image_list);
}
function edit_image(){
    $(".image-box img").attr('src', image_list[image_index]);
    $(".black-screen .main-img").attr('src', image_list[image_index]);
}
function deal_image_index(){
    if(image_index > image_list.length-1){
        image_index = image_list.length-1;
    }
    if(image_index < 0){
        image_index = 0;
    }
}
function show_or_hide_button(){
    if(image_list.length == 1){
        $(".right-button").hide();
        $(".left-button").hide();
        return
    }
    if(image_index >= image_list.length-1){
        $(".right-button").hide();
    }
    else if(image_index <= 0){
        $(".left-button").hide();
    }else{
        $(".right-button").show();
        $(".left-button").show();
    }
}

// 左右按钮
function changeImg(index){
    deal_image_index();
    show_or_hide_button();
    $(".image-box img").attr('src', image_list[index]);
    $(".black-screen .main-img").attr('src', image_list[index]);
}
$(".left-button").click(function () {
    image_index--;
    // console.log(image_index);
    changeImg(image_index);
})
$(".right-button").click(function () {
    image_index++;
    changeImg(image_index);
})

// 将右方导航栏下移
$(document).ready(function () {
    $(".right-sidebar-ico img").css({'top': '0.645rem'});
})
// // 滑动滚轮放大图片
// let size = 1
// $(".image-box").mousewheel(
//     function (event, delta) {
//         size = size + delta/10;
//         if(size < 1 ){
//             size = 1;
//             move(0, 0);
//         }
//         let scale = 'scale(' + size + ')' ;
//         $(".image-box img").css({'transform': scale});
//     }
// )
//
// // 移动图片
// function move(left, top){
//     let css={
//         'position': 'absolute',
//         'left': left ,
//         'top': top,
//         'transition': 'transform 100ms'
//     }
//     $(".image-box img").css(css);
// }
//
// // 鼠标按下事件
// let isDrag = false;  //是否开始拖拽 false 不拖拽
// let disX,disY;//鼠标相对于图片的位置
// $(".image-box img").hover(function () {
//     $(".image-box").css({'cursor': 'move'});
// })
// $(".image-box img").mousedown(
//     function(e) {
//         isDrag = true;
//
//         //鼠标位置
//         let x=e.clientX;
//         let y=e.clientY;
//         //鼠标相对于图片的位置
//         disX = x - this.offsetLeft;
//         disY = y - this.offsetTop;
//         // console.log(disX, disY);
//
//         // 取消浏览器的点击鼠标拖动文件效果
//         if (e.preventDefault) {
//             e.preventDefault();
//         }
//         else {
//             e.returnvalue = false;
//         }
//     }
// )
//
// // 鼠标移动时
// $(".image-box img").mousemove(
//     function (e) {
//         if(!isDrag)
//             return ;
//         // let move_x = -(e.pageX - 1920/1191*100*3.645);
//         // let move_y = -(e.pageY - 1920/1191*100*0.645);
//         let x = e.clientX;
//         let y = e.clientY;
//
//         move(x-disX, y-disY);
//     }
// )
//
// //鼠标抬起时
// $(".image-box img").mouseup(
//     function (e) {
//         isDrag = false;
//         // $(".image-box").css({'cursor': 'default'});
//     }
// )

// 返回按钮
$(".return-ico").click(function () {
    let projectId = getUrlPara('projectId');
    //获取当前窗口的路径
    let pathname = window.location.pathname;
    let i;
    i = pathname.substring(pathname.lastIndexOf("/")+1) === 'details-page-v2.html' ? 2 : 1
    switch (i) {
        case 1:
            window.location.href = projectId ? `${linkTree[0]}?projectId=${projectId}` : `${linkTree[0]}`
            break;
        case 2:
            window.location.href = projectId ? `${linkTree[1]}?typeIndex=${typeIndex}&projectId=${projectId}` : `${linkTree[1]}?typeIndex=${typeIndex}`
            break;
    }
})

// 点击全屏
$('.image-box').click(function () {
    fullScreen();
    $(".black-screen").css({'visibility': 'visible'})
})
// 退出全屏状态监听
window.onresize = function(){
    if(!checkFull()){
        // 退出全屏时隐藏幕布
        $(".black-screen").css({'visibility': 'hidden'})
    }
}
function checkFull(){
    // let isFull =  document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
    let isFull = document.fullscreen ||
        document.mozFullScreen ||
        document.webkitIsFullScreen ||
        document.webkitFullScreen ||
        document.msFullScreen
    //to fix : false || undefined == undefined
    if(isFull === undefined)
        isFull = false;
    return isFull;
}
$(".left-box").hover(
    function () {
        $(".left-box").css({'background': 'rgba(255, 255, 255, 0.3)'});
        $(".left-box img").css({'visibility': 'visible'});
    },
    function () {
        $(".left-box").css({'background': '#000'});
        $(".left-box img").css({'visibility': 'hidden'});
    }
)
$(".right-box").hover(
    function () {
        $(".right-box").css({'background': 'rgba(255, 255, 255, 0.3)'});
        $(".right-box img").css({'visibility': 'visible'});
    },
    function () {
        $(".right-box").css({'background': '#000'});
        $(".right-box img").css({'visibility': 'hidden'});
    }
)
$(".left-box").click(function () {
    image_index --
    changeImg(image_index)
})
$(".right-box").click(function () {
    image_index ++
    changeImg(image_index)
})
