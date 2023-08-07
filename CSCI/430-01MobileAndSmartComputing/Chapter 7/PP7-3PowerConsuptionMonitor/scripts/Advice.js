function advicePage() {
  if (localStorage.getItem("tbData") ===
    null) {
    alert("No Data exists.");

    $(location).attr("href", "#pageMenu");
  } else {

    var AvArr = new Array();
    getDataRecords(AvArr);

    var c = document.getElementById(
      "AdviceCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#c0c0c0";
    ctx.fillRect(0, 0, 550, 550);
    ctx.font = "22px Arial";
    drawAdviceCanvas(ctx, AvArr);

  }
}

function getDataRecords(AvArr)
{
  var tbData = JSON.parse(localStorage.getItem("tbData"));

  for (var i = 0; i < tbData.length; i++)
    AvArr[i] = parseFloat(tbData[i].KWH);

}

function findAverage()
{
  TOTAL = 0;
  length = AvArr.length;
  for(var i = length; i > 0; i--)
  {
    TOTAL += AvArr[i];
  }
  AVERAGE = TOTAL / length;

}

function drawAdviceCanvas(ctx, AVERAGE) {
  ctx.font = "22px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Your average power consupmtion is currently: " + AVERAGE);
}

//For deciding what to write for given values of KWH level A
function levelAwrite(ctx, KWH) {
  if (KWH < AVERAGE) {
    writeAdvice(ctx, "green");
  } else if (KWH == AVERAGE) {
    writeAdvice(ctx, "yellow");
  } else {
    writeAdvice(ctx, "red");
  }
}

function writeAdvice(ctx, level) {
  var adviceLine = "";

  if (level == "red") {
    adviceLine =
      "Power consumption level is above average";
  } else if (level == "yellow") {
    adviceLine =
      "Power consumption level is average";
  } else if (level = "green") {
    adviceLine =
      "Power consumption level is below average";
  }
  ctx.fillText("Your Kilowatt-hour usage is " + level);
  ctx.fillText(adviceLine, 25, 410);
}

function levelAMeter(ctx, KWH) {
  if (KWH <= 3) {
    var cg = new RGraph.CornerGauge(
        "AdviceCanvas", 0, 3, KWH)
      .Set("chart.colors.ranges", [
        [0.5, 3, "red"],
        [0.1, 0.5, "yellow"],
        [0.01, 0.1, "#0f0"]
      ]);
  } else {
    var cg = new RGraph.CornerGauge(
        "AdviceCanvas", 0, KWH)
      .Set("chart.colors.ranges", [
        [0.5, 3, "red"],
        [0.1, 0.5, "yellow"],
        [0.01, 0.1, "#0f0"],
        [3.01, KWH, "red"]
      ]);
  }
  drawMeter(cg);
}

// Meter properties
function drawMeter(g) {
  g.Set("chart.value.text.units.post", " mlU/L")
    .Set("chart.value.text.boxed", false)
    .Set("chart.value.text.size", 14)
    .Set("chart.value.text.font", "Verdana")
    .Set("chart.value.text.bold", true)
    .Set("chart.shadow.offsetx", 5)
    .Set("chart.shadow.offsety", 5)
    .Set("chart.scale.decimals", 2)
    .Set("chart.title", "KWH LEVEL")
    .Set("chart.radius", 250)
    .Set("chart.centerx", 50)
    .Set("chart.centery", 250)
    .Draw();
}