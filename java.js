document.addEventListener('DOMContentLoaded', function () {
    var orderBtn = document.querySelector('.order-btn');
    orderBtn.addEventListener('click', function () {
      var message = document.getElementById('message').value;
      var donorName = document.getElementById('donorName').value;
      var donorEmail = document.getElementById('donorEmail').value;
      var recipientName = document.getElementById('recipientName').value;
      var activityName = document.getElementById('activityName').value;
      var activityPrice = document.getElementById('activityPrice').value;
  
      var confirmationMessage = "Mesazhi për recipjentin: " + message + "\nEmri i dhuruesit: " + donorName + "\nEmaili i dhuruesit: " + donorEmail + "\nEmri i personit që i dhurohet: " + recipientName + "\nAktiviteti i dhuruar: " + activityName + "\nÇmimi: " + activityPrice;
  
      alert(confirmationMessage);
    });
  });
  
  
  