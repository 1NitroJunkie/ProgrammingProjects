function initialize()
{
  var userInput = document.getElementsById("quantity");
  if (document.getElementById("litres").checked)
  {
    userInput.addEventListener("blur", validateGallons);
  }

  else
  {
    userInput.addEventListener("blur", validateLitres);
  }
  
}

function setUnits(unit)
{
  var label = document.getElementById("label");
  label.innerHTML = unit;
}

function convert()
{
  var litresButton = document.getElementById("litres");
  var quantity = document.getElementById("quantity");

  if (litresButton.checked)
  {
    convertToLitres(quantity.value);
  }
  else
  {
    convertToGallons(quantity.value);
  }
}

function validateGallons()
{
  var gallons = document.getElementById("quantity").value;
  if (gallons < 1 || gallons > 1000)
  {
    alert ('Gallons entered must be between 1 and 1000');
    gallons = "";
  }
}

function validateLitres()
{
  var litres = document.getElementById("quantity").value;
  if (litres < 1 || litres > 4000)
  {
    alert ('Litres entered must be between 1 and 4000');
    litres = "";
  }
}