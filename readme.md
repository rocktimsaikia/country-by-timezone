# country-by-timezone

Get country data by it's timezone.

> Timezone data used here is from [IANA Database](https://www.iana.org/time-zones).

[![Build Status](https://github.com/rocktimsaikia/country-by-timezone/workflows/CI/badge.svg?branch=main)](https://github.com/rocktimsaikia/country-by-timezone/actions?query=branch%3Amain+workflow%3ACI)
[![NPM Version](https://badge.fury.io/js/%40rocktimsaikia%2Fgithub-card.svg)](https://www.npmjs.com/package/@rocktimsaikia/github-card)

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

Get a country information by it's timezone string.

#### 1. `timezone`

> type: `string | string[]` \
> A timezone string or string[] ex: `Asia/Kolkata`
