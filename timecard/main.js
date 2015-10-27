var startingTimeCard = new TimeCard(40,"08:30","9/28/15")

function toHrs(min) {
	return Math.floor(min / 60) + "Hrs" + (min % 60) + "min"
}

function appendTimeCard(timeCard) {
	$('#time-card-table').empty();
	$('#time-card-table').append('<tr><th>Date</th><th>Start Time</th><th>End Time</th><th>Day Length</th></tr>');
	for (var i=0;i<timeCard.workWeek.length;i+=2) {
			var appendHTML = '<tr><td>' + (timeCard.workWeek[i].getMonth() + 1) + '/' + timeCard.workWeek[i].getDate() + '/' + (timeCard.workWeek[i].getYear() - 100) + '</td>'
			if (timeCard.workWeek[i].getHours() > 12) {
				appendHTML +=  '<td>' + (timeCard.workWeek[i].getHours() - 12)
			} else {
				appendHTML +=  '<td>' + timeCard.workWeek[i].getHours()
			}
			if (timeCard.workWeek[i].getMinutes() < 10) {
				appendHTML +=  ':0' + timeCard.workWeek[i].getMinutes()
			} else {
				appendHTML +=  ':' + timeCard.workWeek[i].getMinutes()
			}
			if (timeCard.workWeek[i].getHours() > 12) {
				appendHTML +=  'pm</td>'
			} else {
				appendHTML +=  'am</td>'
			}
			if (timeCard.workWeek[i+1].getHours() > 12) {
				appendHTML +=  '<td>' + (timeCard.workWeek[i+1].getHours() - 12)

			} else {
				appendHTML +=  '<td>' + timeCard.workWeek[i+1].getHours()
			}
			if (timeCard.workWeek[i+1].getMinutes() < 10) {
				appendHTML +=  ':0' + timeCard.workWeek[i+1].getMinutes()
			} else {
				appendHTML +=  ':' + timeCard.workWeek[i+1].getMinutes()
			}
			if (timeCard.workWeek[i+1].getHours() > 12) {
				appendHTML +=  'pm</td>'
			} else {
				appendHTML +=  'am</td>'
			}
			appendHTML += '<td>' + toHrs((timeCard.workWeek[i+1] - timeCard.workWeek[i]) / 1000 / 60) + '</td>'
			toHrs(((timeCard.workWeek[i+1] - timeCard.workWeek[i]) / 1000 / 60).toFixed(2))
			appendHTML += '</tr>'
			console.log(appendHTML)
			$('#time-card-table tr:last').after(appendHTML);
		console.log("appending row")
	}	
}

appendTimeCard(startingTimeCard)

$('#regenerate-button').click(function() {
	var startTime = $('#start-time').val();
	var startDate = $('#start-date').val();
	var weeklyHours = $('#weekly-hours').val();
	var newTimeCard = new TimeCard(weeklyHours,startTime,startDate)
	appendTimeCard(newTimeCard)
	console.log("regen",startTime,startDate,weeklyHours);
})