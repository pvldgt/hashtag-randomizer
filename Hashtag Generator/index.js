// create hashtag array with all the hashtags 
let hashtagArray = ["animation", "redshift", "3dart", "cgart", "c4d", "dailyrender",
    "daily3d", "cinema4d", "motiongraphics", "motiondesign", "graphicdesign", "digitalart", "3dillustration",
    "3dcd", "rendering", "3dchallenge", "designchallenge", "3dartist"];

// variable that counts the number of elements of an array 
var arrayLength = hashtagArray.length;

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
    let userAmount = prompt(`How may hashtags would you like? The maximum amount is ${hashtagArray.length}`)
    if (!(userAmount > 0 && userAmount <= hashtagArray.length)) {
        userAmount = prompt(`Go again! How may hashtags would you like? The maximum amount is ${hashtagArray.length}`)
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
    $("h2").text(finalTags);
}, 500)

// COPY HASHTAGS ON CLICK



