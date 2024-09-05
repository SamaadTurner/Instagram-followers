# Instagram Followers Tracker
- A simple JavaScript-based application that helps you track and manage your Instagram followers and following lists. With this app, you can easily compare your followers and following, identifying who you follow but does not follow you back.

## Features
- Automated Comparison: The app uses Cheerio.js to parse Instagram HTML files and quickly compare your followers and following lists.
- Real-Time Insights: Instantly identify accounts you follow that aren't following you back.
- User-Friendly Input: Takes in HTML files of your Instagram followers and following, exported from Instagram, and processes them for easy comparison.
- Lightweight: A simple, fast, and efficient tool for managing your Instagram connections.

## Installation:
- Node.js
- Cheerios.js (implementation of core jQuery for server-side manipulation)

## How-to-use:

1. Export your Instagram Followers and Following data as HTML files (use your laptop dev tools) NOTE: This will be the longest part of this process
2. Save the files as followers.html and following.html in the root directory.
3. run `node compareFollowers.js`
4. The app will print out a list of people you follow who do not follow you back.
 