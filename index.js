var jokes = ["Dad, did you get a haircut?, No, I got them all cut!",
     "Why don't eggs tell jokes? They'd crack each other up.",
     "I don't trust stairs. They're always up to something.",
     "Why couldn't the bicycle stand up by itself? It was two tired.",
     "What do you call cheese that isn't yours? Nacho cheese.",
     "Did you hear the rumor about butter? Well, I'm not going to spread it!",
     "Did you hear about the restaurant on the moon? Great food, but no atmosphere!",
     "How many apples grow on a tree? All of them!",
     "What concert costs just 45 cents? 50 Cent featuring Nickelback!",
     "What rock group has four men that don't sing? Mount Rushmore."
];

exports.handler = async (event) => {
     // calculates a random integer from 0 to 9 and returns the position  in array
     let joke = jokes[Math.floor(Math.random()*10)];
     return joke;
};