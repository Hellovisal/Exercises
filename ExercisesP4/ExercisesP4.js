// ===================== [Number 1] ======================
// function filterUsersByAge(users) {
//     const filteredUsers = users.filter(user => user.age > 18);
//     return filteredUsers;
// }
// Example usage:
// const users = [
//     { name: 'John', age: 25 },
//     { name: 'Alice', age: 17 },
//     { name: 'Bob', age: 20 },
//     { name: 'Jane', age: 15 }
// ];
// const filteredList = filterUsersByAge(users);
//===================== [Number 2] =======================
// const originalArray = [1, 3, 2, 1, 4, 2];
// const uniqueArray = originalArray.filter((value, index, array) => {
//   return array.indexOf(value) === index;
// });
// console.log(uniqueArray);
//  ==================== [Number 3] ====================== 
// const users = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 }
//   ];
  
//   const names = users.map(user => user.name);
//   console.log(names); 
//======================== [Number 4] =========================== 
//   const dates = ["2024-01-01", "2024-02-02", "2024-04-04"];
// const formattedDates = dates.map(dateString => {
//   const [year, month, day] = dateString.split("-");
//   return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
// });
// console.log(formattedDates); // Output: ["01/01/2024", "02/02/2024", "04/04/2024"]

// =========================== [Number 5] =============================
// let arr= [3,6,8,9,2,5];
// let max=arr.reduce( (acc,val)=>{
//   return acc>val ? acc:val;
// });
// console.log(max);

//======================== [Number 6] ===============================
// const items = [
//     { name: "Bread", category: "Grocery" },
//     { name: "Butter", category: "Grocery" },
//     { name: "Shampoo", category: "Personal Care" }
//   ];
  
//   const groupedItems = items.reduce((acc, item) => {
//     const { name, category } = item;
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(name);
//     return acc;
//   }, {});
  
//   console.log(groupedItems);

// const items = [
//     {name: "Bread", category: "Grocery"},
//     {name: "Butter", category: "Grocery"},
//     {name: "Shampoo", category: "Personal Care"}
//   ];
  
//   const groupedItems = items.reduce((acc, curr) => {
//     if (!acc[curr.category]) { 
//         acc[curr.category] = [];
//     }
//     acc[curr.category].push(curr.name);
//     return acc;
//   }, {});
//   console.log(groupedItems);

