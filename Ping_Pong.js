
 function desplay(data){
    $('<img>',{
    src: data.url ,
    hight : '100%',
    width : '100%',
    }).appendTo('#img-container');
    console.log(data.url);
    // $(document.createElement('img')).attr('src',data.url).appendTo('#img-container');

}
$.ajax({
    url :'https://api.nasa.gov/planetary/apod',
    method :'GET',
    success: desplay,
    data :{
        api_key:'DEMO_KEY',
        date:'2018-06-07',
    },
})