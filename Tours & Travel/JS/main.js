$(document).ready(function(){ // Khi tài liệu HTML được load xong, các đoạn mã trong hàm callback này sẽ được thực hiện
    $('.fa-bars').click(function(){  // Thêm sự kiện click cho phần tử có lớp 'fa-bars'
        $(this).toggleClass('fa-times');  // Thêm hoặc loại bỏ lớp 'fa-times' cho phần tử được click
        $('.navbar').toggleClass('nav-toggle');  // Thêm hoặc loại bỏ lớp 'nav-toggle' cho phần tử có lớp CSS 'navbar'
    });

    $(window).on('load scroll',function(){  // Thêm sự kiện `load` và `scroll` cho cửa sổ trình duyệt'
        $('.fa-bars').removeClass('fa-times');  // Loại bỏ lớp 'fa-times' cho phần tử có lớp CSS 'fa-bars'
        $('.navbar').removeClass('nav-toggle');  // Loại bỏ lớp 'nav-toggle' cho phần tử có lớp CSS 'navbar'
        
        if($(window).scrollTop() > 30) {
            $('header').addClass('header-active');  // Nếu scroll lớn hơn 30px, thêm 'header-active' cho phần tử có thẻ HTML 'header', ngược lại, loại bỏ lớp này đi
        } else {
            $('header').removeClass('header-active');
        }
    });
});