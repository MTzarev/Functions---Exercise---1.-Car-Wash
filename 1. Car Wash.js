function carWash (command) { 
    let totalProcentage = 0; 
    let soap = x => x + 10;
    let water = x => x + x * 0.2;
    let vacuum = x => x + x * 0.25;
    let mud = x => x - x * 0.10; 
    for (let i = 0; i < command.length; i++){   
      if (command[i] === 'soap') {
        totalProcentage = soap(totalProcentage);
      } else if (command[i] === 'water') {
        totalProcentage = water(totalProcentage);
      } else if (command[i] === 'vacuum cleaner') {
        totalProcentage = vacuum(totalProcentage);
      } else {
        totalProcentage = mud(totalProcentage);
      } 
    } 
    console.log(`The car is ${totalProcentage.toFixed(2)}% clean.`);
  }
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
//carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
