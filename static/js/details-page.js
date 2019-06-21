$(".left-button").click(function () {
    $(".left-button").css("background", "rgba(23,23,23,0.7)");
    setTimeout(function () {
        $(".left-button").css("background", "rgba(23,23,23,0.2)");
        $(".display-content img").css("transform", "scale(0.8)")
    }, 500)

})
$(".right-button").click(function () {
    $(".right-button").css("background", "rgba(23,23,23,0.7)");
    setTimeout(function () {
        $(".right-button").css("background", "rgba(23,23,23,0.2)");
    }, 500)
})

// 向左向右按钮
let arr_list = ['left', 'main', 'right'];
let file_list = ['around-analysis.png', 'location-analysis.png', 'project-background.png'];
let index = 0;

// 判断是否是最左边的图片或者是最右边的图片
function jdugeEdge(){
    if(index == 0){
        $(".left").hide();
        $(".left-button").hide();
    }
    else if(index == file_list.length){
        $(".right").hide();
        $(".right-button").hide();
    }else{
        $(".left").show();
        $(".left-button").show();
        $(".right").show();
        $(".right-button").show();
    }
}

// 页面加载时，先执行一次判断，每次点击左右按钮后也需要进行一次判断
jdugeEdge();
// 页面加载时，需要根据index，加载相应的图片到页面中
function addImages(){
    if(index == 0){
        let images_list = file_list.slice(index, index+1)
        // 删除原本的图片
        $("ul li:first-child").children('img').remove();
        // 给第二个li添加图片
        let images_path = '<img src={details_page_images_path}'
        $("ul li:nth-child(2)").children('img').remove();
        $("ul li:nth-child(2)").append('<img src="{image_path}">');
    }

}

$(".left-button").on('click', function () {

    arr_list.unshift(arr_list[2]);
    arr_list.pop();
    $(".display-box li").each(function (i, e) {
        $(e).removeClass().addClass(arr_list[i]);
    })
    index--;
    if(index < 0){
        index = 0;
    }
})
$(".right-button").on('click', function () {
    arr_list.push(arr_list[0]);
    arr_list.shift();
    $(".display-box li").each(function (i, e) {
        $(e).removeClass().addClass(arr_list[i]);
    })
    index++;
    if(index > 2){
        index = 2;
    }
})