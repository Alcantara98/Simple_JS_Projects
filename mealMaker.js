const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],
        
        set appetizers(appetizers){
            this._appetizers = appetizers;
        },
        get appetizers(){
            return this._appetizers;
        },
        set mains(mains){
            this._main = main;
        },
        get mains(){
            return this._mains;
        },
        set desserts(desserts){
            this._desserts = desserts;
        },
        get desserts(){
            return this._desserts;
        }
    },

    get courses(){
        return this._courses;
    },

    addDishToCourse(courseName, dishName, dishPrice){
        let newCourse = {
            name: dishName,
            price: dishPrice
        }

        switch(courseName){
            case 'appetizers':
                this._courses.appetizers.push(newCourse);
                break;
            case 'mains':
                this._courses.mains.push(newCourse);
                break;
            case 'desserts':
                this._courses.desserts.push(newCourse);
        }
    },

    getRandomDishFromCourse(courseName){
        let chosenCourse;

        switch(courseName){
            case 'appetizers':
                chosenCourse = this._courses.appetizers;
                break;
            case 'mains':
                chosenCourse = this._courses.mains;
                break;
            case 'desserts':
                chosenCourse = this._courses.desserts;
                break;
        }

        let randomInt = Math.floor(Math.random() * 3);
        return chosenCourse[randomInt];
    },

    generateRandomMeal(){
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');

        let costTotal = appetizer.price + main.price + dessert.price;
        console.log(`${appetizer.name}, ${main.name}, ${dessert.name}, $${costTotal}`)
    }
}


menu.addDishToCourse('mains', 'Fish Soup', 26.99);
menu.addDishToCourse('mains', 'Fish Rice', 25.99);
menu.addDishToCourse('mains', 'Fish Salmon', 40.99);

menu.addDishToCourse('desserts', 'Fish Cream', 20.99);
menu.addDishToCourse('desserts', 'Fish Tea', 2.99);
menu.addDishToCourse('desserts', 'Fish Cake', 20.99);

menu.addDishToCourse('appetizers', 'Fish Chips', 10.99);
menu.addDishToCourse('appetizers', 'Fish Donuts', 19.99);
menu.addDishToCourse('appetizers', 'Fish Juice', 5.99);

let meal = menu.generateRandomMeal();
console.log(meal);
