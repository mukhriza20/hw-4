let array = []
let arrGanjil = []
let arrGenap = []
let maxGanjil  
let minGanjil 
let totalGanjil = 0;
let rata_rataGanjil = 0;
let maxGenap 
let minGenap 
let totalGenap = 0;
let rata_rataGenap = 0;

for (let i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random()*50)+1)    
}
console.log(array)

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
     arrGenap.push(array[i])   
    }else{
        arrGanjil.push(array[i])
    }
}
console.log(arrGenap)
console.log(arrGanjil)

/*for (let i = 0; i < 50; i++) {
    if (i == 0) {
     maxGanjil > (array[i]) ;
    }else{
        maxGanjil = (array[i]) ;
    }
}
console.log(maxGanjil)*/


for (let i = 0; i < 50; i++) {
    minGanjil = arrGanjil[0];
    maxGanjil = arrGanjil[0];
    minGenap = arrGenap[0];
    maxGenap = arrGenap[0];
    if(minGanjil < arrGanjil[i]){
        minGanjil = arrGanjil[i];
    }
    if (minGenap > arrGenap[i]){
        minGenap = arrGenap[i];
    }
    if (maxGanjil < arrGanjil[i]){
         maxGanjil =arrGanjil[i];
    }
    if (maxGenap > arrGenap[i]){
        maxGenap = arrGenap[i];
    }
    else{
        totalGanjil += arrGanjil[i];
        totalGenap += arrGenap[i];

        rata_rataGanjil = totalGanjil / arrGanjil.length;
        rata_rataGenap = totalGenap / arrGenap.length;


    }
    
    
    
}
console.log("Min Genap = " + minGenap)
console.log("Max Genap = " + maxGenap)
console.log("Total Genap = " + totalGenap)
console.log("rata-rata genap = " + rata_rataGenap)
console.log("-------------------------------------------------------")
console.log("Min Ganjil = " + minGanjil)
console.log("Max Ganjil = " +  maxGanjil)
console.log("Total Ganjil = " + totalGanjil)
console.log("rata-rata Ganjil = " + rata_rataGanjil)


