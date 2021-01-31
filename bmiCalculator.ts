const calculateBMI = (height: number, weight: number): string => {
  if (height <= 0 || weight <= 0) {
    throw Error("height or weight have to be greater than 0")
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
}

console.log(calculateBMI(180, 74));