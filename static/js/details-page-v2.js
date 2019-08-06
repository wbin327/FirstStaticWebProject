let details_page_data =
    `
    {
    "company_logo": "",
    "project_introduction": "",
    "video": "./static/movies/Changsha%20Liuyang%20golf%20villa%20community-video.mp4",
    "video_image_path": "{baseUrl}/static/images/index-images/closeico.png",
    "footer_image_path": "{baseUrl}/static/images/index-images/footer-image.png",
    "all_type": [
        {
            "name": "项目背景",
            "link": "{baseUrl}/list-page-v2/list-page-v2.html?subTitle=项目背景",
            "image_path": "{baseUrl}/static/images/index-images/project-background-ico.png",
            "subType": [
                {
                    "name": "项目背景",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=项目背景&image_index=0",
                    "image_path": ["{baseUrl}/static/images/details-page-images//project-images/project-background.png"]
                },
                {
                    "name": "区位分析",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=项目背景&image_index=1",
                    "image_path": ["{baseUrl}/static/images/details-page-images//project-images/location-analysis.png"]
                },
                {
                    "name": "周边现状",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=项目背景&image_index=2",
                    "image_path": ["{baseUrl}/static/images/details-page-images//project-images/around-analysis.png"]
                }
            ]
        },
        {
            "name": "设计策略",
            "link": "{baseUrl}/list-page-v2/list-page-v2.html?subTitle=设计策略",
            "image_path": "{baseUrl}/static/images/index-images/strategy-ico.png",
            "subType": [
                {
                    "name": "高尔夫精神",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计策略&image_index=0",
                    "image_path": ["{baseUrl}/static/images/details-page-images/strategy-images/golf-spirit.png"]
                },
                {
                    "name": "绿色家园（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计策略&image_index=1",
                    "image_path": [
                        "{baseUrl}/static/images/details-page-images/strategy-images/green-home1.png",
                        "{baseUrl}/static/images/details-page-images/strategy-images/green-home2.png"
                    ]
                },
                {
                    "name": "生态修复",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计策略&image_index=3",
                    "image_path": ["{baseUrl}/static/images/details-page-images/strategy-images/ecology-repaired1.png"]
                }
            ]
        },
        {
            "name": "设计成果",
            "link": "{baseUrl}/list-page-v2/list-page-v2.html?subTitle=设计成果",
            "image_path": "{baseUrl}/static/images/index-images/gain-ico.png",
            "subType": [
                {
                    "name": "鸟瞰图",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=0",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/aerial-view.png"]
                },
                {
                    "name": "平台透视图",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=1",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/perspective.png"]
                },
                {
                    "name": "平台半鸟瞰图",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=2",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/binary-aerial-view.png"]
                },
                {
                    "name": "整体鸟瞰图",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=3",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/general-aerial-view.png"]
                },
                {
                    "name": "规划总平面（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=4",
                    "image_path": [
                        "{baseUrl}/static/images/details-page-images/presentation-images/master-plan1.png",
                        "{baseUrl}/static/images/details-page-images/presentation-images/master-plan2.png"
                    ]
                },
                {
                    "name": "指标表",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=6",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/ksslzb.png"]
                },
                {
                    "name": "B区放大总平面",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=7",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/b-size.png"]
                },
                {
                    "name": "分期规划",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=8",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/stage-planning.png"]
                },
                {
                    "name": "围合院落",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=9",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/yard.png"]
                },
                {
                    "name": "土方节省",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=10",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/save.png"]
                },
                {
                    "name": "设计核心",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=11",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/design.png"]
                },
                {
                    "name": "户型分析",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=12",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/apartment.png"]
                },
                {
                    "name": "采光同风",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=13",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/lighting.png"]
                },
                {
                    "name": "回归生活（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=14",
                    "image_path": [
                        "{baseUrl}/static/images/details-page-images/presentation-images/life1.png",
                        "{baseUrl}/static/images/details-page-images/presentation-images/life2.png",
                        "{baseUrl}/static/images/details-page-images/presentation-images/life3.png",
                        "{baseUrl}/static/images/details-page-images/presentation-images/life4.png"
                    ]
                },
                {
                    "name": "产品参数",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=18",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/product.png"]
                },
                {
                    "name": "功能分析图",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=19",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/function-analysis.png"]
                },
                {
                    "name": "景观分析",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=设计成果&image_index=20",
                    "image_path": ["{baseUrl}/static/images/details-page-images/presentation-images/landcape-analysis.png"]
                }
            ]
        },
        {
            "name": "产品图纸",
            "link": "{baseUrl}/list-page-v2/list-page-v2.html?subTitle=产品图纸",
            "image_path": "{baseUrl}/static/images/index-images/drawing-ico.png",
            "subType": [
                {
                    "name": "别墅共性优点",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=0",
                    "image_path": ["{baseUrl}/static/images/details-page-images/product-images/same-advantage.png"]
                },
                {
                    "name": "独栋A型",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=1",
                    "image_path": ["{baseUrl}/static/images/details-page-images/product-images/a-type.png"]
                },
                {
                    "name": "独栋B型（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=2",
                    "image_path": [
                        "{baseUrl}/static/images/details-page-images/product-images/b-type1.png",
                        "{baseUrl}/static/images/details-page-images/product-images/b-type2.png"
                    ]
                },
                {
                    "name": "独栋C型（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=4",
                    "image_path": [
                        "{baseUrl}/static/images/details-page-images/product-images/c-type1.png",
                        "{baseUrl}/static/images/details-page-images/product-images/c-type2.png"
                    ]
                },
                {
                    "name": "独栋别墅优点",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=6",
                    "image_path": ["{baseUrl}/static/images/details-page-images/product-images/single-advantage.png"]
                },
                {
                    "name": "叠拼别墅（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=7",
                    "image_path": [
                        "{baseUrl}/static/images/details-page-images/product-images/diepin1.png",
                        "{baseUrl}/static/images/details-page-images/product-images/diepin2.png",
                        "{baseUrl}/static/images/details-page-images/product-images/diepin3.png",
                        "{baseUrl}/static/images/details-page-images/product-images/diepin4.png"
                    ]
                },
                {
                    "name": "叠拼别墅优点",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=11",
                    "image_path": ["{baseUrl}/static/images/details-page-images/product-images/diepin-advantage.png"]
                },
                {
                    "name": "联排别墅（多）",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=12",
                    "image_path": [
                        "{baseUrl}/static/images/details-page-images/product-images/townhouse1.png",
                        "{baseUrl}/static/images/details-page-images/product-images/townhouse2.png",
                        "{baseUrl}/static/images/details-page-images/product-images/townhouse3.png",
                        "{baseUrl}/static/images/details-page-images/product-images/townhouse4.png",
                        "{baseUrl}/static/images/details-page-images/product-images/townhouse5.png"
                    ]
                },
                {
                    "name": "联排别墅优点",
                    "link": "{baseUrl}/details-page/details-page-v2.html?subTitle=产品图纸&image_index=17",
                    "image_path": ["{baseUrl}/static/images/details-page-images/product-images/townhouse-advantage.png"]
                }
            ]
        }
    ]
}
    `;

details_page_data = details_page_data.format({'baseUrl': baseUrl});
details_page_data = JSON.parse(details_page_data);
// debugger
let image_list = [];
// let subTitle = getUrlPara('subTitle');
let typeIndex = getUrlPara('typeIndex');
let image_index = parseInt(getUrlPara('image_index'));
if(image_index == null){
    image_index = 0;
}
render_page();

// 修改页面内容
function render_page() {
    // 设置图片数据集合
    image_list = JSON.parse(sessionStorage.getItem("image_list"))
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
    for(i=0; i<linkTree.length; i++){
        if(pathname === linkTree[i]){
            break;
        }
    }
    switch (i) {
        case 1:
            window.location.href = `${linkTree[0]}?projectId=${projectId}`
            break;
        case 2:
            window.location.href = `${linkTree[1]}?typeIndex=${typeIndex}&projectId=${projectId}`
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
