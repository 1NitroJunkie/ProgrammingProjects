
function initialize()
{
  var labelInput = document.getElementById(setUnits);
  if (labelInput.value == "gallons")
  {
    labelInput.addEventListener("blur", validateLitres);
  }
  else
  {
    labelInput.addEventListener("blur", validateGallons);
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
  var gallonsIput = document.getElementById("quantity");
  if (gallonsIput.value < 1 || gallonsIput.value > 1000)
  {
    alert ('Gallons entered must between 1 and 1000');
    gallonsIput = "";
  }
}

function validateLitres()
{
  var litresInput = document.getElementById("quantity");
  if (litresInput.value < 1 || litresInput.value > 4000)
  {
    alert ('Litres entered must between 1 and 4000');
    litresInput = "";
  }
}