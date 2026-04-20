export interface BingoItem {
  id: number;
  emoji: string;
  text: string;
  progress?: number;
  completed: boolean;
}

export const bingoItems: BingoItem[] = [
  {
    id: 1,
    emoji: "🏃‍♀️",
    text: "run 500 km",
    progress: 12.14,
    completed: false,
  },
  {
    id: 2,
    emoji: "📚",
    text: "read Atomic Habits",
    completed: false,
  },
  {
    id: 3,
    emoji: "🎤",
    text: "visit stand-up",
    completed: true,
  },
  {
    id: 4,
    emoji: "🌍",
    text: "visit 5 countries",
    progress: 20,
    completed: false,
  },
  {
    id: 5,
    emoji: "☁️",
    text: "pass AI practitioner exam",
    completed: false,
  },
  {
    id: 6,
    emoji: "🥞",
    text: "make perfect waffles",
    completed: false,
  },
  {
    id: 7,
    emoji: "✍️",
    text: "write 5 blog articles",
    progress: 0,
    completed: false,
  },
  {
    id: 8,
    emoji: "🏊‍♀️",
    text: "go swimming 10 times",
    progress: 10,
    completed: false,
  },
  {
    id: 9,
    emoji: "📘",
    text: "Finish A1 course",
    completed: false,
  },
  {
    id: 10,
    emoji: "🥾",
    text: "go hiking 5 times",
    progress: 0,
    completed: false,
  },
  {
    id: 11,
    emoji: "🎶",
    text: "visit 10 music events",
    progress: 40,
    completed: false,
  },
  {
    id: 12,
    emoji: "🇫🇮",
    text: "swim 5 times in Klapuri",
    progress: 0,
    completed: false,
  },
  {
    id: 13,
    emoji: "📝",
    text: "20 LinkedIn posts",
    progress: 15,
    completed: false,
  },
  {
    id: 14,
    emoji: "📚",
    text: "read Sapiens",
    completed: false,
  },
  {
    id: 15,
    emoji: "🏅",
    text: "finish 3 half marathons",
    progress: 33.33,
    completed: false,
  },
  {
    id: 16,
    emoji: "🧑‍🍳",
    text: "try 5 new recipes",
    progress: 0,
    completed: false,
  },
  {
    id: 17,
    emoji: "☁️",
    text: "pass AWS cloud practitioner exam",
    completed: false,
  },
  {
    id: 18,
    emoji: "🛠️",
    text: "build blog page",
    completed: false,
  },
  {
    id: 19,
    emoji: "🎓",
    text: "finish 1 non IT course",
    completed: false,
  },
  {
    id: 20,
    emoji: "📗",
    text: "Finish A2 course",
    completed: false,
  },
  {
    id: 21,
    emoji: "📚",
    text: "read Nexus",
    completed: false,
  },
  {
    id: 22,
    emoji: "🚀",
    text: "learn Astro",
    completed: true,
  },
  {
    id: 23,
    emoji: "💪",
    text: "finish 50 workouts",
    progress: 0,
    completed: false,
  },
  {
    id: 24,
    emoji: "🎥",
    text: "create course/tutorial",
    completed: false,
  },
  {
    id: 25,
    emoji: "🧳",
    text: "visit new country",
    completed: false,
  },
];
