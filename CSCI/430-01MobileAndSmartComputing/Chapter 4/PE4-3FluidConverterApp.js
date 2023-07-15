function initialize()
{
  var gQuantityInput = document.getElementById("gallons");
  gQuantityInput.addEventListener("blur", validateGallons);
  
  var lQuantityInput = document.getElementById("litres");
  lQuantityInput.addEventListener("blur", validateLitres);
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

function convertToLitres(quantityInGallons)
{
  var litresQuantity = (quantityInGallons) * 3.785411784 ;
  document.getElementById("answer").innerHTML = quantityInGallons +
    "Gallons converts to " +
    litresQuantity.toFixed(2) +
    "litres";
}

function convertToGallons(quantityInLitres)
{
  var gallonsQuantity = quantityInLitres / 3.785411784;
  document.getElementById("answer").innerHTML = quantityInLitres +
    "Litres converts to " +
    gallonsQuantity.toFixed(2) +
    "gallons";
}

function validateGallons()
{
  var gQuantityInput = document.getElementById("gallons");
  if (gQuantityInput.value < 1 || gQuantityInput.value > 1000)
  {
    alert ('Gallons entered must between 1 and 1000');
    gQuantityInput = "";
  }
}

function validateLitres()
{
  var lQuantityInput = document.getElementById("litres");
  if (lQuantityInput.value < 1 || lQuantityInput.value > 4000)
  {
    alert ('Litres entered must between 1 and 4000');
    lQuantityInput = "";
  }
}