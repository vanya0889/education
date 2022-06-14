

function baseExpect(a) {
  function toBe(b){
    if(typeof b === 'number' && typeof a === 'number'){
      return a===b
    }
  }
  toBe.not = (b) => {
    if(typeof b === 'number' && typeof a === 'number'){
      return a!==b
    }
  }

  return {toBe}

}



window.baseExpect = baseExpect;

export default baseExpect;
