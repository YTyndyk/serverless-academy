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
export const showUniqueWords = async (customerAnswer) => {
	const uniqueWords = [];
	function isNumeric(value) {
		return /^\d+$/.test(value);
	}

	for (let item of customerAnswer) {
		if (!isNumeric(item) && !uniqueWords.includes(item)) {
			uniqueWords.push(item);
		}
	}
	return uniqueWords;
};

export default {
	sortByName,
	digitsFromSmallest,
	digitsFromBiggest,
	sortByQuantity,
	showUniqueWords,
};
