# jquery-todo
A to-do list using jQuery

## User Stories
* User can see all todo items so they know what to do next.
* User can add a new item to the list.
* User can delete a todo list item from the list.

## User interface
ToDo List - unordered list <ul>
* each list item - <li>
* todo item input - <input type="text>
* submit button - <button>
* item delete - <button>

## Pseudocode
* User loads page - display the list, display textbox and button
* User clicks submit - read value in the textbox, create a new <li>, set it's text (this would include the delete widget), add it to the <ul>, clear the text box, refocus textbox
* User clicks delete on an item - remove from the list
