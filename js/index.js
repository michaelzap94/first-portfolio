        $(document).ready(function() {

          /////////RESETS THE FORM.
          $("#resetForm").click(function() {
            event.preventDefault(); //  IMPORTANT. THIS IS HOW YOU GET THE EVENT OF A CLICK.
            $("#forms")[0].reset();
            var validator = $("#forms").validate();

            for (var i = 0, elements = validator.elements(); elements[i]; i++) {
              validator.settings.unhighlight.call(validator, elements[i], validator.settings.errorClass, validator.settings.validClass);
            }
            validator.resetForm();
          });

          ///////////CALLED WHEN SUBMIT BUTTON IS PRESSED
          $('#forms').validate({
            rules: {
              firstname: {
                minlength: 3,
                maxlength: 15,
                required: true
              },
              username: {

                required: true,
                email: true
              },
              phone: {
                minlength: 7,
                maxlength: 11,
                required: true,
                number: true

              },
              textbox: {
                maxlength: 500,

              }
            },
            highlight: function(element) {
              $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function(element) {
              $(element).closest('.form-group').removeClass('has-error');
            },
            errorElement: 'span',
            errorClass: 'help-block',
            errorPlacement: function(error, element) {
              if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
              } else {
                error.insertAfter(element);
              }
            }
          });

          /////////// fixed the navbar-fixed-top padding.

          $(".jumbotron ").children(".container").css(

            "padding-top", "40px"

          );
          ///////////// COLLAPSES THE NAVBAR-COLLAPSE ELEMENTS, WHEN ELEMENT IS CLICKED.
          $("#navbar ul li").click(function() {
            if ($("#btnCollapseOnClick").css('display') != 'none') {

              $("#btnCollapseOnClick").click();

            }
          });

          $.ajax({
            type: 'GET',

            url: "http://segundamano.x10.mx/files/mikecv2.html"
              // url:"../files/mikecv2.html"
          }).done(function(data) {

            $('#btnCv').click(function() {
              var content = {
                title: "Michael Zapata CV",
              };

              // reference my modal
              var modal1 = $('#modal1');
              $(modal1).find('.modal-title').html(content.title);
              $(modal1).find('.modal-body').append(data);

              //  $('#modal1').modal('fadeIn');

            });

          });

          $('body').on('hidden.bs.modal', '.modal', function() {
            $(this).removeData('bs.modal');
            $(this).find('.modal-body').html("");
          });

          $("#social li a").children().addClass("fa-3x");

        });