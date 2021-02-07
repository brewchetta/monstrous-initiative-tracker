# Monstrous D&D Initiative Tracker

Initiative tracker for D&D. Utilizes the 5th Edition API to automatically pull in monster stats. You can save "favorites" to local storage and retrieve them as need be.

## MVP:

- COMPLETED: A user can build a stat block with a monster's attributes, saves, health, AC, and initiative

- COMPLETED: Users can change a stat block to have different stats

- COMPLETED: Initiative determines the order that all monsters / characters are displayed (automatically determining ties based on DEX)

- COMPLETED: The list only shows important stats (monster name, initiative, hitpoints, and AC) and any monster / character can be expanded to see and change their stats

## Stretch

- COMPLETED: Integration with http://www.dnd5eapi.co/ so users can immediately pull in monster stats and possibly append them as needed

- COMPLETED: When building template, can toggle box to designate player character

- COMPLETED: Users can amend a monster stat block, for example, adding or removing weapons from goblins or giving monsters different abilities

  - COMPLETED: Can amend proficiencies
  - COMPLETED: Can amend actions
  - COMPLETED: Can amend legendary actions
  - COMPLETED: Can assign / remove spells
  - COMPLETED: Can add / remove actions/abilities/legendary actions

- COMPLETED: Users are able to save custom monster / character blocks to local storage and delete them

- COMPLETED: Add localStorage service module

- COMPLETED: Search ought to be a datalist of known monsters / spells

- COMPLETED: If a character drops to 0 hit points, they're styled differently

- COMPLETED: Player characters have a character class property

- COMPLETED: Users are able to open a monster's spells for quick reference

- COMPLETED: Each initiative card has a background determined by monster / player type

- COMPLETED: Automatically builds a url link to the D&D beyond page for that monster (using index rather than name)

- COMPLETED: Styling styling styling... maybe pixel art? Alternately, arcane designs?

- Player characters have specific styling to denote them

- Player character initiative card background is determined by class

- Users can assign icons to monsters / characters to show different statuses

## Issues

- Cannot amend temporary hit points from initiative card
