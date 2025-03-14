let screen = document.getElementById('screen');
let current = '';
let pass = "090924";
let int = document.querySelectorAll('.numberkeys');

int.forEach(function(button){
    button.addEventListener('click', function(){

        if (current.length < 6){
            current += button.textContent.trim();
            screen.value = current;
        }
        
        // if (current.length === 6){
        //     if (current === pass){
        //         window.location.href = "anotherpage.html";
        //     } else{
        //         screen.innerHTML = "Input Error";   

        //         setTimeout(()=> {
        //             screen.innerHTML = '';
        //             current = '';

        //         }, 1000);
        //     }
        // }
        
    });
});

document.getElementById('clear').addEventListener('click',function(){
    current = '';
    screen.value = '';
});

document.getElementById('Enter').addEventListener('click', function(){
    if(current.length === 6){
        if(current=== pass){
        window.location.href = 'anotherpage.html';
    }
    else{
        screen.value = "Input Error";   
        setTimeout(()=> {
            screen.value = '';
            current= '';

        }, 800);
        return;
    }
}

    // else{
    //     screen.value = "Input Error";   
    //     setTimeout(()=> {
    //         screen.value = '';
    //         current.value = '';

    //     }, 800);
    // }
});