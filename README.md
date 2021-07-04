# Monstrous D&D Initiative Tracker

Version 1.2.4

Initiative tracker for D&D. Utilizes the 5th Edition API to automatically pull in monster and spell stats. You can save "favorites" to local storage and retrieve them as need be. Additionally, you can new create characters either in the app or by utilizing a JSON file.

## Features

To start, you can search for a specific monster by clicking the `Search Monster Manual` button which has a sub-menu for searching for a monster from the database, adding one via a JSON file, or adding a monster saved to local storage. In addition, you can create a new character from scratch by clicking the `Create New Character` button. Once a character is created, they'll be entered into the initiative order on the left. Players can assign icons to them by clicking the plus near their name or edit their health and initiative directly by clicking on those attributes.

## Character Sheets

If you'd like to custom tailor a character, click on the `More` area of their initiative card and you'll have full access to the character sheet. For characters who were added via the D&D 5E API search, the sheet includes a link to their entry in D&D Beyond.

All attributes of a character can be referenced or edited. This includes actions which can be added or else removed by deleting all the text in the entry.

A character also has a spellbook from which you can reference that character's spells by hovering over them or clicking on them to go to their page on D&D beyond. Leveled spells for existing monsters also include a GUI for spell slots.

This app also has a save feature that adds your characters to local storage. In order to save any character for later, click the `Save to Storage` button at the bottom of the character sheet.

## Importing Characters

Characters and monsters can be imported via JSON files. You can find a few examples of these JSON files in the [additional monsters folder](example-monsters).

In addition to importing monsters, they can also be downloaded as a JSON file. The button to download a monster is located at the bottom of their character sheet.

## Options

Players can open the options menu by clicking the gear icon in the bottom right. Random hitpoints will roll and assign a random hit point maximum to all characters based on their hit dice. Autoroll initiative will automatically roll and assign initiative to all current and newly created characters.

## Acknowledgements

D&D 5E API - [http://www.dnd5eapi.co/](http://www.dnd5eapi.co/)

D&D Beyond - [https://www.dndbeyond.com/](https://www.dndbeyond.com/)

Game-icons.net - [https://game-icons.net/](https://game-icons.net/)

## Changelog

[Link](CHANGELOG.md)
