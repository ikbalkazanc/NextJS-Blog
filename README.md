<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

## Next.js Basic Modular Blog Page
<div align="center">
<img src="https://raw.githubusercontent.com/ikbalkazanc/NextJS-Blog/master/public/demo.png" alt="Logo" width="80%" >
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
