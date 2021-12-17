var dateelement=document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','date');
document.body.append(dateelement);

var button=document.createElement('button');
button.innerHTML="Display data";
button.className="btn btn-primary";
button.setAttribute('type','button');
button.addEventListener('click',displaydata);
document.body.append(button);





































function displaydata(){
    let input=document.getElementById("date").value;
    if (Date.parse(input)) {
        var inputdate = new Date(input);
        var currentdate = new Date();
        // console.log(inputdate,currentdate);
        var millisecdiff = currentdate.getTime() - inputdate.getTime();
        console.log(millisecdiff);
        var seconddiff = Math.floor(millisecdiff / 1000);
        console.log(seconddiff);
    
        var minutediff = Math.floor(seconddiff / 60);
        console.log(minutediff);
        var hoursdiff = Math.floor(minutediff / 60);
        console.log(hoursdiff);

        var daydiff = Math.floor(hoursdiff / 24);
        console.log(daydiff);

        var yeardiff = currentdate.getFullYear() - inputdate.getFullYear();
        console.log(yeardiff);
        console.log(currentdate.getMonth());
       
        var monthdiff = (yeardiff * 12) + (currentdate.getMonth() - inputdate.getMonth());
        console.log(monthdiff);
    
        // var z = document.createElement('div');
        // z.innerHTML = `${'Currentdate is ' + '' + currentdate}`;

        // var a = document.createElement('div');
        // a.innerHTML = `${'Mill is ' + '' + millisecdiff}`;

        // var b= document.createElement('div');
        // b.innerHTML = `${'daydiff is ' + '' + daydiff}`;

        // var c = document.createElement('div');
        // c.innerHTML = `${'Minutediff is ' + '' + minutediff}`;

        // var d = document.createElement('div');
        // d.innerHTML = `${'Yeardiff is ' + '' + yeardiff}`;

        // var e = document.createElement('div');
        // e.innerHTML = `${'Monthdiff is ' + '' +monthdiff}`;

        // document.body.append(z,a,b,c,d,e);

        var div1 = document.createElement('div');
        div1.innerHTML =
            `Input date is:${inputdate}<br>
                  Current date is  :${currentdate}<br>
                  Millisecond diff is  :${millisecdiff}<br>
                  Second diff is  :${seconddiff}<br>
                  Minute diff is  :${minutediff}<br>
                  Hour diff is  :${hoursdiff}<br>
                  Day diff is  :${daydiff}<br>
                  Month diff is  :${monthdiff}<br>
                  Year diff is  :${yeardiff}`;
   
                  document.body.append(div1);
       

    } else {
        var a = document.createElement('div')
        a.innerHTML=('Give a Proper date')
        //document.write('Give a Proper date');
        document.body.append(a);
    }
    
}







