// DOM (Document Object Model) events are actions or occurrences that happen within the web browser, such as a user clicking a button,
// typing in a text field, or a web page finishing loading. When an event occurs, the web browser creates an event object,
// which contains information about the event, and then passes this object to any event handlers that are registered to listen for that event.

// Event handlers are functions that are executed when an event occurs. You can use JavaScript to register event handlers for different types
// of events, such as:

// 1. Mouse events, such as click, mouseover, and mouseout
// 2. Keyboard events, such as keydown, keyup, and keypress
// 3. Form events, such as submit, change, and focus
// 4. Window events, such as load, resize, and scroll

// To register an event handler, you can use the addEventListener() method, which takes the following parameters:

// 1. The type of event you want to listen for
// 2. The function that will be called when the event occurs (the event handler)
// 3. An optional third parameter that specifies whether the event should be captured or not (default is false, which means the event
// will be bubbled up from the target element)

// For example, to register an event handler for the click event on a button element, you can use the following code:
const button = document.querySelector("button");
button.addEventListener("click", function (event) {
  // code to execute when the button is clicked
});

// When the button is clicked, the function passed as the second argument to addEventListener() will be called, and the event object
// will contain information about the event, such as the target element, the type of event, and any relevant data associated with the event.
