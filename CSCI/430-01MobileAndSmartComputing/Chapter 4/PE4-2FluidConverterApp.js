function initialize()
{
  var userInput = document.getElementsById("quantity");
  userInput.addEventListener("blur", validateInput);
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

function validateInput()
{
  alert (setUnits)
  var unitType = document.getElementById("label");
  if (unitType.innerHTML == "Gallons")
  {
    var gallonsInput = document.getElementById("quantity");
    if (gallonsInput.value < 1 || gallonsInput.value > 1000)
    {
      alert ('Gallons entered must between 1 and 1000');
      gallonsInput = "";
    }
  }
  else if (unitType.innerHTML == "Litres")
  {
    var litresInput = document.getElementById("quantity");
    if (litresInput.value < 1 || litresInput.value > 4000)
    {
      alert ('Litres entered must between 1 and 4000');
      litresInput = "";
    }
  }
}