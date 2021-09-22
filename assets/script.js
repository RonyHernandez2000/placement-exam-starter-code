// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Rony Hernandez" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total1 =document.getElementById('qty-total')
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`
let totalgb = document.getElementById('#qty-gb')
let totalcc =document.getElementById('#qty-cc')
let totalsugar =document.getElementById('#qty-sugar')
// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function(e) {
     let gb=0;
     if (gb<0) 
     else gb++


    
    console.log('Ginger bread + button was clicked!') 

    
})

document.getElementById('minus-gb').addEventListener('click', function(e) { let gb=0; gb< totalgb; gb--
    console.log('Ginger bread - button was clicked!') 
})

document.getElementById('add-cc').addEventListener('click', function(e) { let cc=0; cc< totalcc; cc++
console.log('+') })

document.getElementById('minus-cc').addEventListener('click', function(e) { let cc=0; cc< totalcc; cc--;
   
 
    console.log('-')
})

document.getElementById('add-sugar').addEventListener('click', function(e) { let sugar=0; sugar< totalsugar; sugar++
    console.log('+') })

    document.getElementById('minus-sugar').addEventListener('click', function(e) { let sugar=0; sugar< totalsugar; sugar--
        console.log('-')
    })
    cc.textContent = totalcc;
 total1 = totalgb+totalsugar+totalsugar
