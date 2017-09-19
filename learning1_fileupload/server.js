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
        password: 'pwpwpw', // update me
        server: 'tut.database.windows.net', // update me
        options:
        {
            database: 'db1' //update me
            , encrypt: true
        }
    }
var connection = new Connection(config);


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
        executeStatement("'gorillabuxll'")
    }
}
);


var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

function executeStatement(str1) {
    //SELECT c.CustomerID, c.CompanyName,COUNT(soh.SalesOrderID) AS OrderCount FROM SalesLT.Customer AS c LEFT OUTER JOIN SalesLT.SalesOrderHeader AS soh ON c.CustomerID = soh.CustomerID GROUP BY c.CustomerID, c.CompanyName ORDER BY OrderCount DESC;
    request = new Request("SELECT uName FROM dbo.Users WHERE uName = " + str1, function (err) {  //this checks for the username 
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
        if (result == "") {
            console.log("didnt find anything");
        }
        console.log(result);
        result = "";
        process.exit();
    });

    request.on('done', function (rowCount, more) {
        console.log(rowCount + ' rows returned');
        console.log("didnt find anything");
        process.exit();
    });

    request.on('returnValue', function (rowCount, more) {
        console.log(rowCount + ' rows returned');
        console.log("didnt find anything");
        process.exit();
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





const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
//video "streaming"
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.htm'))
})

app.get('/video', function (req, res) {
    const path = 'assets/sample.mp4'
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize - 1

        const chunksize = (end - start) + 1
        const file = fs.createReadStream(path, { start, end })
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        }

        res.writeHead(206, head)
        file.pipe(res)
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
    }
})

app.listen(81, function () {
    console.log('Listening on port 81!')
})




'use strict';
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');


var port = process.env.PORT || 81;

http.createServer(function (req, res) {
    if (req.url == '/test') {
        /*        res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
                res.write('<input type="file" name="filetoupload"><br>');
                res.write('<input type="submit">');
                res.write('</form>');
                // res.write('<img src = "animeguylol.JPG" style="width:304px;height:228px;">')*/
        res.write("here is some text");
    } else
        if (req.url == '/fileupload') {
            var form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files) {
                var oldpath = files.filetoupload.path;
                var newpath = 'C:/Users/Admin/' + files.filetoupload.name;
                fs.rename(oldpath, newpath, function (err) {
                    if (err) throw err;
                    res.write('File uploaded and moved!');
                    res.end();
                });
            });
        } else {
            res.write("here is some !!text");
            /*
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
            res.write('<input type="file" name="filetoupload"><br>');
            res.write('<input type="submit">');
            res.write('</form>');
            */
            return res.end();
        }
}).listen(81);


/*nodejs sql queries and idea for app (already have one)
xamarin mobile development
smart contracts , solidity , ether blockchain development
bot programming specifically hacking mem. */







var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

// Create connection to database
var config =
    {
        userName: 'sqladmin', // update me
        password: 'pwpw', // update me
        server: 'tut.database.windows.net', // update me
        options:
        {
            database: 'db1' //update me
            , encrypt: true
        }
    }
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
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










var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = q.pathname;
    //./ddd&something=val1&some2=val2
    console.log(filename);

    var tokens = filename.split("&");
    console.log(tokens);
    //ddd, username=val1, pw=val2
    var uName = tokens[1].split("username=");
    var pW = tokens[2].split("pw=");
    var pwFinal = pW[1];
    var uNameFinal = uName[1];

    console.log(uNameFinal);
    console.log(pwFinal);

    var s = lookupUser(uNameFinal);

    console.log(s.toString() + "ourvalue");

    res.write(uNameFinal);
    res.write(pwFinal);
    if (filename.search("ddd") > 0) {
        /*        res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
                res.write('<input type="file" name="filetoupload"><br>');
                res.write('<input type="submit">');
                res.write('</form>');
                // res.write('<img src = "animeguylol.JPG" style="width:304px;height:228px;">')*/
        res.write("here is some text");
        res.end();
    }

    fs.writeFile('mynewfile3.txt', filename, function (err) {
        if (err) throw err;

    });


    /*
     fs.readFile(filename, function(err, data) {
       if (err) {
         res.writeHead(404, {'Content-Type': 'text/html'});
         return res.end("404 Not Found");
       }  
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.write(data);
       return res.end();
     });
     */

}).listen(81);




//gets info on ther user and returns a code 
//if the username provided does not exist in this file then they do not exist so they have to register 
//if they do exist then either: they cannot use that name to register 
// 			OR
//they are trying to log in. 
var lookup_global = 0;

function lookupReturn(param1) {

}


function lookupUser(usernameA) {

    fs.readFile('demo.txt', function (err, data) {
        if (data.toString().search(usernameA) > 0) { //user exists!
            console.log("make the pussy pop"); //this is not nesessary 
            lookup_global = 1;
        } else { //username does not exist on file so write it up!
            fs.appendFile('demo.txt', usernameA, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
            lookup_global = 2;
        }
        lookup_global = -1;
    });
    return lookup_global;
}




