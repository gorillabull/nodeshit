var http = require('http');
var url = require('url');
var fs = require('fs');


const express = require('express')

const path = require('path')
const app = express()


var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

/*
Create Connection
*/
var config =
    {
        userName: 'sqladmin', // update me
        password: 'passwordlol', // update me
        server: 'tut.database.windows.net', // update me
        options:
        {
            database: 'db1' //update me
            , encrypt: true
        }
    }
var connection = new Connection(config);



fs.readFile('demo.txt', function (err, data) {
    if (data.search("gorilla") > 0) {
        console.log("make the pussy pop");
        res.write(uName);
        res.write(pw);

    }
});


/*
Create Server

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    var url = req.url;





    fs.writeFile('mynewfile3.txt', filename, function(err) {
        if (err) throw err;

    });


    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(81);



/*
 Attempt to connect and execute queries if connection goes through
*/
connection.on('connect', function (err) {
    if (err) {
        console.log(err)
    }
    else {
        executeStatement()
    }
}
);


var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

function executeStatement() {
    //SELECT c.CustomerID, c.CompanyName,COUNT(soh.SalesOrderID) AS OrderCount FROM SalesLT.Customer AS c LEFT OUTER JOIN SalesLT.SalesOrderHeader AS soh ON c.CustomerID = soh.CustomerID GROUP BY c.CustomerID, c.CompanyName ORDER BY OrderCount DESC;
    request = new Request("SELECT uName FROM dbo.Users WHERE uName = 'gorillabull' ", function (err) {  //this checks for the username 
        if (err) {
            console.log(err);
        }
    });
    
    
    var result = "";
    request.on('row', function (columns) {
        columns.forEach(function (column) {
            if (column.value === null) {
                console.log('NULL');
            } else {
                result += column.value + " ";
            }
        });
        console.log(result);
        result = "";
    });
            
    request.on('done', function (rowCount, more) {
        console.log(rowCount + ' rows returned');
        
    });
    connection.execSql(request);
    
    
    
}



function insert() {
    //INSERT SalesLT.Product (Name, ProductNumber, StandardCost, ListPrice, SellStartDate) OUTPUT INSERTED.ProductID VALUES (@Name, @Number, @Cost, @Price, CURRENT_TIMESTAMP);
    request = new Request("INSERT dbo.Users (uName, pwdHash, email) VALUES ('gorillabull', 'gorillabull123' , 'emailatgmaildotcom') ;", function (err) {
        if (err) {
            console.log(err);
        }
    });
    /*
            request.addParameter('Name', TYPES.NVarChar,'SQL Server Express 2014');  
            request.addParameter('Number', TYPES.NVarChar , 'SQLEXPRESS2014');  
            request.addParameter('Cost', TYPES.Int, 11);  
            request.addParameter('Price', TYPES.Int,11);  
            */

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            if (column.value === null) {
                console.log('NULL');
            } else {
                console.log("Product id of inserted item is " + column.value);
            }
        });
    });
    connection.execSql(request);
}



function queryDatabase() {
    console.log('Reading rows from the Table...');

    // Read all rows from table
    request = new Request(
        "SELECT TOP 20 pc.Name as CategoryName, p.name as ProductName FROM [SalesLT].[ProductCategory] pc JOIN [SalesLT].[Product] p ON pc.productcategoryid = p.productcategoryid",
        function (err, rowCount, rows) {
            console.log(rowCount + ' row(s) returned');
            process.exit();
        }
    );

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);
}





/*
Listen
*/

