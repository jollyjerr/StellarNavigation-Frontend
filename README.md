# Stellar Navigation
*A web application for exploring the stars.*
![intro](https://github.com/jollyjerr/StellarNavigation-Backend/blob/master/GitHubFiles/intro.gif)

Stellar Navigation is a web application for displaying and navigating multiple stellar systems at scale.
This exciting project was developed during a single week of my time at Flatiron School using these fantastic technologies:

##### [Backend](https://github.com/jollyjerr/StellarNavigation-Backend)
- Python
- Flask
- SqlAlchamy
- Marshmellow
##### [Frontend](https://github.com/jollyjerr/StellarNavigation-Frontend)
- React.js
- React-Router
- Cytoscape.js
- React-Cytoscape
- HTML Canvas

... and more!

*This README is specific to the projects frontend, for the backend README, see [here](https://github.com/jollyjerr/StellarNavigation-Backend)*

## Features

Stellar Navigation uses Cytoscape.js and multiple components rendering HTML Canvases to achieve a completely interactive UI.
Users can navigate between the bodies of each stellar system - rendered to scale - or they can jump to specific 
large and small celestial bodies with the two provided navigation bars.

![navigation](https://github.com/jollyjerr/StellarNavigation-Backend/blob/master/GitHubFiles/nav.gif)

Users can visit multiple stellar systems within the same session - and click on multiple celestial bodies to add them
to their current trip.

![adding celestials](https://github.com/jollyjerr/StellarNavigation-Backend/blob/master/GitHubFiles/differentSystems.gif)

Finally, users can send a calculation request to the backend. Python will then calculate accurate data about the length of
their trip and the time it would take to travel between their selected celestial bodies -- at the speed of light.

![calculations](https://github.com/jollyjerr/StellarNavigation-Backend/blob/master/GitHubFiles/calculate.gif)

## Contributing
Feel free to open pull requests or report any bugs!

## License
[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
