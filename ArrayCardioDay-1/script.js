const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

//prettier-ignore
const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array protype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteenGen = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return 1;
  }
});
console.table(fifteenGen);

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
const fullName = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);

console.table(fullName);

//Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

console.table(ordered);

const orderedByFirstName = inventors.sort((a, b) => {
  if (a.first > b.first) {
    return 1;
  } else {
    return -1;
  }
});
console.table(orderedByFirstName);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  if (lastInventor > nextInventor) {
    return 1;
  } else {
    return -1;
  }
});

console.table(oldest);

// 7. sort Exercise
// Sort the people alphabetically by last name
const orderedByLastName = people.sort((last, first) => {
  const [aLast, aFirst] = last.split(", ");
  // console.log(aLast, aFirst);
  const [bLast, bFirst] = first.split(", ");
  if (aLast > bLast) {
    return 1;
  } else {
    return -1;
  }
});
console.table(orderedByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these

//prettier-ignore
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);
