Functions: Functions are objects, just with an additional, special capability of being invokable: Functions can be
called or invoked in order to perform an action.

CallBack Functions: When function pass as an argument to another function.
Whenever we set up a function to be called at a later time, whether by the browser in
the event-handling phase or by other code, we’re setting up a callback. The term stems
from the fact that we’re establishing a function that other code will later “call back” at
an appropriate point of execution.

Note: One of the most important features of JavaScript is the ability to create functions in
the code anywhere an expression can appear.

NOTE This section introduces callbacks as functions that other code will later
“call back” at an appropriate point of execution. You’ve seen an example in
which our own code immediately calls the provided callback (the useless
function example), as well as an example in which the browser makes the call
(the mousemove example) whenever a particular event happens. It’s important
to note that, unlike us, some people believe that a callback has to be
called asynchronously, and therefore that the first example isn’t really a callback.