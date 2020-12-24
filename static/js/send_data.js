function send_offer() {
    console.log("hi");
    $.ajax({
      type: "POST",
      url: '/offer/create/5',
      data: $('.modal-form').serialize(),
      success: function (data) {
        $(location).attr('href','/sitters/');
      },
      error: function (data) {
        console.log("Offer has not created!");
      }
    });
}

function pet_description() {
    $.ajax({
      type: "POST",
      url: '/pets/create',
      data: $('.modal-form').serialize(),
      success: function (data) {
        $(location).attr('href','/sitters/');
      },
      error: function (data) {
        console.log("Pet has not created!");
      }
    });
}

$('.send_btn.hire').on('click', send_offer);
$('.send_btn.pet').on('click', pet_description);