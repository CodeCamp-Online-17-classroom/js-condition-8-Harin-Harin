let a = Number(prompt("ใส่คะแนนที่ได้"));
console.log(a)
if (isNaN(a)){
    alert('Invalid number');
} else if(a > 100){
    alert(`คะแนน ${a} เยอะเกินอาจารรรย์`);
} else if(a >= 80){
    alert(`คะแนน ${a} ได้เกรด A`);
} else if(a >= 70){
    alert(`คะแนน ${a} ได้เกรด B`);
} else if(a >= 60){
    alert(`คะแนน ${a} ได้เกรด C`);
} else if(a >= 50){
    alert(`คะแนน ${a} ได้เกรด D`);
} else if(a < 50){
    alert(`คะแนน ${a} ได้เกรด F`);}
