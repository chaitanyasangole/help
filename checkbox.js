
        (function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        var failed = false;

        if($('#txtTerminationDate').val()=='')
        {
            $('#errorTxtTerminationDate').show();
            failed=true;
        }
        else
        {
            $('#errorTxtTerminationDate').hide();
            failed=false;
        }

        if($('#txtHireDate').val()=='')
        {
            $('#errorTxtHireDate').show();
            failed=true;
        }
        else
        {
            $('#errorTxtHireDate').hide();
            failed=false;
        }

        if ($("[name='category[]']:checked").length == 0) 
        {
            $("[name='category[]']").attr('required', true);
            $('#errorCategory').show();
            failed = true;
        }
        else 
        {
            $("[name='category[]']").attr('required', false);
            $('#errorCategory').hide();
        }

        if (form.checkValidity() === false) {
          failed=true;
        }
        
        if(failed==true)
        {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
