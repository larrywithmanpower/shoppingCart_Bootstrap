$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    // edit Modal 事件
    // 當Modal顯示出來時作動
    // $('#editModal').on('show.bs.modal', function (event) {
    //     // 取得點擊的btn
    //     var btn = $(event.relatedTarget);
    //     // 取出按鈕的值(取出data-title)
    //     var title = btn.data("title");
    //     var user = btn.data("user");
    //     var email = btn.data("email")
    //     var item = btn.data("item")
    //     var quantity = btn.data("quantity")
    //     // 將title寫回Modal
    //     var modal = $(this);
    //     // modal找到本身的class name .modal-title，使用.text(title)替換成中文字
    //     modal.find('.modal-title').text(title);
    //     // 尋找modal中的id，找到後代入值
    //     modal.find('#user').attr("placeholder", user);
    //     modal.find('#email').attr("placeholder", email);
    //     modal.find('#item').attr("placeholder", item);
    //     modal.find('#quantity').attr("placeholder", quantity);
    // })
    // remove Modal 事件
    // 當Modal顯示出來時作動
    $('#removeModal').on('show.bs.modal', function (event) {
        // 取得點擊的btn
        var btn = $(event.relatedTarget);
        // 取出按鈕的值(取出data-title)
        var title = btn.data("title");
        // 將title寫回Modal
        var modal = $(this);
        // modal找到本身的class name .modal-title，使用.text(title)替換成中文字
        modal.find('.modal-title').text('確認刪除' + title);
    })

    // $('#toCompleted').onclick(function () {

    //     window.loction.href = "html/completed.html";

    // });
});


// Validation
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

})();

// 驗證後跳轉找不到資訊

