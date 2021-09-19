import createEsmUtils from 'esm-utils';

const getCountryByTimezone = timezone => {
	if (typeof timezone !== 'string' && !Array.isArray(timezone)) {
		throw new TypeError(`Expected string | string[], got ${typeof timezone}`);
	}

	const {json} = createEsmUtils(import.meta);
	const countries = json.loadSync('./data.json');
	let result;

	countries.forEach(country => {
		if (typeof timezone === 'string' && timezone === country.timeZone) {
			result = country;
		}

		if (timezone.includes(country.timeZone)) {
			result = country;
		}
	});

	return result;
};

export default getCountryByTimezone;
