import { format } from 'date-fns'

export interface Topic {
  category: string
  topics: string[]
  keywords: string[]
  musicMood: string[]
}

const TOPICS: Topic[] = [
  {
    category: 'Motivation',
    topics: [
      'Subah 5 baje uthne ki power',
      '1% better everyday ka secret',
      'Sapno ko reality mein badalne ka formula',
      'Failure se success tak ka journey',
      'Discipline vs Motivation - kya hai asli power',
      'Consistency ki shakti - ek kahaani',
      'Winners aur losers mein kya difference hai',
      'Apne dar ko kaise jeeto',
      'Success ke liye sacrifice kyun zaroori hai',
      'Hard work beats talent - ek sachai'
    ],
    keywords: ['motivation', 'success', 'inspiration', 'discipline', 'mindset'],
    musicMood: ['Inspiring orchestral', 'Uplifting motivational', 'Epic cinematic', 'Powerful drums']
  },
  {
    category: 'Dark Psychology',
    topics: [
      'Log aapko manipulate kaise karte hain',
      'Silent treatment ka psychology',
      'Gaslighting ke 5 signs',
      'Toxic log kaise identify karen',
      'Mind control ki hidden techniques',
      'Psychological warfare ka asli chehra',
      'Reverse psychology ka secret use',
      'Body language se kaise jhooth pakdein',
      'Narcissists ke secret patterns',
      'Emotional blackmail ko kaise pehchanein'
    ],
    keywords: ['psychology', 'mind', 'manipulation', 'dark', 'secrets'],
    musicMood: ['Dark ambient', 'Suspenseful thriller', 'Eerie mysterious', 'Ominous tension']
  },
  {
    category: 'Mystery',
    topics: [
      'Bermuda Triangle ka sach jo koi nahi batata',
      'Time travel ka ek unsolved mystery',
      'Ancient aliens theory - truth ya myth',
      'Haunted places ki scientific explanation',
      'Parallel universe ka shocking evidence',
      'Unsolved mysteries jo science explain nahi kar sakti',
      'Area 51 mein kya chupa hai',
      'Ancient civilizations ke lost secrets',
      'Mysterious disappearances ka dark truth',
      'Supernatural ya science - kya hai sach'
    ],
    keywords: ['mystery', 'unsolved', 'secrets', 'paranormal', 'unexplained'],
    musicMood: ['Mysterious ambient', 'Suspenseful strings', 'Enigmatic electronic', 'Haunting melody']
  },
  {
    category: 'Facts',
    topics: [
      'Space ke mind-blowing facts jo nahi jaante',
      'Human brain ke shocking secrets',
      'Ocean depths mein kya hai jo humne nahi dekha',
      'Ancient history ke hidden facts',
      'Technology ka dark side jo koi nahi batata',
      'Animal kingdom ke amazing facts',
      'Science facts jo logic ko challenge karti hain',
      'Universe ke impossible facts',
      'Human body ke secret powers',
      'Future predictions jo sach ho sakti hain'
    ],
    keywords: ['facts', 'knowledge', 'science', 'amazing', 'information'],
    musicMood: ['Curious upbeat', 'Wonder and discovery', 'Futuristic electronic', 'Educational inspiring']
  },
  {
    category: 'AI',
    topics: [
      'AI ne kaise badal di duniya 2025 mein',
      'ChatGPT se paise kaise kamayen',
      'AI jobs ko kaise replace kar raha hai',
      'Future mein AI ka dark side',
      'AI tools har student ko use karne chahiye',
      'AI vs Human - kaun jeetega',
      'Artificial Intelligence ka next level',
      'AI se content creation kaise karein',
      'Machine learning ka practical use',
      'AI ne possible banaya jo impossible tha'
    ],
    keywords: ['AI', 'technology', 'future', 'automation', 'innovation'],
    musicMood: ['Futuristic electronic', 'Tech-inspired beats', 'Digital ambient', 'Cyberpunk vibes']
  },
  {
    category: 'Spiritual',
    topics: [
      'Third eye ko activate karne ka secret',
      'Manifestation ka real science',
      'Meditation se life kaise change hoti hai',
      'Karma ka universal law',
      'Energy healing ki power',
      'Ancient Indian wisdom jo science prove kar raha hai',
      'Chakra system ka truth',
      'Law of attraction kaise kaam karta hai',
      'Spiritual awakening ke signs',
      'Universe ke signals kaise samjhein'
    ],
    keywords: ['spiritual', 'meditation', 'consciousness', 'energy', 'awakening'],
    musicMood: ['Peaceful meditation', 'Spiritual ambient', 'Calming nature sounds', 'Ethereal mystical']
  },
  {
    category: 'Horror',
    topics: [
      'Raat 3 baje kya hota hai jo aap nahi jaante',
      'Real haunted places in India',
      'Ghost encounters ki true stories',
      'Paranormal activity ka scientific reason',
      'Cursed objects jo aaj bhi exist karte hain',
      'Horror stories based on true events',
      'Bhoot pret - myth ya reality',
      'Haunted highways ki dark secrets',
      'Evil spirits se kaise bachen',
      'Scariest urban legends of India'
    ],
    keywords: ['horror', 'scary', 'paranormal', 'ghost', 'haunted'],
    musicMood: ['Creepy horror', 'Terrifying suspense', 'Dark atmospheric', 'Spine-chilling tension']
  },
  {
    category: 'Business',
    topics: [
      'Zero investment se business kaise start karein',
      'Side hustle ideas 2025',
      'Passive income ka secret formula',
      'Failed business se comeback kaise karein',
      'Digital marketing ka power',
      'Entrepreneurship mindset kaise develop karein',
      'Online business ke hidden opportunities',
      'Financial freedom kaise achieve karein',
      'Business ideas jo koi nahi batata',
      'Success ke liye smart work kaise karein'
    ],
    keywords: ['business', 'entrepreneurship', 'money', 'startup', 'success'],
    musicMood: ['Corporate inspiring', 'Upbeat business', 'Confident powerful', 'Achievement theme']
  }
]

