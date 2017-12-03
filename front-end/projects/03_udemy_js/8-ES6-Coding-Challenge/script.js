/* 
Suppose that you are working in a small town administration, and you're in charge 
of two town elements: parks and streets.

There are only 3 parks and 4 streets. All parks and streets have a name and build year.

You need the final report with the following:
1. Average age of each town's park
2. Tree density of each park in the town (number of trees / park area)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge.
If the size is unknown, the default is normal.

All the report data should be printed to the console:
---PARKS REPORT---
1. Our 3 parks have an average age of 71.3333333333 years.
2. Green Park has a tree density of 1075 trees per square km.
National Park has a tree density ...
Oak Park has a tree density ...
3. National Park has more than 1000 trees. 

---STREETS REPORT---
4. Our 4 streets have a total length of 7.100000005 km, with an average of 1.775000001 km.
5. Ocean Avenue, built in 1999, is a big street.
Evergreen Street, built in 2008, is a small street.
4th Street, built in 2015, is a normal street.
Sunset Boulevard, built in 1982, is a huge street.

Use some of the ES6 features:
- classes
- subclasses
- template strings
- default parameters (lastName = 'Smith')
- maps (new Map(); question.set())
- arrow functions
- destructuring
- etc.
*/

class CityObject {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends CityObject {
  constructor(name, buildYear, area, numOfTrees) {
    super(name, buildYear);
    this.area = area;
    this.numOfTrees = numOfTrees;
  }

  calcTreeDensity() {
    const density = this.numOfTrees / this.area;
    console.log(`${this.name} has a tree density of ${density} trees per square km.`);
  }
}

class Street extends CityObject {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreets() {
    const classification = new Map();
    classification.set(1, 'tyny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(1, 'huge');
    console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)}.`);
  }
}

const allParks = [
  new Park('Green Park', 1987, 0.2, 215),
  new Park('National Park', 1894, 2.9, 3541),
  new Park('Oak Park', 1953, 0.4, 949)
];

const allStreets = [
  new Street('Ocean Avenue', 1999, 1.1, 4),
  new Street('Evergreen Street', 2008, 2.7, 2),
  new Street('4th Street', 2015, 0,8),
  new Street('Sunset Boulevard', 1982, 2.5, 5)
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum, sum / arr.length];  
}

function reportParks(p) {
  console.log('---PARKS REPORT---');
  // Density
  p.forEach(el => el.calcTreeDensity());

  // Average age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

  // Which park has more than 1000 trees
  const i = p.map(el => el.numOfTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
  console.log('---STREETS REPORT---');
  // Total and average length of the town's streets
  const [totalLength, avgLength] = calc(s.map(el => el.length));
  console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

  // Classify sizes
  s.forEach(el => el.classifyStreets());
}

reportParks(allParks);
reportStreets(allStreets);