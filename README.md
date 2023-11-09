# Arabic-English Nationalities

This package provides a list of nationalities in both English and Arabic languages. It exports two functions to retrieve these nationalities in the respective languages.

## Installation

You can install this package via npm:

```bash
npm install arabic-english-nationalities
```
## Usage

### To use this package in your TypeScript project, follow these steps:
Import the package in your TypeScript file:

````typescript
import Nationalities from "arabic-english-nationalities";
````

### Example:
getNationalityNamesEn()
This function returns an array of nationalities in English.

````typescript
const englishNationalities: string[] = Nationalities.getNationalityNamesEn();
console.log(englishNationalities);
````
getNationalityNamesAr()
This function returns an array of nationalities in Arabic.

````typescript
const arabicNationalities: string[] = Nationalities.getNationalityNamesAr();
console.log(arabicNationalities);
````
Make sure to install the @types/node package if you're using Node.js in your TypeScript project.
