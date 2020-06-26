/* index.js */

async function reportAttempt(credential) {
    //console.log(`reportAttempt: ${credential} (currently not implemented!)`);
    //TODO: use the Fetch API
    content = document.getElementById('glyph').innerHTML
    if (content == '\u278A') {
        setOccupancyDisplay(3);
    } else {
        setOccupancyDisplay(2);
    }
}

function setOccupancyDisplay(occupancy) {
    //console.log(`setOccupancyDisplay: ${occupancy}`);
    if (occupancy == 2) {
        document.getElementById('glyph').innerHTML = '\u278A';
        document.getElementById('occupancy').innerHTML = '1 out of 3 spots available in this space.';
        document.getElementById('instruction').innerHTML = 'Tap your fob to check in or out of this room.';
    } else {
        // Max Capacity
        document.getElementById('glyph').innerHTML = '\u2716';
        document.getElementById('occupancy').innerHTML = 'Space is now at capacity: 3 out of 3 spots taken.';
        document.getElementById('instruction').innerHTML = 'Please wait until a spot opens up.';
    }
}