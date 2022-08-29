 
 function  fetchingrandomDogimg (){
    var  xhrRequest = new  XMLHttpRequest();
    xhrRequest.onload=function(){
       
        var responseJSON = JSON.parse(xhrRequest.response);
       
        var imgurl=responseJSON.message;
        console.log(imgurl);

        $('#dog-img').attr('src',imgurl);
    }

    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',TextTrackCue)
    xhrRequest.send();

}

$('#fetch-dog-img').click(fetchingrandomDogimg);