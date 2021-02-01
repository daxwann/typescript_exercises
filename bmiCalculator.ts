interface ParsedValues {
  height: number,
  weight: number
}

const parseInputs = (args: Array<string>): ParsedValues => {
  if (args.length !== 4) throw new Error('usage: ts-node bmiCalculator height weight');

  const height = Number(args[2]);
  const weight = Number(args[3]);

  if (isNaN(height) || isNaN(weight)) {
    throw new Error('height or weight should be number');
  }

  return {
    height,
    weight
  };
};

export const parseQueryParam = (heightParam: string, weightParam: string): ParsedValues => {
  if (!heightParam || !weightParam) throw new Error("height and weight required");
  const height = Number(heightParam);
  const weight = Number(weightParam);

  if (isNaN(height) || isNaN(weight)) {
    throw new Error('height or weight should be number');
  }

  return {
    height,
    weight
  };
};

export const calculateBMI = (height: number, weight: number): string => {
  if (height <= 0 || weight <= 0) {
    throw Error("height or weight have to be greater than 0");
  }

  const heightInMeters: number = height / 100;
  const bmi: number = (weight) / (heightInMeters * heightInMeters);
  
  if (bmi <= 15) {
    return "Very severely underweight";
  } else if (bmi <= 16) {
    return "Severely underweight";
  } else if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25) {
    return "Normal (healthy weight)";
  } else if (bmi <= 30) {
    return "Overweight";
  } else if (bmi <= 35) {
    return "Obese Class I (Moderately obese)";
  } else if (bmi <= 40) {
    return "Obese Class II (Severely obese)";
  }  else {
    return "Obese Class III (Very severely obese)";
  }
};

try {
  const { height, weight } = parseInputs(process.argv);
  console.log(calculateBMI(height, weight));
} catch (e) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.log(`Error: ${e.message as string}`);
}