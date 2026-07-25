/// File: src/lib/puzzles.ts
//
// A pool of 50 small, quick "brain break" puzzles shown in a popup whenever
// the student crosses a new 100-point milestone (see PointsMilestoneWatcher.tsx)
// — separate from the Vocab Blitz mini-game (MiniGameBreak.tsx), which fires
// every 15 answered questions. These are intentionally general "thinking"
// puzzles (riddles, sequences, categorization, quick math) rather than more
// Spanish vocabulary drilling, for variety — plus a set of quick Spanish/
// English memory-matching games. All content is original.
//
// ---> TO ADD A PUZZLE: push a new BrainPuzzle (mcq-style) or MemoryPuzzle
// (flip-card pairs) below.

export interface BrainPuzzle {
  id: string;
  kind: "riddle" | "sequence" | "oddOneOut" | "math";
  prompt: string;
  options: string[];
  correctAnswer: string;
}

export interface MemoryPuzzle {
  id: string;
  title: string;
  pairs: { a: string; b: string }[];
}

export const BRAIN_PUZZLES: BrainPuzzle[] = [
  // --- Riddles ---
  {
    id: "riddle-1",
    kind: "riddle",
    prompt: "What has keys but can't open locks?",
    options: ["A piano", "A map", "A diary", "A car"],
    correctAnswer: "A piano",
  },
  {
    id: "riddle-2",
    kind: "riddle",
    prompt: "What gets wetter as it dries?",
    options: ["A towel", "A river", "A candle", "A sponge"],
    correctAnswer: "A towel",
  },
  {
    id: "riddle-3",
    kind: "riddle",
    prompt: "What has hands but can't clap?",
    options: ["A clock", "A glove", "A puppet", "A statue"],
    correctAnswer: "A clock",
  },
  {
    id: "riddle-4",
    kind: "riddle",
    prompt: "The more you take, the more you leave behind. What am I?",
    options: ["Footsteps", "Memories", "Time", "Money"],
    correctAnswer: "Footsteps",
  },
  {
    id: "riddle-5",
    kind: "riddle",
    prompt: "What has a neck but no head?",
    options: ["A bottle", "A guitar", "A shirt", "A giraffe"],
    correctAnswer: "A bottle",
  },
  {
    id: "riddle-6",
    kind: "riddle",
    prompt: "What can travel around the world while staying in a corner?",
    options: ["A stamp", "A map", "A coin", "A flag"],
    correctAnswer: "A stamp",
  },
  {
    id: "riddle-7",
    kind: "riddle",
    prompt: "What has one eye but cannot see?",
    options: ["A needle", "A storm", "A potato", "A camera"],
    correctAnswer: "A needle",
  },
  {
    id: "riddle-8",
    kind: "riddle",
    prompt: "What goes up but never comes down?",
    options: ["Your age", "A balloon", "A rocket", "Smoke"],
    correctAnswer: "Your age",
  },
  {
    id: "riddle-9",
    kind: "riddle",
    prompt: "What can you catch but not throw?",
    options: ["A cold", "A ball", "A fish", "A train"],
    correctAnswer: "A cold",
  },
  {
    id: "riddle-10",
    kind: "riddle",
    prompt: "What has many teeth but cannot bite?",
    options: ["A comb", "A shark", "A zipper", "A saw"],
    correctAnswer: "A comb",
  },

  // --- Sequences ---
  {
    id: "sequence-1",
    kind: "sequence",
    prompt: "What comes next? 2, 4, 6, 8, ?",
    options: ["10", "9", "12", "11"],
    correctAnswer: "10",
  },
  {
    id: "sequence-2",
    kind: "sequence",
    prompt: "What comes next? 1, 4, 9, 16, ?",
    options: ["25", "20", "24", "22"],
    correctAnswer: "25",
  },
  {
    id: "sequence-3",
    kind: "sequence",
    prompt: "What comes next? A, C, E, G, ?",
    options: ["I", "H", "J", "F"],
    correctAnswer: "I",
  },
  {
    id: "sequence-4",
    kind: "sequence",
    prompt: "What comes next? 3, 6, 12, 24, ?",
    options: ["48", "36", "30", "42"],
    correctAnswer: "48",
  },
  {
    id: "sequence-5",
    kind: "sequence",
    prompt: "What comes next? 1, 1, 2, 3, 5, ?",
    options: ["8", "7", "9", "6"],
    correctAnswer: "8",
  },
  {
    id: "sequence-6",
    kind: "sequence",
    prompt: "What comes next? 100, 90, 80, 70, ?",
    options: ["60", "50", "65", "55"],
    correctAnswer: "60",
  },
  {
    id: "sequence-7",
    kind: "sequence",
    prompt: "What comes next? 2, 6, 18, 54, ?",
    options: ["162", "108", "216", "150"],
    correctAnswer: "162",
  },
  {
    id: "sequence-8",
    kind: "sequence",
    prompt: "What comes next? 5, 10, 20, 40, ?",
    options: ["80", "60", "70", "90"],
    correctAnswer: "80",
  },
  {
    id: "sequence-9",
    kind: "sequence",
    prompt: "What comes next? Z, Y, X, W, ?",
    options: ["V", "U", "T", "S"],
    correctAnswer: "V",
  },
  {
    id: "sequence-10",
    kind: "sequence",
    prompt: "What comes next? 1, 3, 6, 10, ?",
    options: ["15", "14", "13", "16"],
    correctAnswer: "15",
  },

  // --- Odd one out ---
  {
    id: "odd-1",
    kind: "oddOneOut",
    prompt: "Which one doesn't belong?",
    options: ["Apple", "Banana", "Carrot", "Orange"],
    correctAnswer: "Carrot",
  },
  {
    id: "odd-2",
    kind: "oddOneOut",
    prompt: "Which one doesn't belong?",
    options: ["Square", "Triangle", "Circle", "Spoon"],
    correctAnswer: "Spoon",
  },
  {
    id: "odd-3",
    kind: "oddOneOut",
    prompt: "Which one doesn't belong?",
    options: ["Guitar", "Piano", "Violin", "Sofa"],
    correctAnswer: "Sofa",
  },
  {
    id: "odd-4",
    kind: "oddOneOut",
    prompt: "Which one doesn't belong?",
    options: ["Dog", "Cat", "Fish", "Table"],
    correctAnswer: "Table",
  },
  {
    id: "odd-5",
    kind: "oddOneOut",
    prompt: "Which one doesn't belong?",
    options: ["Red", "Blue", "Heavy", "Green"],
    correctAnswer: "Heavy",
  },
  {
    id: "odd-6",
    kind: "oddOneOut",
    prompt: "Which one doesn't belong?",
    options: ["January", "Monday", "March", "July"],
    correctAnswer: "Monday",
  },
  {
    id: "odd-7",
    kind: "oddOneOut",
    prompt: "Which one doesn't belong?",
    options: ["Paris", "London", "Africa", "Madrid"],
    correctAnswer: "Africa",
  },
  {
    id: "odd-8",
    kind: "oddOneOut",
    prompt: "Which one doesn't belong?",
    options: ["Whisper", "Shout", "Jump", "Mumble"],
    correctAnswer: "Jump",
  },
  {
    id: "odd-9",
    kind: "oddOneOut",
    prompt: "Which one doesn't belong?",
    options: ["Novel", "Poem", "Essay", "Painting"],
    correctAnswer: "Painting",
  },
  {
    id: "odd-10",
    kind: "oddOneOut",
    prompt: "Which one doesn't belong?",
    options: ["Sun", "Moon", "Star", "Ocean"],
    correctAnswer: "Ocean",
  },

  // --- Quick math ---
  {
    id: "math-1",
    kind: "math",
    prompt: "What is 12 + 15?",
    options: ["27", "25", "29", "26"],
    correctAnswer: "27",
  },
  {
    id: "math-2",
    kind: "math",
    prompt: "What is 9 x 6?",
    options: ["54", "56", "48", "52"],
    correctAnswer: "54",
  },
  {
    id: "math-3",
    kind: "math",
    prompt: "What is 100 - 37?",
    options: ["63", "67", "73", "57"],
    correctAnswer: "63",
  },
  {
    id: "math-4",
    kind: "math",
    prompt: "What is 144 ÷ 12?",
    options: ["12", "14", "11", "10"],
    correctAnswer: "12",
  },
  {
    id: "math-5",
    kind: "math",
    prompt: "What is 7 squared?",
    options: ["49", "47", "56", "42"],
    correctAnswer: "49",
  },
  {
    id: "math-6",
    kind: "math",
    prompt: "What is half of 88?",
    options: ["44", "42", "46", "40"],
    correctAnswer: "44",
  },
  {
    id: "math-7",
    kind: "math",
    prompt: "What is 15% of 200?",
    options: ["30", "25", "35", "20"],
    correctAnswer: "30",
  },
  {
    id: "math-8",
    kind: "math",
    prompt: "What is 8 x 8?",
    options: ["64", "62", "56", "72"],
    correctAnswer: "64",
  },
  {
    id: "math-9",
    kind: "math",
    prompt: "What is 3 + 4 x 2?",
    options: ["11", "14", "10", "9"],
    correctAnswer: "11",
  },
  {
    id: "math-10",
    kind: "math",
    prompt: "What is the next prime number after 7?",
    options: ["11", "9", "13", "10"],
    correctAnswer: "11",
  },
];

