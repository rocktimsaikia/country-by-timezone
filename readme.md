# country-by-timezone

[![Build Status](https://github.com/rocktimsaikia/country-by-timezone/workflows/CI/badge.svg?branch=main)](https://github.com/rocktimsaikia/country-by-timezone/actions?query=branch%3Amain+workflow%3ACI)
[![NPM Version](https://badge.fury.io/js/%40rocktimsaikia%2Fgithub-card.svg)](https://www.npmjs.com/package/@rocktimsaikia/github-card)
![GitHub](https://img.shields.io/github/license/rocktimsaikia/country-by-timezone)

Get country by it's timezone.

<br/>

## Highlights

- Dynamic JSON loading to reduce initial page load when used in webapps.
- Simple and easy to use API.
- The timezone data for the lib comes from [IANA timezones database](https://www.iana.org/time-zones).
- Fully supports ESM.

<br/>

## Installation

```bash
yarn add country-by-timezone
```

<br/>

## Usage/Examples

```js
import getCountryByTimezone from "country-by-timezone";

getCountryByTimezone("Asia/Kolkata");
/*
Prints:

{
  countryCode: 'IN',
  countryName: 'India',
  timeZone: 'Asia/Kolkata',
  coordinates: [ '20.0000', '77.0000' ]
}
*/
```

<br/>

## API Reference

#### getCountryByTimezone(input)

Get a country by timezone.

#### input

type: `string | string[]` \
desc: A timezone string or string[] ex: `Asia/Kolkata`

<br/>
  
## Support

You can support my work right here:

<a href="https://www.buymeacoffee.com/rocktimcodes"><img src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg" height="35px"/></a>

<br/>
  
## License

Rocktim Saikia © 2021 [MIT](https://choosealicense.com/licenses/mit/)
