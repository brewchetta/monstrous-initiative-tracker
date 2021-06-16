# Monstrous D&D Initiative Tracker

Version 1.1.6

Initiative tracker for D&D. Utilizes the 5th Edition API to automatically pull in monster and spell stats. You can save "favorites" to local storage and retrieve them as need be. Additionally, you can create characters and use track their initiative as player characters.

## Planned Changes
- Player character initiative card styling is determined by class
- Options persist in local storage

## Changelog

1.1.6
- Added character speed to their sheets
- Shifted character input fields around for readability
- Various styling changes to make character sheets easier to read

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

## Known Issues
- Some text is too large for certain text fields
- Will occasionally render deleted actions
