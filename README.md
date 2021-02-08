<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

## Next.js Basic Modular Blog Page
<div align="center">
<img src="https://raw.githubusercontent.com/ikbalkazanc/NextJS-Blog/master/public/demo.png" alt="Logo" width="80%" >
 </div>
 <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
### Getting started
First of all, clone project files to your computer. 
```
git clone https://github.com/ikbalkazanc/NextJS-Blog.git
```
And you have to include required node modules. 
```
npm init
npm install
```
Then you have to install fake json server for database.
```
npm install -g json-server
```
### Run the development server
Following commands should be executed in different terminals respectively.
##### Note: You have to in project file directory for json command
```
npm run  dev
json-server --watch db.json --port 3001
```
