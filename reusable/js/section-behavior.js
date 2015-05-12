//step 1 - bind everything with events to take inputs
$(document).ready(function(){
    
    //1A - binding "fit to", "content", "position" options
    $("#section-fit-screen, #section-fit-left, #section-fit-right, #section-fit-top, #section-fit-bottom, #section-content-editable, #section-position-fixed, #section-position-centered").bind("click", function(e){
        console.info("clicked on: "+e.target.id);
        console.info("changes applied to id: "+componentInUse);        
        if(e.target.id === "section-fit-screen"){
            $("#"+componentInUse).css("height","100%");
            $("#"+componentInUse).css("width","100%");
            $("#"+componentInUse).css("position","absolute");
            $("#"+componentInUse).css("overflow","hidden");
            console.info("inside section-fit-screen");
        }
        else if(e.target.id === "section-fit-left"){
            $("#"+componentInUse).css("height","100%");
            $("#"+componentInUse).css("left","0px");
            $("#"+componentInUse).css("position","absolute");
            $("#"+componentInUse).css("overflow","hidden");
            console.info("inside section-fit-left");
        }
        else if(e.target.id === "section-fit-right"){
            $("#"+componentInUse).css("height","100%");
            $("#"+componentInUse).css("right","0px");
            $("#"+componentInUse).css("position","absolute");
            $("#"+componentInUse).css("overflow","hidden");
            console.info("inside section-fit-right");
        }
        else if(e.target.id === "section-fit-top"){
            $("#"+componentInUse).css("width","100%");
            $("#"+componentInUse).css("top","0px");
            $("#"+componentInUse).css("position","absolute");
            $("#"+componentInUse).css("overflow","hidden");
            console.info("inside section-fit-top");
        }
        else if(e.target.id === "section-fit-bottom"){
            $("#"+componentInUse).css("width","100%");
            $("#"+componentInUse).css("bottom","0px");
            $("#"+componentInUse).css("position","absolute");
            $("#"+componentInUse).css("overflow","hidden");
            console.info("inside section-fit-bottom");
        }
        else if(e.target.id === "section-content-editable"){
            $("#"+componentInUse).draggable("destroy");
            $("#"+componentInUse).resizable("destroy");
            $("#"+componentInUse).attr("contenteditable","true");
            console.info("inside section-content-editable");
        }
        else if(e.target.id === "section-position-fixed"){
            
        }
        else if(e.target.id === "section-position-centered"){
            
        }
        else{
            console.error("unknown scenario found, while clicking on either of 'fit to', 'content',         'position'");
        }
        
        
    });
    
    //1B - binding "opacity", "background", "fonts", "margin", "padding", "height", "width", "mouse cursor", "border" options
    $("#section-opacity-selector-input, #section-background-img-input, #section-opacity-box-input, #section-background-color-input, #section-font-size-number, #section-margin-left-number,  #section-margin-right-number, #section-margin-top-number, #section-margin-bottom-number, #section-margin-unit, #section-padding-left-number, #section-padding-right-number, #section-padding-top-number, #section-padding-bottom-number, #section-padding-unit, #section-height-amount-number, #section-height-unit, #section-width-amount-number, #section-width-unit, #section-cursor-options, #section-border-style, #section-border-width-number, #section-border-width-unit, #section-border-radius-number,  #section-border-radius-unit, #section-z-index-number").bind("change", function(e){
        console.info("changed something on: "+e.target.id);
        console.info("changes applied to id: "+componentInUse);
    });   
});
//step 2 - process the input values

//step 3 - reflect the change in the selected component