export function getRandomTopic(): Topic {
  const today = new Date()
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24)
  const index = dayOfYear % TOPICS.length
  return TOPICS[index]
}

function getRandomFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function generateVideoContent(topicData: Topic) {
  const specificTopic = getRandomFromArray(topicData.topics)
  const musicMood = getRandomFromArray(topicData.musicMood)

  const scripts = generateScript(topicData.category, specificTopic)
  const scenes = generateScenes(topicData.category, specificTopic, scripts.script)
  const metadata = generateMetadata(topicData.category, specificTopic, topicData.keywords)

  return {
    topic: specificTopic,
    category: topicData.category,
    script: scripts.script,
    scenes: scenes,
    voiceoverScript: scripts.voiceoverScript,
    musicMood: musicMood,
    ...metadata
  }
}

function generateScript(category: string, topic: string) {
  const scripts: Record<string, any> = {
    'Motivation': {
      script: `[Hook - 0:00-0:03]
Kya aap jaante hain ki successful log aur ordinary log mein sirf EK difference hota hai?

[Body - 0:03-0:50]
Yeh difference hai - CONSISTENCY. Jab sab haar maan lete hain, winners bas ek baar aur try karte hain.

"${topic}" - yeh koi normal baat nahi hai. Yeh ek mindset hai, ek lifestyle hai.

Imagine karo - agar aap har din sirf 1% improve karein, toh 1 saal mein aap 37 GUNA better ho jaoge! Yeh science hai, mathematics hai.

Lekin problem kya hai? Log start toh karte hain, par quit kar dete hain jab results dikhte nahi.

Winners ka secret? Wo process pe focus karte hain, results pe nahi.

[CTA - 0:50-0:60]
Toh aaj se shuru karo. Kal nahi, aaj. Kyunki kal kabhi aata nahi.

Like karo agar ready ho apni life change karne ke liye! Subscribe karo for daily motivation! 🔥`,

      voiceoverScript: `[Deep, powerful voice with emotion]

Kya aap jaante hain ki successful log aur ordinary log mein sirf EK difference hota hai?

[Pause - 1 second]

Yeh difference hai - CONSISTENCY. [Emphasize] Jab sab haar maan lete hain, winners bas ek baar aur try karte hain.

[Pause]

"${topic}" - yeh koi normal baat nahi hai. Yeh ek mindset hai, ek lifestyle hai.

[Increase intensity]

Imagine karo - agar aap har din sirf 1% improve karein, toh 1 saal mein aap 37 GUNA better ho jaoge! Yeh science hai, mathematics hai.

[Lower tone, contemplative]

Lekin problem kya hai? Log start toh karte hain, par quit kar dete hain jab results dikhte nahi.

[Powerful, assertive]

Winners ka secret? Wo process pe focus karte hain, results pe nahi.

[Pause - 1 second]

[Strong CTA]

Toh aaj se shuru karo. Kal nahi, aaj. Kyunki kal kabhi aata nahi.

Like karo agar ready ho apni life change karne ke liye! Subscribe karo for daily motivation!`
    },
    'Dark Psychology': {
      script: `[Hook - 0:00-0:03]
Kya aap jaante hain log aapko manipulate kar rahe hain aur aapko pata bhi nahi chal raha?

[Body - 0:03-0:50]
Dark psychology ka yeh secret bohot kam log jaante hain.

"${topic}" - yeh ek weapon hai jo toxic log daily use karte hain.

Pehla sign: Wo aapko guilty feel karate hain har choti baat pe.
Dusra sign: Aapki reality ko question karte hain - "aisa kab hua?"
Teesra sign: Wo victim ban jaate hain jab aap confront karte ho.

Psychology studies kehti hain - manipulators sabse pehle aapka confidence target karte hain.

Wo dhire dhire aapke mann mein doubt daalte hain - apne baare mein, apni feelings ke baare mein.

[CTA - 0:50-0:60]
Agar yeh signs dikhe toh samajh jao - RUN!

Like karo agar yeh jaanna chahte ho aur kon se signs hain. Subscribe karo for more dark psychology secrets! ⚠️`,

      voiceoverScript: `[Deep, mysterious voice with serious tone]

Kya aap jaante hain log aapko manipulate kar rahe hain aur aapko pata bhi nahi chal raha?

[Pause - dark emphasis]

Dark psychology ka yeh secret bohot kam log jaante hain.

[Lower, intense]

"${topic}" - yeh ek weapon hai jo toxic log daily use karte hain.

[Clear, counting]

Pehla sign: Wo aapko guilty feel karate hain har choti baat pe.
Dusra sign: Aapki reality ko question karte hain - "aisa kab hua?"
Teesra sign: Wo victim ban jaate hain jab aap confront karte ho.

[Authoritative]

Psychology studies kehti hain - manipulators sabse pehle aapka confidence target karte hain.

Wo dhire dhire aapke mann mein doubt daalte hain - apne baare mein, apni feelings ke baare mein.

[Strong warning tone]

Agar yeh signs dikhe toh samajh jao - RUN!

Like karo agar yeh jaanna chahte ho aur kon se signs hain. Subscribe karo for more dark psychology secrets!`
    },
    'Mystery': {
      script: `[Hook - 0:00-0:03]
Ek aisi jagah jahan 75 planes aur 100+ ships gayab ho chuke hain... aur koi jawaab nahi!

[Body - 0:03-0:50]
"${topic}" - yeh duniya ka sabse dangerous mystery hai.

Scientists ke paas theories hain, lekin proof? Zero.

Kuch kehte hain magnetic field ki wajah se compass fail ho jaata hai.
Kuch kehte hain methane gas underwater explosions create karta hai.
Aur kuch believe karte hain... aliens!

Par sach yeh hai - 2025 mein bhi yeh mystery unsolved hai.

Real cases dekho: Flight 19 - 5 torpedo bombers disappeared in 1945. Koi trace nahi mila.
USS Cyclops - 300 log ke saath vanish, koi distress signal nahi.

Science explain nahi kar paa rahi, toh kya yeh supernatural hai?

[CTA - 0:50-0:60]
Aap kya sochte ho - science ya supernatural? Comment mein batao!

Like karo agar mystery solve karni hai! Subscribe for more unexplained mysteries! 🔍`,

      voiceoverScript: `[Mysterious, suspenseful voice]

Ek aisi jagah jahan 75 planes aur 100+ ships gayab ho chuke hain... [Pause] aur koi jawaab nahi!

[Build suspense]

"${topic}" - yeh duniya ka sabse dangerous mystery hai.

[Serious tone]

Scientists ke paas theories hain, lekin proof? [Pause] Zero.

[Listing clearly]

Kuch kehte hain magnetic field ki wajah se compass fail ho jaata hai.
Kuch kehte hain methane gas underwater explosions create karta hai.
Aur kuch believe karte hain... [Whisper] aliens!

[Normal voice]

Par sach yeh hai - 2025 mein bhi yeh mystery unsolved hai.

[Dramatic examples]

Real cases dekho: Flight 19 - 5 torpedo bombers disappeared in 1945. Koi trace nahi mila.
USS Cyclops - 300 log ke saath vanish, koi distress signal nahi.

[Questioning]

Science explain nahi kar paa rahi, toh kya yeh supernatural hai?

[Engaging CTA]

Aap kya sochte ho - science ya supernatural? Comment mein batao!

Like karo agar mystery solve karni hai! Subscribe for more unexplained mysteries!`
    },
    'Facts': {
      script: `[Hook - 0:00-0:03]
Agar main kahin ki aapka brain ek supercomputer se zyada powerful hai? Believe it or not!

[Body - 0:03-0:50]
"${topic}" - yeh facts aapka mind blow kar denge!

Fact #1: Aapka brain 1 second mein 11 MILLION pieces of information process karta hai. Lekin consciously? Sirf 40!

Fact #2: Space complete silence hai kyunki wahan koi medium nahi hai sound waves travel karne ke liye.

Fact #3: Ocean ka 95% part abhi tak unexplored hai. Hum Mars ke baare mein zyada jaante hain apne ocean floor ke baare mein!

Aur sabse crazy fact? Honey kabhi kharab nahi hota! 3000 saal purani honey edible thi!

Science amazing hai, lekin kuch cheezein aaj bhi mystery hain.

[CTA - 0:50-0:60]
More mind-blowing facts chahiye? Like aur subscribe karo!

Comment mein batao kaun sa fact sabse shocking laga! 🧠`,

      voiceoverScript: `[Energetic, curious voice]

Agar main kahin ki aapka brain ek supercomputer se zyada powerful hai? [Pause] Believe it or not!

[Exciting tone]

"${topic}" - yeh facts aapka mind blow kar denge!

[Clear enumeration with pauses]

Fact number 1: Aapka brain 1 second mein gyaarah MILLION pieces of information process karta hai. [Pause] Lekin consciously? Sirf chaalees!

Fact number 2: Space complete silence hai kyunki wahan koi medium nahi hai sound waves travel karne ke liye.

Fact number 3: Ocean ka 95 percent part abhi tak unexplored hai. Hum Mars ke baare mein zyada jaante hain apne ocean floor ke baare mein!

[Amazed tone]

Aur sabse crazy fact? Honey kabhi kharab nahi hota! 3000 saal purani honey edible thi!

[Wonder]

Science amazing hai, lekin kuch cheezein aaj bhi mystery hain.

[Upbeat CTA]

More mind-blowing facts chahiye? Like aur subscribe karo!

Comment mein batao kaun sa fact sabse shocking laga!`
    },
    'AI': {
      script: `[Hook - 0:00-0:03]
2025 mein AI ne kuch aisa kar diya jo 5 saal pehle impossible tha!

[Body - 0:03-0:50]
"${topic}" - yeh revolution hai ya destruction?

ChatGPT, Midjourney, Runway - yeh sirf tools nahi, yeh future hai.

Fact: AI ab code likh sakta hai, video bana sakta hai, art create kar sakta hai.
Reality: Lakho jobs risk pe hain.
Opportunity: Naye jobs create ho rahe hain jo pehle exist hi nahi karte the.

Experts predict karte hain - 2030 tak 40% jobs automate ho jayengi.

Par yahan twist hai - jo log AI ke saath adapt karenge, wo dominate karenge.

AI replacement nahi hai, yeh tool hai. Ise use karo, isse daro mat.

[CTA - 0:50-0:60]
AI sikhna hai? Like karo!

Subscribe karo for AI tips and tricks daily! Comment "AI" if you're ready for the future! 🤖`,

      voiceoverScript: `[Modern, tech-savvy voice with energy]

2025 mein AI ne kuch aisa kar diya jo paanch saal pehle impossible tha!

[Intrigued]

"${topic}" - yeh revolution hai ya destruction?

[Clear, tech-focused]

ChatGPT, Midjourney, Runway - yeh sirf tools nahi, yeh future hai.

[Listing with impact]

Fact: AI ab code likh sakta hai, video bana sakta hai, art create kar sakta hai.
Reality: Lakho jobs risk pe hain.
Opportunity: Naye jobs create ho rahe hain jo pehle exist hi nahi karte the.

[Serious tone]

Experts predict karte hain - 2030 tak 40 percent jobs automate ho jayengi.

[Positive twist]

Par yahan twist hai - jo log AI ke saath adapt karenge, wo dominate karenge.

[Empowering]

AI replacement nahi hai, yeh tool hai. Ise use karo, isse daro mat.

[Strong CTA]

AI sikhna hai? Like karo!

Subscribe karo for AI tips and tricks daily! Comment "AI" if you're ready for the future!`
    },
    'Spiritual': {
      script: `[Hook - 0:00-0:03]
Kya aap apne thoughts se apni reality create kar sakte hain? Ancient wisdom kehta hai - YES!

[Body - 0:03-0:50]
"${topic}" - yeh sirf myth nahi, yeh science hai.

Quantum physics prove kar rahi hai jo ancient rishis hazar saal pehle jaante the.

Law of attraction kaam kaise karta hai?
1. Your thoughts create energy
2. Energy creates vibration
3. Vibration attracts similar frequency

Real example: Athletes visualization use karte hain. Olympic champions mentally practice karte hain aur brain ko train karte hain.

Neuroscience kehta hai - aapka brain reality aur imagination mein difference nahi samajh pata!

Daily meditation se aap apne consciousness ko expand kar sakte ho.

[CTA - 0:50-0:60]
Spiritual journey start karni hai? Like karo!

Subscribe for daily spiritual wisdom! Comment "OM" agar aap ready ho! 🕉️`,

      voiceoverScript: `[Calm, spiritual voice with depth]

Kya aap apne thoughts se apni reality create kar sakte hain? [Pause] Ancient wisdom kehta hai - YES!

[Mystical tone]

"${topic}" - yeh sirf myth nahi, yeh science hai.

[Connecting past and present]

Quantum physics prove kar rahi hai jo ancient rishis hazar saal pehle jaante the.

[Clear explanation]

Law of attraction kaam kaise karta hai?
[Slowly] Ek: Your thoughts create energy
Do: Energy creates vibration
Teen: Vibration attracts similar frequency

[Real-world example]

Real example: Athletes visualization use karte hain. Olympic champions mentally practice karte hain aur brain ko train karte hain.

[Scientific backing]

Neuroscience kehta hai - aapka brain reality aur imagination mein difference nahi samajh pata!

[Empowering]

Daily meditation se aap apne consciousness ko expand kar sakte ho.

[Peaceful CTA]

Spiritual journey start karni hai? Like karo!

Subscribe for daily spiritual wisdom! Comment "OM" agar aap ready ho!`
    },
    'Horror': {
      script: `[Hook - 0:00-0:03]
Raat ke 3 baje aapke ghar mein koi hai... aur woh aap nahi ho!

[Body - 0:03-0:50]
"${topic}" - yeh ek TRUE story hai.

Paranormal experts kehte hain 3 AM ko "Devil's Hour" kehte hain. Kyun?

3 AM pe spiritual world aur physical world ke beech ki wall sabse patli hoti hai.

Real incident: Ek family ne apne baby monitor pe ek shadow dekha... jo move kar raha tha. Camera recording thi. Explanation? Zero.

Science kehti hai - infrasound (low frequency sound) hallucinations create kar sakti hai.

Par kya yeh sab science se explain ho sakta hai?

Haunted places pe EMF (electromagnetic field) readings high hoti hain. Coincidence?

[CTA - 0:50-0:60]
Dare to know more? Like karo agar himmat hai!

Subscribe for real horror stories! Comment "3AM" agar aap sach jaanna chahte ho! 👻`,

      voiceoverScript: `[Dark, eerie voice with suspense]

[Whispered intensity] Raat ke teen baje aapke ghar mein koi hai... [Pause] aur woh aap nahi ho!

[Creepy, serious]

"${topic}" - yeh ek TRUE story hai.

[Building fear]

Paranormal experts kehte hain 3 AM ko "Devil's Hour" kehte hain. [Pause] Kyun?

[Mysterious explanation]

3 AM pe spiritual world aur physical world ke beech ki wall sabse patli hoti hai.

[Real case - dramatic]

Real incident: Ek family ne apne baby monitor pe ek shadow dekha... jo move kar raha tha. Camera recording thi. [Pause] Explanation? Zero.

[Scientific angle]

Science kehti hai - infrasound (low frequency sound) hallucinations create kar sakti hai.

[Questioning]

Par kya yeh sab science se explain ho sakta hai?

[More mystery]

Haunted places pe EMF readings high hoti hain. [Pause] Coincidence?

[Daring CTA]

Dare to know more? Like karo agar himmat hai!

Subscribe for real horror stories! Comment "3AM" agar aap sach jaanna chahte ho!`
    },
    'Business': {
      script: `[Hook - 0:00-0:03]
0 rupees se millionaire banna possible hai? 100+ log kar chuke hain!

[Body - 0:03-0:50]
"${topic}" - yeh formula sabke liye kaam karta hai.

Traditional job se financial freedom nahi milti. Why? Kyunki aap time ke liye paisa exchange karte ho.

Smart approach? Multiple income streams.

Online opportunities 2025 mein:
- Content creation (YouTube, Instagram)
- Freelancing (skills se paisa)
- Digital products (courses, ebooks)
- Affiliate marketing (commission income)

Real example: Ek teacher ne YouTube shorts se 6 months mein 5 lakh kama liye. Zero investment!

Secret? CONSISTENCY + VALUE + STRATEGY.

Most people fail kyunki wo get-rich-quick schemes dhundhte hain. Real wealth? Time lagta hai.

[CTA - 0:50-0:60]
Business mindset chahiye? Like karo!

Subscribe for daily business ideas! Comment "BUSINESS" agar serious ho! 💰`,

      voiceoverScript: `[Confident, entrepreneurial voice]

Zero rupees se millionaire banna possible hai? [Pause] 100 se zyada log kar chuke hain!

[Business-like tone]

"${topic}" - yeh formula sabke liye kaam karta hai.

[Reality check]

Traditional job se financial freedom nahi milti. Why? Kyunki aap time ke liye paisa exchange karte ho.

[Solution]

Smart approach? Multiple income streams.

[Clear list]

Online opportunities 2025 mein:
[Counting] Content creation - YouTube, Instagram
Freelancing - skills se paisa
Digital products - courses, ebooks
Affiliate marketing - commission income

[Inspiring example]

Real example: Ek teacher ne YouTube shorts se chhe months mein paanch lakh kama liye. [Emphasis] Zero investment!

[Key formula]

Secret? CONSISTENCY plus VALUE plus STRATEGY.

[Truth bomb]

Most people fail kyunki wo get-rich-quick schemes dhundhte hain. Real wealth? Time lagta hai.

[Action CTA]

Business mindset chahiye? Like karo!

Subscribe for daily business ideas! Comment "BUSINESS" agar serious ho!`
    }
  }

  return scripts[category] || scripts['Motivation']
}

