// Comprehensive Slang Dictionary Database - 100+ Terms
const slangCategories = ['all', 'trending', 'compliment', 'criticism', 'internet', 'emotion', 'common'];

const slangDictionary = {
    // Core Slang Terms
    "rizz": {
        definition: "Charisma or charm, especially the ability to attract romantic interest. The art of being smooth with people you're attracted to.",
        emoji: "😏",
        example: "He's got so much rizz, he got her number in 2 minutes",
        tags: ["compliment", "2023"],
        reverse: ["charm", "charisma", "game", "flirting skills"]
    },
    "unspoken rizz": {
        definition: "The ability to attract someone without saying a word, purely through looks, body language, or presence.",
        emoji: "🤫",
        example: "He walked in and she was already interested - that's unspoken rizz",
        tags: ["compliment"],
        reverse: ["silent charm", "natural attractiveness"]
    },
    "skibidi": {
        definition: "Originally from a viral video series 'Skibidi Toilet'. Used as a nonsense word or to describe something weird, chaotic, or absurd. Often used ironically.",
        emoji: "🚽",
        example: "That whole situation was so skibidi bro",
        tags: ["meme", "internet", "2023"],
        reverse: ["weird", "absurd", "chaotic", "random"]
    },
    "ohio": {
        definition: "Used to describe something extremely weird, cursed, or inexplicable. Comes from the meme 'Only in Ohio' suggesting strange things happen there.",
        emoji: "🌽",
        example: "Bro saw a raccoon driving a car, that's so Ohio",
        tags: ["meme", "weird", "2023"],
        reverse: ["weird", "strange", "cursed", "inexplicable"]
    },
    "lowkey": {
        definition: "Subtly, secretly, or to a moderate degree. Used to downplay or soften a statement.",
        emoji: "🤐",
        example: "I lowkey want to leave this party",
        tags: ["common", "modifier"],
        reverse: ["kind of", "secretly", "subtly", "a little bit"]
    },
    "highkey": {
        definition: "Openly, obviously, or intensely. The opposite of lowkey - used to emphasize something strongly.",
        emoji: "📢",
        example: "I highkey need a vacation right now",
        tags: ["common", "modifier"],
        reverse: ["really", "definitely", "openly", "very much"]
    },
    "no cap": {
        definition: "No lie, for real, I'm being completely honest. Used to emphasize truthfulness.",
        emoji: "🧢",
        example: "No cap, that was the best movie I've ever seen",
        tags: ["common", "emphasis"],
        reverse: ["no lie", "for real", "honestly", "I'm serious"]
    },
    "cap": {
        definition: "A lie or to lie. Calling something 'cap' means you think it's false.",
        emoji: "🧢",
        example: "That story is cap, there's no way that happened",
        tags: ["common"],
        reverse: ["lie", "false", "not true", "BS"]
    },
    "bussin": {
        definition: "Really good, especially when describing food. Can also mean something is excellent or amazing.",
        emoji: "😋",
        example: "This pizza is bussin fr fr",
        tags: ["food", "compliment"],
        reverse: ["delicious", "amazing", "really good", "excellent"]
    },
    "fr fr": {
        definition: "For real for real. Double emphasis on being serious or genuine about something.",
        emoji: "💯",
        example: "I need to start working out fr fr",
        tags: ["emphasis", "common"],
        reverse: ["for real", "seriously", "I mean it", "genuinely"]
    },
    "bet": {
        definition: "Okay, sure, sounds good. Used to agree with someone or confirm a plan.",
        emoji: "🤝",
        example: "Wanna grab food later? Bet.",
        tags: ["agreement", "common"],
        reverse: ["okay", "sure", "sounds good", "deal", "alright"]
    },
    "slay": {
        definition: "To do something exceptionally well, to look amazing, or to succeed impressively.",
        emoji: "💅",
        example: "You absolutely slayed that presentation!",
        tags: ["compliment", "success"],
        reverse: ["did amazing", "killed it", "nailed it", "succeeded"]
    },
    "era": {
        definition: "A phase or period in someone's life defined by a particular mindset, aesthetic, or behavior.",
        emoji: "✨",
        example: "I'm in my villain era, I'm done being nice",
        tags: ["personality", "phase"],
        reverse: ["phase", "period", "chapter", "stage of life"]
    },
    "ate": {
        definition: "Did something really well, performed excellently. Past tense of 'eating' (slaying).",
        emoji: "🍽️",
        example: "She ate that performance and left no crumbs",
        tags: ["compliment", "success"],
        reverse: ["did amazing", "performed perfectly", "nailed it"]
    },
    "left no crumbs": {
        definition: "Did something so perfectly there's nothing to criticize. Complete and flawless execution.",
        emoji: "✨",
        example: "That outfit? She ate and left no crumbs",
        tags: ["compliment", "perfect"],
        reverse: ["did it perfectly", "flawless", "nothing to criticize"]
    },
    "mid": {
        definition: "Mediocre, average, nothing special. Used to express disappointment or that something is underwhelming.",
        emoji: "😐",
        example: "The new album is kinda mid tbh",
        tags: ["criticism", "opinion"],
        reverse: ["mediocre", "average", "nothing special", "underwhelming"]
    },
    "fire": {
        definition: "Amazing, excellent, really cool. High praise for something impressive.",
        emoji: "🔥",
        example: "That new song is straight fire",
        tags: ["compliment", "common"],
        reverse: ["amazing", "excellent", "really cool", "awesome"]
    },
    "sus": {
        definition: "Suspicious or suspect. Something or someone seems off or untrustworthy.",
        emoji: "🤨",
        example: "He's been acting real sus lately",
        tags: ["suspicious", "common"],
        reverse: ["suspicious", "sketchy", "questionable", "shady"]
    },
    "valid": {
        definition: "Acceptable, good, or makes sense. Used to approve of something or acknowledge a point.",
        emoji: "✅",
        example: "Your concerns are valid, I get it",
        tags: ["approval", "common"],
        reverse: ["acceptable", "makes sense", "understandable", "fair"]
    },
    "based": {
        definition: "Authentic, unapologetically oneself, or having a bold opinion regardless of what others think.",
        emoji: "👑",
        example: "That's a based take, I respect it",
        tags: ["compliment", "opinion"],
        reverse: ["authentic", "bold", "unapologetic", "real"]
    },
    "W": {
        definition: "Win. Something good or a success. Can also mean 'that's great' or 'good job'.",
        emoji: "🏆",
        example: "Got the job! That's a huge W",
        tags: ["success", "common"],
        reverse: ["win", "success", "good thing", "victory"]
    },
    "L": {
        definition: "Loss or failure. Something bad or an embarrassing situation.",
        emoji: "😔",
        example: "Tripped in front of my crush, massive L",
        tags: ["failure", "common"],
        reverse: ["loss", "failure", "bad thing", "embarrassment"]
    },
    "ick": {
        definition: "A sudden feeling of disgust or turn-off about someone, often for a small or irrational reason.",
        emoji: "🤢",
        example: "He said 'yummy' and I got the ick immediately",
        tags: ["disgust"],
        reverse: ["turn-off", "disgust", "sudden repulsion"]
    },
    "simp": {
        definition: "Someone who does way too much for someone they like, often without getting anything in return.",
        emoji: "🥺",
        example: "He bought her a car and they're not even dating, total simp",
        tags: ["criticism"],
        reverse: ["someone who tries too hard", "overly devoted person"]
    },
    "stan": {
        definition: "An extremely devoted fan. To 'stan' someone means to support them enthusiastically.",
        emoji: "🙌",
        example: "I stan Taylor Swift, no shame",
        tags: ["fandom", "support"],
        reverse: ["superfan", "devoted supporter", "enthusiastically support"]
    },
    "snatched": {
        definition: "Looking really good, on point. Often used to describe appearance or fashion.",
        emoji: "💫",
        example: "Your makeup is absolutely snatched today",
        tags: ["compliment", "appearance"],
        reverse: ["on point", "looking perfect", "flawless look"]
    },
    "vibe": {
        definition: "The feeling or atmosphere of a place/person/thing. Also means to relax or enjoy something.",
        emoji: "🌊",
        example: "This place has such good vibes",
        tags: ["feeling", "common"],
        reverse: ["feeling", "atmosphere", "energy", "mood"]
    },
    "vibe check": {
        definition: "Assessing the mood or energy of a situation or person.",
        emoji: "🔍",
        example: "Let me do a quick vibe check on the party",
        tags: ["assessment", "common"],
        reverse: ["mood assessment", "checking the atmosphere"]
    },
    "rent free": {
        definition: "When something or someone constantly occupies your thoughts without effort.",
        emoji: "🧠",
        example: "That embarrassing moment lives rent free in my head",
        tags: ["thoughts", "obsession"],
        reverse: ["constantly thinking about", "can't stop thinking about"]
    },
    "hits different": {
        definition: "Something feels unique or especially meaningful in a particular context.",
        emoji: "💫",
        example: "Music hits different at 3am",
        tags: ["feeling", "unique"],
        reverse: ["feels special", "feels different", "uniquely meaningful"]
    },
    "understood the assignment": {
        definition: "Someone knew exactly what to do and executed it perfectly.",
        emoji: "📝",
        example: "Her Met Gala outfit? She understood the assignment",
        tags: ["compliment", "success"],
        reverse: ["knew exactly what to do", "did it perfectly"]
    },
    "main character": {
        definition: "Living life as if you're the protagonist of a movie. Self-focused in a confident way.",
        emoji: "🎬",
        example: "Walking through the city with my coffee, feeling like the main character",
        tags: ["confidence", "aesthetic"],
        reverse: ["protagonist mindset", "center of attention", "living confidently"]
    },
    "npc": {
        definition: "Non-playable character. Someone who seems to lack original thought or personality, like a background character.",
        emoji: "🤖",
        example: "Those people just follow trends, total NPCs",
        tags: ["criticism", "gaming"],
        reverse: ["background person", "someone with no personality", "follower"]
    },
    "touch grass": {
        definition: "Go outside and experience real life. Usually said to someone spending too much time online.",
        emoji: "🌿",
        example: "You've been arguing on Twitter for 6 hours, go touch grass",
        tags: ["criticism", "internet"],
        reverse: ["go outside", "get off the internet", "experience real life"]
    },

    "salty": {
        definition: "Bitter, upset, or annoyed, especially about a loss or something trivial.",
        emoji: "🧂",
        example: "Stop being so salty just because you lost the game",
        tags: ["emotion", "common"],
        reverse: ["bitter", "upset", "annoyed", "resentful"]
    },
    "dead": {
        definition: "Finding something extremely funny. Short for 'I'm dead laughing'.",
        emoji: "💀",
        example: "That meme has me dead 💀",
        tags: ["humor", "common"],
        reverse: ["that's hilarious", "I'm laughing so hard", "so funny"]
    },
    "ghosting": {
        definition: "Suddenly cutting off all communication with someone without explanation.",
        emoji: "👻",
        example: "He just stopped replying, totally ghosted me",
        tags: ["communication"],
        reverse: ["ignoring someone", "disappearing", "cutting contact"]
    },
    "periodt": {
        definition: "Period but with emphasis. End of discussion, that's final.",
        emoji: "💅",
        example: "She's the best singer of this generation, periodt",
        tags: ["emphasis", "common"],
        reverse: ["end of discussion", "that's final", "and that's that"]
    },
    "sending me": {
        definition: "Something is making you laugh uncontrollably or lose composure.",
        emoji: "😂",
        example: "His dance moves are sending me",
        tags: ["humor", "common"],
        reverse: ["making me laugh so hard", "killing me", "hilarious"]
    },
    "caught in 4k": {
        definition: "Caught red-handed with clear evidence. No way to deny what you did.",
        emoji: "📸",
        example: "He said he wasn't at the party but I caught him in 4k",
        tags: ["evidence", "caught"],
        reverse: ["caught with evidence", "caught red-handed", "exposed"]
    },
    "it's giving": {
        definition: "Something or someone is giving off a particular energy or vibe.",
        emoji: "✨",
        example: "This outfit is giving main character energy",
        tags: ["expression", "vibe"],
        reverse: ["it reminds me of", "it feels like", "it has the energy of"]
    },
    "finna": {
        definition: "Fixing to / going to. About to do something.",
        emoji: "👉",
        example: "I'm finna head out",
        tags: ["common", "action"],
        reverse: ["going to", "about to", "fixing to"]
    },
    "cheugy": {
        definition: "Out of date, trying too hard to be trendy, or slightly cringey in an outdated way.",
        emoji: "😬",
        example: "Live laugh love signs are so cheugy",
        tags: ["criticism", "outdated"],
        reverse: ["outdated", "trying too hard", "unfashionable"]
    },

    "fanum tax": {
        definition: "Taking someone else's food, named after streamer Fanum who's known for stealing bites of food.",
        emoji: "🍔",
        example: "He just took my fries - classic fanum tax",
        tags: ["food", "meme", "2023"],
        reverse: ["stealing food", "taking a bite of someone's food"]
    },
    "sigma": {
        definition: "A supposed 'lone wolf' personality type. Someone who doesn't follow the crowd and does their own thing.",
        emoji: "🐺",
        example: "He's on that sigma grindset, only focuses on himself",
        tags: ["personality", "meme"],
        reverse: ["lone wolf", "independent person", "self-focused individual"]
    },
    "brainrot": {
        definition: "When you've consumed so much internet content that your brain feels fried. Also refers to extremely online humor.",
        emoji: "🧠",
        example: "I have complete brainrot from TikTok",
        tags: ["internet", "humor", "2023"],
        reverse: ["internet-addled mind", "too much screen time", "fried brain"]
    },
    "mewing": {
        definition: "A tongue posture technique supposedly for improving jawline. Became a viral trend/meme.",
        emoji: "😤",
        example: "He's been mewing for 6 months hoping to get a better jawline",
        tags: ["meme", "trend", "2023"],
        reverse: ["tongue posture technique", "jawline exercise meme"]
    },
    "low taper fade": {
        definition: "A popular haircut style where hair gradually fades from longer on top to shorter on the sides. Became a meme associated with 'brainrot' content.",
        emoji: "💇",
        example: "Every guy at school got the low taper fade now",
        tags: ["meme", "fashion", "2023"],
        reverse: ["trendy haircut", "fade hairstyle", "popular Gen Z haircut"]
    },
    "🥀": {
        definition: "Wilted rose emoji. Often used to express sadness, disappointment, or dramatic emotions. Part of the 'brainrot' meme culture.",
        emoji: "🥀",
        example: "She left me on read 🥀",
        tags: ["emoji", "sad", "meme"],
        reverse: ["sad", "disappointment", "dramatic sadness", "feeling down"]
    },
    "wilted rose": {
        definition: "Symbolizes sadness or disappointment with dramatic flair. The emoji 🥀 is used to express melancholy in a semi-ironic way.",
        emoji: "🥀",
        example: "When bae doesn't text back 🥀",
        tags: ["emoji", "sad", "meme"],
        reverse: ["sad", "disappointed", "heartbroken dramatically"]
    },
    "aura": {
        definition: "The energy or presence someone gives off. Can be positive or negative. Often used in memes about gaining or losing 'aura points'.",
        emoji: "✨",
        example: "He tripped in public - minus 500 aura",
        tags: ["meme", "energy", "2023"],
        reverse: ["energy", "presence", "reputation points", "social credibility"]
    },
    "goated": {
        definition: "Being the GOAT (Greatest Of All Time). Exceptionally good at something.",
        emoji: "🐐",
        example: "LeBron is absolutely goated",
        tags: ["compliment", "sports"],
        reverse: ["the greatest", "legendary", "the best ever"]
    },
    "cope": {
        definition: "Dealing with something by making excuses or rationalizing. Often used to dismiss someone's argument.",
        emoji: "🥲",
        example: "You think that team is better? Cope.",
        tags: ["argument", "dismissal"],
        reverse: ["making excuses", "in denial", "rationalizing a loss"]
    },
    "seethe": {
        definition: "To be extremely angry or bitter about something. Often paired with 'cope'.",
        emoji: "😤",
        example: "Haters gonna cope and seethe",
        tags: ["emotion", "angry"],
        reverse: ["being furious", "extremely upset", "bitter anger"]
    },
    "ratio": {
        definition: "When a reply gets more likes than the original post, indicating disagreement with the original.",
        emoji: "📊",
        example: "That take was so bad he got ratio'd instantly",
        tags: ["social media", "twitter"],
        reverse: ["getting more disagreement than agreement", "public rejection"]
    },
    "glazing": {
        definition: "Excessively praising or complimenting someone, often to the point of being insincere.",
        emoji: "🍩",
        example: "Stop glazing him, he's not that good",
        tags: ["criticism", "compliment"],
        reverse: ["excessive praise", "over-complimenting", "sucking up"]
    },
    "meat riding": {
        definition: "Excessively supporting or defending someone, similar to glazing but more intense.",
        emoji: "🏇",
        example: "The fans are meat riding so hard right now",
        tags: ["criticism", "fandom"],
        reverse: ["being an excessive fan", "defending too hard", "blind support"]
    },
    "yap": {
        definition: "To talk a lot, often about nothing important. Can be used as 'yapping' or 'yap session'.",
        emoji: "🗣️",
        example: "Let him yap, he's not saying anything real",
        tags: ["talking", "common"],
        reverse: ["talking too much", "rambling", "going on and on"]
    },
    "yapping": {
        definition: "Talking excessively, especially about unimportant things.",
        emoji: "🗣️",
        example: "He's been yapping for an hour straight",
        tags: ["talking", "common"],
        reverse: ["talking too much", "rambling on", "won't stop talking"]
    },
    "that's crazy": {
        definition: "Can mean something is actually crazy, but often used sarcastically when not paying attention or not caring.",
        emoji: "😮",
        example: "*friend tells long story* 'That's crazy bro'",
        tags: ["reaction", "sarcasm"],
        reverse: ["wow", "I'm not really listening", "interesting (sarcastic)"]
    },
    "real": {
        definition: "Genuine, authentic, or agreeing with something. Can stand alone as a response meaning 'that's true'.",
        emoji: "💯",
        example: "That's so real, I feel the same way",
        tags: ["agreement", "authentic"],
        reverse: ["true", "genuine", "I agree", "authentic"]
    },
    "big yikes": {
        definition: "An expression of something being very cringy, awkward, or unfortunate.",
        emoji: "😬",
        example: "She texted her ex 47 times... big yikes",
        tags: ["cringe", "reaction"],
        reverse: ["very awkward", "super cringy", "embarrassing"]
    },
    "canceled": {
        definition: "Being publicly rejected or boycotted, usually for controversial actions or statements.",
        emoji: "❌",
        example: "He got canceled for those old tweets",
        tags: ["social media", "controversy"],
        reverse: ["publicly boycotted", "socially rejected", "reputation destroyed"]
    },
    "slaps": {
        definition: "Something is really good, especially music. Similar to 'fire' or 'bussin'.",
        emoji: "👋",
        example: "This new song absolutely slaps",
        tags: ["music", "compliment"],
        reverse: ["is really good", "is amazing", "is excellent"]
    },
    "bop": {
        definition: "A really catchy, good song.",
        emoji: "🎵",
        example: "That song is such a bop",
        tags: ["music", "compliment"],
        reverse: ["catchy song", "good song", "hit song"]
    },
    "hits": {
        definition: "Something is very good or impactful. Similar to 'slaps'.",
        emoji: "💥",
        example: "That new album really hits",
        tags: ["music", "compliment"],
        reverse: ["is impactful", "is really good", "resonates"]
    },
    "demure": {
        definition: "Being modest, reserved, and mindful in a coy way. Went viral from 'very demure, very mindful' trend.",
        emoji: "🎀",
        example: "The way I showed up to work on time, very demure",
        tags: ["trending", "2024", "viral"],
        reverse: ["modest", "reserved", "elegant", "mindful"]
    },
    "very mindful": {
        definition: "Being considerate and thoughtful. Part of the viral 'very demure, very mindful' trend.",
        emoji: "🧘",
        example: "I didn't eat the last slice, very mindful of me",
        tags: ["trending", "2024", "viral"],
        reverse: ["thoughtful", "considerate", "self-aware"]
    },
    "brat summer": {
        definition: "An aesthetic/attitude of being unapologetically confident, messy, and having fun. From Charli XCX's 'brat' album.",
        emoji: "💚",
        example: "We're not being chill anymore, it's brat summer",
        tags: ["trending", "2024", "music"],
        reverse: ["carefree attitude", "unapologetic fun", "wild summer"]
    },
    "brat": {
        definition: "Being confident, chaotic, and unapologetically yourself. Embracing messy, fun energy.",
        emoji: "💚",
        example: "She's so brat, I love her energy",
        tags: ["trending", "2024", "personality"],
        reverse: ["chaotic", "confident", "unapologetic", "wild"]
    },
    "understood": {
        definition: "Short for 'understood the assignment'. Someone did exactly what was needed perfectly.",
        emoji: "📝",
        example: "That outfit for the party? Understood.",
        tags: ["compliment", "common"],
        reverse: ["got it right", "did it perfectly", "nailed it"]
    },
    "mother": {
        definition: "A term of admiration for someone who is iconic, powerful, or serving looks.",
        emoji: "👑",
        example: "Beyoncé is mother, she can do no wrong",
        tags: ["compliment", "icon"],
        reverse: ["icon", "queen", "legend", "powerful woman"]
    },
    "serve": {
        definition: "To deliver an exceptional performance or look. To show up and show out.",
        emoji: "💫",
        example: "She really served with that red carpet look",
        tags: ["compliment", "fashion"],
        reverse: ["deliver", "show up impressively", "kill it"]
    },
    "giving face": {
        definition: "Showing exceptional confidence and attractiveness, especially through facial expressions.",
        emoji: "💄",
        example: "The model was giving face in every photo",
        tags: ["beauty", "fashion"],
        reverse: ["looking confident", "showing personality", "being photogenic"]
    },
    "ate that up": {
        definition: "Did something extremely well. Devoured the competition or task.",
        emoji: "🍽️",
        example: "Your presentation? You ate that up!",
        tags: ["compliment", "success"],
        reverse: ["crushed it", "absolutely killed it", "dominated"]
    },
    "is she fr": {
        definition: "Is she for real? Expression of disbelief or shock at someone's actions.",
        emoji: "😦",
        example: "She wore that to the interview? Is she fr?",
        tags: ["disbelief", "common"],
        reverse: ["is she serious", "is she joking", "really?"]
    },
    "naur": {
        definition: "A playful/mocking way of saying 'no' in an Australian accent. Used for comedic effect.",
        emoji: "🇦🇺",
        example: "Naur, I'm not doing that",
        tags: ["humor", "internet"],
        reverse: ["no", "nope", "no way"]
    },
    "bestie": {
        definition: "Best friend, but often used casually to address anyone in a friendly way.",
        emoji: "👯",
        example: "Bestie, we need to talk about your outfit",
        tags: ["friendship", "common"],
        reverse: ["best friend", "friend", "buddy"]
    },
    "pick me": {
        definition: "Someone who seeks validation by putting down their own gender to seem different or appeal to the opposite sex.",
        emoji: "🙋",
        example: "She said 'I'm not like other girls', total pick me behavior",
        tags: ["criticism", "social"],
        reverse: ["attention seeker", "try-hard", "validation seeker"]
    },
    "ate and left no crumbs": {
        definition: "Did something absolutely perfectly with nothing to criticize.",
        emoji: "✨",
        example: "That performance? She ate and left no crumbs",
        tags: ["compliment", "perfect"],
        reverse: ["absolutely perfect", "flawless execution", "nothing to improve"]
    },
    "it's the ___ for me": {
        definition: "Calling out a specific thing about someone or something, can be positive or negative.",
        emoji: "👀",
        example: "It's the audacity for me",
        tags: ["expression", "common"],
        reverse: ["specifically the ___ is notable", "what stands out is the ___"]
    },
    "living for this": {
        definition: "Really enjoying or being obsessed with something.",
        emoji: "❤️‍🔥",
        example: "This drama? I'm living for this",
        tags: ["enthusiasm", "common"],
        reverse: ["love this", "obsessed with this", "really enjoying"]
    },
    "tbh": {
        definition: "To be honest. Used before sharing an honest opinion.",
        emoji: "💭",
        example: "Tbh, I didn't like the movie",
        tags: ["common", "expression"],
        reverse: ["to be honest", "honestly", "truthfully"]
    },
    "ngl": {
        definition: "Not gonna lie. Used to preface an honest or potentially controversial statement.",
        emoji: "🗣️",
        example: "Ngl, that was actually pretty good",
        tags: ["common", "expression"],
        reverse: ["not going to lie", "honestly", "I'll admit"]
    },
    "iykyk": {
        definition: "If You Know You Know. Used for insider references or experiences.",
        emoji: "🤫",
        example: "That back alley restaurant, iykyk",
        tags: ["common", "internet"],
        reverse: ["if you know you know", "insider knowledge", "you get it"]
    },
    "ong": {
        definition: "On God. Used to swear something is true or emphasize sincerity.",
        emoji: "🙏",
        example: "Ong, I didn't do it",
        tags: ["emphasis", "common"],
        reverse: ["I swear", "on my life", "I promise"]
    },
    "pookie": {
        definition: "A cute term of endearment for someone you love or find adorable.",
        emoji: "🥰",
        example: "You're my little pookie",
        tags: ["cute", "trending"],
        reverse: ["sweetie", "cutie", "darling", "babe"]
    },
    "iconic": {
        definition: "So amazing or unique that it's legendary. Worthy of being remembered.",
        emoji: "⭐",
        example: "That moment was absolutely iconic",
        tags: ["compliment", "common"],
        reverse: ["legendary", "unforgettable", "amazing", "classic"]
    },
    "purr": {
        definition: "Expression of approval or agreement. Like saying 'yes queen' or 'agreed'.",
        emoji: "😽",
        example: "You got the promotion? Purr!",
        tags: ["approval", "common"],
        reverse: ["yes", "love it", "agreed", "perfect"]
    },
    "say less": {
        definition: "I understand and I'm in. No need to explain further.",
        emoji: "🤐",
        example: "Free food? Say less, I'm there",
        tags: ["agreement", "common"],
        reverse: ["I'm in", "no need to explain", "I understand"]
    },
    "I fear": {
        definition: "I'm worried/afraid that something is the case. Often used humorously.",
        emoji: "😰",
        example: "I fear I've become too invested in this show",
        tags: ["humor", "expression"],
        reverse: ["I'm afraid that", "I'm worried that", "unfortunately"]
    },
    "not the ___": {
        definition: "Expression of disbelief or calling something out as embarrassing or notable.",
        emoji: "💀",
        example: "Not the matching outfits 💀",
        tags: ["humor", "embarrassment"],
        reverse: ["can't believe the ___", "look at the ___", "really, the ___?"]
    },
    "era": {
        definition: "A phase or period in someone's life defined by a particular mindset.",
        emoji: "✨",
        example: "I'm in my healing era",
        tags: ["personality", "common"],
        reverse: ["phase", "chapter", "period"]
    },
    "roman empire": {
        definition: "Something you think about very frequently, based on the meme asking men how often they think about the Roman Empire.",
        emoji: "🏛️",
        example: "That embarrassing moment from 2015 is my Roman Empire",
        tags: ["meme", "2023"],
        reverse: ["obsessive thought", "something I can't stop thinking about"]
    },
    "girl dinner": {
        definition: "A random assortment of snacks or small foods eaten as a meal, typically when eating alone.",
        emoji: "🧀",
        example: "Just having some cheese, crackers and pickles - classic girl dinner",
        tags: ["food", "meme", "2023"],
        reverse: ["snack plate", "random snacks for dinner", "casual meal"]
    },
    "receipts": {
        definition: "Proof or evidence, especially screenshots of conversations or documentation.",
        emoji: "🧾",
        example: "You said you didn't do it? I have receipts",
        tags: ["evidence", "drama"],
        reverse: ["proof", "evidence", "documentation", "screenshots"]
    },
    "the vibes are off": {
        definition: "Something feels wrong or uncomfortable about a situation.",
        emoji: "😬",
        example: "I don't know what happened but the vibes are off today",
        tags: ["feeling", "common"],
        reverse: ["something feels wrong", "uncomfortable atmosphere", "bad energy"]
    },
    "unalive": {
        definition: "A way to refer to death or self-harm while avoiding content moderation on platforms.",
        emoji: "💀",
        example: "The plot twist made me want to unalive myself (figuratively)",
        tags: ["internet", "censor"],
        reverse: ["die", "end my life (dramatically)", "I can't handle this"]
    },
    "chronically online": {
        definition: "Spending so much time on the internet that your worldview is shaped by online culture.",
        emoji: "💻",
        example: "Only someone chronically online would get that reference",
        tags: ["internet", "criticism"],
        reverse: ["always on the internet", "extremely online", "terminally online"]
    },
    "parasocial": {
        definition: "Having a one-sided relationship with a celebrity/influencer where you feel you know them personally.",
        emoji: "📺",
        example: "My parasocial relationship with that YouTuber is getting out of hand",
        tags: ["internet", "psychology"],
        reverse: ["one-sided relationship", "fan attachment", "false intimacy"]
    },
    "gatekeep": {
        definition: "To restrict access to or information about something, often to maintain its exclusivity.",
        emoji: "🚧",
        example: "I'm gatekeeping this restaurant, it's too good to share",
        tags: ["common", "internet"],
        reverse: ["keep secret", "restrict access", "be exclusive about"]
    },
    "gaslight": {
        definition: "To manipulate someone into questioning their own reality or memory.",
        emoji: "💡",
        example: "Don't try to gaslight me, I know what happened",
        tags: ["psychology", "manipulation"],
        reverse: ["manipulate", "deceive", "make someone doubt themselves"]
    },
    "girlboss": {
        definition: "A woman who is ambitious and successful in business. Can be used sincerely or ironically.",
        emoji: "💼",
        example: "She started her own company, total girlboss move",
        tags: ["success", "empowerment"],
        reverse: ["boss woman", "successful businesswoman", "ambitious woman"]
    },
    "beige flag": {
        definition: "A trait that's not a red flag (bad) or green flag (good), but is peculiar or notable.",
        emoji: "🏳️",
        example: "He has 47 plants, that's a beige flag",
        tags: ["personality", "social"],
        reverse: ["quirky trait", "neutral but notable thing", "peculiarity"]
    },
    "red flag": {
        definition: "A warning sign that someone or something is problematic.",
        emoji: "🚩",
        example: "He said his ex was 'crazy' - red flag",
        tags: ["warning", "social"],
        reverse: ["warning sign", "bad sign", "concerning trait"]
    },
    "green flag": {
        definition: "A positive sign that someone or something is good or healthy.",
        emoji: "🟢",
        example: "He respects your boundaries, that's a green flag",
        tags: ["positive", "social"],
        reverse: ["good sign", "positive trait", "encouraging sign"]
    },
    "oomf": {
        definition: "One of my followers (on social media). Refers to someone without naming them.",
        emoji: "👤",
        example: "Oomf really said that with their whole chest",
        tags: ["social media", "internet"],
        reverse: ["one of my followers", "someone I follow", "unnamed person"]
    },
    "moots": {
        definition: "Mutuals - people who follow each other on social media.",
        emoji: "🤝",
        example: "Just met up with some moots from Twitter",
        tags: ["social media", "internet"],
        reverse: ["mutuals", "people I follow who follow me back"]
    },
    "stans": {
        definition: "Devoted fans (plural of stan). People who intensely support something or someone.",
        emoji: "🙌",
        example: "The stans are not going to like this news",
        tags: ["fandom", "internet"],
        reverse: ["devoted fans", "superfans", "hardcore supporters"]
    },

    // Additional terms from Axis Parent Guide
    "adulting": {
        definition: "To do things a bona fide adult would do, like paying bills, doing taxes, or making responsible decisions.",
        emoji: "🧑",
        example: "Can't hang out tonight, I'm adulting - gotta do my taxes",
        tags: ["common", "responsibility"],
        reverse: ["being an adult", "doing adult things", "acting mature"]
    },
    "aesthetic": {
        definition: "Another word for 'vibe.' A specific style, mood, or visual theme that someone or something embodies.",
        emoji: "🎨",
        example: "Her whole room has a cottagecore aesthetic",
        tags: ["style", "common", "trend"],
        reverse: ["vibe", "style", "mood", "theme"]
    },
    "ate and left no crumbs": {
        definition: "Used when someone does an exceptional job at something, leaving nothing to criticize.",
        emoji: "🍽️",
        example: "She performed that choreo and ate and left no crumbs",
        tags: ["compliment", "slang phrase"],
        reverse: ["killed it", "did amazing", "perfected it"]
    },
    "basic": {
        definition: "A way to describe someone who lacks originality and enjoys the most mainstream and predictable things.",
        emoji: "☕",
        example: "She only drinks pumpkin spice lattes, so basic",
        tags: ["criticism", "common"],
        reverse: ["unoriginal", "mainstream", "predictable"]
    },
    "bb": {
        definition: "Synonym for 'babe' or 'baby,' but usually used for friends. Pronounced 'bee bee.'",
        emoji: "👶",
        example: "Thanks bb, you're the best",
        tags: ["friendship", "affection"],
        reverse: ["babe", "baby", "hun"]
    },

    "bet": {
        definition: "A response word synonymous with 'Ok, for sure.' Used to agree or confirm something.",
        emoji: "🤝",
        example: "Wanna grab food? Bet.",
        tags: ["common", "agreement"],
        reverse: ["okay", "for sure", "sounds good", "yes"]
    },
    "biblically accurate": {
        definition: "Refers to anything characterized by an uncanny, alarming, and/or horrifying appearance, referencing biblical depictions of angels.",
        emoji: "👁️",
        example: "That AI generated image looks biblically accurate",
        tags: ["meme", "description"],
        reverse: ["uncanny", "terrifying", "otherworldly"]
    },
    "big": {
        definition: "A word that adds emphasis in multiple contexts, like 'big mad' or 'big brain.'",
        emoji: "📏",
        example: "He's big mad about losing the game",
        tags: ["modifier", "common"],
        reverse: ["very", "extremely", "really"]
    },
    "blueprint": {
        definition: "Used when someone did something so well that they became the standard for everyone else.",
        emoji: "📐",
        example: "She created the blueprint for that dance trend",
        tags: ["compliment", "trendsetter"],
        reverse: ["original", "template", "standard", "pioneer"]
    },
    "boo": {
        definition: "One's significant other or romantic partner.",
        emoji: "💑",
        example: "Going to the movies with my boo tonight",
        tags: ["relationship", "social"],
        reverse: ["boyfriend", "girlfriend", "partner", "significant other"]
    },
    "boo'd up": {
        definition: "To be in a romantic relationship.",
        emoji: "💞",
        example: "They're all boo'd up now",
        tags: ["relationship", "social"],
        reverse: ["in a relationship", "dating someone", "coupled up"]
    },
    "boi": {
        definition: "Another way of spelling 'boy' through text or on social media, often used playfully.",
        emoji: "🙋‍♂️",
        example: "What's up boi",
        tags: ["internet", "texting"],
        reverse: ["boy", "dude", "guy"]
    },
    "bop": {
        definition: "A really good song that you can dance or vibe to.",
        emoji: "🎵",
        example: "This new track is a total bop",
        tags: ["music", "compliment"],
        reverse: ["great song", "catchy tune", "banger"]
    },
    "bougie": {
        definition: "High class, rich, fancy. Derived from 'bourgeois.' Can be used positively or mockingly.",
        emoji: "💎",
        example: "Look at you being all bougie with that champagne",
        tags: ["lifestyle", "status"],
        reverse: ["fancy", "high class", "luxurious", "expensive"]
    },
    "boutta": {
        definition: "About to. A shortened form indicating something is going to happen soon.",
        emoji: "⏰",
        example: "I'm boutta head out",
        tags: ["common", "contraction"],
        reverse: ["about to", "going to"]
    },
    "bruh": {
        definition: "More modern version of 'bro.' Used to express disbelief, disappointment, or just as a casual greeting.",
        emoji: "🤦",
        example: "Bruh, you really just said that?",
        tags: ["common", "reaction"],
        reverse: ["bro", "dude", "man"]
    },
    "canon": {
        definition: "The actual official plot or facts of a work of fiction, as opposed to fan theories or headcanon.",
        emoji: "📖",
        example: "That's not canon, it's just fanfiction",
        tags: ["fandom", "media"],
        reverse: ["official", "actual story", "true facts"]
    },
    "headcanon": {
        definition: "Ideas or theories that fans want to be true about a story or characters, but aren't officially confirmed.",
        emoji: "💭",
        example: "My headcanon is that they're secretly dating",
        tags: ["fandom", "media"],
        reverse: ["personal theory", "fan interpretation", "my belief"]
    },
    "cap": {
        definition: "A lie or something false. Saying 'that's cap' means 'that's a lie.'",
        emoji: "🧢",
        example: "You said you ran a marathon? Cap.",
        tags: ["common", "dishonesty"],
        reverse: ["lie", "false", "fake", "untrue"]
    },
    "catch feels": {
        definition: "To develop romantic feelings for someone, usually unexpectedly.",
        emoji: "💘",
        example: "I didn't mean to catch feels but here we are",
        tags: ["emotion", "social"],
        reverse: ["develop feelings", "fall for someone", "get attached"]
    },
    "catch these hands": {
        definition: "A threat or challenge to fight someone.",
        emoji: "✊",
        example: "Keep talking and you're gonna catch these hands",
        tags: ["confrontation", "threat"],
        reverse: ["fight me", "throw hands", "physical confrontation"]
    },
    "ceo of": {
        definition: "Being really talented at something or known for a particular thing.",
        emoji: "👔",
        example: "She's the CEO of procrastination",
        tags: ["compliment", "humorous"],
        reverse: ["expert at", "master of", "best at"]
    },
    "cheugy": {
        definition: "Cringey or awkward, specifically regarding trends from the early/mid 2000s that are now outdated.",
        emoji: "😬",
        example: "Those jeans are so cheugy",
        tags: ["criticism", "fashion", "2021"],
        reverse: ["outdated", "cringey", "trying too hard"]
    },
    "chill": {
        definition: "To be laid back and relaxed, or the act of hanging out casually.",
        emoji: "😎",
        example: "Just gonna chill at home tonight",
        tags: ["common", "activity"],
        reverse: ["relax", "hang out", "calm", "laid back"]
    },
    "clout": {
        definition: "Having a great social influence or following, especially on social media.",
        emoji: "⭐",
        example: "He only posted that for clout",
        tags: ["internet", "social media"],
        reverse: ["influence", "fame", "popularity", "status"]
    },
    "cooked": {
        definition: "When someone is so worn out, exhausted, and overwhelmed that they can barely function.",
        emoji: "🥵",
        example: "After that exam I'm absolutely cooked",
        tags: ["exhaustion", "slang"],
        reverse: ["exhausted", "done for", "burnt out", "wiped out"]
    },
    "crash out": {
        definition: "To do something dangerous or reckless due to emotional instability or being overwhelmed.",
        emoji: "💥",
        example: "He's about to crash out if they keep testing him",
        tags: ["emotion", "reaction"],
        reverse: ["lose it", "snap", "break down", "go crazy"]
    },
    "dead": {
        definition: "When something is so funny you can't handle it, metaphorically 'dying' from laughter.",
        emoji: "💀",
        example: "That meme has me dead 💀",
        tags: ["reaction", "humor"],
        reverse: ["dying laughing", "hilarious", "so funny"]
    },
    "delulu": {
        definition: "Shorthand for 'delusional,' usually used in a humorous or self-deprecating way.",
        emoji: "🤡",
        example: "I'm delulu thinking he'll text back",
        tags: ["humor", "self-aware"],
        reverse: ["delusional", "unrealistic", "wishful thinking"]
    },
    "doing the most": {
        definition: "Being over the top, excessive, or dramatic about something.",
        emoji: "🎭",
        example: "She's doing the most with that outfit",
        tags: ["criticism", "excessive"],
        reverse: ["overdoing it", "being extra", "going overboard"]
    },
    "done": {
        definition: "To be completely over a task, person, or situation. Fed up and finished.",
        emoji: "✋",
        example: "I'm so done with this drama",
        tags: ["emotion", "frustration"],
        reverse: ["fed up", "over it", "finished", "had enough"]
    },
    "drip": {
        definition: "Refers to a really cool outfit or stylish appearance. Having good fashion sense.",
        emoji: "💧",
        example: "Check out the drip, fresh sneakers",
        tags: ["fashion", "compliment"],
        reverse: ["style", "outfit", "fashion", "swag"]
    },
    "era": {
        definition: "A specific period in someone's life focusing on a certain aesthetic, lifestyle, or phase.",
        emoji: "📅",
        example: "I'm entering my fitness era",
        tags: ["lifestyle", "trend"],
        reverse: ["phase", "period", "chapter"]
    },
    "f": {
        definition: "A way to show respect or sympathy after something bad has happened. Comes from gaming culture.",
        emoji: "🎮",
        example: "He failed his exam, F in the chat",
        tags: ["internet", "gaming", "sympathy"],
        reverse: ["respects", "condolences", "rip"]
    },
    "facts": {
        definition: "Being in agreement with something. Used to confirm truth or agreement.",
        emoji: "💯",
        example: "That movie was terrible. Facts.",
        tags: ["agreement", "common"],
        reverse: ["true", "agreed", "truth", "for real"]
    },
    "fam": {
        definition: "Family or closest friends. Your inner circle.",
        emoji: "👨‍👩‍👧‍👦",
        example: "What's good fam",
        tags: ["friendship", "common"],
        reverse: ["family", "close friends", "crew", "squad"]
    },
    "finna": {
        definition: "Short for 'fixing to,' meaning 'going to' or 'about to.'",
        emoji: "➡️",
        example: "I'm finna go to the store",
        tags: ["common", "southern slang"],
        reverse: ["going to", "about to", "planning to"]
    },
    "fit": {
        definition: "Short for outfit (US) or someone attractive (UK slang).",
        emoji: "👗",
        example: "That fit is fire",
        tags: ["fashion", "appearance"],
        reverse: ["outfit", "clothes", "attire"]
    },
    "flex": {
        definition: "To show off, especially wealth, possessions, or achievements.",
        emoji: "💪",
        example: "Stop flexing your new car",
        tags: ["showing off", "common"],
        reverse: ["show off", "brag", "flaunt"]
    },
    "fr": {
        definition: "For real. Used to emphasize honesty or agreement.",
        emoji: "💬",
        example: "That's annoying fr",
        tags: ["common", "abbreviation"],
        reverse: ["for real", "truly", "honestly"]
    },
    "g": {
        definition: "A term of endearment for friends. Short for 'gangster' but used casually.",
        emoji: "🤙",
        example: "Thanks g, appreciate it",
        tags: ["friendship", "casual"],
        reverse: ["dude", "bro", "friend", "homie"]
    },
    "gassing": {
        definition: "To hype someone up or give them excessive compliments.",
        emoji: "⛽",
        example: "Stop gassing me up",
        tags: ["compliment", "encouragement"],
        reverse: ["hyping up", "boosting ego", "complimenting"]
    },
    "girl dinner": {
        definition: "Strange collections of food put together for a quick, cooking-free meal, often random snacks.",
        emoji: "🧀",
        example: "Crackers, cheese, and grapes - classic girl dinner",
        tags: ["food", "trend", "2023"],
        reverse: ["snack plate", "lazy meal", "random food"]
    },
    "girl math": {
        definition: "Relatable ways women describe their finances, often with humorous justification for spending.",
        emoji: "🧮",
        example: "If I return it later, it's basically free - girl math",
        tags: ["humor", "trend", "2023"],
        reverse: ["funny logic", "financial justification", "shopping logic"]
    },
    "goat": {
        definition: "Greatest Of All Time. Used to describe someone exceptional.",
        emoji: "🐐",
        example: "LeBron is the GOAT",
        tags: ["compliment", "sports", "common"],
        reverse: ["greatest ever", "the best", "legend"]
    },
    "gucci": {
        definition: "Good, cool, or 'it's all good.' Everything is fine.",
        emoji: "✅",
        example: "We're gucci, no worries",
        tags: ["common", "approval"],
        reverse: ["good", "fine", "cool", "all good"]
    },
    "hoco": {
        definition: "Short for Homecoming, the high school dance and football game event.",
        emoji: "🏫",
        example: "Are you going to hoco?",
        tags: ["school", "abbreviation"],
        reverse: ["homecoming", "school dance"]
    },
    "igl": {
        definition: "In Game Life, referring to online gaming personas or activities.",
        emoji: "🎮",
        example: "IGL I'm a warrior but IRL I'm scared of bugs",
        tags: ["gaming", "internet"],
        reverse: ["in game", "virtual life"]
    },
    "iykwim": {
        definition: "If you know what I mean. Used to hint at something without saying it directly.",
        emoji: "😉",
        example: "He's really good with his hands iykwim",
        tags: ["internet", "innuendo"],
        reverse: ["if you know what I mean", "wink wink"]
    },
    "irl": {
        definition: "In Real Life. Referring to the physical world as opposed to online.",
        emoji: "🌍",
        example: "We met IRL at the concert",
        tags: ["internet", "common", "abbreviation"],
        reverse: ["in real life", "offline", "in person"]
    },
    "keep it 100": {
        definition: "Be true to yourself and stick to your values. Be authentic and honest.",
        emoji: "💯",
        example: "Always keep it 100, no fake energy",
        tags: ["authenticity", "advice"],
        reverse: ["be real", "stay true", "be honest"]
    },
    "left on read": {
        definition: "When someone reads your text message but doesn't respond.",
        emoji: "📱",
        example: "He left me on read for 3 hours",
        tags: ["texting", "frustration"],
        reverse: ["ignored message", "read but no reply", "seen but ignored"]
    },
    "let's get this bread": {
        definition: "To work hard and succeed, especially in making money.",
        emoji: "🍞",
        example: "Monday morning, let's get this bread",
        tags: ["motivation", "work"],
        reverse: ["let's work", "make money", "hustle"]
    },
    "let them cook": {
        definition: "To allow someone to proceed with an action that will lead to an impressive result. Don't interrupt their process.",
        emoji: "👨‍🍳",
        example: "Don't question it, just let them cook",
        tags: ["encouragement", "patience"],
        reverse: ["let them work", "don't interrupt", "trust the process"]
    },
    "lewk": {
        definition: "A signature physical trait or unique look, an elevated spelling of 'look.'",
        emoji: "👀",
        example: "She's serving that lewk tonight",
        tags: ["fashion", "style"],
        reverse: ["look", "style", "appearance"]
    },
    "live": {
        definition: "When something is so incredible it makes you feel alive and excited.",
        emoji: "🔥",
        example: "That concert was so live",
        tags: ["excitement", "compliment"],
        reverse: ["amazing", "exciting", "incredible"]
    },
    "like my recent": {
        definition: "Asking followers to like a recent social media post.",
        emoji: "❤️",
        example: "Like my recent and I'll like yours back",
        tags: ["social media", "request"],
        reverse: ["like my post", "engagement request"]
    },
    "narrative": {
        definition: "A situation or story you want to be excluded from or don't want associated with you.",
        emoji: "📝",
        example: "Remove me from this narrative",
        tags: ["drama", "distance"],
        reverse: ["story", "situation", "drama"]
    },
    "oof": {
        definition: "An exclamation used when you don't know what to say, expressing sympathy or awkwardness.",
        emoji: "😬",
        example: "She rejected him in front of everyone. Oof.",
        tags: ["reaction", "sympathy"],
        reverse: ["yikes", "ouch", "awkward"]
    },
    "otp": {
        definition: "One True Pairing. Your favorite romantic couple in fiction or real life.",
        emoji: "💑",
        example: "They are my OTP, I ship them so hard",
        tags: ["fandom", "shipping"],
        reverse: ["favorite couple", "perfect pair"]
    },
    "poggers": {
        definition: "An expression of excitement or thinking something is cool. From gaming/Twitch culture.",
        emoji: "😲",
        example: "That play was poggers!",
        tags: ["gaming", "excitement"],
        reverse: ["awesome", "cool", "exciting"]
    },
    "pov": {
        definition: "Point of view. Often used jokingly to describe specific relatable situations.",
        emoji: "🎥",
        example: "POV: you're trying to act normal in front of your crush",
        tags: ["internet", "meme", "common"],
        reverse: ["point of view", "perspective", "imagine this"]
    },
    "rent free": {
        definition: "When something or someone occupies space in your thoughts constantly without effort.",
        emoji: "🏠",
        example: "That embarrassing moment from 5 years ago lives rent free in my head",
        tags: ["thoughts", "obsession"],
        reverse: ["constantly thinking about", "can't stop thinking", "stuck in mind"]
    },
    "rip": {
        definition: "Used to express sadness, loss, or to say something sucks. Short for 'rest in peace.'",
        emoji: "⚰️",
        example: "RIP to my sleep schedule",
        tags: ["reaction", "disappointment"],
        reverse: ["rest in peace", "that sucks", "gone"]
    },
    "rn": {
        definition: "Right now. Indicating the current moment.",
        emoji: "⏱️",
        example: "I need food rn",
        tags: ["common", "abbreviation", "urgency"],
        reverse: ["right now", "currently", "at this moment"]
    },
    "sending me": {
        definition: "Making you laugh hysterically. Something is so funny it's 'sending' you.",
        emoji: "😂",
        example: "That video is sending me, I can't breathe",
        tags: ["humor", "reaction"],
        reverse: ["making me laugh", "hilarious", "dying laughing"]
    },
    "ship": {
        definition: "To endorse or support a romantic relationship, real or fictional.",
        emoji: "⛵",
        example: "I ship them so hard, they're perfect together",
        tags: ["fandom", "romance"],
        reverse: ["support couple", "want them together", "root for"]
    },
    "shook": {
        definition: "To be completely surprised, scared, or caught off guard.",
        emoji: "😱",
        example: "I'm shook, I can't believe that happened",
        tags: ["reaction", "surprise"],
        reverse: ["shocked", "surprised", "stunned"]
    },
    "sigma": {
        definition: "An unbothered, independent male who doesn't follow social hierarchies, or used as nonsense filler.",
        emoji: "🗿",
        example: "He's on his sigma grindset",
        tags: ["meme", "masculinity", "internet"],
        reverse: ["independent", "lone wolf", "unbothered"]
    },
    "sis": {
        definition: "Abbreviation for sister, used as a term of familiarity or endearment.",
        emoji: "👭",
        example: "Sis, you need to hear this tea",
        tags: ["friendship", "casual"],
        reverse: ["sister", "girl", "friend"]
    },
    "slaps": {
        definition: "Something that's really great, usually referring to music.",
        emoji: "👋",
        example: "This song absolutely slaps",
        tags: ["music", "compliment"],
        reverse: ["amazing", "really good", "hits different"]
    },
    "smh": {
        definition: "Shaking my head. Used to express disappointment, disbelief, or disapproval.",
        emoji: "🤦",
        example: "He forgot again, smh",
        tags: ["reaction", "disappointment", "abbreviation"],
        reverse: ["shaking my head", "disappointed", "unbelievable"]
    },
    "smol": {
        definition: "Online variation of 'small,' used to describe something cute and little.",
        emoji: "🐣",
        example: "Look at that smol puppy",
        tags: ["internet", "cute"],
        reverse: ["small", "tiny", "little"]
    },
    "snack": {
        definition: "An attractive person. Someone who looks good.",
        emoji: "🍭",
        example: "He's a whole snack",
        tags: ["compliment", "attraction"],
        reverse: ["attractive person", "hot", "good looking"]
    },
    "snatched": {
        definition: "Looking good or having a great outfit. Everything on point.",
        emoji: "✨",
        example: "Your outfit is snatched today",
        tags: ["fashion", "compliment"],
        reverse: ["looking great", "on point", "flawless"]
    },
    "stan": {
        definition: "A hardcore, devoted fan of someone or something.",
        emoji: "🙌",
        example: "I stan this artist so hard",
        tags: ["fandom", "devotion"],
        reverse: ["hardcore fan", "devoted supporter", "superfan"]
    },
    "take the l": {
        definition: "To accept a loss or defeat gracefully.",
        emoji: "❌",
        example: "Just take the L and move on",
        tags: ["defeat", "acceptance"],
        reverse: ["accept defeat", "take the loss", "admit failure"]
    },
    "tbh": {
        definition: "To be honest. Used before sharing an honest opinion.",
        emoji: "🗣️",
        example: "TBH, I don't think that's a good idea",
        tags: ["common", "honesty", "abbreviation"],
        reverse: ["to be honest", "honestly", "truthfully"]
    },
    "tfw": {
        definition: "That feeling when. Used to describe relatable emotions or situations.",
        emoji: "😌",
        example: "TFW you finally finish all your homework",
        tags: ["internet", "relatable"],
        reverse: ["that feeling when", "when you", "that moment"]
    },
    "this ain't it chief": {
        definition: "Used when someone says or does something that is definitely not cool or acceptable.",
        emoji: "🚫",
        example: "Pineapple on pizza? This ain't it chief",
        tags: ["disapproval", "meme"],
        reverse: ["this is wrong", "not good", "nope"]
    },
    "understood the assignment": {
        definition: "Exceeding expectations at a task or statement. Doing exactly what was needed perfectly.",
        emoji: "📝",
        example: "Her performance? She understood the assignment",
        tags: ["compliment", "success"],
        reverse: ["nailed it", "did it perfectly", "exceeded expectations"]
    },
    "v": {
        definition: "Very. A shortened form for emphasis.",
        emoji: "⚡",
        example: "I'm v tired",
        tags: ["abbreviation", "common"],
        reverse: ["very", "really"]
    },
    "vibe check": {
        definition: "Assessing someone's vibes or energy, or determining if they pass a standard of coolness.",
        emoji: "✅",
        example: "Let me give you a vibe check real quick",
        tags: ["assessment", "social"],
        reverse: ["checking vibes", "mood check", "energy assessment"]
    },
    "vibing": {
        definition: "Chilling out and having fun. Being in a good mood and going with the flow.",
        emoji: "🎶",
        example: "Just vibing to some music",
        tags: ["relaxation", "mood"],
        reverse: ["chilling", "relaxing", "enjoying", "in the zone"]
    },
    "weird flex but ok": {
        definition: "A response to someone bragging or showing off in a strange or unnecessary way.",
        emoji: "🤨",
        example: "I can hold my breath for 2 minutes. Weird flex but ok.",
        tags: ["reaction", "meme"],
        reverse: ["strange brag", "odd boast", "unnecessary show off"]
    },
    "whip": {
        definition: "A car, especially a nice or flashy one.",
        emoji: "🚗",
        example: "Check out my new whip",
        tags: ["vehicle", "slang"],
        reverse: ["car", "ride", "vehicle"]
    },
    "wig": {
        definition: "To be amazed or blown away by something. So shocked your wig flew off.",
        emoji: "💇",
        example: "That performance had my wig snatched",
        tags: ["reaction", "amazement"],
        reverse: ["mind blown", "shocked", "amazed"]
    },
    "wild": {
        definition: "Shocking, hilarious, crazy, or weird. Something unexpected or extreme.",
        emoji: "🤪",
        example: "That story is absolutely wild",
        tags: ["reaction", "surprise"],
        reverse: ["crazy", "shocking", "insane", "unbelievable"]
    },
    "wylin": {
        definition: "Acting wild, crazy, or out of control. Variant of 'wilding.'",
        emoji: "😜",
        example: "You're wylin if you think I'm doing that",
        tags: ["behavior", "crazy"],
        reverse: ["acting crazy", "wilding", "being ridiculous"]
    },
    "woke": {
        definition: "To be fully aware of current events, social issues, and injustices.",
        emoji: "👁️",
        example: "She's very woke about political issues",
        tags: ["awareness", "social"],
        reverse: ["aware", "conscious", "informed"]
    },
    "af": {
        definition: "As fuck. Used for strong emphasis.",
        emoji: "💢",
        example: "That's scary af",
        tags: ["emphasis", "vulgar", "common"],
        reverse: ["very", "extremely", "really"]
    },
    "asmr": {
        definition: "Autonomous Sensory Meridian Response. Sounds or visuals that elicit a pleasant tingling sensation.",
        emoji: "🎧",
        example: "This ASMR video is so relaxing",
        tags: ["internet", "sensory"],
        reverse: ["relaxing sounds", "tingling sensation"]
    },

    "bed rot": {
        definition: "Lying in bed for extended hours doing nothing productive, often doom scrolling.",
        emoji: "🛏️",
        example: "Spent all Sunday in bed rot",
        tags: ["lazy", "trend", "2024"],
        reverse: ["staying in bed", "lazy day", "unproductive rest"]
    },
    "bffr": {
        definition: "Be fucking for real. A call for someone to be serious or realistic.",
        emoji: "💀",
        example: "You think you can finish that in an hour? BFFR",
        tags: ["reality check", "vulgar"],
        reverse: ["be serious", "be realistic", "get real"]
    },
    "boomer": {
        definition: "A dismissive way to refer to older, out-of-touch people, regardless of actual age.",
        emoji: "👴",
        example: "Ok boomer, times have changed",
        tags: ["generational", "dismissive"],
        reverse: ["old person", "out of touch", "older generation"]
    },
    "cancel": {
        definition: "To remove support from someone or something, often publicly calling them out.",
        emoji: "🚫",
        example: "They're trying to cancel that celebrity",
        tags: ["social media", "accountability"],
        reverse: ["boycott", "call out", "reject"]
    },
    "caught in 4k": {
        definition: "Catching someone in the act with clear, undeniable proof.",
        emoji: "📸",
        example: "He said he wasn't there but got caught in 4K on camera",
        tags: ["proof", "exposed"],
        reverse: ["caught red-handed", "clear evidence", "busted"]
    },
    "clapback": {
        definition: "A quick, sharp, witty comeback or response to criticism.",
        emoji: "👏",
        example: "Her clapback to that comment was legendary",
        tags: ["comeback", "wit"],
        reverse: ["comeback", "retort", "sharp response"]
    },
    "clapped": {
        definition: "Being obliterated in a fight, game, or looking very unattractive.",
        emoji: "💥",
        example: "He got clapped in that match",
        tags: ["defeat", "criticism"],
        reverse: ["beaten badly", "ugly", "destroyed"]
    },
    "cringey": {
        definition: "Awkward, embarrassing, or uncomfortable to watch or experience.",
        emoji: "😬",
        example: "That joke was so cringey",
        tags: ["awkward", "embarrassing"],
        reverse: ["awkward", "embarrassing", "uncomfortable"]
    },
    "curve": {
        definition: "To romantically reject someone, usually by ignoring or deflecting their advances.",
        emoji: "↪️",
        example: "She curved him when he asked for her number",
        tags: ["rejection", "social"],
        reverse: ["reject", "dismiss", "turn down"]
    },
    "deadass": {
        definition: "Straight up, for real, seriously. Emphasizing truth or seriousness.",
        emoji: "💀",
        example: "Deadass, that's what happened",
        tags: ["emphasis", "truth"],
        reverse: ["seriously", "for real", "honestly"]
    },
    "finsta": {
        definition: "A fake or private Instagram account for close friends only, as opposed to a public 'rinsta.'",
        emoji: "📱",
        example: "I only post my real thoughts on my finsta",
        tags: ["social media", "privacy"],
        reverse: ["fake instagram", "private account", "close friends account"]
    },
    "fomo": {
        definition: "Fear Of Missing Out. Anxiety about not being included in events or experiences.",
        emoji: "😰",
        example: "I have major FOMO seeing everyone's vacation pics",
        tags: ["anxiety", "social", "abbreviation"],
        reverse: ["fear of missing out", "social anxiety", "missing out"]
    },
    "fruity": {
        definition: "Suggestive of being gay or queer, often used playfully.",
        emoji: "🍓",
        example: "That outfit is giving fruity vibes",
        tags: ["lgbtq", "playful"],
        reverse: ["gay", "queer", "flamboyant"]
    },

    "go off": {
        definition: "Giving someone permission to rant, express themselves, or do their thing enthusiastically.",
        emoji: "📢",
        example: "Go off, tell them how you really feel",
        tags: ["encouragement", "expression"],
        reverse: ["express yourself", "do your thing", "rant away"]
    },
    "hop off": {
        definition: "Mind your own business or stop bothering someone.",
        emoji: "✋",
        example: "Hop off, this doesn't concern you",
        tags: ["dismissal", "boundaries"],
        reverse: ["mind your business", "back off", "leave me alone"]
    },
    "hunty": {
        definition: "A term of endearment or slight insult, combination of 'honey' and other terms.",
        emoji: "💅",
        example: "Listen hunty, you need to calm down",
        tags: ["sass", "lgbtq"],
        reverse: ["honey", "sweetie", "hun"]
    },

    "karen": {
        definition: "An entitled, often middle-aged white woman who causes a public scene and demands special treatment.",
        emoji: "😤",
        example: "She's being such a Karen asking for the manager",
        tags: ["stereotype", "entitled"],
        reverse: ["entitled woman", "complainer", "demanding person"]
    },
    "looksmaxxing": {
        definition: "Improving one's physical appearance through grooming, fitness, style, and sometimes cosmetic procedures.",
        emoji: "💪",
        example: "He's been looksmaxxing at the gym every day",
        tags: ["self-improvement", "appearance"],
        reverse: ["improving appearance", "self-improvement", "getting attractive"]
    },
    "main character": {
        definition: "Behaving as if you are the center of attention or the world revolves around you.",
        emoji: "🌟",
        example: "She has main character energy",
        tags: ["confidence", "attitude"],
        reverse: ["protagonist", "center of attention", "confident"]
    },
    "menty b": {
        definition: "Shorthand for mental breakdown. Having a moment of emotional distress.",
        emoji: "😵",
        example: "I'm having a menty b over this deadline",
        tags: ["mental health", "stress"],
        reverse: ["mental breakdown", "freaking out", "losing it"]
    },
    "preppy": {
        definition: "A style focusing on wealth, brand-awareness, and specific clean aesthetics like polo shirts and pastels.",
        emoji: "👔",
        example: "Her whole wardrobe is preppy",
        tags: ["fashion", "style"],
        reverse: ["clean cut", "wealthy style", "classic fashion"]
    },
    "receipts": {
        definition: "Proof of something, usually in the form of screenshots or messages.",
        emoji: "🧾",
        example: "She brought the receipts to expose him",
        tags: ["proof", "drama"],
        reverse: ["proof", "evidence", "screenshots"]
    },
    "salty": {
        definition: "Jealous, upset, or bitter about something.",
        emoji: "🧂",
        example: "He's so salty about losing",
        tags: ["emotion", "jealousy"],
        reverse: ["bitter", "upset", "jealous"]
    },
    "sip tea": {
        definition: "Mind your own business while watching drama unfold, staying out of it.",
        emoji: "☕",
        example: "I'm just gonna sip tea and watch this mess",
        tags: ["gossip", "observing"],
        reverse: ["watch drama", "stay out of it", "observe"]
    },

    "subtweet": {
        definition: "Calling someone out or talking about them on social media without directly tagging or naming them.",
        emoji: "🐦",
        example: "That subtweet was definitely about me",
        tags: ["social media", "passive aggressive"],
        reverse: ["indirect call out", "talking about someone", "vague post"]
    },
    "sus": {
        definition: "Short for suspicious. Something or someone that seems questionable or untrustworthy.",
        emoji: "🤔",
        example: "That excuse sounds sus",
        tags: ["suspicious", "common", "gaming"],
        reverse: ["suspicious", "sketchy", "questionable"]
    },
    "tea": {
        definition: "Gossip or juicy information. The latest drama or news.",
        emoji: "☕",
        example: "Spill the tea, what happened?",
        tags: ["gossip", "drama"],
        reverse: ["gossip", "drama", "news", "information"]
    },

    "touch grass": {
        definition: "A suggestion to go outside and reconnect with reality after spending too much time online.",
        emoji: "🌱",
        example: "You need to touch grass and get some fresh air",
        tags: ["reality check", "internet"],
        reverse: ["go outside", "get offline", "reconnect with reality"]
    },
    "tweakin": {
        definition: "Acting crazy, strange, or overreacting to something.",
        emoji: "😵‍💫",
        example: "You're tweakin if you think I'm doing that",
        tags: ["behavior", "crazy"],
        reverse: ["acting crazy", "tripping", "overreacting"]
    },

    "situationship": {
        definition: "A romantic relationship that has no official label. More than friends, less than a couple — the modern limbo of undefined feelings.",
        emoji: "🫠",
        example: "We've been in a situationship for 6 months and I don't know what we are",
        tags: ["relationship", "trending", "2024"],
        reverse: ["undefined relationship", "unofficial dating", "romantic limbo"]
    },
    "soft launch": {
        definition: "Posting subtle hints about a new romantic partner on social media before officially revealing them.",
        emoji: "🌸",
        example: "She soft launched him with a hand pic before posting his face",
        tags: ["relationship", "social media"],
        reverse: ["subtle reveal", "teasing new partner", "indirect announcement"]
    },
    "talking stage": {
        definition: "The early phase of a potential relationship where two people text and get to know each other before officially dating.",
        emoji: "💬",
        example: "We've been in the talking stage for 3 weeks, I'm losing my mind",
        tags: ["relationship", "dating"],
        reverse: ["pre-dating phase", "getting to know someone", "early talking"]
    },
    "de-influencing": {
        definition: "Telling people NOT to buy something that gets overhyped — the anti-haul influencer trend.",
        emoji: "🚫",
        example: "She's de-influencing that viral mascara, says it's not worth it",
        tags: ["internet", "consumer", "2023"],
        reverse: ["recommending against", "anti-hype", "honest review"]
    },
    "quiet luxury": {
        definition: "High-end fashion that's understated and logo-free. Expensive but not showy. The rich-people-who-don't-need-to-prove-it aesthetic.",
        emoji: "🤍",
        example: "Her whole wardrobe is quiet luxury — cashmere, no logos",
        tags: ["fashion", "aesthetic", "2023"],
        reverse: ["understated wealth", "minimalist luxury", "old money style"]
    },
    "clean girl aesthetic": {
        definition: "A minimalist beauty style — slicked back hair, glowing skin, light makeup. Low effort, high result.",
        emoji: "✨",
        example: "She woke up looking like a clean girl aesthetic tutorial",
        tags: ["beauty", "aesthetic", "trend"],
        reverse: ["natural beauty", "minimal makeup", "effortless look"]
    },
    "nepo baby": {
        definition: "A celebrity or public figure who got their success largely because of their famous parents, not their own talent.",
        emoji: "👶",
        example: "She's a nepo baby — her mom has been in Hollywood for 30 years",
        tags: ["celebrity", "criticism", "2023"],
        reverse: ["industry plant", "privilege", "famous parent advantage"]
    },
    "breadcrumbing": {
        definition: "Sending occasional flirty messages just to keep someone's interest — without any intention of committing.",
        emoji: "🍞",
        example: "He texts me once a week — he's breadcrumbing me",
        tags: ["relationship", "dating"],
        reverse: ["stringing along", "leading on", "keeping options open"]
    },
    "orbiting": {
        definition: "Watching someone's social media (liking, viewing stories) after a breakup without actually talking to them.",
        emoji: "🪐",
        example: "He ghosted me but watches every single story — classic orbiting",
        tags: ["relationship", "social media"],
        reverse: ["passive stalking", "ghost who still watches", "lurking ex"]
    },
    "cuffing season": {
        definition: "Fall and winter, when people desperately seek a relationship to cuddle up with during the cold months.",
        emoji: "🍂",
        example: "It's October, everyone's about to start cuffing season",
        tags: ["relationship", "seasonal"],
        reverse: ["winter relationship season", "cold weather dating period"]
    },
    "manifesting": {
        definition: "The belief that by intensely thinking about or visualizing something, you can make it happen.",
        emoji: "🌙",
        example: "I'm manifesting that job offer — it's mine",
        tags: ["spiritual", "trending", "2023"],
        reverse: ["visualizing goals", "positive thinking", "willing something to happen"]
    },
    "glow up": {
        definition: "A significant improvement in someone's appearance, confidence, or overall life — usually over time.",
        emoji: "⬆️",
        example: "His 10-year challenge? Absolute glow up",
        tags: ["compliment", "improvement", "common"],
        reverse: ["improvement", "transformation", "getting better"]
    },
    "doomscrolling": {
        definition: "Endlessly scrolling through bad news or depressing social media content, even though it makes you feel worse.",
        emoji: "📱",
        example: "I spent 2 hours doomscrolling Twitter and now I'm depressed",
        tags: ["internet", "mental health"],
        reverse: ["consuming bad news endlessly", "negative scrolling", "media spiral"]
    },
    "hot take": {
        definition: "A controversial or unpopular opinion stated with total confidence.",
        emoji: "🔥",
        example: "Hot take: pineapple on pizza actually slaps",
        tags: ["opinion", "internet", "common"],
        reverse: ["controversial opinion", "unpopular opinion", "spicy take"]
    },
    "snapped": {
        definition: "Did something absolutely perfectly. No mistakes, flawless execution.",
        emoji: "🫰",
        example: "She snapped with that performance, no notes",
        tags: ["compliment", "success"],
        reverse: ["nailed it", "perfected it", "flawless"]
    },
    "unhinged": {
        definition: "Acting wildly irrational, chaotic, or mentally unstable — used humorously for dramatic behavior.",
        emoji: "🫠",
        example: "That reply was absolutely unhinged, what is wrong with him",
        tags: ["behavior", "chaos"],
        reverse: ["chaotic", "unstable", "irrational", "wild"]
    },
    "pressed": {
        definition: "Bothered, stressed, or upset about something. Acting worked up over something.",
        emoji: "😤",
        example: "Why are you so pressed about what she said?",
        tags: ["emotion", "common"],
        reverse: ["upset", "bothered", "stressed out"]
    },
    "lore": {
        definition: "Someone's backstory, personal history, or the accumulated context behind who they are.",
        emoji: "📜",
        example: "She has so much lore — her life is a whole Netflix series",
        tags: ["internet", "fandom", "personality"],
        reverse: ["backstory", "history", "context", "background"]
    },
    "lore drop": {
        definition: "When someone reveals personal history or important context about themselves, usually dramatically.",
        emoji: "💣",
        example: "He casually dropped that lore about his ex and we were all shook",
        tags: ["internet", "reveal"],
        reverse: ["backstory reveal", "dropping context", "revealing history"]
    },
    "hyperfixation": {
        definition: "An intense, consuming interest in something that takes up all your time and thoughts.",
        emoji: "🔭",
        example: "My current hyperfixation is historical true crime",
        tags: ["internet", "mental health", "personality"],
        reverse: ["obsession", "intense interest", "all-consuming hobby"]
    },
    "tradwife": {
        definition: "A woman who embraces traditional gender roles — staying home, cooking, serving the husband — often posted aesthetically online.",
        emoji: "🏡",
        example: "Her whole page is tradwife content — baking bread in a prairie dress",
        tags: ["trend", "lifestyle", "political"],
        reverse: ["traditional housewife", "domestic lifestyle", "1950s aesthetic"]
    },
    "that girl": {
        definition: "The idealized, hyper-productive woman with a 5am gym routine, green smoothies, and perfect organization.",
        emoji: "💪",
        example: "I'm trying to be that girl — woke up at 5am and journaled",
        tags: ["lifestyle", "aesthetic", "trending"],
        reverse: ["ideal productive woman", "wellness lifestyle", "morning routine aesthetic"]
    },
    "not me": {
        definition: "A self-callout phrase. Used when you catch yourself doing something embarrassing or relatable.",
        emoji: "🙈",
        example: "Not me crying at a dog food commercial",
        tags: ["humor", "self-aware", "internet"],
        reverse: ["embarrassingly it's me", "self-callout", "relatable confession"]
    },
    "finesse": {
        definition: "Getting what you want through skillful manipulation or smooth moves. Working the system cleverly.",
        emoji: "🎩",
        example: "He finessed his way into VIP",
        tags: ["common", "skill"],
        reverse: ["manipulate cleverly", "work the system", "smooth-talk your way"]
    },
    "gyat": {
        definition: "An exclamation of surprise at someone's impressive physique, especially their backside. Short for 'god damn'.",
        emoji: "😳",
        example: "Gyat, she walked in and the whole room turned",
        tags: ["exclamation", "trending", "2024"],
        reverse: ["wow", "damn", "impressive physique exclamation"]
    },
    "no thoughts head empty": {
        definition: "A state of complete mental blankness. Not thinking about anything, just existing.",
        emoji: "💭",
        example: "It's 2pm and no thoughts head empty, brain offline",
        tags: ["humor", "internet", "relatable"],
        reverse: ["blank mind", "not thinking", "mentally absent"]
    },
    "certified": {
        definition: "Officially confirmed or proven. Used for emphasis that something is undeniably true.",
        emoji: "✅",
        example: "He's certified unhinged, there's proof",
        tags: ["emphasis", "internet"],
        reverse: ["confirmed", "officially proven", "undeniably"]
    },
    "plot armor": {
        definition: "When someone seems protected from consequences as if they're the hero of a story. Real life plot convenience.",
        emoji: "🛡️",
        example: "He crashed three businesses and keeps bouncing back — pure plot armor",
        tags: ["internet", "gaming", "narrative"],
        reverse: ["plot convenience", "protected from consequences", "story immunity"]
    },
    "unserious": {
        definition: "Not treating something with the gravity it deserves. Being silly or dismissive when you should care.",
        emoji: "🤡",
        example: "You're being so unserious right now, this is a real problem",
        tags: ["criticism", "humor"],
        reverse: ["not serious", "dismissive", "not treating it seriously"]
    },
    "he's him": {
        definition: "Someone is THE guy — the ideal, the one, the peak representation of something.",
        emoji: "👑",
        example: "He walked into that interview and got the job on the spot. He's him.",
        tags: ["compliment", "trending", "2024"],
        reverse: ["he's the one", "he's the standard", "peak achievement"]
    },
    "I can't even": {
        definition: "Expression of being completely overwhelmed, unable to process what just happened.",
        emoji: "😩",
        example: "He showed up with flowers? I can't even",
        tags: ["reaction", "emotion", "common"],
        reverse: ["I'm speechless", "I can't handle this", "overwhelming"]
    },
    "benching": {
        definition: "Keeping someone as a romantic backup option — just enough contact to stay on their radar but not actually dating them.",
        emoji: "⛹️",
        example: "He texts every two weeks — he's benching me",
        tags: ["relationship", "dating"],
        reverse: ["keeping as backup", "romantic reserve", "stringing along"]
    },
    "core memory": {
        definition: "A defining moment or memory that shaped who you are. From the movie Inside Out.",
        emoji: "🌟",
        example: "My first concert was a core memory for sure",
        tags: ["emotion", "nostalgia", "internet"],
        reverse: ["defining memory", "important moment", "formative experience"]
    },
    "dark academia": {
        definition: "An aesthetic centered on classic literature, autumn, old universities, dim lighting, and intellectual melancholy.",
        emoji: "📚",
        example: "Her whole look is dark academia — tweed and Greek poetry",
        tags: ["aesthetic", "fashion", "internet"],
        reverse: ["scholarly aesthetic", "gothic intellectual style", "autumn campus vibes"]
    },
    "cottagecore": {
        definition: "An aesthetic idealizing rural life — cottages, wildflowers, baking bread, linen dresses, romanticized simplicity.",
        emoji: "🌿",
        example: "Her whole feed is cottagecore, she makes her own jam",
        tags: ["aesthetic", "lifestyle", "trend"],
        reverse: ["rural fantasy aesthetic", "cottage life", "naturalistic dreamy style"]
    },
    "idc": {
        definition: "I don't care. Used to express indifference or dismiss a topic.",
        emoji: "🤷",
        example: "Idc what anyone says, that movie was great",
        tags: ["abbreviation", "common"],
        reverse: ["I don't care", "doesn't matter to me", "I'm indifferent"]
    },
    "stay pressed": {
        definition: "A dismissive response telling someone to stay bothered and upset — usually said triumphantly.",
        emoji: "🧂",
        example: "You blocked me? Okay stay pressed then",
        tags: ["dismissal", "confidence"],
        reverse: ["stay mad", "be bothered", "remain upset"]
    },
    "ate the beat": {
        definition: "Dancing or performing so well that you dominated the song. Complete mastery over the music.",
        emoji: "🎵",
        example: "The way she ate that beat, choreography was insane",
        tags: ["dance", "music", "compliment"],
        reverse: ["dominated the song", "danced perfectly", "owned the track"]
    },
    "posting your W": {
        definition: "Publicly sharing a win or success, usually on social media.",
        emoji: "🏆",
        example: "She got into her dream school and is definitely posting her W",
        tags: ["social media", "success"],
        reverse: ["sharing your success", "announcing your win", "flexing achievement"]
    },
    "do it for the plot": {
        definition: "Make a bold, possibly reckless decision because it'll make for a better story.",
        emoji: "🎬",
        example: "Text him back? I mean... do it for the plot",
        tags: ["advice", "trending", "2024"],
        reverse: ["do it for the story", "make it interesting", "live for drama"]
    },
    "eating good": {
        definition: "Thriving, succeeding, or living well. Usually in a financial or social sense.",
        emoji: "💰",
        example: "Since he got that new job, he's eating good",
        tags: ["success", "common"],
        reverse: ["thriving", "doing well", "succeeding"]
    },
    "the bag": {
        definition: "Money, success, or any valuable opportunity. 'Secure the bag' = get what you came for.",
        emoji: "💰",
        example: "Stop letting drama distract you, focus on the bag",
        tags: ["money", "success", "common"],
        reverse: ["money", "success", "opportunity", "financial goal"]
    },
    "secure the bag": {
        definition: "To successfully obtain money, success, or an important opportunity.",
        emoji: "🎯",
        example: "She got the partnership deal — secured the bag",
        tags: ["money", "success"],
        reverse: ["get the money", "achieve the goal", "lock in the deal"]
    },
    "NPC behavior": {
        definition: "Acting without independent thought — going through motions with no real agency or personality.",
        emoji: "🤖",
        example: "He just follows the crowd with no opinions — NPC behavior",
        tags: ["criticism", "internet", "gaming"],
        reverse: ["mindless behavior", "lack of individuality", "going through motions"]
    },
    "goon": {
        definition: "To be completely fixated on or obsessed with something to an embarrassing degree.",
        emoji: "😵",
        example: "He's gooning over that car game again",
        tags: ["internet", "obsession"],
        reverse: ["obsessing", "fixated", "deep in a rabbit hole"]
    },
    "caught a vibe": {
        definition: "Sensed a particular energy or feeling from a person or situation.",
        emoji: "🌊",
        example: "I caught a vibe from him immediately, something felt off",
        tags: ["feeling", "intuition"],
        reverse: ["sensed an energy", "felt the atmosphere", "got a feeling"]
    },
    "W rizz": {
        definition: "Successfully attracting or charming someone. A winning romantic or social interaction.",
        emoji: "🏆",
        example: "He asked her out and she said yes — W rizz",
        tags: ["compliment", "relationship"],
        reverse: ["successful flirt", "charming win", "romantic success"]
    },
    "main character syndrome": {
        definition: "Acting as if the world revolves around you and everyone else is just a supporting character in your story.",
        emoji: "🎬",
        example: "She always makes group events about her — main character syndrome",
        tags: ["criticism", "personality"],
        reverse: ["self-centered", "narcissism", "world-revolves-around-me attitude"]
    },
    "slay era": {
        definition: "A phase of life defined by exceptional performance, confidence, and success.",
        emoji: "💅",
        example: "I'm entering my slay era, nothing can stop me",
        tags: ["confidence", "success", "trending"],
        reverse: ["peak performance phase", "winning chapter", "successful period"]
    },
    "understood bestie": {
        definition: "Casual acknowledgment — I get it, no need to explain further. Warm dismissal.",
        emoji: "🤝",
        example: "You're tired? Understood bestie, let's reschedule",
        tags: ["agreement", "friendly", "common"],
        reverse: ["got it friend", "I understand", "no explanation needed"]
    },
    "goblinmode": {
        definition: "Fully embracing your worst, most chaotic self — messy, lazy, snacking, not caring about anything.",
        emoji: "👺",
        example: "It's Sunday and I'm in full goblin mode — snacks and no pants",
        tags: ["lifestyle", "humor", "trending", "2022"],
        reverse: ["chaotic self", "lazy mode", "not caring about appearance"]
    },
    "rizz god": {
        definition: "Someone with extraordinary, supernatural levels of charm and natural attraction.",
        emoji: "👑",
        example: "He got three numbers without saying much — rizz god energy",
        tags: ["compliment", "charm"],
        reverse: ["ultimate charmer", "most attractive person", "peak rizz"]
    },
    "touch base": {
        definition: "To check in briefly with someone. Often used ironically when applied to casual situations.",
        emoji: "📞",
        example: "Just wanted to touch base about the situation with your ex",
        tags: ["communication", "sarcastic"],
        reverse: ["check in", "connect briefly", "update each other"]
    },
    "bestie behavior": {
        definition: "Acting like a true best friend — supportive, honest, and present when needed.",
        emoji: "👯",
        example: "She stayed up talking to me all night — bestie behavior for real",
        tags: ["friendship", "compliment"],
        reverse: ["true friendship", "loyal behavior", "real friend energy"]
    },
    "delusional slay": {
        definition: "Being confidently wrong but fully committed to it, and somehow still impressive.",
        emoji: "🤡",
        example: "She was so wrong but delivered it with such confidence — delusional slay",
        tags: ["humor", "confidence"],
        reverse: ["confident delusion", "wrong but committed", "admirable delusion"]
    },
    "understood the vibe": {
        definition: "Perfectly read and matched the energy of a situation without being told.",
        emoji: "🎯",
        example: "She showed up casual and perfectly fit in — understood the vibe",
        tags: ["social", "compliment"],
        reverse: ["read the room perfectly", "matched the energy", "fit in seamlessly"]
    },

    "yeet": {
        definition: "To throw something with force. Also used as an exclamation of excitement or as a general-purpose Gen Z battle cry.",
        emoji: "🏌️",
        example: "She yeeted her phone across the room when she saw that text",
        tags: ["action", "humor", "common"],
        reverse: ["throw hard", "fling", "launch", "toss forcefully"]
    },
    "dank": {
        definition: "High quality, excellent. Originally described good weed, now used broadly for anything impressive.",
        emoji: "🌿",
        example: "That meme is absolutely dank",
        tags: ["compliment", "internet"],
        reverse: ["high quality", "excellent", "premium", "good"]
    },
    "drag": {
        definition: "To publicly roast, criticize, or mock someone harshly. Getting dragged = getting publicly called out.",
        emoji: "🔥",
        example: "Twitter dragged him for that tweet for days",
        tags: ["criticism", "social media"],
        reverse: ["roast", "publicly criticize", "call out", "mock harshly"]
    },
    "extra": {
        definition: "Over the top, excessive, dramatic. Someone who does too much or makes everything a whole production.",
        emoji: "💅",
        example: "She rented a helicopter for prom — so extra",
        tags: ["criticism", "behavior", "common"],
        reverse: ["over the top", "excessive", "dramatic", "too much"]
    },
    "lit": {
        definition: "Amazing, exciting, or on fire. Describes something fun, lively, or excellent.",
        emoji: "🔥",
        example: "That party was absolutely lit last night",
        tags: ["compliment", "common"],
        reverse: ["amazing", "exciting", "incredible", "on fire"]
    },
    "sheesh": {
        definition: "An exclamation of impressed disbelief or praise. Used when something is so good it's hard to believe.",
        emoji: "😤",
        example: "Sheesh, those drip levels are insane",
        tags: ["exclamation", "compliment", "common"],
        reverse: ["wow", "damn", "impressive", "oh my"]
    },
    "sksksk": {
        definition: "Onomatopoeic keyboard smash expressing laughter, excitement, or screaming. Common in VSCO girl and gay Twitter culture.",
        emoji: "😂",
        example: "Sksksk I can't believe he actually said that",
        tags: ["internet", "humor", "reaction"],
        reverse: ["lol", "screaming with laughter", "I can't"]
    },
    "ded": {
        definition: "So funny or shocking that you're metaphorically dead. Alternate spelling of 'dead'.",
        emoji: "💀",
        example: "I'm ded, that video sent me",
        tags: ["humor", "reaction", "internet"],
        reverse: ["I'm dying laughing", "that killed me", "hilarious"]
    },
    "i oop": {
        definition: "Expression of shock, embarrassment, or when something caught you off guard. VSCO girl origin.",
        emoji: "😳",
        example: "I oop — I did not see that coming",
        tags: ["reaction", "shock", "internet"],
        reverse: ["oh no", "I didn't expect that", "caught off guard"]
    },
    "chad": {
        definition: "An alpha male archetype — confident, assertive, highly attractive. Also used ironically to praise any bold move.",
        emoji: "💪",
        example: "He confronted his boss about the raise — total chad move",
        tags: ["personality", "meme", "compliment"],
        reverse: ["alpha male", "confident guy", "dominant person"]
    },
    "zaddy": {
        definition: "An attractive, stylish, and well-put-together man — often older — who exudes confidence and sex appeal.",
        emoji: "🕶️",
        example: "That professor is a zaddy and everyone knows it",
        tags: ["attraction", "compliment"],
        reverse: ["attractive older man", "stylish and sexy man", "daddy vibes"]
    },
    "thirst trap": {
        definition: "A photo or video posted specifically to attract attention and generate attraction from followers.",
        emoji: "🪤",
        example: "She posted that selfie at midnight — classic thirst trap",
        tags: ["social media", "attraction"],
        reverse: ["attention-seeking post", "sexy photo for engagement", "baiting attraction"]
    },
    "thirsty": {
        definition: "Desperately seeking attention, validation, or romantic interest in an obvious way.",
        emoji: "🥵",
        example: "He commented 'gorgeous' on every photo — so thirsty",
        tags: ["criticism", "attention"],
        reverse: ["desperate", "attention-seeking", "overly eager", "needy"]
    },
    "hot girl summer": {
        definition: "A period of living unapologetically and confidently — having fun, being attractive, and doing whatever you want.",
        emoji: "☀️",
        example: "No situationship drama, just hot girl summer vibes",
        tags: ["trending", "lifestyle", "confidence"],
        reverse: ["confident carefree summer", "living your best life", "unapologetic fun"]
    },
    "skill issue": {
        definition: "Dismissing someone's failure as purely their own lack of ability — no sympathy, just blame.",
        emoji: "🎮",
        example: "You lost in overtime? Skill issue.",
        tags: ["gaming", "criticism", "dismissal"],
        reverse: ["that's your fault", "you're just bad at it", "touch grass and practice"]
    },
    "gagged": {
        definition: "Completely shocked, speechless, or overwhelmed — usually in a positive way.",
        emoji: "😱",
        example: "When she revealed the twist I was fully gagged",
        tags: ["reaction", "shock", "compliment"],
        reverse: ["shocked", "speechless", "blown away", "stunned"]
    },
    "heather": {
        definition: "Someone who is effortlessly likeable, attractive, and the person everyone wishes they could be. From the Conan Gray song.",
        emoji: "🌸",
        example: "She walks in and everyone lights up — she's such a Heather",
        tags: ["compliment", "personality", "music"],
        reverse: ["universally loved person", "naturally popular person", "effortlessly likeable"]
    },
    "zombie-ing": {
        definition: "When someone who ghosted you suddenly resurfaces and acts like nothing happened.",
        emoji: "🧟",
        example: "He ghosted me for 3 months and now he's zombie-ing me",
        tags: ["relationship", "dating"],
        reverse: ["returning after ghosting", "coming back from the dead", "resuming contact without explanation"]
    },
    "shade": {
        definition: "Subtle disrespect or indirect insults. 'Throwing shade' = dissing someone passive-aggressively.",
        emoji: "🌚",
        example: "The way she said 'interesting choice' was pure shade",
        tags: ["criticism", "social", "common"],
        reverse: ["subtle disrespect", "indirect insult", "passive-aggressive diss"]
    },
    "sleeping on": {
        definition: "Overlooking or underestimating something great. If you're 'sleeping on' something, you're missing out.",
        emoji: "😴",
        example: "Everyone is sleeping on that album — it's fire",
        tags: ["opinion", "underrated"],
        reverse: ["overlooking", "underestimating", "missing out on", "ignoring greatness"]
    },
    "ok boomer": {
        definition: "Dismissive response to outdated or out-of-touch opinions, usually from older generations.",
        emoji: "👴",
        example: "He said social media is destroying society — ok boomer",
        tags: ["generational", "dismissal", "internet"],
        reverse: ["you're out of touch", "that's an old person take", "you don't get it"]
    },
    "L + ratio": {
        definition: "Online insult combo: you took an L (lost) AND your post got ratioed. Ultimate social media defeat.",
        emoji: "📊",
        example: "L + ratio + you fell off + nobody asked",
        tags: ["social media", "internet", "insult"],
        reverse: ["you lost and everyone disagrees", "double failure", "internet defeat"]
    },
    "word": {
        definition: "Agreement or acknowledgment. Saying 'word' is like saying 'exactly' or 'I hear you'.",
        emoji: "✍️",
        example: "We leaving at 9? Word.",
        tags: ["agreement", "common"],
        reverse: ["okay", "understood", "agreed", "exactly"]
    },
    "DTR": {
        definition: "Define The Relationship. The crucial conversation where you figure out if you're official or not.",
        emoji: "📋",
        example: "We've been on 6 dates, we need to DTR already",
        tags: ["relationship", "dating", "abbreviation"],
        reverse: ["define the relationship talk", "making it official", "what are we conversation"]
    },
    "ion": {
        definition: "I don't. Casual contraction used in text.",
        emoji: "🤷",
        example: "Ion even know what happened",
        tags: ["abbreviation", "common"],
        reverse: ["I don't", "I do not"]
    },
    "yas": {
        definition: "Enthusiastic, celebratory yes. More hype than a regular yes.",
        emoji: "🎉",
        example: "Yas queen, you got the job!",
        tags: ["enthusiasm", "compliment", "common"],
        reverse: ["yes!", "absolutely!", "let's go!", "amazing!"]
    },
    "clown": {
        definition: "Someone making foolish decisions — acting ridiculous. Calling yourself a clown = self-aware embarrassment.",
        emoji: "🤡",
        example: "I waited by the phone all night — I'm such a clown",
        tags: ["criticism", "humor", "self-aware"],
        reverse: ["fool", "embarrassing person", "someone being ridiculous"]
    },
    "big mad": {
        definition: "Extremely angry. More intense than regular mad.",
        emoji: "😡",
        example: "He's big mad about losing the tournament",
        tags: ["emotion", "emphasis"],
        reverse: ["extremely angry", "furious", "very upset"]
    },
    "sturdy": {
        definition: "A style of dancing — hitting hard movements in sync with the beat. Also used to mean impressive or solid.",
        emoji: "💃",
        example: "She got sturdy on the beat and the crowd went wild",
        tags: ["dance", "music", "trending"],
        reverse: ["dance style", "hitting the beat hard", "solid dance moves"]
    },

    "wsg": {
        definition: "What's good? A casual greeting asking how someone is doing or what's happening.",
        emoji: "👋",
        example: "Wsg bro, haven't seen you in a minute",
        tags: ["greeting", "common", "internet"],
        reverse: ["what's good", "how are you", "what's up"]
    },
    "wsp": {
        definition: "What's up / What's popping? A casual greeting or check-in.",
        emoji: "🤙",
        example: "Wsp, you coming tonight or nah?",
        tags: ["greeting", "common", "internet"],
        reverse: ["what's up", "what's popping", "how's it going"]
    },
    "wyd": {
        definition: "What are you doing? A casual check-in or conversation starter, sometimes used as a late-night 'you up?' equivalent.",
        emoji: "🤔",
        example: "Wyd later? We're all going to the mall",
        tags: ["common", "internet", "question"],
        reverse: ["what are you doing", "what are you up to", "you free?"]
    },
    "wya": {
        definition: "Where you at? Asking for someone's location, usually when meeting up.",
        emoji: "📍",
        example: "Wya?? We've been here for 20 mins",
        tags: ["common", "internet", "question"],
        reverse: ["where are you", "where are you at", "your location"]
    },
    "hmu": {
        definition: "Hit me up. An invitation to contact someone, often to hang out or make plans.",
        emoji: "📲",
        example: "Hmu if you wanna hang this weekend",
        tags: ["common", "internet", "invitation"],
        reverse: ["contact me", "text me", "reach out", "call me"]
    },
    "lmao": {
        definition: "Laughing my ass off. Expresses strong amusement, though often used without literally laughing.",
        emoji: "😂",
        example: "He slipped on ice in front of everyone lmao",
        tags: ["common", "internet", "reaction"],
        reverse: ["laughing hard", "that's funny", "dying laughing"]
    },
    "lmk": {
        definition: "Let me know. A casual request for information or a response.",
        emoji: "📬",
        example: "Lmk if you're coming, I need to know by 5",
        tags: ["common", "internet"],
        reverse: ["let me know", "tell me", "keep me posted"]
    },
    "frl": {
        definition: "For real. Used to express sincerity, agreement, or disbelief. Variation of 'fr'.",
        emoji: "💯",
        example: "Frl though, that was the best episode this season",
        tags: ["common", "emphasis", "agreement"],
        reverse: ["for real", "seriously", "genuinely", "no joke"]
    },
    "ima": {
        definition: "I'm going to / I'm about to. Contraction used before stating an action.",
        emoji: "➡️",
        example: "Ima just leave early, this party is dead",
        tags: ["common", "internet"],
        reverse: ["I'm going to", "I'm about to", "I will"]
    },
    "istg": {
        definition: "I swear to God. Used to emphasize honesty or express intense frustration.",
        emoji: "🙏",
        example: "Istg if he's late one more time I'm leaving without him",
        tags: ["common", "internet", "emphasis"],
        reverse: ["I swear to God", "I promise", "seriously"]
    },
    "icl": {
        definition: "I can't lie. Used to introduce an honest or sometimes surprising admission.",
        emoji: "🤷",
        example: "Icl that movie had me crying",
        tags: ["common", "honesty", "internet"],
        reverse: ["I can't lie", "honestly", "I have to admit"]
    },
    "crop": {
        definition: "To crop someone or something out of a photo — also used as a command in meme culture when you want just a specific part of an image.",
        emoji: "✂️",
        example: "Can you crop him out and send it to me",
        tags: ["internet", "meme", "social media"],
        reverse: ["cut out", "remove from photo", "edit someone out"]
    },
    "say less": {
        definition: "No need to say more — I understand and I'm on board. Signals agreement and readiness without needing further explanation.",
        emoji: "🤝",
        example: "We're going to the beach at noon. Say less, I'll be ready.",
        tags: ["common", "agreement", "internet"],
        reverse: ["understood", "say no more", "I got it", "I'm in"]
    },

};

// Trending slang terms for the chips
const trendingSlang = [
    { term: "rizz", emoji: "😏" },
    { term: "demure", emoji: "🎀" },
    { term: "brat", emoji: "💚" },
    { term: "skibidi", emoji: "🚽" },
    { term: "ohio", emoji: "🌽" },
    { term: "pookie", emoji: "🥰" },
    { term: "no cap", emoji: "🧢" },
    { term: "lowkey", emoji: "🤐" },
    { term: "bussin", emoji: "😋" },
    { term: "slay", emoji: "💅" },
    { term: "brainrot", emoji: "🧠" },
    { term: "low taper fade", emoji: "💇" },
    { term: "🥀", emoji: "🥀" },

    { term: "aura", emoji: "✨" },
    { term: "fanum tax", emoji: "🍔" },
    { term: "mewing", emoji: "😤" },
    { term: "iykyk", emoji: "🤫" },
    { term: "situationship", emoji: "🫠" },
    { term: "gyat", emoji: "😳" },
    { term: "do it for the plot", emoji: "🎬" },
    { term: "goblinmode", emoji: "👺" }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { slangDictionary, trendingSlang };
}
