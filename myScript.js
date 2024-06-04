

$("#spoilerBtn").on("click", function () {
    
  $(".spoiler").toggle();
});

$(".hideBtn").on("click", function () {
	$(this).next().toggle();
});

$(".hideout").on("click", function () {

if ($(this).next().css('display') == 'none') {
    
	$(this).next().show()
    rooter();

} else {
	$(this).next().hide();
}

});


function gate(){

   var UserInput = prompt("探索は【（キー）（個人ＩＤ）】の形式で入力して下さい","");
   if( UserInput != null ) {

          var url = "item/"+location.pathname.split('/').pop().split('.').shift() +"/"+UserInput+'.txt';
          const doAjax = async () => {

              const response = await fetch(url);

              if (response.ok) {
                  const textValue = await response.text();
                  document.check.text.value=  textValue
                  return Promise.resolve(textValue);
              }
              else {
                  return Promise.reject("*** not found");
              }
          };
          doAjax().then(console.log).catch(console.log);
   }
}

function rooter(){

var ref = document.referrer;    
if( ref.includes( "06_02Salt")||ref.includes( "06_03Ginger")||ref.includes( "06_04Honey")||ref.includes( "06_05Butter"))
{
    document.getElementById("root").innerHTML = "<a id='root' href='05_01Root.html'>【否定しうる証拠】</a>";
}

}