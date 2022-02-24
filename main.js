function createUser(first, last) {
	const user = {
		firstName: first,
		lastName: last,
	};
	return user;
}

function setAge(user, a) {
	user["age"] = a;
	return user;
}

function incrementAge(user) {
	user["age"] += 1;
	return user;
}

function fixCar(car) {
	car["needsMaintenance"] = false;
	return car;
}

function addGrades(student, newGrades) {
	for (let i = 0; i < newGrades.length; i++) {
		student["grades"].push(newGrades[i]);
	}

	return student;
}

function getDataType(object, key) {
	return typeof object[key];
}

function addTodo(todos, newTodo) {
	todos.push(newTodo);

	return todos;
}

function addSong(playlist, newSong) {
	playlist["songs"].push(newSong);
	playlist["duration"] += newSong["duration"];

	return playlist;
}

function averageGrade(gradesArry) {
	let sum = 0;

	for (let i = 0; i < gradesArry.length; i++) {
		sum += gradesArry[i];
	}

	let average = sum / gradesArry.length;
	return average;
}

function updateReportCard(reportCard, newGrade) {
	reportCard["grades"].push(newGrade);

	reportCard["averageGrade"] = averageGrade(reportCard["grades"]);

	if (newGrade < reportCard["lowestGrade"]) {
		reportCard["lowestGrade"] = newGrade;
	}

	if (newGrade > reportCard["highestGrade"]) {
		reportCard["highestGrade"] = newGrade;
	}

	return reportCard;
}

// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │
// │                                                                         │
const isDef = (arg) => arg === "function";
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard)
	? updateReportCard
	: pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