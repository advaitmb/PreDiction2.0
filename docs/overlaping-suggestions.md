## The Problem 



1. When you start typing a timer start runnning which updates and goes back to zero when you type anything again. However if the timer reaches a certain values before you type in something new, it makes an API call. This API call is async and happens in the background, so if you type something new while this API Call has not yet given its response your text will be overwritten by the API Call when it does respond. (This is however immediately cleaned by setting the suggestiontext to usertext value everytime the user types something). HOwever when all this happens really fast it feels like the system writes ontop of your existing text and this can be annoying.

- One possible solution is to just abort the API call and the subsequent change to suggestiontext value when the user starts typing something else.



onChange(userText) 

- handleChange -> updates userText value and makes suggestionText = userText
- useEffect -> makes a debounced API Call -> On Response updates suggestiontext
