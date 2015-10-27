// function timeCardGenerator(weeklyHours,dayStartTime,weekStartDate) {	
// 	var totalMinutes = weeklyHours * 60;
// 	var averageWorkDayHours = weeklyHours / 5;
// 	console.log(weeklyHours,averageWorkDayHours,totalMinutes);
// 	var generatedMinutes = 0;
// 	var dayStartMins = parseInt(dayStartTime.slice(-2))
// 	var dayStartHours = dayStartTime.slice(-6,2)
// 	console.log(dayStartHours)
// 	var workWeek = [];
// 	for (i=0;i<5;i++) {
// 		// Generic random between
// 		// dayStart = Math.floor((Math.random() * 30) * (Math.random() < 0.5 ? -1 : 1))
// 		// random with apparent distribution for smaller numbers?? Doesn't seem so	
// 		// console.log(Math.sqrt(Math.random() * (Math.pow(20,2) - Math.pow(1,2) + 1)))
// 		// Random with very low distribution adjustible
// 		var dayStart = Math.floor(Math.sqrt(Math.random() * 200^2)) * (Math.random() < 0.5 ? -1 : 1)
// 		var dayEnd = Math.floor(Math.sqrt(Math.random() * 200^2)) * (Math.random() < 0.5 ? -1 : 1)
// 		var startTime = "";
// 		generatedMinutes += (averageWorkDayHours * 60) + dayStart + dayEnd;
// 		// startTime = dayStartTime + dayStart
// 		console.log(dayStart,dayEnd)

// 		if (dayStartMins + dayStart < 60 && dayStartMins + dayStart >= 0) {
// 			startTime = dayStartHours + ":" + (dayStartMins + dayStart)
// 		} else if (dayStartMins + dayStart >= 60) {
// 			startTime = (dayStartHours + 1) + ":" + (dayStartMins + dayStart - 60)
// 		} else {
// 			startTime = (dayStartHours - 1) + ":" + (d)
// 		}
// 		console.log(startTime)
// 		// workWeek.push()
// 	}
	
// 	console.log("Generated Test",generatedMinutes,totalMinutes,generatedMinutes-totalMinutes)
// }

// function timeCardGeneratorTwo(weeklyHours,dayStartTime,weekStartDate,weeklyWorkDays) {
// 	weeklyWorkDays = weeklyWorkDays = typeof weeklyWorkDays !== 'undefined' ? weeklyWorkDays : 5;
// 	var totalMinutes = weeklyHours * 60;
// 	var dateTime = new Date(weekStartDate)
// 	var dayStartMins = parseInt(dayStartTime.slice(-2))
// 	var dayStartHours = dayStartTime.slice(-6,2)
// 	var averageWorkDayMinutes = (weeklyHours / weeklyWorkDays) * 60;
// 	dateTime.setMinutes(dayStartMins)
// 	dateTime.setHours(dayStartHours)
// 	var generatedMinutes = 0;
// 	var workWeek = [];
// 	for (i=0;i<weeklyWorkDays;i++) {
// 		// Random range 0 - 20, low distribution
// 		if (i != weeklyWorkDays-1) {
// 			var dayStartRandom = Math.floor(Math.sqrt(Math.random() * 200^2)) * (Math.random() < 0.5 ? -1 : 1)
// 			var dayEndRandom = Math.floor(Math.sqrt(Math.random() * 200^2)) * (Math.random() < 0.5 ? -1 : 1)
// 			var startTime = new Date(dateTime.getTime() + dayStartRandom*60000);
// 			startTime.setDate(startTime.getDate()+i)
// 			var endTime = new Date(startTime.getTime() + (averageWorkDayMinutes + dayStartRandom)*60000)
// 		} else {
// 			var dayStartRandom = Math.floor(Math.sqrt(Math.random() * 200^2)) * (Math.random() < 0.5 ? -1 : 1)
// 			var startTime = new Date(dateTime.getTime() + dayStartRandom*60000);
// 			startTime.setDate(startTime.getDate()+i)
// 			var endTime = new Date(startTime.getTime() + (totalMinutes - generatedMinutes)*60000)
// 		}
// 		var minuteDifference = (endTime - startTime) / 60 / 1000
// 		generatedMinutes += minuteDifference
// 		console.log(minuteDifference,startTime,endTime,generatedMinutes)
// 		workWeek.push(startTime,endTime)
// 	}
// 	console.log(workWeek)
// 	console.log("Generated Test",generatedMinutes,totalMinutes,generatedMinutes-totalMinutes)
// 	return workWeek
// }

function TimeCard(weeklyHours,dayStartTime,weekStartDate,weeklyWorkDays) {
	weeklyWorkDays = weeklyWorkDays = typeof weeklyWorkDays !== 'undefined' ? weeklyWorkDays : 5;
	this.totalMinutes = weeklyHours * 60;
	var dateTime = new Date(weekStartDate)
	var dayStartMins = parseInt(dayStartTime.slice(-2))
	var dayStartHours = dayStartTime.slice(-6,2)
	var averageWorkDayMinutes = (weeklyHours / weeklyWorkDays) * 60;
	dateTime.setMinutes(dayStartMins)
	dateTime.setHours(dayStartHours)
	var generatedMinutes = 0;
	this.workWeek = [];
	for (i=0;i<weeklyWorkDays;i++) {
		// Random range 0 - 20, low distribution
		if (i != weeklyWorkDays-1) {
			var dayStartRandom = Math.floor(Math.sqrt(Math.random() * 200^2)) * (Math.random() < 0.5 ? -1 : 1)
			var dayEndRandom = Math.floor(Math.sqrt(Math.random() * 200^2)) * (Math.random() < 0.5 ? -1 : 1)
			var startTime = new Date(dateTime.getTime() + dayStartRandom*60000);
			startTime.setDate(startTime.getDate()+i)
			var endTime = new Date(startTime.getTime() + (averageWorkDayMinutes + dayStartRandom)*60000)
		} else {
			var dayStartRandom = Math.floor(Math.sqrt(Math.random() * 200^2)) * (Math.random() < 0.5 ? -1 : 1)
			var startTime = new Date(dateTime.getTime() + dayStartRandom*60000);
			startTime.setDate(startTime.getDate()+i)
			var endTime = new Date(startTime.getTime() + (this.totalMinutes - generatedMinutes)*60000)
		}
		var minuteDifference = (endTime - startTime) / 60 / 1000
		generatedMinutes += minuteDifference
		console.log(minuteDifference / (averageWorkDayMinutes * 60),startTime,endTime,generatedMinutes)
		this.workWeek.push(startTime,endTime)
	}
	console.log(this.workWeek)
	console.log("Generated Test",generatedMinutes,this.totalMinutes,generatedMinutes-this.totalMinutes)
}