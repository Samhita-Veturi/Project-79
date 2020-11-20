Menu_List = [
    "Chicken Tandoori Pizza",
    "Tandoori Paneer",
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza",
    "Peppy Paneer",
    "Veggie Delight",
    "Veg Supreme"
];

function Get_Menu(){
    var htmlData;
    htmlData="<ol class='menuist'>"
    Menu_List.sort()
    for(var i=0;i<Menu_List.length;i++){
        htmlData = htmlData+'<li>' + Menu_List[i] +'<li>'
    }
    htmlData= htmlData+"</ol>"
    document.getElementById("Display-Menu").innerHTML = htmlData;

}

function Add_Item(){
    var htmlDATA;
    var item = document.getElementById("add_item").value;
    Menu_List.push(item);
    Menu_List.sort;
    htmlDATA = "<section class='cards'>"
    for(var i=0;i<Menu_List.length;i++){
        htmlDATA = htmlDATA+ '<div class="cards">' + '<img src="images/pizzaImg.png/>' + Menu_List[i] + '</div>';
    }
    htmlDATA = htmlDATA + "</section>"
    document.getElementById("Display_AddedMenu").innerHTML = htmlDATA;
}