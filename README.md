
# Cargo Tracking App

This is a Cargo Tracking application that allows users to track cargo and destination locations on a Google Map. The application uses the Google Maps API to display markers for both cargo and destination locations and show detailed information in a popup when the markers are clicked. The locations, weights, and other details of the cargo and destinations are dynamically generated using the `faker-js` library.

## Features

- **Cargo Tracking**: Track cargo location using random coordinates and unique tracking IDs.
- **Destination Tracking**: Track the destination's location and the receiver's name, generated randomly.
- **Google Maps Integration**: Display cargo and destination markers on a Google Map.
- **Popup Information**: Display relevant information about each entity (cargo or destination) when clicking on the markers.

## Project Structure

- `src/` - Contains TypeScript files that define the application logic and entities.
  - `Cargo.ts` - Defines the Cargo class with a unique tracking ID, location, and popup information.
  - `Destination.ts` - Defines the Destination class with a receiver name, location, and popup information.
  - `TrackingMap.ts` - Defines the `TrackingMap` class that interacts with the Google Maps API and places markers on the map.
  - `index.ts` - Entry point for the application that initializes the Cargo and Destination entities and attaches them to the map.
  - `tsconfig.json` - TypeScript configuration file.
  
- `index.html` - Contains the HTML structure for the app and integrates the Google Maps API and the bundled JavaScript file.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Google Maps API Key](https://developers.google.com/maps/documentation/javascript/get-api-key).

### Installation

1. Clone the repository or download the files.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Replace `YOUR_API_KEY` in `index.html` with your actual Google Maps API key.

4. Build the project:

   ```bash
   npm run build
   ```

5. Open `index.html` in a browser or use a local server to view the application.

## Usage

Once the app is running, the Google Map will display markers for both cargo and destination entities. Clicking on a marker will open a popup showing details about the cargo or destination.

### Example Popup Content

- **Cargo**: Shows the unique tracking ID of the cargo.
- **Destination**: Displays the receiver's name associated with the destination.

## License

This project is private and for personal use only.
