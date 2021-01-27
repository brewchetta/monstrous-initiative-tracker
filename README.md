# Monstrous D&D Initiative Tracker

Initiative tracker for D&D. Utilizes the 5th Edition API to automatically pull in monster stats. You can save "favorites" to local storage and retrieve them as need be.

## MVP:

- COMPLETED: A user can build a stat block with a monster's attributes, saves, health, AC, and initiative

- COMPLETED: Users can change a stat block to have different stats

- COMPLETED: Initiative determines the order that all monsters / characters are displayed (automatically determining ties based on DEX)

- COMPLETED: The list only shows important stats (monster name, initiative, and AC) and any monster / character can be expanded to see and change their stats

## Stretch

- COMPLETED: Integration with http://www.dnd5eapi.co/ so users can immediately pull in monster stats and possibly append them as needed

- WORKING: Users can amend a monster stat block, for example, adding or removing weapons from goblins or giving monsters different abilities

- Users are able to save custom monster / character blocks to local storage

- If a monster drops to 0 hit points, the user is asked whether they'd like to be removed from the list

- Users can assign icons to monsters / characters to show different statuses

- Each initiative card has a background determined by monster / player type

- WORKING: When building template, can toggle box to designate player character

- Automatically builds a url link to the D&D beyond page for that monster

## Issues

- Clicking on a monster's name doesn't bring up the modal (for some reason I keep trying to do that)

- Initiative needs to automatically pull in DEX modifier for a calculated initiative

- Can't add hit points in detail modal
