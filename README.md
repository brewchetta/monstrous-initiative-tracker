# Monstrous D&D Initiative Tracker

Version 1.2.2

Initiative tracker for D&D. Utilizes the 5th Edition API to automatically pull in monster and spell stats. You can save "favorites" to local storage and retrieve them as need be. Additionally, you can create characters and use track their initiative as player characters.

## Features

To start, you can search for a specific monster by clicking the `Search Monster Manual` button which has a sub-menu for searching for a monster, adding one via a JSON file, or adding a saved monster. In addition, you can create a new character from scratch by clicking the `Create New Character` button. Once a character is created, they'll be entered into the initiative order on the left. Players can assign icons to them by clicking the plus near their name and edit their health and initiative directly from their card.

## Character Sheets

If you'd like to custom tailor a character, click on the `More` area of their initiative card and you'll have full access to the character sheet. For characters who were added via the search, the sheet includes a link to their entry in D&D Beyond.

All attributes of a character can be referenced or edited. This includes actions which can be added or else removed by deleting all the text in the entry.

A character also has a spellbook from which you can reference that character's spells by hovering over them or clicking on them to go to their page on D&D beyond. Leveled spells for existing monsters also include a GUI for spell slots.

This app also has a save feature that adds your characters to local storage. In order to save any character for later, click the `Save to Storage` button at the bottom of the character sheet.

## Importing Characters

Characters and monsters can be imported via JSON files. You can find a few examples of these JSON files in the [additional monsters folder]("/example-monsters").

## Options

Players can open the options menu by clicking the gear icon in the bottom right. Random hitpoints will roll and assign a random hit point maximum to all characters based on their hit dice. Autoroll initiative will automatically roll and assign initiative to all current and newly created characters.

## Acknowledgements

D&D 5E API - [http://www.dnd5eapi.co/](http://www.dnd5eapi.co/)
D&D Beyond - [https://www.dndbeyond.com/](https://www.dndbeyond.com/)
Game-icons.net - [https://game-icons.net/](https://game-icons.net/)

## Changelog

1.2.2
- Can upload a JSON file for monsters
- Restyled the saved characters area
- Clicking on `Search Monster Manual` now has a sub-menu for different options

1.2.1
- Fixes for lycanthropes for D&D 5E API and D&D Beyond links
- Fixed special abilities and legendary abilities overwriting actions

1.2.0
- Added character speed to their sheets
- Added character senses to their sheets
- Shifted character input fields around for readability
- Various styling changes to make character sheets easier to read
- Characters should get added with their correct hit points when random hit points is off
- Deleting actions should no longer cause odd behavior
- Character classes no longer display if they're an NPC
- Options persist in local storage
- Added a separate tab for searching for spells

1.1.5
- Added an options button on the lower right
- Can now choose whether characters start with random hit points and pre-rolled initiative
- Fixed issue with saved characters causing infinite re-renders

1.1.4
- Spell slots now render as checkmarks
- Can add and remove spell slots
- Spell slots persist when saved to local storage

1.1.3
- Added ability to denote characters with up to five status icons
- Some additional styling changes to make icons easier to see

1.1.2
- Refactoring of local storage
- Fixed issue with text box height getting larger with every typed character
- Changed inputs to be part of a healthy and complete form, allowing players to tab through input fields
- Formatting improvements for character sheets
- Removed spellchecker from forms

1.1.1
- Added some additional security for spell links
- Unknown spells no longer crash the application on hover
- Blindness/Deafness can be properly accessed

1.1.0
- Searching for spells in the character detail now uses a datalist to see available spell names
- Adding a spell no longer resets the form for spell levels
- Can change a character's spell DC and spell modifier
- Can delete a spell from the list
- The special abilities tab is grayed out for characters who have just aren't special yet
- Cannot add duplicate spells to a character
- Spell tooltip is better formatted for the screen
- Clicking a spell now goes to its page on D&D Beyond
- Hitting enter to submit a new character spell now properly works
- Spell data is cached to avoid repeated fetches

1.0.4
- Users can now alter temporary hit points directly from the initiative list

1.0.3
- Fixed issue where returning to any action tab in the detail view would show stale data

1.0.2
- Fixed issue where saved monsters were loaded in with undefined actions

1.0.1
- Minor bug fixes

1.0.0
- Initial release
