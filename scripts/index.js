/* index.js */

var glyphDiv;
var occupancyDiv;
var instructionDiv;
var tmpCredential = '';

function pagedLoaded() {
    console.log(`pagedLoaded...`);
    glyphDiv =  document.getElementById('glyph');
    occupancyDiv = document.getElementById('occupancy');
    instructionDiv = document.getElementById('instruction');

    //TODO: Set up display based on stored or fetched occupancy
    setOccupancyDisplay(2);
    // set up listening for events
    document.onkeypress = handleFobTag;
}

function handleFobTag(e) {
    var evt = e || window.event;
    //console.log('handleFobTag: ' + evt.type);
    console.log('handleFobTag: key is ' + evt.key);
    //console.log('handleFobTag: keyCode is ' + evt.keyCode);
    //console.log('handleFobTag: charCode is ' + evt.charCode);
    if (evt.keyCode == 13) {
        reportAttempt(tmpCredential);
        tmpCredential = '';
    } else {
        tmpCredential += evt.key;
    }
}

//TODO: triggering reportAttempt on CR/Enter/13
//TODO: capture local setup data

async function reportAttempt(credential) {
    console.log(`reportAttempt: ${credential}`);
    //TODO: use the Fetch API
    // refresh the page
    //location = location;
}

function setOccupancyDisplay(occupancy) {
    console.log(`setOccupancyDisplay: ${occupancy}`);
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