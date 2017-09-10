var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var articleOne={
        title:'Infosys  ',
        heading:'Infosys Training',
        date:'Sep,5,2016',
        content:`
         <p>
              Infosys Training
: All infosys employees are officially called as Infoscions
: Everybody who gets a call from Infosys needs to go for a trainng in Mysore.

Training : The schedule is different for CS and NON CS backgrounds . This is also the reason why generally CS and NON CS people get their joining on different dates generally.
As per the latest schedule the duration for CS people is around 4 to 4.5 months and for NON CS from 5.5 to 6 months

The training is divided into 3 modules : basic , intermediate and stream . The whole training is classroom . Every module consists of various topics . The whole training schedule is filled with assessments . On average every topic is 4 to 5 days . The is a topic test the next day the topic is finished . There is a comprehensive test for every module at the end consisting of all he topics

Accommodation : THe rooms are amazing . Every room has a television
And attached toilet . Boys get LCD televisions where as girls get normal CRT .. Every day room cleaning services clean you rooms . There is a kettle in everyones room and complementary tea and coffee throughout the period of the training . Girls generally get double accommodation . Boys get single room accommodation . Obviously charges for double accommodation is less than the double accommodation so boys have to pay more . Everybody gets a cup board , study , single couch and table along with a bed :) . The rooms are air conditioned . However the weather is already very good here so ac not an exciting feature .

Facilities : INfosys gives you a lot of work but wants you to enjoy world class facilities as well . There is tennis , pingpong , swimming , bowling , squash , badminton and other common sports facilities available . Besides this there is a free MULTIPLEX in the campus itself where they play all the latest Hindi movies for free . The play English movies as well but they are not the latest ones . For all these facilities infosys charges you around 500 bucks a month .
For readers the library is huge as well and I am sure you can get any book of your interest .
For foodies here is Dominoes and Cafe COffee day in the campus . They offer all the stuff at cheaper price compared to what you get otherwise .
Besides this there are 17 other caterers now they don't offer the tastiest food in he world but it is very hygienic and freshly made . There is something for every body .

Campus : The overall campus is amazing . One does not feel like in India in the campus . So everybody will certainly living here as it is highly maintained and infosys certainly has spend and is constantly spending a lot in runnin the campus .

Training over all : there is no second thoughts to second the opinion that the infy training is the best . They really grill you a lot with a lot of work in the least amount of time . You might have to work more than 10 hours on a fewdays if here's a test or heavy assignmen day .  Besides this the trainers are also very good and use various innovative skills to provide accurate coaching .

Important . How much money do they give during training :
Anywhere from 13 to 14 k after deduction of room rent and facilities . So this money is for you to buy you food for the month (not more than 3 k a month) and shopping/savings.

Other stuff :
:there is laundry service all over the campus where on paying 30 rupees per wash one can wash and dry their clothes .
: laptops are not allowed how ever one can bring music players and iPods . But please be care ful as any sort of sharing of infosys data can cost you your job .
: there are bycycles as the campus is pretty huge and one needs something to travel . They are available to everyone .    
Posted 31st October 2010 by Sourabh
             </p>`
        
};


var articleTwo={
    title:'Article-two | MB',
    heading:'Article two',
      date:'Sep,20,2016',
    content:`<p>
  
           This is my article two. 
         </p>
         
          <p>
       
           This is my article two. 
    
         </p>`
    
};
       
  var articleThree={
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
         
         };
    
    




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

/*
app.get('/:articleName',function (req,res){
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
*/
app.get('/article-one',function (req,res){
   
  res.send(createTemplate(articleOne))});
  
  app.get('/article-two',function (req,res){
   
  res.send(createTemplate(articleTwo))});

app.get('/article-three',function (req,res){
   
  res.send(createTemplate(articleThree))});


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

