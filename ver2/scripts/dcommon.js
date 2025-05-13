var App = App || {};

//---MAIN----
$(function () {
    App.ValidForm.registerValidate();
    

});



//--All site
App.Site = function(){
    var flag = true;
    var submitInfo = function(){
        if ($('form#submitForm').valid() && flag ) {
                    flag = false;
                    $('input#sendData').val('Đang gửi...');
                  var data = $('form#submitForm').serialize();
                  $.ajax({
                            type : 'GET', 
                            url : 'https://script.google.com/macros/s/AKfycbz8a_2wLYXeGj445P5EglDEKCOASC2Dc-bd5JD8EIyLAjNq6haU/exec',
                            dataType:'json',
                            crossDomain : true,
                            data : data,
                            success : function(data)
                          { 
                            flag = true;
                  if(data == 'false') 
                          {
                             alert('Có lỗi xảy ra vui lòng thử lại');
                          }else{
                             $("#modal-alert").fancybox().trigger('click');
                            gtag('event', 'dang-ky-thanh-cong');
                            dataLayer.push({'event': 'gtm-dang-ky-thanh-cong'});
                             $("#submitForm")[0].reset();
                             $('input#sendData').val('ĐĂNG KÝ');

                          }
               }
                });
                return false;

        }
    }
     return {
        submitInfo:submitInfo
    }

}();    
//--End All site


App.ValidForm = function(){
    var registerValidate = function(){
        var formRegister = $('form#submitForm');
        if (formRegister.length < 1) {
            return;
        }
        $.validator.addMethod("validatePhone", function (value, element) {
            var flag = false;
            var phone = value;
            phone = phone.replace('(+84)', '0');
            phone = phone.replace('+84', '0');
            phone = phone.replace('0084', '0');
            phone = phone.replace(/ /g, '');
            if (phone != '') {
                var firstNumber = phone.substring(0, 3);
                var validNumber = ["086","088","096","097","098","032","033","034","035","036","037","038","039","089","090","093","070","079","077","076","078","091","094","083","084","085","081","082","092","056","058"];
                if ((jQuery.inArray(firstNumber,validNumber)!='-1') && phone.length == 10) {
                    if (phone.match(/^\d{10}/)) {
                        flag = true;
                    }
                }
            }
            return flag;
        }, "Hãy nhập đúng định dạng số điện thoại");
        formRegister.validate({
            rules: {
                name: {
                    required: true,
                },
                email:{
                    required: true,
                    email:true
                },
                phone: {
                    required: true,
                    validatePhone:true
                }

            },
            messages: {
                name: {
                    required: "Vui lòng nhập tên"

                },
                phone: {
                    required: "Vui lòng nhập số điện thoại",
                  

                },
                email: {
                    required: "Vui lòng nhập email",
                    email: "Vui lòng nhập đúng định dạng email",
                    

                }
            },
            errorElement : 'p',
            errorClass: 'error',
            errorPlacement: function(error, element) {

                error.insertAfter(element);

            },
            highlight: function (element, errorClass) {
                $(element).closest('.form-group').addClass('error');
            },
            unhighlight: function (element, errorClass) {
                $(element).closest('.form-group').removeClass('error');
            },
        });
    };
    
    return {
        registerValidate:registerValidate,
    }
}();



