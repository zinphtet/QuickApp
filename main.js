const question = [
	{
		quest: 'Which is Programming ?',
		choices: ['Mango', 'Pineapple', 'Java', 'Premier'],
		ans: 'Java',
	},
	{
		quest: 'Where in MTU ?',
		choices: ['Mandalay', 'Pyin OO Lwin', 'Monywa', 'Larshio'],
		ans: 'Mandalay',
	},
	{
		quest: 'EC stands for what?',
		choices: [
			'Architecture',
			'Electronics',
			'Mechanical',
			'Information Technology',
		],
		ans: 'Electronics',
	},
	{
		quest: 'Guess My Hobby',
		choices: ['Drawing', 'Playing Guitar', 'Singing', 'None of these'],
		ans: 'None of these',
	},
	{
		quest: 'Types of song -> Enter Sandman(Metallica)',
		choices: ['Pop', 'Blue', 'Jazz', 'Metal'],
		ans: 'Metal',
	},
	{
		quest: 'RMA in Spanish Laliga?',
		choices: ['Barcelona', 'Manchester United', 'AC Milan', 'Real Madrid'],
		ans: 'Real Madrid',
	},
	{
		quest: 'MCI in England League?',
		choices: [
			'Manchester City',
			'Manchester United',
			'Inter Milan',
			'Real Batis',
		],
		ans: 'Manchester City',
	},
];

var quest = document.getElementById('quest');
var btn = document.getElementsByClassName('button');
var current = document.getElementById('current');
var total = document.getElementById('total');
var body = document.querySelector('.body');
var foot = document.getElementById('foot');
var count = 0;
var score = 0;

// Show Qestion
function show(question, count) {
	quest.innerHTML = question[count].quest;
	for (var i = 0; i < 4; i++) {
		btn[i].value = question[count].choices[i];
	}
}
//Call function
show(question, count);
current.innerHTML = count + 1;
total.innerHTML = question.length;
for (var i = 0; i < 4; i++) {
	btn[i].onclick = function () {
		console.log(this.value);
		if (this.value == question[count].ans) {
			score++;

			if (count == question.length - 1) {
				body.innerHTML = `<h2>Total Score = ${score}</h2>`;
				if (score > count / 2) {
					foot.innerHTML = 'Great Job !';
				} else {
					foot.innerHTML = 'Unsatisfied  !';
				}
			}
			show(question, count + 1);

			count++;
			// alert(count)
			current.innerHTML = count + 1;
		} else {
			if (count == question.length - 1) {
				body.innerHTML = `<h2> Total Score  = ${score}</h2>`;
				if (score > count / 2) {
					foot.innerHTML = 'Great Job !';
				} else {
					foot.innerHTML = 'Unsatisfied  !';
				}
			}
			show(question, count + 1);

			count++;
			// alert(count)
			current.innerHTML = count + 1;
		}
	};
}
