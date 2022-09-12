$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    let form_obj = $(this).serializeArray();
    const valuesForm = {};
    form_obj.forEach(function (inputObj) {
      valuesForm[inputObj.name] = inputObj.value;
    });
    alert(
      `Obrigado pelo contato! \n Vamos planejar a sua viagem para: ${valuesForm.cidades} \n Data: ${new Date(valuesForm.dateTravel).toLocaleDateString()} \n Entraremos em contato pelo número ${valuesForm.phone} e e-mail ${valuesForm.email}`
    );
    $(this).trigger('reset')
  });
});