function generateScenes(category: string, topic: string, script: string) {
  const sceneTemplates: Record<string, any[]> = {
    'Motivation': [
      {
        sceneNumber: 1,
        duration: '0:00-0:03',
        narration: 'Hook - Kya aap jaante hain ki successful log aur ordinary log mein sirf EK difference hota hai?',
        imagePrompt: 'Cinematic split screen, one side showing successful person climbing mountain peak at golden hour, other side showing ordinary person sitting idle, ultra realistic, 4K, dramatic lighting, inspirational mood, wide angle shot'
      },
      {
        sceneNumber: 2,
        duration: '0:03-0:20',
        narration: 'Yeh difference hai - CONSISTENCY. Jab sab haar maan lete hain, winners bas ek baar aur try karte hain.',
        imagePrompt: 'Powerful athlete training in rain, never giving up, sweat and raindrops visible, dark dramatic sky, cinematic 4K, ultra realistic, bokeh effect, motivational aesthetic, intense determination on face'
      },
      {
        sceneNumber: 3,
        duration: '0:20-0:35',
        narration: 'Agar aap har din sirf 1% improve karein, toh 1 saal mein aap 37 GUNA better ho jaoge!',
        imagePrompt: 'Upward graph with glowing progress bars, mathematical visualization, futuristic holographic display, dark background with neon blue and gold accents, ultra realistic 4K, cinematic depth of field'
      },
      {
        sceneNumber: 4,
        duration: '0:35-0:50',
        narration: 'Winners ka secret? Wo process pe focus karte hain, results pe nahi.',
        imagePrompt: 'Close-up of focused eyes with reflection of goals in pupils, dramatic side lighting, ultra realistic 4K, cinematic grain, dark aesthetic with rim lighting, determination visible'
      },
      {
        sceneNumber: 5,
        duration: '0:50-0:60',
        narration: 'Toh aaj se shuru karo. Kal nahi, aaj.',
        imagePrompt: 'Sunrise over mountains, person standing on cliff edge arms raised in victory, golden hour lighting, cinematic wide shot, ultra realistic 4K, inspirational mood, lens flare, epic scale'
      }
    ],
    'Dark Psychology': [
      {
        sceneNumber: 1,
        duration: '0:00-0:03',
        narration: 'Kya aap jaante hain log aapko manipulate kar rahe hain?',
        imagePrompt: 'Shadowy figure pulling puppet strings attached to a person, dark cinematic lighting, ultra realistic 4K, ominous red and black color grading, dramatic perspective, psychological thriller aesthetic'
      },
      {
        sceneNumber: 2,
        duration: '0:03-0:20',
        narration: 'Dark psychology ka yeh secret bohot kam log jaante hain.',
        imagePrompt: 'Silhouette of two faces profile, one manipulating the other with visible brain neurons connecting them, dark background, purple and black tones, ultra realistic 4K, cinematic depth, mysterious mood'
      },
      {
        sceneNumber: 3,
        duration: '0:20-0:40',
        narration: 'Pehla sign: Wo aapko guilty feel karate hain har choti baat pe.',
        imagePrompt: 'Person trapped in chains made of words and guilt, dark prison aesthetic, dramatic lighting from above, ultra realistic 4K, psychological horror vibe, desaturated colors with red accents'
      },
      {
        sceneNumber: 4,
        duration: '0:40-0:50',
        narration: 'Manipulators sabse pehle aapka confidence target karte hain.',
        imagePrompt: 'Cracked mirror reflection showing confident face shattering into pieces, dark dramatic lighting, ultra realistic 4K, psychological thriller mood, slow motion effect aesthetic, sharp details'
      },
      {
        sceneNumber: 5,
        duration: '0:50-0:60',
        narration: 'Agar yeh signs dikhe toh samajh jao - RUN!',
        imagePrompt: 'Person running away from dark shadows reaching toward them, emergency exit sign glowing, cinematic chase scene, ultra realistic 4K, dramatic lighting, intense fear expression, motion blur'
      }
    ],
    'Mystery': [
      {
        sceneNumber: 1,
        duration: '0:00-0:03',
        narration: 'Ek aisi jagah jahan 75 planes aur 100+ ships gayab ho chuke hain...',
        imagePrompt: 'Aerial view of mysterious ocean triangle with ghostly outlines of vanished ships and planes underwater, dark stormy atmosphere, ultra realistic 4K, cinematic wide shot, eerie blue-green color grading'
      },
      {
        sceneNumber: 2,
        duration: '0:03-0:20',
        narration: 'Scientists ke paas theories hain, lekin proof? Zero.',
        imagePrompt: 'Scientists examining holographic maps and data screens showing unexplained phenomena, dark laboratory, mysterious blue lighting, ultra realistic 4K, cinematic depth of field, confused expressions'
      },
      {
        sceneNumber: 3,
        duration: '0:20-0:40',
        narration: 'Kuch kehte hain magnetic field ki wajah se compass fail ho jaata hai.',
        imagePrompt: 'Spinning compass with needles going crazy, electromagnetic waves visible, lightning in background, dark aesthetic, ultra realistic 4K, cinematic macro shot, dramatic lighting, scientific mystery vibe'
      },
      {
        sceneNumber: 4,
        duration: '0:40-0:50',
        narration: 'Flight 19 - 5 torpedo bombers disappeared in 1945. Koi trace nahi mila.',
        imagePrompt: 'Vintage military planes flying into mysterious fog bank over ocean, 1940s aesthetic, dark ominous clouds, ultra realistic 4K, cinematic wide angle, historical mystery mood, disappearing effect'
      },
      {
        sceneNumber: 5,
        duration: '0:50-0:60',
        narration: 'Science explain nahi kar paa rahi, toh kya yeh supernatural hai?',
        imagePrompt: 'Split screen of scientific equipment vs supernatural energy portal, clash of science and paranormal, ultra realistic 4K, cinematic lighting, mysterious purple and green auras, dramatic contrast'
      }
    ],
    'Facts': [
      {
        sceneNumber: 1,
        duration: '0:00-0:03',
        narration: 'Aapka brain ek supercomputer se zyada powerful hai!',
        imagePrompt: 'Human brain with glowing neural connections next to a supercomputer, comparison visual, futuristic lighting, ultra realistic 4K, cinematic depth, blue and gold color scheme, amazing discovery mood'
      },
      {
        sceneNumber: 2,
        duration: '0:03-0:20',
        narration: 'Aapka brain 1 second mein 11 MILLION pieces of information process karta hai.',
        imagePrompt: 'Brain with streams of data and numbers flowing through neural pathways, matrix-style visualization, dark background with bright data streams, ultra realistic 4K, cinematic sci-fi aesthetic'
      },
      {
        sceneNumber: 3,
        duration: '0:20-0:35',
        narration: 'Space complete silence hai kyunki wahan koi medium nahi hai.',
        imagePrompt: 'Astronaut floating in space surrounded by complete silence, stars and galaxies visible, sound waves disappearing into void, ultra realistic 4K, cinematic wide shot, peaceful yet eerie mood'
      },
      {
        sceneNumber: 4,
        duration: '0:35-0:50',
        narration: 'Ocean ka 95% part abhi tak unexplored hai.',
        imagePrompt: 'Deep ocean abyss with mysterious creatures and unknown structures, bioluminescent life, dark depths, ultra realistic 4K, cinematic underwater shot, mysterious blue-black gradient, alien-like aesthetic'
      },
      {
        sceneNumber: 5,
        duration: '0:50-0:60',
        narration: 'Honey kabhi kharab nahi hota! 3000 saal purani honey edible thi!',
        imagePrompt: 'Ancient Egyptian tomb with honey jar glowing golden, archaeological discovery scene, dramatic torch lighting, ultra realistic 4K, cinematic composition, historical mystery mood, golden hour tones'
      }
    ],
    'AI': [
      {
        sceneNumber: 1,
        duration: '0:00-0:03',
        narration: '2025 mein AI ne kuch aisa kar diya jo 5 saal pehle impossible tha!',
        imagePrompt: 'Futuristic AI robot creating art, coding, and generating videos simultaneously, holographic displays, neon lighting, ultra realistic 4K, cinematic sci-fi aesthetic, cyberpunk mood, vibrant colors'
      },
      {
        sceneNumber: 2,
        duration: '0:03-0:20',
        narration: 'ChatGPT, Midjourney, Runway - yeh sirf tools nahi, yeh future hai.',
        imagePrompt: 'Multiple AI interfaces floating in 3D space, ChatGPT logo, Midjourney art generation, Runway video tools, futuristic command center, ultra realistic 4K, cinematic depth, tech-forward aesthetic'
      },
      {
        sceneNumber: 3,
        duration: '0:20-0:40',
        narration: 'AI ab code likh sakta hai, video bana sakta hai, art create kar sakta hai.',
        imagePrompt: 'AI neural network creating code, videos, and artwork in real-time, digital creation process visible, matrix-style data flow, ultra realistic 4K, cinematic visualization, neon blue and purple tones'
      },
      {
        sceneNumber: 4,
        duration: '0:40-0:50',
        narration: '2030 tak 40% jobs automate ho jayengi.',
        imagePrompt: 'Futuristic factory with robots replacing humans, empty offices with AI screens, dystopian yet advanced, ultra realistic 4K, cinematic wide shot, cold blue lighting, transformation aesthetic'
      },
      {
        sceneNumber: 5,
        duration: '0:50-0:60',
        narration: 'Jo log AI ke saath adapt karenge, wo dominate karenge.',
        imagePrompt: 'Person in futuristic suit working harmoniously with AI hologram, partnership visualization, empowering scene, ultra realistic 4K, cinematic lighting, optimistic future mood, gold and blue accents'
      }
    ],
    'Spiritual': [
      {
        sceneNumber: 1,
        duration: '0:00-0:03',
        narration: 'Kya aap apne thoughts se apni reality create kar sakte hain?',
        imagePrompt: 'Person meditating with thought bubbles manifesting into reality around them, spiritual energy visible, golden hour lighting, ultra realistic 4K, cinematic depth, peaceful mystical mood, lotus position'
      },
      {
        sceneNumber: 2,
        duration: '0:03-0:20',
        narration: 'Ancient wisdom kehta hai jo quantum physics ab prove kar rahi hai.',
        imagePrompt: 'Ancient Indian sage and modern scientist standing together looking at quantum particles, bridge between ancient and modern, ultra realistic 4K, cinematic composition, spiritual scientific fusion'
      },
      {
        sceneNumber: 3,
        duration: '0:20-0:40',
        narration: 'Your thoughts create energy, energy creates vibration.',
        imagePrompt: 'Human silhouette with colorful energy waves emanating from head and heart chakra, vibration visualization, ethereal atmosphere, ultra realistic 4K, cinematic lighting, spiritual color spectrum'
      },
      {
        sceneNumber: 4,
        duration: '0:40-0:50',
        narration: 'Aapka brain reality aur imagination mein difference nahi samajh pata!',
        imagePrompt: 'Split brain visualization showing reality and imagination merging, neural pathways connecting both sides, mystical meets scientific, ultra realistic 4K, cinematic macro shot, purple and gold tones'
      },
      {
        sceneNumber: 5,
        duration: '0:50-0:60',
        narration: 'Daily meditation se aap apne consciousness ko expand kar sakte ho.',
        imagePrompt: 'Person in deep meditation with expanding consciousness visualization, cosmic connection, galaxy and stars forming around them, ultra realistic 4K, cinematic wide shot, spiritual transcendence mood'
      }
    ],
    'Horror': [
      {
        sceneNumber: 1,
        duration: '0:00-0:03',
        narration: 'Raat ke 3 baje aapke ghar mein koi hai... aur woh aap nahi ho!',
        imagePrompt: 'Dark bedroom at 3 AM with shadowy figure standing in corner, clock showing 3:00, eerie red glow, ultra realistic 4K, cinematic horror lighting, terrifying atmosphere, found footage aesthetic'
      },
      {
        sceneNumber: 2,
        duration: '0:03-0:20',
        narration: '3 AM ko "Devil\'s Hour" kehte hain.',
        imagePrompt: 'Digital clock displaying 3:00 AM with demonic shadows creeping around it, haunted house interior, ultra realistic 4K, cinematic horror shot, cold blue and red lighting, supernatural dread'
      },
      {
        sceneNumber: 3,
        duration: '0:20-0:40',
        narration: 'Ek family ne baby monitor pe ek shadow dekha jo move kar raha tha.',
        imagePrompt: 'Baby monitor screen showing nursery with dark shadow figure moving, static interference, night vision green tint, ultra realistic 4K, cinematic found footage style, creepy paranormal activity'
      },
      {
        sceneNumber: 4,
        duration: '0:40-0:50',
        narration: 'Haunted places pe EMF readings high hoti hain.',
        imagePrompt: 'Paranormal investigator holding EMF detector with red flashing lights in abandoned location, electromagnetic waves visible, ultra realistic 4K, cinematic horror documentary style, dark green tones'
      },
      {
        sceneNumber: 5,
        duration: '0:50-0:60',
        narration: 'Dare to know more? Agar himmat hai!',
        imagePrompt: 'Creepy hallway with doors slightly open, mysterious light coming through, person\'s silhouette deciding to enter, ultra realistic 4K, cinematic suspense shot, horror movie aesthetic, ominous mood'
      }
    ],
    'Business': [
      {
        sceneNumber: 1,
        duration: '0:00-0:03',
        narration: '0 rupees se millionaire banna possible hai?',
        imagePrompt: 'Transformation split screen: left side showing empty wallet, right side showing successful entrepreneur with luxury lifestyle, cinematic 4K, ultra realistic, dramatic lighting, success journey visualization'
      },
      {
        sceneNumber: 2,
        duration: '0:03-0:20',
        narration: 'Traditional job se financial freedom nahi milti.',
        imagePrompt: 'Person trapped in corporate cubicle vs person working freely on laptop by beach, contrast of freedom, ultra realistic 4K, cinematic split composition, lifestyle comparison, inspirational mood'
      },
      {
        sceneNumber: 3,
        duration: '0:20-0:40',
        narration: 'Multiple income streams - Content creation, Freelancing, Digital products.',
        imagePrompt: 'Multiple streams of money flowing into one center point, digital icons representing different income sources, futuristic financial visualization, ultra realistic 4K, cinematic depth, gold and green tones'
      },
      {
        sceneNumber: 4,
        duration: '0:40-0:50',
        narration: 'Ek teacher ne YouTube shorts se 6 months mein 5 lakh kama liye.',
        imagePrompt: 'Teacher creating YouTube content on phone, viral shorts playing, money and growth graphs rising, ultra realistic 4K, cinematic success story aesthetic, motivational lighting, modern setup'
      },
      {
        sceneNumber: 5,
        duration: '0:50-0:60',
        narration: 'CONSISTENCY + VALUE + STRATEGY = Success',
        imagePrompt: 'Three pillars supporting success temple, mathematical formula visualization, entrepreneur standing confidently, ultra realistic 4K, cinematic architectural shot, golden hour lighting, achievement mood'
      }
    ]
  }

  return sceneTemplates[category] || sceneTemplates['Motivation']
}

