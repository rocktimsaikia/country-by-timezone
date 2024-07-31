# country-by-timezone

Get country data by timezone string.

> Timezone data used here is from [IANA Database](https://www.iana.org/time-zones).

[![CI](https://github.com/rocktimsaikia/country-by-timezone/actions/workflows/main.yml/badge.svg)](https://github.com/rocktimsaikia/country-by-timezone/actions/workflows/main.yml) [![npm](https://img.shields.io/npm/v/country-by-timezone?color=bright)](https://npmjs.com/package/country-by-timezone)

## Install

```sh
npm i country-by-timezone
```

## Usage

```js
import getCountryByTimezone from "country-by-timezone";

const country = getCountryByTimezone("Asia/Kolkata");

console.log(country);
/*
{
  countryCode: 'IN',
  countryName: 'India',
  timeZone: 'Asia/Kolkata',
  coordinates: [ '20.0000', '77.0000' ]
}
*/
```

## API

#### getCountryByTimezone(timezone)

Get country information by timezone string.

#### 1. `timezone`

> type: `string | string[]` \
> A timezone string or string[] ex: `Asia/Kolkata`
