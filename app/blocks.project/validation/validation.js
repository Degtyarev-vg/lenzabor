"use strict";

$(function() {

  $(".form-validation").each(function() {
    let thisButton = $(this).find("input[type=\"submit\"]"),
        inputName = $(this).find("input[name=\"name\"]"),
        inputEmail = $(this).find("input[name=\"email\"]"),
        inputPhone = $(this).find("input[name=\"phone\"]");

    // Get from Local Storage
    if(inputName.length && localStorage.getItem("inputName") != null) {
      inputName.val(localStorage.getItem("inputName"));
    }
    if(inputEmail.length && localStorage.getItem("inputEmail") != null) {
      inputEmail.val(localStorage.getItem("inputEmail"));
    }
    if(inputPhone.length && localStorage.getItem("inputPhone") != null) {
      inputPhone.val(localStorage.getItem("inputPhone"));
    }

    $(this).validate({
      highlight: function(element, errorClass) {
          $(element)
            .removeClass("validation_valid")
            .addClass("validation_invalid");
      },
      unhighlight: function(element, errorClass) {
          $(element)
            .addClass("validation_valid")
            .removeClass("validation_invalid");
      },
      errorElement: "span",
      errorClass: "form-validation__error-text",
      ignore: ".validation_ignore",
      focusInvalid: true,
      submitHandler: function(form) {
        var th = $(form);
        $.ajax({
          // Сюда добавляем обработчик форм
        }).done(function(response) {
          setStore(inputName.val(), inputEmail.val(), inputPhone.val());

          thisButton.attr("disabled", "disabled");

          alert("Заявка отправлена, спасибо! В общем тут нужно сделать что-то более красивое, нежели нативный alert, а также добавить обработчик, чтобы данные отправлялись.");

          setTimeout(function() {
            th.trigger("reset");
            thisButton.removeAttr("disabled");
            th.find(".validation_valid").removeClass("validation_valid");
            th.find(".form-validation__group_valid").removeClass("form-validation__group_valid");
          }, 3000);
        });
        return false;
      }
    });

    // Добавляем свое методы обработки полей в validator
    $.validator.addMethod("myEmail", function( value, element ) {
      return this.optional( element ) || /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value );
    }, "Некорректный email");

    $.validator.addMethod("validationRequired", $.validator.methods.required, "Обязательное поле!");
    $.validator.addMethod("validationMinlength", $.validator.methods.minlength, "Минимум {0} символов!");
    $.validator.addMethod("validationMaxlength", $.validator.methods.maxlength, "Максимум {0} символов!");
    $.validator.addMethod("validationDigits", $.validator.methods.digits, "Должны быть только цифры!");
    $.validator.addMethod("validationRangelength", $.validator.methods.rangelength, "Символов не менее {0} и не более {1}");

    $.validator.addClassRules({
      validation: {
        validationRequired: true
      },
      validation_email: {
        myEmail: true
      },
      validation_minlength: {
        validationMinlength: 3
      },
      validation_maxlength: {
        validationMaxlength: 10
      },
      validation_digits: {
        validationDigits: true
      },
      validation_rangelength: {
        validationRangelength: [3, 7]
      }
    });

  });

  // Set in Local Storage
  function setStore(name, email, phone) {
    localStorage.setItem("inputName", name);
    localStorage.setItem("inputEmail", email);
    localStorage.setItem("inputPhone", phone);
  };

});
