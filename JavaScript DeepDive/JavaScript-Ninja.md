Does the browser always build the page exactly according
to the given HTML?

How many events can a web application handle at once?
A web application can technically handle only one event at a time. However, the browser uses an event queue to handle multiple events in a seemingly simultaneous way. The event queue is a FIFO (first-in, first-out) structure that stores events as they occur. The browser then processes events one at a time from the queue, giving the impression of simultaneous handling.

Why must browsers use an event queue to process events?

Notes:

The HTML code received by the browser is used as a blueprint for creating the
DOM, an internal representation of the structure of a client-side web application.
■ We use JavaScript code to dynamically modify the DOM to bring dynamic behavior
to web applications.
■ The execution of client-side web applications is performed in two phases:
– Page building—HTML code is processed to create the DOM, and global
JavaScript code is executed when script nodes are encountered. During this
execution, the JavaScript code can modify the current DOM to any degree and
can even register event handlers—functions that are executed when a particular
event occurs (for example, a mouse click or a keyboard press). Registering
event handlers is easy: Use the built-in addEventListener method.
– Event handling—Various events are processed one at a time, in the order in
which they were generated. The event-handling phase relies heavily on the
event queue, in which all events are stored in the order in which they
occurred. The event loop always checks the top of the queue for events, and
if an event is found, the matching event-handler function is invoked.


Event handlers are functions that we want executed whenever
a particular event occurs. In order for this to happen, we have to notify the browser
that we’re interested in an event. This is called event-handler registration.

In client-side
web applications, there are two ways to register events:
■ By assigning functions to special properties
■ By using the built-in addEventListener method


1 What are the two phases in the lifecycle of a client-side web application?
A: The two phases in the lifecycle of a client-side web application are page
building and event handling. In the page-building phase, the user interface
of our page is built by processing HTML code and by executing mainline
JavaScript code. After the last HTML node is processed, the page enters the
event-handling phase, in which various events are processed.

2 What is the main advantage of using the addEventListener method to register
an event handler versus assigning a handler to a specific element property?
A: When assigning event handlers to specific element properties, we can register
only one event handler; addEventListener, on the other hand, enables
us to register as many event handlers as necessary.

3 How many events can be processed at once?
A: JavaScript is based on a single-threaded execution model, in which events
are processed one at a time.

4 In what order are events from the event queue processed?
A: Events are processed in the order in which they were generated: first in,
first out.

In what situations might callback functions be used synchronously?
Asynchronously?
What’s the difference between an arrow function and a
function expression?
Why might you need to use default parameter values in a
function?