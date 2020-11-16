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