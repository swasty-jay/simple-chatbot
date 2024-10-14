document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    appendMessage(userInput, 'user-message');
    document.getElementById('user-input').value = '';

    setTimeout(function () {
        var botResponse = getBotResponse(userInput);
        appendMessage(botResponse, 'bot-message');
    }, 1000);
}

function appendMessage(text, className) {
    var messageElement = document.createElement('div');
    messageElement.className = 'message ' + className;
    messageElement.textContent = text;
    document.getElementById('chat-box').appendChild(messageElement);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

function getBotResponse(input) {
    // Simple static responses. This can be enhanced.
    var responses = {
        'hello': 'Hi there! How can I assist you today?',
        'how are you': 'I am just a bot, but I am here to help!',
        'what is your name': 'I am a simple chatbot created by swasty jay!.',
        'bye': 'Goodbye! Have a great day!',
        'what can you do': 'I can answer your questions with predefined responses.',
        'who created you': 'I was created by a developer using HTML, CSS, and JavaScript.',
        'what is html': 'HTML stands for HyperText Markup Language. It is used to create web pages.',
        'what is css': 'CSS stands for Cascading Style Sheets. It is used to style web pages.',
        'what is javascript': 'JavaScript is a programming language used to create interactive effects within web browsers.',
        'tell me a joke': 'Why don’t scientists trust atoms? Because they make up everything!',
        'what is your purpose': 'I am here to provide information and help you with your queries.',
        'how old are you': 'I don’t have an age, I am a computer program.',
        'what is your favorite color': 'I like all colors equally as I am just a bot.',
        'can you help me': 'Of course! Ask me anything and I will try to help.',
        'what is 2 + 2': '2 + 2 equals 4.',
        'do you have friends': 'I am just a bot, so I don’t have friends.',
        'what is ai': 'AI stands for Artificial Intelligence, the simulation of human intelligence in machines.',
        'what is your favorite food': 'I don’t eat, but I hear pizza is pretty popular!',
        'what do you like to do': 'I like to assist users with their queries.',
        'where are you from': 'I exist in the digital world, created by Swasty jay(a web developer).',
        'what is python' : 'Python is a programming language that lets you work quickly and integrate systems more effectively.',
        'what is machine learning': 'Machine Learning is a subset of AI that involves the use of algorithms and statistical models to perform tasks without explicit instructions.',
        'who is the president of the usa': 'As of 2024, Joe Biden is the president of the USA.',
        'what is the capital of france': 'The capital of France is Paris.',
        'what is the largest planet': 'The largest planet in our solar system is Jupiter.',
        'how many continents are there': 'There are seven continents on Earth.',
        'what is the speed of light': 'The speed of light in a vacuum is approximately 299,792 kilometers per second.',
        'who wrote harry potter': 'The Harry Potter series was written by J.K. Rowling.',
        'what is the boiling point of water': 'The boiling point of water is 100 degrees Celsius or 212 degrees Fahrenheit at sea level.',
        'what is the tallest mountain': 'The tallest mountain in the world is Mount Everest.',
        'what is the smallest country': 'The smallest country in the world is Vatican City.',
        'what is the most spoken language': 'The most spoken language in the world is Mandarin Chinese.',
        'what is a black hole': 'A black hole is a region of space where the gravitational pull is so strong that nothing, not even light, can escape from it.',
        'who invented the telephone': 'The telephone was invented by Alexander Graham Bell.',
        'what is the largest ocean': 'The largest ocean on Earth is the Pacific Ocean.',
        'who painted the mona lisa': 'The Mona Lisa was painted by Leonardo da Vinci.',
        'what is photosynthesis': 'Photosynthesis is the process by which green plants use sunlight to synthesize foods from carbon dioxide and water.',
        'what is the great wall of china': 'The Great Wall of China is a series of fortifications built to protect against invasions and raids.',
        'who is the richest person in the world': 'As of 2024, the richest person in the world is Bernard Arnault.',
        'what is the hardest natural substance': 'The hardest natural substance on Earth is diamond.',
        'what is the human genome': 'The human genome is the complete set of nucleic acid sequences for humans, encoded as DNA.',
        'what is global warming': 'Global warming is the long-term rise in the average temperature of the Earth’s climate system.',
        'what is the fastest animal': 'The fastest land animal is the cheetah, which can run up to 60-70 miles per hour.',
        'who is shakespeare': 'William Shakespeare was an English playwright, poet, and actor, widely regarded as one of the greatest writers in the English language.',
        'what is a rainbow': 'A rainbow is a meteorological phenomenon caused by reflection, refraction, and dispersion of light in water droplets.',
        'what is a solar eclipse': 'A solar eclipse occurs when the Moon passes between the Sun and Earth, blocking the Sun’s light.',
        'what is a lunar eclipse': 'A lunar eclipse occurs when the Earth passes between the Sun and the Moon, casting a shadow on the Moon.',
        'what is the eiffel tower': 'The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France.',
        'what is the population of the world': 'As of 2024, the estimated world population is over 7.9 billion people.',
        'who discovered america': 'Christopher Columbus is credited with discovering the Americas in 1492.',
        'what is the milky way': 'The Milky Way is the galaxy that contains our Solar System.',
        'what is a computer': 'A computer is an electronic device that manipulates information, or data, and can perform a variety of tasks based on a set of instructions.',
        'what is a virus': 'A virus is a small infectious agent that replicates only inside the living cells of an organism.',
        'what is the meaning of life': 'The meaning of life is a philosophical question concerning the significance of life or existence in general.',
        'what is time': 'Time is the indefinite continued progress of existence and events that occur in apparently irreversible succession from the past through the present to the future.',
        'what is space': 'Space is the boundless three-dimensional extent in which objects and events occur and have relative position and direction.',
        'what is gravity': 'Gravity is a force that attracts two bodies toward each other, the force that causes objects to fall to the ground.',
        'what is a star': 'A star is a luminous sphere of plasma held together by its own gravity.',
        'who is albert einstein': 'Albert Einstein was a theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics.',
        'what is relativity': 'Relativity is a theory by Albert Einstein which describes the laws of physics in the absence of gravity and the interwoven nature of space and time.',
        'what is the internet': 'The Internet is a global network of interconnected computers that communicate freely and share and exchange information.',
        'what is quantum mechanics': 'Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles.',
        'what is the speed of sound': 'The speed of sound is approximately 343 meters per second in air at room temperature.',
        'who is isaac newton': 'Isaac Newton was an English mathematician, physicist, astronomer, and author who is widely recognized as one of the most influential scientists of all time.',
        'what is the sun': 'The Sun is the star at the center of the Solar System, a nearly perfect sphere of hot plasma.',
        'what is a galaxy': 'A galaxy is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter.',
        'what is a meteor': 'A meteor is a small body of matter from outer space that enters the Earth’s atmosphere, becoming incandescent as a result of friction and appearing as a streak of light.',
        'what is a comet': 'A comet is an icy small Solar System body that, when passing close to the Sun, warms and begins to release gases, a process called outgassing.',
        'what is a planet': 'A planet is a celestial body moving in an elliptical orbit around a star.',
        'what is the moon': 'The Moon is Earth’s only natural satellite and the fifth largest moon in the Solar System.',
        'what is an atom': 'An atom is the smallest unit of ordinary matter that forms a chemical element.',
        'what is a molecule': 'A molecule is an electrically neutral group of two or more atoms held together by chemical bonds.',
        'what is photosynthesis': 'Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll.',
        'what is dna': 'DNA, or deoxyribonucleic acid, is the molecule that carries the genetic instructions for life.',
        'what is a gene': 'A gene is a basic unit of heredity and a sequence of nucleotides in DNA or RNA that codes for a molecule that has a function.',
        'what is a chromosome': 'A chromosome is a long DNA molecule with part or all of the genetic material of an organism.',
        'what is evolution': 'Evolution is the change in the heritable characteristics of biological populations over successive generations.',
        'what is the theory of evolution': 'The theory of evolution by natural selection, first formulated in Darwin’s book “On the Origin of Species” in 1859, is the process by which organisms change over time as a result of changes in heritable physical or behavioral traits.',
        'who was charles darwin': 'Charles Darwin was an English naturalist, geologist, and biologist, best known for his contributions to the science of evolution.',
        'what is a black hole': 'A black hole is a region of space where the gravitational pull is so strong that nothing, not even light, can escape.',
        'what is the theory of relativity': 'The theory of relativity, developed by Albert Einstein, encompasses two interrelated theories: special relativity and general relativity.',
        'what is an electron': 'An electron is a subatomic particle with a negative electric charge.',
        'what is a proton': 'A proton is a subatomic particle with a positive electric charge found in the nucleus of an atom.',
        'what is a neutron': 'A neutron is a subatomic particle found in the nucleus of an atom with no electric charge.',
        'what is a quark': 'A quark is a type of elementary particle and a fundamental constituent of matter.',
        'what is a neutrino': 'A neutrino is a neutral subatomic particle with a mass close to zero, rarely interacting with normal matter.',
        'what is a light year': 'A light year is a unit of astronomical distance equivalent to the distance that light travels in one year, about 5.88 trillion miles.',
        'what is a parsec': 'A parsec is a unit of distance used in astronomy, equal to about 3.26 light years.',
        'what is dark matter': 'Dark matter is a form of matter thought to account for approximately 85% of the matter in the universe, but not directly observable with current technologies.',
        'what is dark energy': 'Dark energy is a mysterious force that is causing the accelerated expansion of the universe.',
        'what is the big bang theory': 'The Big Bang theory is the prevailing cosmological model explaining the observable universe from the earliest known periods through its subsequent large-scale evolution.',
        'what is a supernova': 'A supernova is a powerful and luminous stellar explosion occurring during the last evolutionary stages of a massive star.',
        'what is a nebula': 'A nebula is a giant cloud of dust and gas in space, some of which are regions where new stars are being formed.',
        'what is a pulsar': 'A pulsar is a highly magnetized rotating neutron star that emits beams of electromagnetic radiation out of its magnetic poles.',
        'what is a binary star': 'A binary star is a system of two stars that orbit around a common center of mass.',
        'what is a red giant': 'A red giant is a late stage in a star’s life cycle characterized by an inflated, cool outer envelope and a core undergoing fusion of helium or heavier elements.',
        'what is a white dwarf': 'A white dwarf is a small, dense star that is the remnant of a low or medium mass star after it has exhausted its nuclear fuel and expelled its outer layers.',
        'what is a black dwarf': 'A black dwarf is a theoretical stellar remnant, specifically a white dwarf that has cooled sufficiently to no longer emit significant heat or light.'
    
    };

    input = input.toLowerCase();
    return responses[input] ||  'I am sorry, I do not understand that.';
}