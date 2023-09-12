export const maleNames: string[] = [
    "James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", // 0-9
    "Christopher", "Daniel", "Matthew", "Anthony", "Donald", "Mark", "Paul", "Steven", "Andrew", "Kenneth", // 10-19
    "George", "Joshua", "Kevin", "Brian", "Edward", "Ronald", "Timothy", "Jason", "Jeffrey", "Ryan", // 20-29
    "Jacob", "Gary", "Nicholas", "Eric", "Stephen", "Jonathan", "Larry", "Justin", "Scott", "Brandon", // 30-39
    "Benjamin", "Samuel", "Frank", "Gregory", "Raymond", "Alexander", "Patrick", "Jack", "Dennis", "Jerry", // 40-49
    "Tyler", "Aaron", "Jose", "Henry", "Adam", "Douglas", "Nathan", "Peter", "Zachary", "Kyle", // 50-59
    "Walter", "Harold", "Jeremy", "Ethan", "Carl", "Keith", "Roger", "Gerald", "Christian", "Terry", // 60-69
    "Sean", "Arthur", "Austin", "Noah", "Lawrence", "Jesse", "Joe", "Bryan", "Billy", "Jordan", // 70-79
    "Albert", "Dylan", "Bruce", "Willie", "Gabriel", "Alan", "Juan", "Logan", "Wayne", "Ralph", // 80-89
    "Roy", "Eugene", "Randy", "Vincent", "Russell", "Louis", "Philip", "Bobby", "Johnny", "Bradley", // 90-99
    "Harry", "Frederick", "Tony", "Randy", "Howard", "Carlos", "Brandon", "Todd", "Craig", "Stanley", // 100-109
    "Leonard", "Earl", "Gabriel", "Darrell", "Leonard", "Dale", "Cody", "Carlos", "Allen", "Frederick", // 110-119
    "Logan", "Curtis", "Alex", "Joel", "Luis", "Norman", "Marvin", "Glenn", "Tony", "Nathaniel", // 120-129
    "Rodney", "Melvin", "Alfred", "Steve", "Cameron", "Chad", "Edwin", "Caleb", "Evan", "Antonio", // 130-139
    "Lee", "Herbert", "Jeffery", "Isaac", "Derek", "Ricky", "Marcus", "Theodore", "Elijah", "Luke", // 140-149
    "Jesus", "Eddie", "Troy", "Mike", "Dustin", "Ray", "Adrian", "Bernard", "Leroy", "Angel", // 150-159
    "Randall", "Wesley", "Ian", "Jared", "Mason", "Hunter", "Calvin", "Oscar", "Clarence", "Jay", // 160-169
    "Travis", "Charlie", "Perry", "Seth", "Danny", "Bryan", "Alex", "Jack", "Derrick", "Corey", // 170-179
    "Shane", "Ronnie", "Barry", "Lucas", "Corey", "Gerardo", "Jesus", "Garrett", "Micheal", "Cory", // 180-189
    "Derrick", "Brent", "Enrique", "Ricardo", "Cesar", "Andre", "Allan", "Adrian", "Karl", "Mario", // 190-199
]

export function getRandomMaleNames(): string {
    //get between 2 and 4 names and concatenate them
    let nameCount = Math.floor(Math.random() * 3) + 2;
    let name = "";
    for (let i = 0; i < nameCount; i++) {
        let nameIndex = Math.floor(Math.random() * maleNames.length);
        name += maleNames[nameIndex] + " ";
    }
    return name.trim();
}