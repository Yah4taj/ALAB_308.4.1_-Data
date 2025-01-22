//======== Part1: Refactoring Old Code =========


let dataArray = [
	["ID", "Name", "Occupation", "Age"],
	['42','Bruce', 'Knight', '41'],
	['57','Bob','Fry Cook','19'],
	 ['63','Blaine','Quiz Master','58'],
	 ['98','Bill','Doctors Assistant','26'],
];

for (let i = 0; i <= dataArray.length; i++) {
	console.log(dataArray[i]);
}


//=============Part 2: Expanding Functionality ==========

 let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let results = [];            // To store the parsed CSV data as a 2D array

let currentRow = "";    // Tracks the current row  of data being processed
let currentCell = "";   // Tracks the current cell of data being processed
let columnCount = 0;     // Number of columns for CSV data
let rowCount = 0;      // Tracks the current row index

for (let i = 0; i <= csvData.length; i++) {
  let char = csvData[i] || "\n";                 // End of string as a newline to finalize parsing

  if (char === "," || char === "\n") {

    if (!results[rowCount]) results[rowCount] = [];      // Initialize the row if it doesn't exist
    results[rowCount].push(currentCell.trim());         // Add the current cell to the row
    currentCell = "";
   
    if (char === "\n") {
      rowCount++; // Move to the next row
    }
    if (rowCount === 1 && results[0].length > columnCount) {
      columnCount = results[0].length;                     // Set the column count based on the header row
    }
  } else {
    currentCell += char;               // Add the character to the current cell
  }
}
console.log("Parsed CSV Data as a 2D array:", results);


  

 //============Part 3: Transforming Data =================

let parsedCSV = [

  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"],
];

let headers = parsedCSV[0]; // Extract the headers
let transformedData = [];

for (let i = 1; i < parsedCSV.length; i++) {
  let row = parsedCSV[i];
  let obj = {};

  for (let j = 0; j < row.length; j++) {
    obj[headers[j].toLowerCase()] = row[j]; // Map headers to values
  }

  transformedData.push(obj);
}

console.log("Transformed Data:", transformedData);


//========================  Part 4: Sorting and Manipulating Data =======================


transformedData.pop();    //Removes last element from the sorted array.



transformedData.splice(1,0, {id: "48", name: "Barry", occupation: "Runner", age: "25" }); // inserts oject at index 1


transformedData.push({id: "7", name: "Bilbo", occupation: "None", age: "111" }); // object added to  end of the array:

console.log(transformedData);

  


let ageTotal= 0


for (let i= 0; i< transformedData.length; i++) {

  ageTotal += parseInt(transformedData[0].ageTotal); 
}
  let averageAge = ageTotal / transformedData.length;
console.log("Average Age:", averageAge);





//=============== Part 5: Full Circle=======================


let transformedData2 = [

      { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
      { id: "48", name: "Barry", occupation: "Runner", age: "25" },
      { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
      { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
      { id: "7", name: "Bilbo", occupation: "None", age: "111" }
       
    ];
    let headers2 = Object.keys(transformedData2[0]).join(",");
    let csvRows = [headers2];

for (let i = 0; i < transformedData2.length; i++) {
  let row = Object.values(transformedData2[i]).join(",");
   csvRows.push(row);
}
let csvString = csvRows.join("\n");
console.log("CSV String:\n" + csvString);

 
    
















