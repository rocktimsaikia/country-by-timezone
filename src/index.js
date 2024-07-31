import createEsmUtils from "esm-utils";

let countryData;

function loadCountryData() {
	if (!countryData) {
		const { loadJsonSync } = createEsmUtils(import.meta);
		countryData = loadJsonSync("./data.json");
	}

	return countryData;
}

export default function (timezone) {
	if (typeof timezone !== "string" && !Array.isArray(timezone)) {
		throw new TypeError(`Expected string | string[], got ${typeof timezone}`);
	}

	const countries = loadCountryData();
	let result;

	countries.forEach((country) => {
		if (typeof timezone === "string" && timezone === country.timeZone) {
			result = country;
		} else if (Array.isArray(timezone) && timezone.includes(country.timeZone)) {
			result = country;
		}
	});

	return result;
}
