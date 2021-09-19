type TimeZone = string | string[];
type Country = {
	countryName: string;
	countryCode: string;
	timeZone: string;
	coordinates: string[];
};

declare function getCountryByTimezone(timezone: TimeZone): Country;

export default getCountryByTimezone;
