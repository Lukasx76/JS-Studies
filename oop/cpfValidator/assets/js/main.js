// 705.484.450-52 070.987.720-03
class CPF {
    constructor(cpf) {
      Object.defineProperty(this, 'cleanCPF', {
        writable: false,
        enumerable: true,
        configurable: false,
        value: cpf.replace(/\D+/g, '')
      });
    }
  
    isSequence() {
      return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF;
    }
  
    generateNewCPF() {
      const cpfWithoutDigits = this.cleanCPF.slice(0, -2);
      const digit1 = CPF.generateDigit(cpfWithoutDigits);
      const digit2 = CPF.generateDigit(cpfWithoutDigits + digit1);
      this.newCPF = cpfWithoutDigits + digit1 + digit2;
    }
  
    static generateDigit(cpfWithoutDigits) {
      let total = 0;
      let reverse = cpfWithoutDigits.length + 1;
  
      for(let numericString of cpfWithoutDigits) {
        total += reverse * Number(numericString);
        reverse--;
      }
  
      const digit = 11 - (total % 11);
      return digit <= 9 ? String(digit) : '0';
    }
  
    valida() {
      // return false if the cpf was not cleaned
      if(!this.cleanCPF) return false;
      // return false if the cpf provided is different from a string
      if(typeof this.cleanCPF !== 'string') return false;
      // return false if the cpf provided has length less than 11 characters
      if(this.cleanCPF.length !== 11) return false;
      // return false if all characters are the same e.g 111.111.111-11
      if(this.isSequence()) return false;
      this.generateNewCPF();
  
      return this.newCPF === this.cleanCPF;
    }
  }