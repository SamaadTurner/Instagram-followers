const fs = require('fs');
const cheerio = require('cheerio');

// Load HTML files
const followingHtml = fs.readFileSync('following.html', 'utf-8');
const followersHtml = fs.readFileSync('followers.html', 'utf-8');

// Parse HTML files
const $following = cheerio.load(followingHtml);
const $followers = cheerio.load(followersHtml);

// Get following
const spansFollowing = $following('span._ap3a._aaco._aacw._aacx._aad7._aade');
const idsFollowing = [];
spansFollowing.each((index, element) => {
  idsFollowing.push($following(element).text().trim());
});

// Get followers
const spansFollowers = $followers('span._ap3a._aaco._aacw._aacx._aad7._aade');
const idsFollowers = [];
spansFollowers.each((index, element) => {
  idsFollowers.push($followers(element).text().trim());
});

// Find following that are not followers
idsFollowing.forEach((idFollowing) => {
  if (!idsFollowers.includes(idFollowing)) {
    console.log(idFollowing);
  }
});
