// $(document).ready(function () {
//     // 往image-title中添加文件名
//     edit_image_title();
// })
$('.main-box').hover(show_black_screen, hide_black_screen)
function show_black_screen() {
    // $('.black-screen').show();
    $('.black-screen').css({'visibility': 'visible'});
}
function hide_black_screen() {
    // $('.black-screen').hide();
    $('.black-screen').css({'visibility': 'hidden'});
}

// 小图鼠标移入移出效果
$(".sub-box").hover(
    function (e) {
        // let target = $(e.target);
        let target = e.currentTarget;
        // debugger;
        target.children[1].style.visibility = 'visible';
    },
    function (e) {
        let target = e.currentTarget;
        target.children[1].style.visibility = 'hidden';
    })