


SELECT pp.[ProductID], pp.[Name], pp.[ListPrice], pp.[Color], pps.[Name] AS SubCategoryName, ppc.[Name] AS CategoryName
INTO Dim_Product
FROM AdventureWorks2017.Production.Product pp
INNER JOIN AdventureWorks2017.Production.ProductSubcategory pps
ON pp.[ProductSubcategoryID] = pps.[ProductSubcategoryID]
INNER JOIN AdventureWorks2017.Production.ProductCategory ppc
ON pps.[ProductCategoryID] = ppc.[ProductCategoryID];

SELECT sc.[CustomerID], pp.[FirstName], pp.[LastName], st.[Name], st.[CountryRegionCode], st.[Group]
INTO Dim_Customer
FROM AdventureWorks2017.Person.Person pp
INNER JOIN AdventureWorks2017.Sales.Customer sc
ON sc.[CustomerID] = pp.[BusinessEntityID]
INNER JOIN AdventureWorks2017.Sales.SalesTerritory st
ON sc.[TerritoryID] = st.[TerritoryID];

SELECT ssod.[ProductID], ssoh.[CustomerID], ssoh.[OrderDate], ssoh.[ShipDate], ssod.[OrderQty], ssod.[UnitPrice], ssod.[UnitPriceDiscount], ssod.[LineTotal]
INTO Fact_Orders
FROM AdventureWorks2017.Sales.SalesOrderDetail ssod
INNER JOIN AdventureWorks2017.Sales.SalesOrderHeader ssoh
ON ssod.[SalesOrderID] = ssoh.[SalesOrderID

ALTER TABLE Dim_Customer
ADD CONSTRAINT pk_dim_cu
PRIMARY KEY (CustomerID);

ALTER TABLE Dim_Product
ADD CONSTRAINT pk_dim_pr
PRIMARY KEY (ProductID);


ALTER TABLE Fact_Orders
ADD CONSTRAINT fk_fac_cu
FOREIGN KEY (CustomerID) REFERENCES Dim_Customer(CustomerID);

ALTER TABLE Fact_Orders
ADD CONSTRAINT fk_fac_pr
FOREIGN KEY (ProductID) REFERENCES Dim_Product(ProductID);

CREATE TABLE dbo.Dim_Customer(
  CustomerID int CONSTRAINT pk_dim_cu PRIMARY KEY,
  FirstName varchar(255) NOT NULL,
  LastName varchar(255) NOT NULL,
  TerritoryName varchar(255) NOT NULL,
  CountryRegionCode varchar(3) NOT NULL,
  Group varchar(255) NOT NULL);

CREATE TABLE dbo.Dim_Product(
  ProductID int CONSTRAINT pk_dim_pr PRIMARY KEY,
  Name varchar(255) NOT NULL,
  ListPrice real NOT NULL,
  Color varchar(255) NULL,
  SubCategoryName varchar(255) NULL,
  CategoryName varchar(255) NULL);

CREATE TABLE dbo.Fact_Orders(
  ProductID int NOT NULL CONSTRAINT fact_fk_product REFERENCES DIM_PRODUCT(productId),
  CustomerID int NULL CONSTRAINT fact_fk_customer REFERENCES DIM_CUSTOMER(customerID),
  OrderDate date NULL,
  ShipDate date NULL,
  OrderQty int NOT NULL,
  UnitPrice real NOT NULL,
  UnitPriceDiscount real NOT NULL,
  LineTotal numeric(38, 6) NOT NULL);
