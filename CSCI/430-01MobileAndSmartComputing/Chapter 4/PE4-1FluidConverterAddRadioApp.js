function setup()
{
  document.getElementById("gallons").onclick = function ()
    {
      setUnits("Liters");
    };
  document.getElementById("liters").onclick = function ()
    {
      setUnits("Gallons");
    };
}

function setUnits(unit)
{
  var label = document.getElementById("label");
  label.innerHTML = unit;
}

function convert()
{
  var litersButton = document.getElementById("liters");
  var quantity = document.getElementById("quantity");

  if (litersButton.checked)
  {
    convertToLiters(quantity.value);
  }
  else
  {
    convertToGallons(quantity.value);
  }
}

function convertToLiters(quantityInGallons)
{
  var litersQuantity = (quantityInGallons) * 3.785411784 ;
  document.getElementById("answer").innerHTML = quantityInGallons +
    "Gallons converts to " +
    litersQuantity.toFixed(2) +
    "liters";
}

function convertToGallons(quantityInLiters)
{
  var gallonsQuantity = quantityInLiters / 3.785411784;
  document.getElementById("answer").innerHTML = quantityInLiters +
    "Liters converts to " +
    gallonsQuantity.toFixed(2) +
    "gallons";
}