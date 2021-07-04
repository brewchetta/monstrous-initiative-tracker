# Changelog

1.2.4
- Character spell slots can now be added and adjusted for any spellcaster
- Changed icons for spell slots
- Version number displayed in options
- Bug fixes

1.2.3
- Added ability to download custom monsters as JSON

1.2.2
- Clicking on `Search Monster Manual` now has a sub-menu for different options
- Can upload a JSON file for monsters
- Uploaded monsters can be searched and added like other monsters until the page is left
- Restyled the saved characters area
- Fix for infinite re-render when opening saved monsters list with no saved monsters

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