function generateMetadata(category: string, topic: string, keywords: string[]) {
  const titles: Record<string, string[]> = {
    'Motivation': [
      `${topic} - Life Changing Truth! 🔥`,
      `How To ${topic} - Powerful Strategy 💪`,
      `${topic} Ki Hidden Power - Must Watch! ⚡`,
      `Secret Of ${topic} - Game Changer! 🎯`,
      `${topic} - Ek Baar Dekh Lo! Success Guaranteed 🚀`
    ],
    'Dark Psychology': [
      `${topic} - Dark Truth Nobody Tells! ⚠️`,
      `Psychology Trick: ${topic} Exposed! 🧠`,
      `${topic} - Protect Yourself NOW! ⚡`,
      `Hidden Secret: ${topic} Revealed! 🔓`,
      `${topic} - Toxic Behavior Alert! 🚨`
    ],
    'Mystery': [
      `${topic} - Unsolved Mystery! 🔍`,
      `The Truth About ${topic} - Shocking! 😱`,
      `${topic} - Science Can't Explain! 🌀`,
      `Mystery: ${topic} - Mind Blowing! 🤯`,
      `${topic} - Real Story! Unexplained! 👁️`
    ],
    'Facts': [
      `${topic} - Mind Blowing Facts! 🧠`,
      `Amazing Facts: ${topic} 🤯`,
      `${topic} - Facts That Will Shock You! ⚡`,
      `Incredible ${topic} Facts! Must Know! 📚`,
      `${topic} - Unbelievable Truth! 🔥`
    ],
    'AI': [
      `${topic} - AI Revolution 2025! 🤖`,
      `Future of AI: ${topic} Explained! 🚀`,
      `${topic} - AI Game Changer! ⚡`,
      `How AI ${topic} - Complete Guide! 💡`,
      `${topic} - AI Truth 2025! Must Watch! 🔮`
    ],
    'Spiritual': [
      `${topic} - Spiritual Secret! 🕉️`,
      `Ancient Wisdom: ${topic} Revealed! ✨`,
      `${topic} - Life Changing Truth! 🙏`,
      `Spiritual Power: ${topic} Explained! 💫`,
      `${topic} - Consciousness Awakening! 🧘`
    ],
    'Horror': [
      `${topic} - Real Horror Story! 👻`,
      `Scary Truth: ${topic} - Watch Alone! 😱`,
      `${topic} - True Horror! Haunted! 🕯️`,
      `Paranormal ${topic} - Real Story! 🌙`,
      `${topic} - Creepy Truth! Don't Watch At Night! 🔦`
    ],
    'Business': [
      `${topic} - Make Money 2025! 💰`,
      `Business Secret: ${topic} Revealed! 🚀`,
      `${topic} - Passive Income Strategy! 💵`,
      `How To ${topic} - Complete Guide! 📈`,
      `${topic} - Financial Freedom 2025! 🎯`
    ]
  }

  const categoryTitles = titles[category] || titles['Motivation']
  const title = categoryTitles[Math.floor(Math.random() * categoryTitles.length)]

  const description = `🎯 ${topic}

In this video, we explore the fascinating topic of "${topic}" in the ${category} category.

This content is:
✅ 100% Original
✅ High Retention Focused
✅ Backed by Research
✅ Engaging & Entertaining

📌 Watch till the end for complete information!

🔔 Subscribe for daily ${category.toLowerCase()} content
👍 Like if you found this valuable
💬 Comment your thoughts below
📤 Share with someone who needs this

---

🎬 Video created with AI tools:
• Script: Custom AI generation
• Voiceover: Professional TTS
• Visuals: AI image generation (Midjourney/DALL-E style)
• Editing: Pictory/Runway workflow

---

📧 Business Inquiries: [Your Email]
🌐 Website: [Your Website]

---

#${category} #${keywords[0]} #${keywords[1]} #Shorts #Viral #Trending #Hindi #India #${new Date().getFullYear()}

---

⚠️ Disclaimer: This content is for educational and entertainment purposes only. Always do your own research and consult professionals when needed.

🙏 Thanks for watching! Your support means everything!

© ${new Date().getFullYear()} - All Rights Reserved`

  const baseTags = [
    category.toLowerCase(),
    ...keywords,
    'hindi',
    'indian',
    'shorts',
    'viral',
    'trending',
    `${category.toLowerCase()} shorts`,
    'youtube shorts',
    'hindi shorts'
  ]

  const tags = baseTags.slice(0, 10)

  return {
    title,
    description,
    tags
  }
}
