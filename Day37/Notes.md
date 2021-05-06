## Notes
**Date Objects**
- date objects allow people to work with dates
- date objects are created with a constructor: new Date()
- computer time will tick but date objects are static so they will not
- you can create object with specific date and time
    - (year, month, day, hour, minute, second, millisecond)
    - you can shorten all the way down to (year, month)
    - if you only include one param, it will become millisecond
- default, will output date in full string format
- .toUTCString() will convert to UTC
- .toDateString() is more readable
- .toISOString() for ISO format

**Date formats**
- JS full text string format: Tue Mar 24 2015 17:00:00 GMT-0700 (Pacific Daylight Time)
- JS ISO: YYYY-MM-DD / YYYY-MM / YYYY
- YYYY-MM-DDTHH:MM:SSZ
- [more detail](https://www.w3schools.com/js/js_date_formats.asp)

**[methods](https://www.w3schools.com/js/js_date_methods.asp0)**

**[set methods](https://www.w3schools.com/js/js_date_methods_set.asp)**