/* 
PMS-1 : 
This is an introduction to how challenges on Edabit work. In the code editor below you'll see a starter function that looks like this:

function hello() {

}
All you have to do is type return "hello edabit.com" between the curly braces { } and then click the Check button. If you did this correctly, a celebration window will pop up.

Notes
The returned string must be in all lowercase letters.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/
// solve:
function hello() {
	let text = "hello edabit.com";
  return text;
}
console.log(hello());
/*
// -----------------------------------------------------------
PMS-2 :
Create shouldRetry to decide whether to try a request again.
Return true only when the previous attempt failed and attempts is less than limit.
Otherwise, return false.

Examples
shouldRetry(true, 2, 3) // true

shouldRetry(false, 2, 3) // false

shouldRetry(true, 3, 3) // false
Notes
failed is a boolean. attempts is the number of attempts already made, from 1 to 10.
limit is the maximum number allowed, from 1 to 10.
Reaching the limit means stop, even if the last attempt failed.
*/
// solve :
function shouldRetry(failed, attempts, limit) {
  // Write your code here.
  if(failed && attempts < limit){
    return true;
  }
  return false;
}
shouldRetry(true, 2, 3);
shouldRetry(false, 2, 3);
shouldRetry(true, 3, 3);












