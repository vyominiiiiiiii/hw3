m=" ";

function far(cel){
    console.log(cel*(9/5)+32);
    document.getElementById("celc").innerHTML=cel*(9/5)+32;
    return cel*(9/5)+32;
}

far(10);

function cel(far){
    console.log((5/9)*(far-32));
    document.getElementById("far").innerHTML=(5/9)*(far-32);
    return (5/9)*(far-32);
}

cel(50);
