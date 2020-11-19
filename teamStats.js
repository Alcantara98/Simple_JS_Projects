/**
 * Team Stats
 * 
 * We want to create and extract information about your favorite sports team. Basketball, 
 * soccer, tennis, or water polo, you pick it. It’s your job to create data using the 
 * JavaScript data structures at your disposal: arrays, objects, etc.
 *
 * Once created, you can manipulate these data structures as well as gain insights from 
 * them. For example, you might want to get the total number of games your team has 
 * played, or the average score of all of their games.
 * 
 * @author Elbert Alcantara
 */
const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 99
        },
        {
            firstName: 'Paul',
            lastName: 'Saez',
            age: 13
        },
        {
            firstName: 'Pa',
            lastName: 'hez',
            age: 11
        }
    ],
    _games: [
        {
            opponent: 'Cos',
            teamPoints: 2,
            opponentPoints: 2
        },
        {
            opponent: 'Broncos',
            teamPoints: 4,
            opponentPoints: 9
        },
        {
            opponent: 'Bcos',
            teamPoints: 2,
            opponentPoints: 27
        }
    ],
    get players(){
        return this._players;
    },
    get games(){
        return this._games;
    },
    addPlayer(_firstName, _lastName, _age){
        let newPlayer = {
            firstName: _firstName,
            lastName:_lastName,
            age: _age
        }

        this._players.push(newPlayer);
    },
    addGame(_opponent, _teamPoints, _opponentPoints){
        let newGame = {
            opponent: _opponent,
            teamPoints: _teamPoints,
            opponentPoints: _opponentPoints
        }
        this.games.push(newGame);
    }
}

team.addPlayer('Steph', 'Curry', 28);
console.log(team.players);

team.addGame('manga', 12, 45);
team.addGame('all blacks', 100, 78);
console.log(team.games);