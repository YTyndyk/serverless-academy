import inquirer from "inquirer";

const questions = [
	{
		type: "input",
		name: "name",
		message: "Enter the user's name. To cansel press ENTER:",
		validate: (answer) => {
			if (answer === "") {
				return "please enter your name";
			}
			return true;
		},
	},
	{
		type: "list",
		name: "Gender",
		message: "Choose your Gender.",
		choices: ["male", "female"],
	},
	{
		type: "input",
		name: "age",
		message: "Enter your age:",
		validate: (answer) => {
			if (isNaN(answer) || answer === "") {
				return "please enter your age";
			}
			return true;
		},
	},
	{
		type: "confirm",
		name: "confirmation",
		message: "Would you to search values in DB?",
	},
];
inquirer.prompt(questions).then((answers) => {
	console.log(answers);
});
