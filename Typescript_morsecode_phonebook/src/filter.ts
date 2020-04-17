//make sure to order my table before anything else
sortTable();


function SearchContactName() {

    let input;
    let filter;
    let table;
    let tr;
    let td;
    let i;
    let txtValue;
    unhighlight() //we first return table to normal state
    input = document.getElementById("nameInput");
    filter = input.value.toLowerCase();
    table = document.getElementById("p-table");
    console.log(table.getElementsByClassName("p-row"));
    tr = table.getElementsByClassName("p-row");

    console.log(tr.length); // counts the header rows. 
    let rows: number = tr.length - 1;
    let mid: number = Math.floor(rows / 2);
    let starting_point: number = 1;
    let endIndex = rows;
    console.log("my end index is " + endIndex);
    let found_item: boolean = false;
    while (starting_point <= endIndex) {
        console.log("my  index is " + starting_point);
        let middleIndex = Math.floor((starting_point + endIndex) / 2);
        console.log("my middle index is " + middleIndex);
        td = tr[middleIndex].getElementsByClassName("p-col")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
        }
        if (filter === txtValue.toLowerCase()) {
            alert("Contact found at position " + middleIndex + ". Highlighting...");
            (<HTMLElement>tr[middleIndex]).className = "p-row-highlight";
            return console.log("Contact found. Stopping while loop");
            found_item = true;
        }
        if (filter > txtValue.toLowerCase()) {
            console.log("Searching the right side of Array");
            starting_point = middleIndex + 1;
        }
        if (filter < txtValue.toLowerCase()) {
            console.log("Searching the left side of array");
            endIndex = middleIndex - 1;
        }
        else {
            console.log("Not Found this loop iteration. Looping another iteration.");
        }
      }
      if (!found_item)
          alert("We're Sorry! There is no contact with the Forename " + input.value);
}
function SearchContactEmail() {

    let input;
    let filter;
    let table;
    let tr;
    let td;
    let i;
    let txtValue;
    unhighlight(); // we return table to normal state before looking to include all rows. 
    input = document.getElementById("emailInput");
    filter = input.value.toLowerCase();
    table = document.getElementById("p-table");
    console.log(table.getElementsByClassName("p-row"));
    tr = table.getElementsByClassName("p-row");

    console.log(tr.length); // counts the header rows. 
    let rows: number = tr.length - 1;
    let mid: number = Math.floor(rows / 2);
    let starting_point: number = 1;
    let endIndex = rows;
    console.log("my end index is " + endIndex);
    let found_item: boolean = false;
    while (starting_point <= endIndex) {
        console.log("my  index is " + starting_point);
        let middleIndex = Math.floor((starting_point + endIndex) / 2);
        console.log("my middle index is " + middleIndex);
        td = tr[middleIndex].getElementsByClassName("p-col")[3];
        if (td) {
          txtValue = td.textContent || td.innerText;
        }
        if (filter === txtValue.toLowerCase()) {
            alert("Target was found at index " + middleIndex);
            (<HTMLElement>tr[middleIndex]).className = "p-row-highlight";
            found_item = true;
            return console.log("Contact found. Stopping while loop");
        }
        if (filter > txtValue.toLowerCase()) {
            console.log("Searching the right side of Array");
            starting_point = middleIndex + 1;
        }
        if (filter < txtValue.toLowerCase()) {
            console.log("Searching the left side of array");
            endIndex = middleIndex - 1;
        }
        else {
            console.log("Not Found this loop iteration. Looping another iteration.");
        }
    }
    if (!found_item)
        alert("We're Sorry! There is no contact with the email " + input.value);
}


function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("p-table");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByClassName("p-row");
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByClassName("p-col")[0];
            y = rows[i + 1].getElementsByClassName("p-col")[0];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
      }
      if (shouldSwitch) {
          /*If a switch has been marked, make the switch
          and mark that a switch has been done:*/
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
      }
    }
}
function unhighlight() {
    let table;
    let tr;
    table = document.getElementById("p-table");
    tr = table.getElementsByClassName("p-row-highlight");
    for (let i = 0; i < tr.length; i++) {
        (<HTMLElement>tr[i]).className = "p-row";
    }
}