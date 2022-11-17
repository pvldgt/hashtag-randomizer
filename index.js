// create hashtag array with all the hashtags 
let hashtagArray = ["animation", "redshift", "3dart", "cgart", "c4d", "dailyrender",
    "daily3d", "cinema4d", "motiongraphics", "motiondesign", "graphicdesign", "digitalart", "3dillustration",
    "3dcd", "rendering", "3dchallenge", "designchallenge", "3dartist", "artistsoninstagram", "creative", "artwork", "digitalartwork",
    "3dmodel", "3dmodeling", "animation", "3danimation", "3dcommunity", "3d", "3ddesign", "3dvisualization", "3dmodelling",
    "3dartwork", "3dvisualisation", "digitalartist", "concept", "graphics", "visual", "visuals", "motiondesigner", "motiondesigners",
    "cinema4dart", "cinema4drender", "digitalillustration", "maxon3d", "motiongraphicscollective", "mgcollective", "mographics",
    "mograph", "mdcommunity", "redshift3d", "c4render", "c4dart", "bestvisualz", "digitalnatives", "computergenerated",
    "eyeondesign", "artportfolio", "daily3d", "motionlovers", "daily3d", "redshiftrender", "abstract3d", "dailyrenderc4d", "creativedesign",
    "3ddesigner", "motionmood", "motiongrapher", "motionart", "typemotion"];


// create function that picks out a random number of hashtags specified as a parameter 
function getRandomHashtags(array, number) {
    let copyArray = array.slice(0);
    let newArray = []
    for (var i = 0; i < number; i++) {
        var randomNumber = Math.floor(Math.random() * copyArray.length)
        // console.log("This is a random index nuber " + randomNumber);
        newArray.push(copyArray[randomNumber]);
        // console.log("This is the new array " + newArray);
        copyArray.splice(randomNumber, 1);
        // console.log("This is the old array " + copyArray)
    }
    return newArray;
}


setTimeout(function () {
    let userAmount = prompt(`How many hashtags would you like? The maximum amount is ${hashtagArray.length}`)
    while (!(userAmount > 0 && userAmount <= hashtagArray.length)) {
        userAmount = prompt(`Go again! How many hashtags would you like? The maximum amount is ${hashtagArray.length}`)
    }
    let randomArray = getRandomHashtags(hashtagArray, userAmount);

    function createHashtags() {
        let finalString = '';
        for (i = 0; i < randomArray.length; i++) {
            finalString += (`#${randomArray[i]} `);
        }
        return finalString;
    }
    let finalTags = createHashtags();
    // insert the finalTags string into the text area 
    $("#hashtag-text").val(finalTags);
}, 500)



///when copy button clicked add class for 2 seconds 

let button = $(".button-copy")

button.click(function () {
    // let copyText = document.getElementById("hashtag-text").value;
    // navigator.clipboard.writeText(copyText)

    // select the text in the text area 
    let newClip = $("#hashtag-text").val();
    // copy the text 
    navigator.clipboard.writeText(newClip)
})


// How to make textarea size adjustable? 

// COPY HASHTAGS ON CLICK and add clarification about this functionality 

// rework the prompt feature into the input and output fields 

// divide website into different cetagories - generate hashtags for each 
// pick hashtags from 3 different popularity subcategories 

// motiondesign // characterart // abstract3d // 3dprint //typemotion (typegang, typeinmotion, typography)
// "", "", "", "", "", "", "", "", "", "", "",

