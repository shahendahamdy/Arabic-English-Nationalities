// index.js
const NationalityData = require("./Arabic-English-NAtionalities.json");

function getNationalityNamesEn() {
  const NationalitiyNames = NationalityData.map(
    (Nationality) => Nationality.nationality_en
  );
  return NationalitiyNames;
}
function getNationalityNamesAr() {
  const NationalitiyNames = NationalityData.map(
    (Nationality) => Nationality.natianality_ar
  );
  return NationalitiyNames;
}
module.exports = {
  getNationalityNamesEn,
  getNationalityNamesAr,
};
