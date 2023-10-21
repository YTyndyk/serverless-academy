import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import service from "./index.js";

const rl = readline.createInterface({ input, output });

let costumerAnswer = [];

const askQuestion = async () => {
	const request = await rl.question(
		"Hello. Enter 10 words or digits deviding them in spaces:",
	);

	costumerAnswer = request.split(" ");

	console.log(
		"How would you like to sort values:\n1. Words by name (from A to Z).\n2. Show digits from the smallest.\n3. Show digits from the biggest.\n4. Words by quantity of leters.\n5. Only unique words.",
	);
	const number = await rl.question("Select (1 - 5) and press ENTER: ");
	return { number };
};

const invokeAction = async ({ number }) => {
	switch (number) {
		case "1":
			const sortedByName = await service.sortByName(costumerAnswer);
			console.log(sortedByName);
			rl.close();
			break;
		case "2":
			const sortToSmallest = await service.digitsFromSmallest(costumerAnswer);
			console.log(sortToSmallest);
			rl.close();
			break;
		case "3":
			const sortToBiggest = await service.digitsFromBiggest(costumerAnswer);
			console.log(sortToBiggest);
			rl.close();
			break;
		case "4":
			const sortedByQuantity = await service.sortByQuantity(costumerAnswer);
			console.log(sortedByQuantity);
			rl.close();
			break;
		case "5":
			const uniqueWords = await service.showUniqueWords(costumerAnswer);
			console.log(uniqueWords);
			rl.close();
			break;
		default:
			console.log("Invalid number selected");
			rl.close();
	}
};

(async () => {
	const { number } = await askQuestion();
	await invokeAction({ number });
})();
