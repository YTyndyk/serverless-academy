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

// export const showUniqueWords = async (costumerAnswer) => {
// 	const data = await costumerAnswer.filter(
// 		(value, index) => costumerAnswer.indexOf(value) === index,
// 	);
// 	return data;
// };

export default {
	sortByName,
	digitsFromSmallest,
	digitsFromBiggest,
	sortByQuantity,
	showUniqueWords,
};
