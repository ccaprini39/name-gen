export const femaleNames : string[] = [
    "Mary", "Patricia", "Linda", "Barbara", "Elizabeth", "Jennifer", "Maria", "Susan", "Margaret", "Dorothy", // 0-9
    "Lisa", "Nancy", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", // 10-19
    "Michelle", "Laura", "Sarah", "Kimberly", "Deborah", "Jessica", "Shirley", "Cynthia", "Angela", "Melissa", // 20-29
    "Brenda", "Amy", "Anna", "Rebecca", "Virginia", "Kathleen", "Pamela", "Martha", "Debra", "Amanda", // 30-39
    "Stephanie", "Carolyn", "Christine", "Marie", "Janet", "Catherine", "Frances", "Ann", "Joyce", "Diane", // 40-49
    "Alice", "Julie", "Heather", "Teresa", "Doris", "Gloria", "Evelyn", "Jean", "Cheryl", "Mildred", // 50-59
    "Katherine", "Joan", "Ashley", "Judith", "Rose", "Janice", "Kelly", "Nicole", "Judy", "Christina", // 60-69
    "Kathy", "Theresa", "Beverly", "Denise", "Tammy", "Irene", "Jane", "Lori", "Rachel", "Marilyn", // 70-79
    "Andrea", "Kathryn", "Louise", "Sara", "Anne", "Jacqueline", "Wanda", "Bonnie", "Julia", "Ruby", // 80-89
    "Lois", "Tina", "Phyllis", "Norma", "Paula", "Diana", "Annie", "Lillian", "Emily", "Robin", // 90-99
    "Peggy", "Crystal", "Gladys", "Rita", "Dawn", "Connie", "Florence", "Tracy", "Edna", "Tiffany", // 100-109
    "Carmen", "Rosa", "Cindy", "Grace", "Wendy", "Victoria", "Edith", "Kim", "Sherry", "Sylvia", // 110-119
    "Josephine", "Thelma", "Shannon", "Sheila", "Ethel", "Ellen", "Elaine", "Marjorie", "Carrie", "Charlotte", // 120-129
    "Monica", "Esther", "Pauline", "Emma", "Juanita", "Anita", "Rhonda", "Hazel", "Amber", "Eva", // 130-139
    "Debbie", "April", "Leslie", "Clara", "Lucille", "Jamie", "Joanne", "Eleanor", "Valerie", "Danielle", // 140-149
    "Megan", "Alicia", "Suzanne", "Michele", "Gail", "Bertha", "Darlene", "Veronica", "Jill", "Erin", // 150-159
    "Geraldine", "Lauren", "Cathy", "Joann", "Lorraine", "Lynn", "Sally", "Regina", "Erica", "Beatrice", // 160-169
    "Dolores", "Bernice", "Audrey", "Yvonne", "Annette", "June", "Samantha", "Marion", "Dana", "Stacy", // 170-179
    "Ana", "Renee", "Ida", "Vivian", "Roberta", "Holly", "Brittany", "Melanie", "Loretta", "Yolanda", // 180-189
    "Jeanette", "Laurie", "Katie", "Kristen", "Vanessa", "Alma", "Sue", "Elsie", "Beth", "Jeanne", // 190-199
]

export function getRandomFemaleNames(): string {
    //get between 2 and 4 names and concatenate them
    let nameCount = Math.floor(Math.random() * 3) + 2;
    let name = "";
    for (let i = 0; i < nameCount; i++) {
        let nameIndex = Math.floor(Math.random() * femaleNames.length);
        name += femaleNames[nameIndex] + " ";
    }
    return name.trim();
}