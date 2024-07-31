import test from "ava";
import getCountryByTimezone from "../src/index.js";

test("main", (t) => {
	t.throws(
		() => {
			getCountryByTimezone(123);
		},
		{
			instanceOf: TypeError,
			message: "Expected string | string[], got number",
		},
	);

	const indianRegion = getCountryByTimezone("Asia/Kolkata");
	t.is(indianRegion.countryName, "India");
	t.is(indianRegion.countryCode, "IN");
	t.is(indianRegion.timeZone, "Asia/Kolkata");
	t.deepEqual(indianRegion.coordinates, ["20.0000", "77.0000"]);

	const koreanRegion = getCountryByTimezone("Asia/Seoul");
	t.is(koreanRegion.countryName, "South Korea");
	t.is(koreanRegion.countryCode, "KR");
	t.is(koreanRegion.timeZone, "Asia/Seoul");
	t.deepEqual(koreanRegion.coordinates, ["37.0000", "127.5000"]);

	const usRegion = getCountryByTimezone("America/New_York");
	t.is(usRegion.countryName, "United States");
	t.is(usRegion.countryCode, "US");
	t.is(usRegion.timeZone, "America/New_York");
	t.deepEqual(usRegion.coordinates, ["38.0000", "-97.0000"]);
});

test("Pass an array", (t) => {
	const indianRegion = getCountryByTimezone(["Asia/Kolkata", "Asia/Calcutta"]);
	t.is(indianRegion.countryName, "India");
	t.is(indianRegion.countryCode, "IN");
	t.is(indianRegion.timeZone, "Asia/Kolkata");
	t.deepEqual(indianRegion.coordinates, ["20.0000", "77.0000"]);
});
