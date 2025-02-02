const diabeticDiet = {
    calories: "1500–2000 kcal/day (varies by individual)",
    carbohydrates: "135–230 g/day",
    netCarbs: "Focus on low-net-carb foods",
    fiber: "25–30 g/day",
    protein: "75–100 g/day",
    totalFat: "44–78 g/day",
    saturatedFat: "<15–20 g/day",
    transFat: "0 g/day",
    sodium: "<2300 mg/day (ideally <1500 mg for hypertension)",
    sugar: "<25–50 g/day (added sugars)",
    glycemicIndex: "Focus on low-GI foods (GI ≤ 55)",
    glycemicLoad: "Aim for GL ≤ 10 per serving",
    magnesium: "310–420 mg/day",
    potassium: "2600–3400 mg/day",
    vitaminD: "600–800 IU/day",
    chromium: "Consult doctor for supplementation",
    alcohol: "Men: ≤2 drinks/day, Women: ≤1 drink/day",
    hydration: "8–10 cups (64–80 oz) water/day"
  };

  const veganDiet = {
    calories: "1500–2500 kcal/day (varies by individual)",
    protein: "75–100 g/day (plant-based sources)",
    carbohydrates: "225–325 g/day",
    fiber: "25–30 g/day",
    totalFat: "44–78 g/day",
    saturatedFat: "<15–20 g/day",
    transFat: "0 g/day",
    omega3: "1.1–1.6 g/day (plant-based sources like flaxseeds, chia seeds)",
    iron: "18 mg/day (men), 27 mg/day (women)",
    calcium: "1000–1200 mg/day",
    vitaminB12: "2.4 mcg/day (supplement or fortified foods)",
    vitaminD: "600–800 IU/day",
    sodium: "<2300 mg/day",
    hydration: "8–10 cups (64–80 oz) water/day"
  };
  const glutenFreeDiet = {
    calories: "1500–2500 kcal/day (varies by individual)",
    protein: "75–100 g/day",
    carbohydrates: "225–325 g/day",
    fiber: "25–30 g/day",
    totalFat: "44–78 g/day",
    saturatedFat: "<15–20 g/day",
    transFat: "0 g/day",
    gluten: "0 g/day (strictly avoid)",
    sodium: "<2300 mg/day",
    hydration: "8–10 cups (64–80 oz) water/day"
  };
  const ketogenicDiet = {
    calories: "1500–2500 kcal/day (varies by individual)",
    carbohydrates: "20–50 g/day (net carbs)",
    protein: "75–100 g/day",
    totalFat: "70–80% of daily calories",
    saturatedFat: "Limit to <10% of daily calories",
    transFat: "0 g/day",
    fiber: "25–30 g/day",
    sodium: "<2300 mg/day",
    hydration: "8–10 cups (64–80 oz) water/day",
    electrolytes: "Ensure adequate sodium, potassium, magnesium"
  };
  const heartHealthyDiet = {
    calories: "1500–2500 kcal/day (varies by individual)",
    carbohydrates: "225–325 g/day",
    protein: "75–100 g/day",
    totalFat: "44–78 g/day",
    saturatedFat: "<15–20 g/day",
    transFat: "0 g/day",
    cholesterol: "<300 mg/day (ideally <200 mg for high-risk individuals)",
    sodium: "<2300 mg/day (ideally <1500 mg for hypertension)",
    omega3: "1.1–1.6 g/day (fatty fish, flaxseeds, chia seeds)",
    fiber: "25–30 g/day",
    potassium: "2600–3400 mg/day",
    hydration: "8–10 cups (64–80 oz) water/day"
  };
  const pregnancyLactationDiet = {
    calories: "2200–2500 kcal/day (pregnancy), 2500–2700 kcal/day (lactation)",
    protein: "75–100 g/day",
    carbohydrates: "225–325 g/day",
    fiber: "25–30 g/day",
    totalFat: "44–78 g/day",
    saturatedFat: "<15–20 g/day",
    transFat: "0 g/day",
    folate: "600 mcg/day (pregnancy), 500 mcg/day (lactation)",
    iron: "27 mg/day (pregnancy), 9–10 mg/day (lactation)",
    calcium: "1000–1300 mg/day",
    omega3: "1.4 g/day (DHA for fetal brain development)",
    vitaminD: "600–800 IU/day",
    sodium: "<2300 mg/day",
    hydration: "10–12 cups (80–96 oz) water/day"
  };
  const weightLossDiet = {
    calories: "1200–1500 kcal/day (varies by individual)",
    protein: "75–100 g/day",
    carbohydrates: "150–200 g/day",
    fiber: "25–30 g/day",
    totalFat: "44–78 g/day",
    saturatedFat: "<15–20 g/day",
    transFat: "0 g/day",
    sodium: "<2300 mg/day",
    hydration: "8–10 cups (64–80 oz) water/day",
    satietyIndex: "Focus on high-fiber, high-protein foods"
  };
  const athleticDiet = {
    calories: "2500–3500 kcal/day (varies by activity level)",
    protein: "1.2–2.0 g/kg body weight/day",
    carbohydrates: "5–7 g/kg body weight/day",
    fiber: "25–30 g/day",
    totalFat: "20–35% of daily calories",
    saturatedFat: "<10% of daily calories",
    transFat: "0 g/day",
    sodium: "<2300 mg/day (may increase for intense exercise)",
    potassium: "2600–3400 mg/day",
    magnesium: "310–420 mg/day",
    hydration: "10–12 cups (80–96 oz) water/day (more if active)",
    electrolytes: "Ensure adequate sodium, potassium, magnesium"
  };
  const diabeticDaily = {
    calories: { lower: 1500, upper: 2000 },
    carbohydrates: { lower: 135, upper: 230 },
    netCarbs: { lower: 0, upper: 100 }, // Focus on low-net-carb foods
    fiber: { lower: 25, upper: 30 },
    protein: { lower: 75, upper: 100 },
    totalFat: { lower: 44, upper: 78 },
    saturatedFat: { lower: 0, upper: 20 },
    transFat: { lower: 0, upper: 0 },
    sodium: { lower: 0, upper: 2300 }, // Ideally <1500 mg for hypertension
    sugar: { lower: 0, upper: 50 }, // Added sugars
    glycemicIndex: { lower: 0, upper: 55 }, // Focus on low-GI foods
    glycemicLoad: { lower: 0, upper: 30 } // Aim for GL ≤ 10 per serving
  };
  const veganDaily = {
    calories: { lower: 1500, upper: 2500 },
    protein: { lower: 75, upper: 100 }, // Plant-based sources
    carbohydrates: { lower: 225, upper: 325 },
    fiber: { lower: 25, upper: 30 },
    totalFat: { lower: 44, upper: 78 },
    saturatedFat: { lower: 0, upper: 20 },
    transFat: { lower: 0, upper: 0 },
    omega3: { lower: 1.1, upper: 1.6 }, // Plant-based sources
    iron: { lower: 18, upper: 27 }, // Men: 18 mg, Women: 27 mg
    calcium: { lower: 1000, upper: 1200 },
    vitaminB12: { lower: 2.4, upper: 2.8 }, // Supplement or fortified foods
    vitaminD: { lower: 600, upper: 800 },
    sodium: { lower: 0, upper: 2300 }
  };
  const glutenFreeDaily = {
    calories: { lower: 1500, upper: 2500 },
    protein: { lower: 75, upper: 100 },
    carbohydrates: { lower: 225, upper: 325 },
    fiber: { lower: 25, upper: 30 },
    totalFat: { lower: 44, upper: 78 },
    saturatedFat: { lower: 0, upper: 20 },
    transFat: { lower: 0, upper: 0 },
    gluten: { lower: 0, upper: 0 }, // Strictly avoid
    sodium: { lower: 0, upper: 2300 }
  };
  const ketogenicDaily = {
    calories: { lower: 1500, upper: 2500 },
    carbohydrates: { lower: 20, upper: 50 }, // Net carbs
    protein: { lower: 75, upper: 100 },
    totalFat: { lower: 100, upper: 200 }, // 70–80% of daily calories
    saturatedFat: { lower: 0, upper: 20 }, // <10% of daily calories
    transFat: { lower: 0, upper: 0 },
    fiber: { lower: 25, upper: 30 },
    sodium: { lower: 0, upper: 2300 },
    electrolytes: {
      potassium: { lower: 2600, upper: 3400 },
      magnesium: { lower: 310, upper: 420 }
    }
  };
  const heartHealthyDaily = {
    calories: { lower: 1500, upper: 2500 },
    carbohydrates: { lower: 225, upper: 325 },
    protein: { lower: 75, upper: 100 },
    totalFat: { lower: 44, upper: 78 },
    saturatedFat: { lower: 0, upper: 20 }, // <10% of daily calories
    transFat: { lower: 0, upper: 0 },
    cholesterol: { lower: 0, upper: 300 }, // Ideally <200 mg for high-risk individuals
    sodium: { lower: 0, upper: 2300 }, // Ideally <1500 mg for hypertension
    omega3: { lower: 1.1, upper: 1.6 }, // Fatty fish, flaxseeds, chia seeds
    fiber: { lower: 25, upper: 30 },
    potassium: { lower: 2600, upper: 3400 }
  };
  const pregnancyLactationDaily = {
    calories: { lower: 2200, upper: 2700 }, // Pregnancy: 2200–2500, Lactation: 2500–2700
    protein: { lower: 75, upper: 100 },
    carbohydrates: { lower: 225, upper: 325 },
    fiber: { lower: 25, upper: 30 },
    totalFat: { lower: 44, upper: 78 },
    saturatedFat: { lower: 0, upper: 20 },
    transFat: { lower: 0, upper: 0 },
    folate: { lower: 600, upper: 800 }, // Pregnancy: 600 mcg, Lactation: 500 mcg
    iron: { lower: 27, upper: 30 }, // Pregnancy: 27 mg, Lactation: 9–10 mg
    calcium: { lower: 1000, upper: 1300 },
    omega3: { lower: 1.4, upper: 1.6 }, // DHA for fetal brain development
    vitaminD: { lower: 600, upper: 800 },
    sodium: { lower: 0, upper: 2300 }
  };
  const weightLossDaily = {
    calories: { lower: 1200, upper: 1500 },
    protein: { lower: 75, upper: 100 },
    carbohydrates: { lower: 150, upper: 200 },
    fiber: { lower: 25, upper: 30 },
    totalFat: { lower: 44, upper: 78 },
    saturatedFat: { lower: 0, upper: 15 }, // <10% of daily calories
    transFat: { lower: 0, upper: 0 },
    sodium: { lower: 0, upper: 2300 }
  };
  const athleticDaily = {
    calories: { lower: 2500, upper: 3500 },
    protein: { lower: 90, upper: 150 }, // 1.2–2.0 g/kg body weight
    carbohydrates: { lower: 300, upper: 500 }, // 5–7 g/kg body weight
    fiber: { lower: 25, upper: 30 },
    totalFat: { lower: 44, upper: 78 }, // 20–35% of daily calories
    saturatedFat: { lower: 0, upper: 20 }, // <10% of daily calories
    transFat: { lower: 0, upper: 0 },
    sodium: { lower: 0, upper: 2300 }, // May increase for intense exercise
    potassium: { lower: 2600, upper: 3400 },
    magnesium: { lower: 310, upper: 420 }
  };