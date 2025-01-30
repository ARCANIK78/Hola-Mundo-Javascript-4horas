let i = 0;
while(i < 100){
    i++;
    if (i === 50){
        continue;
    }
    if (i == 30){
        break;
    }
    console.log(i);
}