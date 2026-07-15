export interface Question {
  id: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  answer: boolean;
  explanation: string;
}

export const questions: Question[] = [
  // Animals
  { id: 1, category: 'Animals', difficulty: 'easy', question: 'Cats have a reflective layer in their eyes called the tapetum lucidum.', answer: true, explanation: 'True! This reflective layer helps cats see in low light conditions.' },
  { id: 2, category: 'Animals', difficulty: 'easy', question: 'Dolphins sleep with both eyes closed.', answer: false, explanation: 'False! Dolphins sleep with one eye open to stay alert.' },
  { id: 3, category: 'Animals', difficulty: 'medium', question: 'Octopuses have three hearts.', answer: true, explanation: 'True! Two hearts pump blood to the gills, one to the rest of the body.' },
  { id: 4, category: 'Animals', difficulty: 'medium', question: 'Penguins are found in all continents.', answer: false, explanation: 'False! Penguins are only found in the Southern Hemisphere.' },
  { id: 5, category: 'Animals', difficulty: 'hard', question: 'Platypuses are one of the few mammals that lay eggs.', answer: true, explanation: 'True! Platypuses are monotremes, egg-laying mammals.' },
  
  // Science
  { id: 6, category: 'Science', difficulty: 'easy', question: 'Water boils at 100 degrees Celsius at sea level.', answer: true, explanation: 'True! At sea level, water boils at 100°C (212°F).' },
  { id: 7, category: 'Science', difficulty: 'easy', question: 'Diamonds are the hardest natural substance on Earth.', answer: true, explanation: 'True! Diamonds are the hardest known natural material.' },
  { id: 8, category: 'Science', difficulty: 'medium', question: 'Venus is the hottest planet in our solar system.', answer: true, explanation: 'True! Venus has extreme temperatures due to its thick atmosphere.' },
  { id: 9, category: 'Science', difficulty: 'medium', question: 'Sound travels faster in water than in air.', answer: true, explanation: 'True! Sound travels about 4.3 times faster in water.' },
  { id: 10, category: 'Science', difficulty: 'hard', question: 'Quantum entanglement allows faster-than-light communication.', answer: false, explanation: 'False! While entangled particles are correlated, you cannot transmit information faster than light.' },
  
  // Sports
  { id: 11, category: 'Sports', difficulty: 'easy', question: 'Basketball hoops are 10 feet high.', answer: true, explanation: 'True! Standard basketball rim height is 10 feet (3.05 meters).' },
  { id: 12, category: 'Sports', difficulty: 'easy', question: 'A cricket pitch is 100 yards long.', answer: false, explanation: 'False! A cricket pitch is 22 yards long between wickets.' },
  { id: 13, category: 'Sports', difficulty: 'medium', question: 'Michael Jordan wore number 23 for the entire Chicago Bulls dynasty.', answer: false, explanation: 'False! He wore number 12 briefly in 1990 after his first retirement.' },
  { id: 14, category: 'Sports', difficulty: 'medium', question: 'The Super Bowl is always played on a Sunday.', answer: true, explanation: 'True! The NFL schedules Super Bowl games for Sundays.' },
  { id: 15, category: 'Sports', difficulty: 'hard', question: 'Serena Williams has won more Grand Slam titles than any player in history.', answer: true, explanation: 'True! Serena holds the record with 23 Grand Slam singles titles.' },
  
  // Hip-Hop
  { id: 16, category: 'Hip-Hop', difficulty: 'easy', question: 'Tupac released an album called "All Eyez on Me".', answer: true, explanation: 'True! "All Eyez on Me" was released in 1996 and is a classic.' },
  { id: 17, category: 'Hip-Hop', difficulty: 'easy', question: 'The Notorious B.I.G. is from Los Angeles.', answer: false, explanation: 'False! The Notorious B.I.G. (Biggie Smalls) was from Brooklyn, New York.' },
  { id: 18, category: 'Hip-Hop', difficulty: 'medium', question: 'Jay-Z has a music streaming service called Tidal.', answer: true, explanation: 'True! Jay-Z acquired Tidal in 2015 and serves as music curator.' },
  { id: 19, category: 'Hip-Hop', difficulty: 'medium', question: 'Eminem is from Atlanta.', answer: false, explanation: 'False! Eminem is from Detroit, Michigan.' },
  { id: 20, category: 'Hip-Hop', difficulty: 'hard', question: 'Nas released the album "Illmatic" in 1994.', answer: true, explanation: 'True! "Illmatic" is considered one of the greatest hip-hop albums ever.' },
  
  // Movies
  { id: 21, category: 'Movies', difficulty: 'easy', question: 'Avatar is the highest-grossing film of all time.', answer: true, explanation: 'True! Avatar (2009) held the record until Avatar: The Way of Water.' },
  { id: 22, category: 'Movies', difficulty: 'easy', question: 'Titanic was directed by Christopher Nolan.', answer: false, explanation: 'False! Titanic was directed by James Cameron.' },
  { id: 23, category: 'Movies', difficulty: 'medium', question: 'The Shawshank Redemption was nominated for 7 Academy Awards.', answer: true, explanation: 'True! It was nominated for 7 Oscars including Best Picture.' },
  { id: 24, category: 'Movies', difficulty: 'medium', question: 'Inception features dreams within dreams.', answer: true, explanation: 'True! The film is famous for its layered dream sequences.' },
  { id: 25, category: 'Movies', difficulty: 'hard', question: 'Pulp Fiction is told in chronological order.', answer: false, explanation: 'False! Pulp Fiction is told in a non-linear narrative structure.' },
  
  // Technology
  { id: 26, category: 'Technology', difficulty: 'easy', question: 'Steve Jobs founded Apple Computer Company.', answer: true, explanation: 'True! Steve Jobs co-founded Apple in 1976.' },
  { id: 27, category: 'Technology', difficulty: 'easy', question: 'The first iPhone was released in 2010.', answer: false, explanation: 'False! The first iPhone was released on June 29, 2007.' },
  { id: 28, category: 'Technology', difficulty: 'medium', question: 'Python is a programming language named after Monty Python.', answer: true, explanation: 'True! Guido van Rossum named it after the comedy group.' },
  { id: 29, category: 'Technology', difficulty: 'medium', question: 'Bitcoin was created by Elon Musk.', answer: false, explanation: 'False! Bitcoin was created by someone under the pseudonym Satoshi Nakamoto.' },
  { id: 30, category: 'Technology', difficulty: 'hard', question: 'Artificial Intelligence was coined as a term in 1956 at Dartmouth Summer Research Project.', answer: true, explanation: 'True! The term was formalized at the Dartmouth Conference.' },
  
  // Viral Internet
  { id: 31, category: 'Viral Internet', difficulty: 'easy', question: 'Harambe was a gorilla that became an internet meme in 2016.', answer: true, explanation: 'True! Harambe\'s death sparked viral memes and internet culture.' },
  { id: 32, category: 'Viral Internet', difficulty: 'easy', question: '"Rickroll" originated in 2007.', answer: true, explanation: 'True! Rick rolling became a popular internet prank tradition.' },
  { id: 33, category: 'Viral Internet', difficulty: 'medium', question: 'The "success baby" meme featured a real baby named Sammy.', answer: true, explanation: 'True! The photo was of Sammy Griner taken in 2011.' },
  { id: 34, category: 'Viral Internet', difficulty: 'medium', question: '"That\'s what she said" jokes originated from the Office.', answer: false, explanation: 'False! The joke predates the Office but was popularized by it.' },
  { id: 35, category: 'Viral Internet', difficulty: 'hard', question: 'The dancing baby from Ally McBeal was created using early 3D rendering.', answer: true, explanation: 'True! The baby was one of the first viral 3D animation memes.' },
  
  // History
  { id: 36, category: 'History', difficulty: 'easy', question: 'The Great Wall of China was built in one dynasty.', answer: false, explanation: 'False! The Great Wall was built over many dynasties.' },
  { id: 37, category: 'History', difficulty: 'easy', question: 'The Titanic sank in 1912.', answer: true, explanation: 'True! The Titanic sank on April 15, 1912.' },
  { id: 38, category: 'History', difficulty: 'medium', question: 'The Renaissance began in Italy.', answer: true, explanation: 'True! The Renaissance started in Italy during the 14th century.' },
  { id: 39, category: 'History', difficulty: 'medium', question: 'Ancient Rome was founded in 500 BCE.', answer: false, explanation: 'False! Rome was traditionally founded in 753 BCE.' },
  { id: 40, category: 'History', difficulty: 'hard', question: 'The Library of Alexandria was destroyed by a single fire.', answer: false, explanation: 'False! It was damaged multiple times and gradually declined.' },
  
  // Geography
  { id: 41, category: 'Geography', difficulty: 'easy', question: 'The Sahara is the largest desert in the world.', answer: true, explanation: 'True! The Sahara is the largest hot desert.' },
  { id: 42, category: 'Geography', difficulty: 'easy', question: 'Brazil is the largest country in South America by area.', answer: true, explanation: 'True! Brazil covers about 47% of South American territory.' },
  { id: 43, category: 'Geography', difficulty: 'medium', question: 'Mount Everest is the tallest mountain from sea level.', answer: true, explanation: 'True! Mount Everest is 29,032 feet above sea level.' },
  { id: 44, category: 'Geography', difficulty: 'medium', question: 'Africa is the most populated continent.', answer: false, explanation: 'False! Asia is the most populated continent.' },
  { id: 45, category: 'Geography', difficulty: 'hard', question: 'The Dead Sea is the lowest point on Earth\'s surface.', answer: true, explanation: 'True! The Dead Sea is 1,410 feet below sea level.' },
  
  // Food
  { id: 46, category: 'Food', difficulty: 'easy', question: 'Chocolate comes from cacao beans.', answer: true, explanation: 'True! Cacao beans are fermented and processed to make chocolate.' },
  { id: 47, category: 'Food', difficulty: 'easy', question: 'Tomatoes are vegetables.', answer: false, explanation: 'False! Tomatoes are botanically fruits, though culinarily treated as vegetables.' },
  { id: 48, category: 'Food', difficulty: 'medium', question: 'Wasabi is made from a type of horseradish root.', answer: true, explanation: 'True! True wasabi comes from the wasabi plant root.' },
  { id: 49, category: 'Food', difficulty: 'medium', question: 'Honey never spoils.', answer: true, explanation: 'True! Pure honey has indefinite shelf life due to its composition.' },
  { id: 50, category: 'Food', difficulty: 'hard', question: 'Vanilla is the second most expensive spice after saffron.', answer: true, explanation: 'True! Vanilla is extremely expensive due to labor-intensive cultivation.' },
  
  // Music
  { id: 51, category: 'Music', difficulty: 'easy', question: 'The Beatles are from Liverpool, England.', answer: true, explanation: 'True! The Beatles formed in Liverpool in 1960.' },
  { id: 52, category: 'Music', difficulty: 'easy', question: 'Freddie Mercury was the lead singer of Queen.', answer: true, explanation: 'True! Freddie Mercury fronted Queen from 1970-1991.' },
  { id: 53, category: 'Music', difficulty: 'medium', question: 'David Bowie released "Ziggy Stardust and the Spiders from Mars" in 1972.', answer: true, explanation: 'True! This iconic album was released in 1972.' },
  { id: 54, category: 'Music', difficulty: 'medium', question: 'Mozart was deaf when he composed his symphonies.', answer: false, explanation: 'False! Beethoven was deaf, not Mozart.' },
  { id: 55, category: 'Music', difficulty: 'hard', question: 'Aretha Franklin is known as the Queen of Soul.', answer: true, explanation: 'True! Aretha Franklin earned this title for her legendary career.' },
  
  // AI
  { id: 56, category: 'AI', difficulty: 'easy', question: 'Artificial Intelligence can replicate human consciousness.', answer: false, explanation: 'False! Current AI cannot replicate true consciousness.' },
  { id: 57, category: 'AI', difficulty: 'easy', question: 'Machine Learning is a subset of Artificial Intelligence.', answer: true, explanation: 'True! Machine Learning is a major component of AI.' },
  { id: 58, category: 'AI', difficulty: 'medium', question: 'Deep Learning uses neural networks with multiple layers.', answer: true, explanation: 'True! Deep Learning is based on multi-layered neural networks.' },
  { id: 59, category: 'AI', difficulty: 'medium', question: 'GPT-4 was created by Tesla.', answer: false, explanation: 'False! GPT-4 was created by OpenAI.' },
  { id: 60, category: 'AI', difficulty: 'hard', question: 'The Turing Test measures a machine\'s ability to exhibit intelligent behavior indistinguishable from a human.', answer: true, explanation: 'True! Alan Turing proposed this test in 1950.' },
  
  // Social Media
  { id: 61, category: 'Social Media', difficulty: 'easy', question: 'Twitter was founded in 2006.', answer: true, explanation: 'True! Twitter launched on July 15, 2006.' },
  { id: 62, category: 'Social Media', difficulty: 'easy', question: 'Instagram was the first photo-sharing app.', answer: false, explanation: 'False! There were photo-sharing apps before Instagram.' },
  { id: 63, category: 'Social Media', difficulty: 'medium', question: 'TikTok is a Chinese-owned company.', answer: true, explanation: 'True! TikTok is owned by ByteDance, a Chinese company.' },
  { id: 64, category: 'Social Media', difficulty: 'medium', question: 'LinkedIn is primarily for social entertainment.', answer: false, explanation: 'False! LinkedIn is a professional networking platform.' },
  { id: 65, category: 'Social Media', difficulty: 'hard', question: 'Snapchat was one of the first apps to introduce Stories.', answer: true, explanation: 'True! Snapchat pioneered the Stories feature.' },
  
  // Additional Questions
  { id: 66, category: 'Animals', difficulty: 'hard', question: 'Hummingbirds can fly backwards.', answer: true, explanation: 'True! Hummingbirds can move their wings in a figure-8 pattern.' },
  { id: 67, category: 'Animals', difficulty: 'medium', question: 'Elephants are the only animals that can recognize themselves in a mirror.', answer: false, explanation: 'False! Great apes, dolphins, and some birds can too.' },
  { id: 68, category: 'Science', difficulty: 'hard', question: 'Light travels at approximately 300,000 kilometers per second.', answer: true, explanation: 'True! The speed of light is about 299,792 km/s.' },
  { id: 69, category: 'Science', difficulty: 'medium', question: 'Helium is heavier than nitrogen.', answer: false, explanation: 'False! Nitrogen is heavier than helium.' },
  { id: 70, category: 'Sports', difficulty: 'hard', question: 'Usain Bolt holds the world record for the 100m sprint.', answer: true, explanation: 'True! His record is 9.58 seconds set in 2009.' },
  { id: 71, category: 'Sports', difficulty: 'easy', question: 'Tennis serves are underhand.', answer: false, explanation: 'False! Tennis serves are typically overhand.' },
  { id: 72, category: 'Hip-Hop', difficulty: 'medium', question: 'Drake is from Toronto, Canada.', answer: true, explanation: 'True! Drake was born in Toronto in 1986.' },
  { id: 73, category: 'Hip-Hop', difficulty: 'easy', question: 'Kendrick Lamar is from California.', answer: true, explanation: 'True! Kendrick Lamar is from Compton, California.' },
  { id: 74, category: 'Movies', difficulty: 'hard', question: 'The Lord of the Rings trilogy was directed by Peter Jackson.', answer: true, explanation: 'True! Peter Jackson directed all three films.' },
  { id: 75, category: 'Movies', difficulty: 'medium', question: 'Jurassic Park was released in 1993.', answer: true, explanation: 'True! Jurassic Park premiered on June 11, 1993.' },
  { id: 76, category: 'Technology', difficulty: 'medium', question: 'Linux is free and open-source software.', answer: true, explanation: 'True! Linux is released under the GPL license.' },
  { id: 77, category: 'Technology', difficulty: 'hard', question: 'The internet was invented by a single person.', answer: false, explanation: 'False! It was developed by many researchers over time.' },
  { id: 78, category: 'Viral Internet', difficulty: 'medium', question: 'The "distracted boyfriend" meme features a real photograph.', answer: true, explanation: 'True! It\'s a real stock photo from 2015.' },
  { id: 79, category: 'Viral Internet', difficulty: 'hard', question: 'The "Yodeling Walmart Kid" went viral in 2019.', answer: true, explanation: 'True! Mason Ramsey\'s yodel went viral at a Walmart in 2019.' },
  { id: 80, category: 'History', difficulty: 'medium', question: 'World War II ended in 1945.', answer: true, explanation: 'True! WWII ended in September 1945.' },
  { id: 81, category: 'History', difficulty: 'hard', question: 'The Roman Empire fell in 476 AD.', answer: true, explanation: 'True! The Western Roman Empire fell in 476 AD.' },
  { id: 82, category: 'Geography', difficulty: 'hard', question: 'New Zealand is part of the Australian continent.', answer: false, explanation: 'False! New Zealand is on the Pacific Ring of Fire.' },
  { id: 83, category: 'Geography', difficulty: 'medium', question: 'Paris is the capital of France.', answer: true, explanation: 'True! Paris has been France\'s capital for centuries.' },
  { id: 84, category: 'Food', difficulty: 'medium', question: 'Sushi always contains raw fish.', answer: false, explanation: 'False! Sushi can contain cooked ingredients.' },
  { id: 85, category: 'Food', difficulty: 'hard', question: 'Ketchup was originally made from fermented fish.', answer: true, explanation: 'True! Early ketchup was a Chinese fish sauce.' },
  { id: 86, category: 'Music', difficulty: 'hard', question: 'Elvis Presley is known as the King of Rock and Roll.', answer: true, explanation: 'True! Elvis earned this title for revolutionizing music.' },
  { id: 87, category: 'Music', difficulty: 'medium', question: 'Billie Eilish whispers in most of her songs.', answer: true, explanation: 'True! Her distinctive vocal style features prominent whispering.' },
  { id: 88, category: 'AI', difficulty: 'hard', question: 'Neural networks were inspired by biological brains.', answer: true, explanation: 'True! They mimic how neurons connect and process information.' },
  { id: 89, category: 'AI', difficulty: 'medium', question: 'AI can have emotions.', answer: false, explanation: 'False! Current AI simulates emotions but doesn\'t truly experience them.' },
  { id: 90, category: 'Social Media', difficulty: 'hard', question: 'Facebook was originally called "TheFacebook".', answer: true, explanation: 'True! It launched as "TheFacebook" at Harvard in 2004.' },
  { id: 91, category: 'Social Media', difficulty: 'medium', question: 'YouTube was founded in 2005.', answer: true, explanation: 'True! YouTube was founded on February 14, 2005.' },
  { id: 92, category: 'Animals', difficulty: 'hard', question: 'Ants have a sophisticated communication system using pheromones.', answer: true, explanation: 'True! Pheromones allow ants to communicate complex messages.' },
  { id: 93, category: 'Science', difficulty: 'hard', question: 'A photon has mass.', answer: false, explanation: 'False! Photons are massless particles.' },
  { id: 94, category: 'Sports', difficulty: 'medium', question: 'The Olympics occur every 2 years.', answer: false, explanation: 'False! Summer Olympics are every 4 years, Winter every 4 years too.' },
  { id: 95, category: 'Hip-Hop', difficulty: 'hard', question: 'Wu-Tang Clan is from Staten Island.', answer: true, explanation: 'True! Wu-Tang Clan was formed in Staten Island, New York.' },
  { id: 96, category: 'Movies', difficulty: 'medium', question: 'Forrest Gump won the Academy Award for Best Picture.', answer: true, explanation: 'True! Forrest Gump won in 1995.' },
  { id: 97, category: 'Technology', difficulty: 'hard', question: 'Quantum computers are already faster than traditional computers at all tasks.', answer: false, explanation: 'False! Quantum computers excel at specific problems, not all tasks.' },
  { id: 98, category: 'Viral Internet', difficulty: 'easy', question: 'LOL stands for "Laugh Out Loud".', answer: true, explanation: 'True! LOL is internet slang for laughing out loud.' },
  { id: 99, category: 'History', difficulty: 'easy', question: 'The Statue of Liberty was a gift from France.', answer: true, explanation: 'True! France gifted it to the United States in 1886.' },
  { id: 100, category: 'Geography', difficulty: 'easy', question: 'The Amazon Rainforest is in South America.', answer: true, explanation: 'True! The Amazon spans across multiple South American countries.' }
];