$(function() {
    $("#przycisk").click(function() {
        $("p:first").before($("p:last"));
    }); 
/*po kliknięci w przycisk pargraf,który jest pierwszy ma być przed paragrafem ostatnim*/
    
    $("#przycisk2").click(function() {
        $("p:last").after($("p:first"));
    });
/*znajdź po id przycisk2 button, po kliknięciu w niego włączy się funkcja która wyszukuje ostatni paragraf i powoduje, że ma się on pojawić po paragrafie na pierwszym miejscu*/
    
});


               


/*$("#przycisk2").click(function() {
    alert("DRUGI PRZYCISK");
});*/

