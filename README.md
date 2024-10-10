
### live production link
http://85.31.233.92:5003
user details { email: 'minhaj@gmail.com', userName: "minhaj", password: 1234 }

### Important
create .env file and then
copy .env.example code into .env file
or rename .env.example to .env

#### database
database link is included in .env.example so no need to configure local database

### Install Dependency for backend
open your terminal and go to link-sharing-app directory
```
npm install
```
#### Install Dependency for frontend
```
cd frontend && npm install
```
go back to root folder
```
cd ..
``````
and then for server 
set NODE_ENV = production in .env file
server will run frontend from build directory
```
npm start
```
and then for server and frontend togather
```
npm run dev
```

now your server is running at
at
http://localhost:5003

#### if you would like to run frontend dev server then make sure
NODE_ENV = development
and frontend running at
http://localhost:5173

even though frontend running you should visit http://localhost:5003
i have created proxy server for frontend in dev mode since i am using cookie based auth system

### server entry point
you should opend http://localhost:5003 at your browser
because i am using cookie based authentication

admin url is 
http://localhost:5003/admin

#### local database or different database link instruction
if you don't want to use my db link then you are good to go with that.
but you might need admin route link access. if so then you should paste this path after backend base url
like this 
http://localhost:5003/api/user/auth/create-super-user

this will create default superAdmin and permissions
superAdmin user details 
```{ email: 'minhaj@gmail.com', userName: "minhaj", password: 1234 }```
Now you are all seted up.