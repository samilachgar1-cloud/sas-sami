const cars = [
  { id: 1, brand: "Toyota", model: "Corolla", year: 2020, color: "White", price: 20000, isElectric: false },
  { id: 2, brand: "Tesla", model: "Model 3", year: 2023, color: "Red", price: 45000, isElectric: true },
  { id: 3, brand: "Peugeot", model: "208", year: 2019, color: "Blue", price: 15000, isElectric: false },
  { id: 4, brand: "Volkswagen", model: "Golf", year: 2021, color: "Black", price: 22000, isElectric: false },
  { id: 5, brand: "Nissan", model: "Leaf", year: 2022, color: "Silver", price: 28000, isElectric: true }
];

const carf = cars.find
 (cars=>cars.price<20000);
console.log (carf)