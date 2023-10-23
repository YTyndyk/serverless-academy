export const sortByName = async (costumerAnswer) => {
	const data = await costumerAnswer.sort();
	return data;
};

export const digitsFromSmallest = async (costumerAnswer) => {
	const data = await costumerAnswer.sort((a, b) => a - b);
	return data;
};

export const digitsFromBiggest = async (costumerAnswer) => {
	const data = await costumerAnswer.sort((a, b) => b - a);
	return data;
};

export const sortByQuantity = async (costumerAnswer) => {
	const data = await costumerAnswer.sort((a, b) => a.length - b.length);
	return data;
};
function isNumeric(value) {
	return /^\d+$/.test(value);
}
export const showUniqueWords = async (customerAnswer) => {
	const uniqueWords = [];
	for (let item of customerAnswer) {
		if (!isNumeric(item) && !uniqueWords.includes(item)) {
			uniqueWords.push(item);
		}
	}
	return uniqueWords;
};
export const showUniqueValues = async (customerAnswer) => {
	const uniqueValues = [];
	const uniqueNumbers = [];
	const uniqueWords = [];
	for (let item of customerAnswer) {
		if (isNumeric(item) && !uniqueNumbers.includes(item)) {
			uniqueNumbers.push(item);
		} else if (!isNumeric(item) && !uniqueWords.includes(item)) {
			uniqueWords.push(item);
		}
	}
	uniqueValues.push(...uniqueWords, ...uniqueNumbers);
	return uniqueValues;
};
export default {
	sortByName,
	digitsFromSmallest,
	digitsFromBiggest,
	sortByQuantity,
	showUniqueWords,
	showUniqueValues,
};
