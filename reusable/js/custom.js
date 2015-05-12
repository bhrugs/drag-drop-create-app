//step 5 - a
function addSection()
{
    var addSectionHere = "<div class='a-section'> </div>";
    $("body").append(addSectionHere);
    console.log("a new section is added");
    
    //step 5 - b : give the divs ids.
    giveTheSectionIds();
}

//step 5 - b
function giveTheSectionIds(){
    //get all number of div elements with class - a-section
    var divsWithThisClass = $(".a-section").length;
    //if 1 elements found, then give the id=1 to the newly added section and so on
    $(".a-section").not("[id]").attr("id","a-section-"+divsWithThisClass);
    console.log("a new section id is assigned");
    
    //step 5 - c
    makeThemDragAndResizable("a-section-"+divsWithThisClass);
}

//step 5 - c
function makeThemDragAndResizable(idOfNewlyAddedSection){
    try{
        $(".a-section").draggable().resizable();
    }
    catch(ex){
        console.error(ex.message);
    }
    console.log("section became draggable and resizable");
}