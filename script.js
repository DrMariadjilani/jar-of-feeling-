const messages = {
  happy: [
    "i can’t stop smiling, and honestly? i don’t want to 🧃☀️",
    "stay close to people who seems like sunflowers",
    "if it makes you happy, then it’s not waste of time ! ❤️",
    "life is full of beauty, you noticed it ?",
    "i hope you always find a reason to smile ^_^",
    "happiness looks really good on me, huh?"
  ],
  sad: [
    "may the flowers grow in the saddest part of you 💐",
    "sad birds still fly ❤️ also we do",
    "Allah knows ❤️",
    "maybe today’s heavy… but you’re still standing, and that’s enough",
    "my mom used to say, the autumn is the spring underground, there are seeds sprouting.. also your heart ❤️"
  ],
  lonely: [
    "you are so loved, never doubt that",
    "i know you got this, and you gonna be fine ❤️",
    "never forget your own worth !",
    "i know love, i understand you",
    "chapter one : leave the past where it belongs",
    "If you obey all the rules, you miss all the fun.. let’s make some noise"
  ],
  bored: [
    "hey there, i hope something good happens to you today",
    "IT’s OKAY YOU’RE HUMAN HELL YEAH 🐹✨",
    "and if today, all you did is hold yourself together, im proud of you 🥹❤️",
    "even when the world feels gray, you can paint it blue ( go to the beach 🌊 )",
    "wander around your mind"
  ],
  unmotivated: [
    "in the end, we will all become great stories",
    "you can try again tomorrow, take a break",
    "after all, we are here only once",
    "there will be days when all i can do is breathe, but that’s okay, i find peace in every little thing",
    "may the flowers remind you why the rain is necessary , love",
    "i’m still far from being what i want to be, but I’ll GET THERE",
    "if it meant to be, it will be"
  ],
  angry: [
    "Anger is never without a reason, but seldom with a good one",
    "Feelings are just visitors, let them come and go",
    "Calmness is the cradle of power",
    "anger is energy. now imagine what happens when you use it to build",
    "I just focus on taking a deep breath, staying calm, and not trying to make the situation bigger than it is",
    "Meditation helps me to calm down.. fr",
    "turn the fire in your chest into light for your path"
  ],
  anxious: [
    "Write about how you have been feeling lately in your life, open up and journal out. and burn it when you finish",
    "I write a lot because.. if I don’t, I start to panic. and I calm down when I write",
    "please don’t give up, i really believe in you",
    "one step, one breath, and suddenly things feel lighter",
    "It hurt because it mattered, then i realized it doesn’t hurt anymore"
  ]
};

document.querySelectorAll('.choices button').forEach(btn => {
  btn.addEventListener('click', () => {
    const mood = btn.dataset.mood;
    const msg = messages[mood][Math.floor(Math.random() * messages[mood].length)];
    document.getElementById('messageCard').innerText = msg;
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
  });
});

document.getElementById('again').addEventListener('click', () => {
  document.getElementById('result').classList.add('hidden');
  document.getElementById('quiz').classList.remove('hidden');
});
