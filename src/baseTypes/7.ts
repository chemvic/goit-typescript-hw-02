/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekdays{
  Sunday,
  Monday, Tuesday,
  Wednesday, Thursday, Friday, Saturday
};
function isWeekend (day: Weekdays): boolean{
 switch (day) {
  case Weekdays.Sunday:
  case Weekdays.Saturday:
  return true;  
 
  default:  
  return false;
}};

console.log(isWeekend(Weekdays.Sunday));
