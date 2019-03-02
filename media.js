var col = ['blue','green','orange','yellow','mistyrose','powderblue','teal'];
var i = 0;
setInterval(bkground,2000);
function bkground(){
    document.body.style.backgroundColor = col[i];
    i++;
    if(i > col.length - 1)
    {
         i = 0;
    }
}

var jukebox = document.querySelector('ul.media');


jukebox.addEventListener('click',function(e){
     
    var songName = e.target.getAttribute('data-src');
    var audioplayer = document.querySelector('#player');

    if(audioplayer){

        if(songName === audioplayer.getAttribute('src'))
        {
            if(audioplayer.paused)
            {
                audioplayer.play();
                e.target.id = 'playing';
            }else{
    
                audioplayer.pause();
                e.target.id = 'paused';
            }
        }else{
            audioplayer.src = songName;
            audioplayer.play();
            if(document.querySelector('#playing'))
            {
                document.querySelector('#playing').id ='';
             }else{
                document.querySelector('#paused').id ='';  
            }
            e.target.id = 'playing';

        }
        
    }else{
        var audioplayer = document.createElement('audio');
        audioplayer.id = 'player'
        e.target.id = 'playing';
        audioplayer.src = songName;
        document.body.appendChild(audioplayer);
        audioplayer.play();
    
        audioplayer.addEventListener('ended', function()
        {
            audioplayer.parentNode.removeChild(audioplayer);
    
            e.target.id = "";
        },false)

    }

},false)