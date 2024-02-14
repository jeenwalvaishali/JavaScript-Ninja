# Page Building in Web Development

The goal of this phase is to set up the user interface (UI) of a web application, accomplished in two steps:

1. Parsing HTML and constructing the Document Object Model (DOM).
2. Executing JavaScript code.

**Special Note:** Step 1 occurs during the browser's processing of HTML nodes, while step 2 occurs when encountering the script element, which contains or refers to JavaScript code.

## What is DOM?

The DOM is a structured representation of the HTML page, where each HTML element is a node.

**Special Note:** HTML and the DOM are closely linked but not identical. HTML serves as a blueprint for the initial construction of the DOM (UI). The browser can correct blueprint errors to create a valid DOM.

## Head Element in HTML:

The `<head>` element provides general page information such as the page title, character encodings, and external styles and scripts.

## Script Element:

During page construction, when encountering the script element, used to include JavaScript code, the browser pauses DOM construction from HTML and starts executing JavaScript code.

## Document:

The primary global object exposed to JavaScript by the browser is the `window` object, representing the page's window. A critical property of `window` is `document`, representing the DOM of the current page.

### Function Code:

Code contained within a function.

### Global Code:

Code outside functions.

**Special Note:** All script code for pages is within a function during the page-building phase.

## Event Listeners or Handlers:

Functions executed by the browser when specific events occur.

## Event Queue:

Events are queued as they occur and processed sequentially by the single thread of execution in the browser.

Whenever an event occurs, the browser should execute the associated event-handler
function. But there’s no guarantee that we have extremely patient users who will always
wait an appropriate amount of time before triggering another event. For this reason,
the browser needs a way to keep track of the events that have occurred but have yet to
be processed. To do this, the browser uses an event queue.

In the event-handling phase, all events (whether coming from the user, such as mouse clicks and
key presses, or coming from the server, such as Ajax events) are queued up as they occur and are 
processed as the single thread of execution allows.

The event-handling process:
- Browser checks the head of the event queue.
- If no events, browser continues checking.
- If an event exists, browser executes the associated handler, while the remaining events wait in the queue.

**Special Note:** The mechanism placing events in the queue is external to page-building and event-handling phases.

## Registering Event Handlers:

Event handlers are functions that we want executed whenever a particular event occurs. To enable this, we notify the browser at runtime of our interest in an event through event-handler registration. 
Two methods:
- Assigning functions to special properties.
- Using the `addEventListener` method, allowing registration of multiple event-handler functions.


