let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

let storyWords = story.split(' ');

console.log(storyWords.length);

let betterWords = storyWords.filter(word => {
    if (!unnecessaryWords.some(wordd => {
        if (word === wordd) {
            return wordd;
        }
    })) {
        return word;
    }
})

console.log(betterWords.length);

let numOfSentences = 0;
betterWords.forEach(word => {
    if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
        numOfSentences++;
    }
})

console.log('Word Count: ' + betterWords.length);
console.log('Sentence Count: ' + numOfSentences);
overusedWords.forEach(word => {
    let count = betterWords.filter(wordd => {
        if (wordd === word) {
            return wordd;
        }
    })
    console.log(word + ' was used ' + count.length + ' times.');
})

console.log(betterWords.join(' '));