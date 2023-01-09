let client = [
  {
    invoice_id: "1",
    client_name: "Tannu",
    client_type: "In-state",
    date: "05-11-2019",
    due_date: "12-12-2019",
    total: "$678.00",
    balance: "$678.00",
    status: "Draft",
  },
  {
    invoice_id: "2",
    client_name: "Priyanka",
    client_type: "Out-state",
    date: "05-11-2019",
    due_date: "12-12-2019",
    total: "$678.00",
    balance: "$678.00",
    status: "Paid",
  },
  {
    invoice_id: "3",
    client_name: "Ashu",
    client_type: "Out-state",
    date: "05-11-2019",
    due_date: "12-12-2019",
    total: "$678.00",
    balance: "$678.00",
    status: "Partial-paid",
  },
  {
    invoice_id: "4",
    client_name: "Tarun",
    client_type: "In-state",
    date: "05-11-2019",
    due_date: "12-12-2019",
    total: "$678.00",
    balance: "$678.00",
    status: "Paid",
  },
  {
    invoice_id: "5",
    client_name: "Arun",
    client_type: "Out-state",
    date: "05-11-2019",
    due_date: "12-12-2019",
    total: "$678.00",
    balance: "$678.00",
    status: "Draft",
  },
  {
    invoice_id: "6",
    client_name: "Sumit",
    client_type: "In-state",
    date: "05-11-2019",
    due_date: "12-12-2019",
    total: "$678.00",
    balance: "$678.00",
    status: "Draft",
  },
  {
    invoice_id: "7",
    client_name: "Sonali",
    client_type: "Out-state",
    date: "05-11-2019",
    due_date: "12-12-2019",
    total: "$678.00",
    balance: "$678.00",
    status: "Paid",
  },
  {
    invoice_id: "8",
    client_name: "Varun",
    client_type: "In-state",
    date: "05-11-2019",
    due_date: "12-12-2019",
    total: "$678.00",
    balance: "$678.00",
    status: "Partial-Paid",
  },
  {
    invoice_id: "9",
    client_name: "Anish",
    client_type: "Out-state",
    date: "05-11-2019",
    due_date: "12-12-2019",
    total: "$678.00",
    balance: "$678.00",
    status: "Paid",
  },
  {
    invoice_id: "10",
    client_name: "Manish",
    client_type: "In-state",
    date: "05-11-2019",
    due_date: "12-12-2019",
    total: "$678.00",
    balance: "$678.00",
    status: "Draft",
  },
  {
    invoice_id: "11",
    client_name: "Nikhil",
    client_type: "Out-state",
    date: "05-11-2019",
    due_date: "12-12-2019",
    total: "$678.00",
    balance: "$678.00",
    status: "Paid",
  },
  {
    invoice_id: "12",
    client_name: "Nasseb",
    client_type: "In-state",
    date: "05-11-2019",
    due_date: "12-12-2019",
    total: "$678.00",
    balance: "$678.00",
    status: "Partial-Paid",
  },
  {
    invoice_id: "13",
    client_name: "Ashish",
    client_type: "Out-state",
    date: "05-11-2019",
    due_date: "12-12-2019",
    total: "$678.00",
    balance: "$678.00",
    status: "Draft",
  },
  {
    invoice_id: "14",
    client_name: "Komal",
    client_type: "In-state",
    date: "05-11-2019",
    due_date: "12-12-2019",
    total: "$678.00",
    balance: "$678.00",
    status: "Paid",
  },
  {
    invoice_id: "15",
    client_name: "Kavya",
    client_type: "Out-state",
    date: "05-11-2019",
    due_date: "12-12-2019",
    total: "$678.00",
    balance: "$678.00",
    status: "Draft",
  },
];

// sorting

$("th").on("click", function () {
  let column = $(this).data("column");
  let order = $(this).data("order");
  let text = $(this).html();
  text = text.substring(0, text.length - 1);

  if (order == "desc") {
    $(this).data("order", "asc");
    client = client.sort((a, b) => (a[column] > b[column] ? 1 : -1));
    text += "&#9660";
  } else {
    $(this).data("order", "desc");
    client = client.sort((a, b) => (a[column] < b[column] ? 1 : -1));
    text += "&#9650";
  }
  $(this).html(text);
  build_table(client);
});

// list function
function myFunction() {
  var input, filter, table, tr, td, i, j;
  input = document.getElementById("mylist");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//creating table from Array
build_table(client);

function build_table(data) {
  table = document.getElementById("mytable");
  table.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
             <td id='td'>${data[i].invoice_id}</td>
             <td id='t'>${data[i].client_name}</td>
             <td id='t'>${data[i].client_type}</td>
             <td id='d'>${data[i].date}</td>
             <td id='d'>${data[i].due_date}</td>
             <td id='d1'>${data[i].total}</td>
             <td id='d1'>${data[i].balance}</td>
             <td id='d2'>${data[i].status}</td>
        </tr>`;
    table.innerHTML += row;
  }
}
