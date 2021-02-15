exports.getDate = () => {
	const today = new Date();
	const options = {
		// weekday: "long",
		day: "numeric",
		month: "long",
	};

	// Get Current date
	return today.toLocaleDateString("en-US", options);
};

exports.getDay = () => {
	const today = new Date();
	const options = {
		weekday: "long",
	};

	// Get Current day
	return today.toLocaleDateString("en-US", options);
};

exports.getMonth = () => {
	const today = new Date();
	const options = {
		month: "long",
	};

	// Get Current month
	return today.toLocaleDateString("en-US", options);
};

exports.getMonth = () => {
	const today = new Date();
	// Get Current year
	return today.getFullYear;
};

exports.isLeap = () => {
	const today = new Date();
	//  returns true if present year is a leap year
	return new Date(today.getFullYear, 1, 29).getDate() === 29;
};
