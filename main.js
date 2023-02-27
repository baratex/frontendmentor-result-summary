document.addEventListener('DOMContentLoaded', function(){
    const req = new XMLHttpRequest();
    req.open("GET",'./data.json',true);
    req.send();
    req.onload = function(){
        const json = JSON.parse(req.responseText);
        let avg = 0;

        for (let i = 0; i < json.length; i++){
            document.getElementsByClassName('img' + i)[0].src = json[i].icon;
            document.getElementsByClassName('cat' + i)[0].innerHTML = json[i].category;
            document.getElementsByClassName('points' + i)[0].innerHTML = json[i].score;

            avg += json[i].score;
        };

        document.getElementsByClassName('average')[0].innerHTML = Math.round(avg / json.length);

    };
});