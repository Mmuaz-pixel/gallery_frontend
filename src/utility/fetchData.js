const fetchData = async (uri, options) => {
	try {
		const response = await fetch(`http://localhost:5000/${uri}`, options);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.error('Error fetching data:', error.message);
		throw error; // You might want to handle or log the error appropriately
	}
};

module.exports = fetchData; 