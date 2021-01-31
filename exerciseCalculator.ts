export {};

interface Result {
  periodLength: number;
  trainingDays: number;
  originalTarget: number;
  calculatedAvg: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
};

const parseInputs = (args: Array<string>): Array<number> => {
  const [_arg1, _arg2, ...restArgs] = args;
  return restArgs.map(arg => {
    const hours: number = Number(arg);
    if (isNaN(hours)) throw new Error(`${arg} is not a number`);
    return hours;
  })
}

const calculateExercises = (weekHours: Array<number>): Result => {
  const periodLength: number = weekHours.length;
  const trainingDays: number = weekHours.filter(hr => hr > 0).length;
  const originalTarget: number = 2;
  const calculatedAvg: number = weekHours.reduce((acc, curr) => acc + curr, 0) / periodLength;
  const success: boolean = calculatedAvg >= originalTarget;
  const rating: number = 2;
  const ratingDescription: string = "Not too bad but could be better";

  return {
    periodLength,
    trainingDays,
    originalTarget,
    calculatedAvg,
    success,
    rating,
    ratingDescription
  }
};

try {
  const weeklyHours: Array<number> = parseInputs(process.argv);
  console.log(calculateExercises(weeklyHours));
} catch (e) {
  console.log(`Error: ${e.message}`);
}