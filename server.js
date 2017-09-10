var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles={
 'articleOne':{
        title:'Article-one | MB',
        heading:'Article one',
        date:'Sep,5,2016',
        content:`
         <p>
               This is my article one. This is my article one This is my article one This is my article one This is my article one
             </p>
             
              <p>
           
               This is my article one. This is my article one This is my article one This is my article one This is my article one This is my article one This is my article one This is my article one This is my article one This is my article one
        
             </p>`
        
},


 'articleTwo':{
    title:'Article-two | MB',
    heading:'Article two',
      date:'Sep,20,2016',
    content:`<p>
  
           This is my article two. 
         </p>
         
          <p>
       
           This is my article two. 
    
         </p>`
    
},
       
   'articleThree':{
    title:'Article-three | MB',
    heading:'Article three',
      date:'Sep,2,2016',
    content:`
    <p>
           This is my article three.            This is my article three.  
           This is my article three.  
           This is my article three.  
           This is my article three.  
 
   </p>`
         
         }};
    
    




function createTemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var htmlTemplate=`
            <!doctype html>
        <head>
            <title> 
            
            ${title}
            
            </title>
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        
                <link href="/ui/style.css" rel="stylesheet" />
    
        
    </head>
      <body>
       <div class="container">
            <div>
            <a href="/">HOME</a>
          </div>
          <hr/>
          <h3>${heading}</h3>
          <div>${date}</div>
         <div>
              ${content}
       </div> 
      </div> 
    </body>    
        
    </html>
    `;
    
    return htmlTemplate;
}


app.get('/:articleName',function (req,res){
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
/*
app.get('/article-one',function (req,res){
   
  res.send(createTemplate(articleOne))});
  
  app.get('/article-two',function (req,res){
   
  res.send(createTemplate(articleTwo))});

app.get('/article-three',function (req,res){
   
  res.send(createTemplate(articleThree))});
*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var counter=0;
app.get("/counter",function(req,res){
    
    counter=counter+1;
    res.send(counter.toString());
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

