const bool1 = true;
const bool2 = false;

/** 
 * Falsy(appear to be equal to false) values:
 * null
 * undefined
 * NaN
 * '' "" ``
 * */ 

// short circuit operations talks about a verification done in AND / OR operators. The verifications in AND operators will check the first false(or falsy) and return it, the verifications done in the OR operator will check the opposite(the first true value) and return it

const andShortCircuit = "Peter" && "James" && "Luka" && null && 12;
const orShortCircuit = null || "" || NaN || "Ronaldo" || undefined;