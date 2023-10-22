import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import service from "./index.js";

const rl = readline.createInterface({ input, output });

let costumerAnswer = [];

const askQuestion = async () => {
	const request = await rl.question(
		"Hello. Enter 10 words or digits dividing them in spaces:",
	);

	costumerAnswer = request.split(" ");

	console.log(
		"How would you like to sort values:\n1. Words by name (from A to Z).\n2. Show digits from the smallest.\n3. Show digits from the biggest.\n4. Words by quantity of letters.\n5. Only unique words.",
	);
	const action = await rl.question("Select (1 - 5) and press ENTER: ");
	return { action };
};

const invokeAction = async () => {
	const { action } = await askQuestion();
	switch (action) {
		case "1":
			const sortedByName = await service.sortByName(costumerAnswer);
			console.log(sortedByName);
			break;
		case "2":
			const sortToSmallest = await service.digitsFromSmallest(costumerAnswer);
			console.log(sortToSmallest);
			break;
		case "3":
			const sortToBiggest = await service.digitsFromBiggest(costumerAnswer);
			console.log(sortToBiggest);
			break;
		case "4":
			const sortedByQuantity = await service.sortByQuantity(costumerAnswer);
			console.log(sortedByQuantity);
			break;
		case "5":
			const uniqueWords = await service.showUniqueWords(costumerAnswer);
			console.log(uniqueWords);
			break;
		case "exit":
			rl.close();
			console.log("Good bye! Come back again!");
			process.exit(0);

		default:
			console.log("Unknown action");
	}
	invokeAction();
};

invokeAction().catch((error) => {
	console.error("Error occurred: ", error);
	process.exit(1);
});
