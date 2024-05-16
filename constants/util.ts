const formatGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour >= 5 && currentHour < 12) {
    return "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

const formatMoney = (amount: number) => {
  return `₦ ${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2, // Minimum number of decimal digits
    maximumFractionDigits: 2, // Maximum number of decimal digits
  })}`;
};

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const getRandomSubset = (arr: any[], count: number) => {
  // if (count > arr.length) return arr;
  const shuffledArray = shuffleArray(arr.slice());
  return shuffledArray.slice(0, count);
};

export { formatGreeting, formatMoney, shuffleArray, getRandomSubset };
