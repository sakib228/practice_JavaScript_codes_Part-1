/*
PMS-3 :
Someone has joined your game! Create joinMessage to return their username followed by " has joined!". For "Nova", return "Nova has joined!".

Examples
joinMessage("Nova") // "Nova has joined!"
joinMessage("Pixel_7") // "Pixel_7 has joined!"
joinMessage("x") // "x has joined!"
Notes
username contains 1 to 20 English letters, digits or underscores. Keep it unchanged. Include one space before has and the final exclamation mark.
*/
// solve :
function joinMessage(username) {
  // Write your code here
 return username + " has joined!";
  
}
console.log(joinMessage("Nova"));
console.log(joinMessage("Pixel_7"));
console.log(joinMessage("x"));
/*
PMS-3 :
Give your playlist a name to match its mood.
  Create playlistName to return mood followed by " Mix". For "Late Night",
  return "Late Night Mix".

Examples
playlistName("Late Night") // "Late Night Mix"

playlistName("Focus") // "Focus Mix"

playlistName("Rainy Day") // "Rainy Day Mix"
Notes
mood is a nonempty string of at most 30 characters,
with no spaces at its beginning or end. Keep it unchanged,
then add one space and Mix with a capital M.
*/
// solve : 
function playlistName(mood) {
  // Write your code here.
  return `${mood} Mix`;
}
console.log(playlistName("Late Night")) 
console.log(playlistName("Focus"))
console.log(playlistName("Rainy Day")) // "Rainy Day Mix"


