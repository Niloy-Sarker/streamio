# DFlix Series Stremio Addon

This is a Stremio addon that provides access to series from DFlix.

## Features

- Search for TV series, anime, and TV shows
- Stream content directly in Stremio
- Supports multiple categories of content

## Installation

### Method 1: Install from URL

1. Open Stremio
2. Navigate to the Addons section
3. Click "Community Addons"
4. At the bottom of the page, enter the addon URL: `http://localhost:7000/manifest.json` (when running locally)
5. Click "Install"

### Method 2: Local Development

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the addon:
   ```
   npm run start
   ```
4. The addon will be available at `http://localhost:7000/manifest.json`

## Usage

1. After installation, use the search function in Stremio to find series
2. Browse content in the catalog
3. Select a series to view available episodes
4. Click on an episode to start streaming

## Development

- The addon is built using the Stremio addon SDK
- It uses axios for HTTP requests and cheerio for HTML parsing
- Authentication is handled automatically to access DFlix content

## Source

This addon is based on the Series.kt file from DFlix provider, ported to a Stremio addon.

## License

MIT 