export const MEMORY_PUZZLES: MemoryPuzzle[] = [
  {
    id: "memory-animals",
    title: "Animales",
    pairs: [
      { a: "🐶 perro", b: "dog" },
      { a: "🐱 gato", b: "cat" },
      { a: "🐦 pájaro", b: "bird" },
      { a: "🐟 pez", b: "fish" },
      { a: "🐴 caballo", b: "horse" },
      { a: "🐰 conejo", b: "rabbit" },
    ],
  },
  {
    id: "memory-colors",
    title: "Colores",
    pairs: [
      { a: "🔴 rojo", b: "red" },
      { a: "🔵 azul", b: "blue" },
      { a: "🟢 verde", b: "green" },
      { a: "🟡 amarillo", b: "yellow" },
      { a: "⚫ negro", b: "black" },
      { a: "⚪ blanco", b: "white" },
    ],
  },
  {
    id: "memory-food",
    title: "Comida",
    pairs: [
      { a: "🍎 manzana", b: "apple" },
      { a: "🍞 pan", b: "bread" },
      { a: "🧀 queso", b: "cheese" },
      { a: "🍇 uvas", b: "grapes" },
      { a: "🥑 aguacate", b: "avocado" },
      { a: "🍯 miel", b: "honey" },
    ],
  },
  {
    id: "memory-numbers",
    title: "Números",
    pairs: [
      { a: "uno", b: "1" },
      { a: "tres", b: "3" },
      { a: "cinco", b: "5" },
      { a: "siete", b: "7" },
      { a: "nueve", b: "9" },
      { a: "diez", b: "10" },
    ],
  },
  {
    id: "memory-weather",
    title: "Clima",
    pairs: [
      { a: "☀️ sol", b: "sun" },
      { a: "🌧️ lluvia", b: "rain" },
      { a: "❄️ nieve", b: "snow" },
      { a: "🌈 arcoíris", b: "rainbow" },
      { a: "💨 viento", b: "wind" },
      { a: "⛈️ tormenta", b: "storm" },
    ],
  },
  {
    id: "memory-emotions",
    title: "Emociones",
    pairs: [
      { a: "😀 feliz", b: "happy" },
      { a: "😢 triste", b: "sad" },
      { a: "😠 enojado", b: "angry" },
      { a: "😨 asustado", b: "scared" },
      { a: "😴 cansado", b: "tired" },
      { a: "😲 sorprendido", b: "surprised" },
    ],
  },
  {
    id: "memory-sports",
    title: "Deportes",
    pairs: [
      { a: "⚽ fútbol", b: "soccer" },
      { a: "🏀 baloncesto", b: "basketball" },
      { a: "🎾 tenis", b: "tennis" },
      { a: "🏊 natación", b: "swimming" },
      { a: "🚴 ciclismo", b: "cycling" },
      { a: "🏃 correr", b: "running" },
    ],
  },
  {
    id: "memory-home",
    title: "Casa",
    pairs: [
      { a: "🛏️ la cama", b: "bed" },
      { a: "🚪 la puerta", b: "door" },
      { a: "🪟 la ventana", b: "window" },
      { a: "🪑 la silla", b: "chair" },
      { a: "🔑 la llave", b: "key" },
      { a: "🛋️ el sofá", b: "sofa" },
    ],
  },
  {
    id: "memory-nature",
    title: "Naturaleza",
    pairs: [
      { a: "🌳 el árbol", b: "tree" },
      { a: "🌊 el mar", b: "sea" },
      { a: "⛰️ la montaña", b: "mountain" },
      { a: "🌸 la flor", b: "flower" },
      { a: "🌙 la luna", b: "moon" },
      { a: "⭐ la estrella", b: "star" },
    ],
  },
  {
    id: "memory-transport",
    title: "Transporte",
    pairs: [
      { a: "🚗 el coche", b: "car" },
      { a: "✈️ el avión", b: "airplane" },
      { a: "🚲 la bicicleta", b: "bicycle" },
      { a: "🚆 el tren", b: "train" },
      { a: "🚌 el autobús", b: "bus" },
      { a: "🚢 el barco", b: "boat" },
    ],
  },
];
