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








