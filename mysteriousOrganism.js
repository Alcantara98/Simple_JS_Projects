/**
 * Mysterious Organism
 * 
 * Overview
 * This project is slightly different than others you have encountered thus far on Codecademy. 
 * Instead of a step-by-step tutorial, this project contains a series of open-ended requirements 
 * which describe the project you’ll be building. There are many possible ways to correctly 
 * fulfill all of these requirements, and you should expect to use the internet, Codecademy, 
 * and other resources when you encounter a problem that you cannot easily solve.
 *
 * Project Goals
 * Context: You’re part of a research team that has found a new mysterious organism at the 
 * bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor 
 * (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples 
 * and frequency at which it mutates due to the hydrothermal vents make P. aequor an 
 * interesting specimen to study. However, P. aequor cannot survive above sea level and 
 * locating P. aequor in the deep sea is difficult and expensive. Your job is to create 
 * objects that simulate the DNA of P. aequor for your research team to study.
 * 
 * @author Elbert Alcantara
 */

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

/**
 * .mutate() is responsible for randomly selecting a base in the object’s dna property and 
 * changing the current base to a different base. .mutate() will also return the object’s dna.
 * 
 * @param {number} num 
 * @param {array} bases 
 * @returns {object} pAequor object 
 */
const pAequorFactory = (num, bases) => {
    return {
      specimenNum: num,
      dna: bases,

      /**
       *  Mutates one base of the dna.
       *  
       *  @returns {array} dna of pAequor
       */
      mutate(){
        let randomBase = Math.floor(Math.random() * 15);
        let current = this.dna[randomBase];

        while(this.dna[randomBase] === current){
          this.dna[randomBase] = returnRandBase();
        }
        return this.dna;
      },

      // Compares its DNA with another pAequor's DNA.
      compareDNA(pAequor){
        let sameCount = 0;

        for(let i = 0; i < 15; i++){
          if(this.dna[i] === pAequor.dna[i]){
            sameCount++;
          }
        }

        return `specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${Math.round((sameCount/15.00) * 100)}% DNA in common.`;
      },

      /** 
       * Returns true if it is likely to survive, else it returns false.
       * 
       * @returns {boolean}
       */
      willLikelySurvive(){
        let baseCG = 0;
 
        this.dna.forEach(base => {
          if(base === 'C' || base === 'G'){
            baseCG++;
          }
        })

        return baseCG > 8;
      }
    }
}

/**
 * Will return 'amount' of pAequor that will likely survive.
 * 
 * @param {number} amount
 * @returns {array} 
 */
const create = amount =>{
  let result = [];
  let currentAq;
  while(result.length  < amount){
    currentAq = pAequorFactory(result.length, mockUpStrand());
    if(currentAq.willLikelySurvive()){
      result.push(currentAq);
    }
  }
  return result;
}

let ob = create(5);
console.log(ob);








