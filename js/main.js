function wipe_out(data) {}

function main_logic() {
  var a = 'a',
    z = 'z';
  var alphabet = [];
  var existingNames = [];
  for (var i = a.charCodeAt(0); i <= z.charCodeAt(0); i++) {
    alphabet.push(String.fromCharCode(i));
  }
  generate(existingNames, alphabet);
  //wipe_out(existingNames);
}

function generate(existingNames, alphabet) {
  var elem = document.getElementById("robotName");
  var table = document.getElementById("name-list");
  var new_entry = '';
  for (var j = 0; j < 2; j++) {
    new_entry += alphabet[
      Math.floor(Math.random() * alphabet.length)
    ].toUpperCase();
  }
  if (existingNames.length === 0) {
  	
    existingNames.push(new_entry += Math.floor(Math.random() * 200 + 500 - 10));
  } else if (existingNames.includes(new_entry)) {
    main_logic();
  } else {
    existingNames.push(new_entry += Math.floor(Math.random() * 200 + 500 - 10));
  }
  var new_tableRow = document.createElement("TR");
  var new_tableData= document.createElement("TD");
  elem.innerHTML = "Your robot name: " + new_entry;
  var textNode = document.createTextNode(new_entry);
  table.appendChild(new_tableRow);
  new_tableRow.appendChild(new_tableData);
  new_tableData.appendChild(textNode);
  console.log('gen ', existingNames);
}