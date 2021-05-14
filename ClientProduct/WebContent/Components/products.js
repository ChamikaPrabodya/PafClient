$(document).ready(function()
{ 
	if ($("#alertSuccess").text().trim() == "") 
 	{ 
 	$("#alertSuccess").hide(); 
 	} 
 	$("#alertError").hide(); 
});

 // SAVE ============================================
$(document).on("click", "#btnSave", function(event) 
{ 
	// Clear alerts---------------------
 	$("#alertSuccess").text(""); 
 	$("#alertSuccess").hide(); 
 	$("#alertError").text(""); 
 	$("#alertError").hide(); 
	// Form validation-------------------
	var status = validateProductForm(); 
	if (status != true) 
 	{ 
 		$("#alertError").text(status); 
 		$("#alertError").show(); 
 		return; 
	} 
	// If valid------------------------
 		var type = ($("#hidProductIDSave").val() == "") ? "POST" : "PUT"; 
 		
 		$.ajax( 
 	{ 
 		url : "ProductsAPI", 
	 	type : type, 
 		data : $("#formProduct").serialize(), 
 		dataType : "text", 
 		complete : function(response, status) 
 	{ 
 	onProductSaveComplete(response.responseText, status); 
 	} 
 	});
});

// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
{ 
 	$("#hidProductIDSave").val($(this).data("productid")); 
 	$("#productName").val($(this).closest("tr").find('td:eq(0)').text()); 
	$("#proCategory").val($(this).closest("tr").find('td:eq(1)').text()); 
 	$("#proDesc").val($(this).closest("tr").find('td:eq(2)').text()); 
 	$("#proPrice").val($(this).closest("tr").find('td:eq(3)').text()); 
});

// DELETE=====================================================
$(document).on("click", ".btnRemove", function(event)
{ 
 $.ajax( 
 { 
 url : "ProductsAPI", 
 type : "DELETE", 
 data : "productID=" + $(this).data("productid"),
 dataType : "text", 
 complete : function(response, status) 
 { 
 onProductDeleteComplete(response.responseText, status); 
 } 
 }); 
});


// CLIENT-MODEL================================================================
function validateProductForm() 
{ 
	// name
	if ($("#productName").val().trim() == "") 
 	{ 
 		return "Insert Product Name."; 
 	} 
	// category
	if ($("#proCategory").val().trim() == "") 
 	{ 
 		return "Insert Product Category."; 
 	}
 	// DESCRIPTION------------------------
	if ($("#proDesc").val().trim() == "") 
 	{ 
 		return "Insert Product Description."; 
 	} 
	// PRICE-------------------------------
	if ($("#proPrice").val().trim() == "") 
 	{ 
 		return "Insert Product Price."; 
 	} 
	// is numerical value
	var tmpPrice = $("#proPrice").val().trim(); 
	if (!$.isNumeric(tmpPrice)) 
 	{ 
 		return "Insert a numerical value for Product Price."; 
 	} 
	// convert to decimal price
 	$("#proPrice").val(parseFloat(tmpPrice).toFixed(2)); 
return true; 
}

// Function on products==========
function onProductSaveComplete(response, status)
{ 
	if (status == "success") 
 	{ 
 		var resultSet = JSON.parse(response); 
 		if (resultSet.status.trim() == "success") 
 		{ 
 			$("#alertSuccess").text("Successfully saved."); 
 			$("#alertSuccess").show(); 
 			$("#divProductsGrid").html(resultSet.data); 
 		} else if (resultSet.status.trim() == "error") 
 		{ 
 			$("#alertError").text(resultSet.data); 
 			$("#alertError").show(); 
 		} 
 	}else if (status == "error") 
 	{ 
 			$("#alertError").text("Error while saving."); 
 			$("#alertError").show(); 
 		} else
 		{ 
 			$("#alertError").text("Unknown error while saving.."); 
 			$("#alertError").show(); 
 		}
 		
 		
 		$("#hidProductIDSave").val(""); 
 		$("#formProduct")[0].reset(); 
}

// function products Delete====================

function onProductDeleteComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divProductsGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 } 
}




