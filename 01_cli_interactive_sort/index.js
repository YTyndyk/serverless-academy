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
		const trimmedItem = item.trim();
		if (
			trimmedItem !== "" &&
			!uniqueWords.includes(trimmedItem) &&
			!isNumeric(trimmedItem)
		) {
			uniqueWords.push(trimmedItem);
		}
	}
	return uniqueWords;
};

export const showUniqueValues = async (customerAnswer) => {
	const uniqueValues = [];
	const uniqueNumbers = [];
	const uniqueWords = [];
	for (let item of customerAnswer) {
		const trimmedItem = item.trim();
		if (isNumeric(trimmedItem) && !uniqueNumbers.includes(trimmedItem)) {
			uniqueNumbers.push(trimmedItem);
		} else if (!isNumeric(trimmedItem) && !uniqueWords.includes(trimmedItem)) {
			uniqueWords.push(trimmedItem);
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
