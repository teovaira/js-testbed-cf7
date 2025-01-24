let isDarkMode = false
let username = ""
let isDashBoardOn = false
let isUserLoggedIn = false
console.log(`Is dark mode enabled:         ${isDarkMode} `)
console.log(`Is dark mode on:    
                   
  ${isDarkMode}`) 
isUserLoggedIn = "" // we tries a variety of possibilities like'false', 'true', 'Alice' etc for the boolean isUserLoggedIn.
username = 'Anna'
isDashBoardOn = isUserLoggedIn && username   
console.log(isDashBoardOn)      //When the boolean is an empty string, we get nothing. Not even false.         