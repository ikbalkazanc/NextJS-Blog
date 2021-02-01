## Next.js Basic Modular Blog Page
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
