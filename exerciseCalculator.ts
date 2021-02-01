export {};

interface Result {
  periodLength: number;
  trainingDays: number;
  originalTarget: number;
  calculatedAvg: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
}

interface ReqBody {
  daily_exercises: Array<number>;
  target: number
}

// const parseInputs = (args: Array<string>): Array<number> => {
//   const [, , ...restArgs] = args;
//   return restArgs.map(arg => {
//     const hours = Number(arg);
//     if (isNaN(hours)) throw new Error(`${arg} is not a number`);
//     return hours;
//   });
// };

export const parseReqBody = (reqBody: ReqBody): ReqBody => {
  if (!Array.isArray(reqBody.daily_exercises)) throw new Error("daily_exercises needs to be array");

  for (const num of reqBody.daily_exercises) {
    if (typeof num !== 'number') throw new Error('all elements inside daily_exercises needs to be number');
  }

  if (typeof reqBody.target !== 'number') throw new Error('target needs to be number');
  
  return reqBody;
};

export const calculateExercises = (weekHours: Array<number>, target: number): Result => {
  const periodLength: number = weekHours.length;
  const trainingDays: number = weekHours.filter(hr => hr > 0).length;
  const originalTarget = target;
  const calculatedAvg: number = weekHours.reduce((acc, curr) => acc + curr, 0) / periodLength;
  const success: boolean = calculatedAvg >= originalTarget;
  const rating = 2;
  const ratingDescription = "Not too bad but could be better";

  return {
    periodLength,
    trainingDays,
    originalTarget,
    calculatedAvg,
    success,
    rating,
    ratingDescription
  };
};

// try {
//   const weeklyHours: Array<number> = parseInputs(process.argv);
//   console.log(calculateExercises(weeklyHours, 2));
// } catch (e) {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
//   console.log(`Error: ${e.message as string}`);
// }