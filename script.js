document.getElementById('s-plus').addEventListener('click', function(){
    
    const p1 = document.getElementById('s-count');
    const p1String = p1.innerText;
    let subCount = parseInt(p1String);
    
    if(subCount === 33){
        alert('Subhan Allah Completed');
        return;
    }
    subCount += 1;
    p1.innerText = subCount;
})
document.getElementById('ah-plus').addEventListener('click', function(){
    
    const p2 = document.getElementById('ah-count');
    const p2String = p2.innerText;
    let ahCount = parseInt(p2String);
    
    if(ahCount === 33){
        alert('Alhamdulillah Completed');
        return;
    }
    ahCount += 1;
    p2.innerText = ahCount;
})
document.getElementById('ak-plus').addEventListener('click', function(){
    
    const p3 = document.getElementById('ak-count');
    const p3String = p3.innerText;
    let akCount = parseInt(p3String);
    
    if(akCount === 34){
        alert('Allahu Akbar Completed');
        return;
    }
    akCount += 1;
    p3.innerText = akCount;
})

document.getElementById('s-minus').addEventListener('click', function(){
    
    const p1 = document.getElementById('s-count');
    const p1String = p1.innerText;
    let subCount = parseInt(p1String);
    
    if(subCount === 0){
        alert('Cannot go under zero');
        return;
    }
    subCount -= 1;
    p1.innerText = subCount;
})
document.getElementById('ah-minus').addEventListener('click', function(){
    
    const p2 = document.getElementById('ah-count');
    const p2String = p2.innerText;
    let ahCount = parseInt(p2String);
    
    if(ahCount === 0){
        alert('Cannot go under zero');
        return;
    }
    ahCount -= 1;
    p2.innerText = ahCount;
})
document.getElementById('ak-minus').addEventListener('click', function(){
    
    const p3 = document.getElementById('ak-count');
    const p3String = p3.innerText;
    let akCount = parseInt(p3String);
    
    if(akCount === 0){
        alert('Cannot go under zero');
        return;
    }
    akCount -= 1;
    p3.innerText = akCount;
})

document.getElementById('reset').addEventListener('click', function(){
    const p1 = document.getElementById('s-count');
    const p1String = p1.innerText;
    let subCount = parseInt(p1String);

    subCount = 0;
    p1.innerText = subCount;

    const p2 = document.getElementById('ah-count');
    const p2String = p2.innerText;
    let ahCount = parseInt(p2String);

    ahCount = 0;
    p2.innerText = ahCount;

    const p3 = document.getElementById('ak-count');
    const p3String = p3.innerText;
    let akCount = parseInt(p3String);

    akCount = 0;
    p3.innerText = akCount;
})