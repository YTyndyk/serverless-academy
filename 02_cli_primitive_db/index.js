import inquirer from "inquirer";

inquirer
	.prompt([
		{
			type: "input",
			name: "nikname",
			message: "Enter the user's name. To cansel press ENTER:",
			default: "Iron Man",
		},
		{
			type: "list",
			name: "list question",
			message: "Choose your Gender.",
			default: "I am not sure",
		},
		{
			type: "input",
			name: "age",
			message: "Enter your age:",
			default: "18+",
		},
	])
	.then((answers) => {
		// Use user feedback for... whatever!!
	});
