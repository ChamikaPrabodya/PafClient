<%@page import="com.Product"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Product Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="CSS/style.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/products.js"></script>
</head>
<body>

<jsp:include page="header.jsp"/>
<br>

<div class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
        <div class="col-10 col-md-8 col-lg-6">


<h1>Product Management </h1>
<div class="card">
<br>
<form id="formProduct" name="formProduct">
 Product Name:
 <input id="productName" name="productName" type="text"
 class="form-control form-control-sm">
 <br> Product Category:
 <input id="proCategory" name="proCategory" type="text"
 class="form-control form-control-sm">
 <br> Product Description:
 <input id="proDesc" name="proDesc" type="text"
 class="form-control form-control-sm">
 <br> Product Price:
 <input id="proPrice" name="proPrice" type="text"
 class="form-control form-control-sm">
 <br>
 <input id="btnSave" name="btnSave" type="button" value="Save"
 class="btn btn-primary">
 <input type="hidden" id="hidProductIDSave"
 name="hidProductIDSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divProductsGrid">
 <%
 Product productObj = new Product();
 out.print(productObj.readProducts());
 %>
</div>
</div> </div> </div>
</div>
<br>
<br>
<footer class="bg-light text-center text-lg-start">
  <!-- Copyright -->
  <div class="text-center p-3" style="background-color:gray;">
    © PAF Project:
    <a class="text-white" href="https://mdbootstrap.com/">Chamika Prabodya</a>
  </div>
  <!-- Copyright -->
</footer>


</body>
</html>