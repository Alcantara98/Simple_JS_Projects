const randomMessage = {
    topics: {
        astronomy: {
            objects: ['Stars', 'Blackholes', 'Nebulas', 'Pulsars', 'Neutron Stars', 'Galaxies', 'Planets'],
            adjectives: ['large', 'colorful', 'dull', 'majestic', 'bright', 'beautiful', 'small', 'violent']
        },

        Wildlife: {
            objects: ['Lions', 'Kangaroos', 'Eagles', 'Dolphins', 'Whales', 'Ants', 'Fish', 'Crabs', 'Sparrows'],
            adjectives: ['large', 'small', 'fast', 'slow', 'smart', 'dumb', 'hard-working', 'lazy', 'angressive']
        }
    },
    generate(){
        let keys = Object.keys(this.topics);
        let chosenTopic = keys[Math.floor(Math.random() * keys.length)];
        let objectsArr = this.topics[chosenTopic].objects;
        let chosenObj = objectsArr[Math.floor(Math.random() * objectsArr.length)];
        let adjectivesArr = this.topics[chosenTopic].adjectives;
        let chosenAdj = adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
        console.log(`${chosenObj} are ${chosenAdj}! Am I correct or not?!!!`);
    }
}
randomMessage.generate();