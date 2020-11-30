/*
	You’re part of a research team that has found a new mysterious 
	organism at the bottom of the ocean near hydrothermal vents. 
	Your team names the organism, Pila aequor (P. aequor), and finds 
	that it is only comprised of 15 DNA bases. The small DNA samples 
	and frequency at which it mutates due to the hydrothermal vents 
	make P. aequor an interesting specimen to study. However, P. aequor
	cannot survive above sea level and locating P. aequor in the deep 
	sea is difficult and expensive. Your job is to create objects that 
	simulate the DNA of P. aequor for your research team to study. 

	(step-by-step instructions not included)
*/
// Returns a random DNA base
const returnRandBase = () => {
	const dnaBases = ['A', 'T', 'C', 'G']
	return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
	const newStrand = []
	for (let i = 0; i < 15; i++) {
	  newStrand.push(returnRandBase())
	}
	return newStrand
  }
  
  const pAequorFactory = (specimenNum, dna) => {
	return {
	  specimenNum, dna,
	  mutate() {
		const mutateIndex = 
		  Math.floor(Math.random() * this.dna.length-1);
		const randomBase = this.dna[mutateIndex];
		const dnaBases = ['A', 'T', 'C', 'G'];
		let mutation = randomBase;
		while (mutation === randomBase) {
		  mutation = 
			dnaBases[Math.floor(Math.random() * dnaBases.length)];
		}
		this.dna[mutateIndex] = mutation;
		return this.dna;
	  },
	  compareDNA(other) {
		if(this.dna.length !== other.dna.length) {
		  console.log('error: uneven comparison');
		  return;
		}
		let total = other.dna.length;
		let match = 0;
		for(let i = 0; i < total; i++) {
		  if (this.dna[i] === other.dna[i]) {
			match += 1;
		  }
		}
		let percent = Math.floor((match/total) * 100);
		console.log(`specimen #${this.specimenNum} and specimen #${other.specimenNum} have ${percent}% DNA in common`);
	  },
	  willLikelySurvive() {
		let cgCount = 0;
		for(let base of this.dna){
		  if (base === 'C' || base === 'G') {
			cgCount += 1;
		  }
		}
		return (cgCount/this.dna.length) >= 0.6;
	  }
	}
  };
  function generateSurvivors(quantity) {
	let survivors = [];
	let i = 0;
	while(survivors.length < quantity) {
	  let subject = pAequorFactory(i, mockUpStrand());
	  if(subject.willLikelySurvive()) {
		survivors.push(subject);
	  }
	  i += 1;
	}
	return survivors;
  }