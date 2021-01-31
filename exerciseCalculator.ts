type Result = {
  periodLength: number,
  trainingDays: number,
  originalTarget: number,
  calculatedAvg: number,
  success: boolean,
  rating: number,
  ratingDescription: string
};

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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1]));