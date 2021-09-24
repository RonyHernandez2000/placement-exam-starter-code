// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Rony Hernandez" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0  // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0// Sugar Sprinkle
let total1 = 0
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
let total = document.querySelector("#qty-total")
let totalgb = document.querySelector("#qty-gb")
let totalcc = document.querySelector("#qty-cc")
let totalsugar = document.querySelector("#qty-sugar")

document.getElementById('add-gb').addEventListener('click', function(e) {

    gb = gb + 1;
    totalgb.textContent = gb;
 total1++
 total.textContent= total1

 
  

 

    
})

document.getElementById('minus-gb').addEventListener('click', function(e) { 
      gb = gb - 1;
    totalgb.textContent = gb;
    total1--
    total.textContent= total1
   
   
 
  

})


document.getElementById('add-cc').addEventListener('click', function(e) { 
  
    cc = cc + 1;
    totalcc.textContent = cc;
    total1++
    total.textContent= total1

 
  
})
   
document.getElementById('minus-cc').addEventListener('click', function(e) { let cccount = parseInt(totalcc.textContent);
    cc= cc- 1;
    totalcc.textContent = cc;
    total1--
    total.textContent= total1

})

document.getElementById('add-sugar').addEventListener('click', function(e) { let sugarcount = parseInt(totalsugar.textContent);
    sugar = sugar + 1;
    totalsugar.textContent = sugar;
    total1++
    total.textContent= total1

})

    document.getElementById('minus-sugar').addEventListener('click', function(e) { let sugarcount = parseInt(totalsugar.textContent);
        sugar = sugar-1;
        totalsugar.textContent = sugar;
        total1--
        total.textContent= total1
    

    })




   


