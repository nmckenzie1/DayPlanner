$("#currentDay").html(Intl.DateTimeFormat(navigator.language, { weekday: 'long', month: 'short', day: 'numeric' }).format(new Date()))


$('.textarea').each(function() {
  var  thisTime = $(this).attr("time");
   var thisTimeInt = parseInt(thisTime);
	var retrieved = window.localStorage.getItem(thisTimeInt);
	$(this).text(retrieved)
});

$(".saveBtn").on("click", function() {
	
	var time = $(this)
				.parent()
				.find(".textarea")
				.attr("time");
	var note = $(this)
			.parent()
			.find(".textarea")
			.val();
	timesInt = parseInt(time)
	localStorage.setItem(timesInt, note);
	
});

$(".row").each(function(){
  var rowTime = $(this).attr("time");
  intTime = (parseInt(rowTime))
  var d = new Date();
  var hour  = d.getHours()
  console.log(intTime)
  console.log("this should be the time" + hour)
	if (intTime < hour) {
		$(this).addClass("past")
	}	
	if (intTime === hour) {
		$(this).addClass("present")
		}
	if (intTime > hour) {
		$(this).addClass("future")
		}
});

$("#reset").click(resetfunction);

function resetfunction(){
	localStorage.clear();
	$('.textarea').each(function() {
	$(this).val("");
	})
	
}
