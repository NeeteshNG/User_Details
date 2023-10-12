import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Directory from './Components/Directory';
import Home from './Components/Home';
import UserDetails from './Components/User';
import LoginPage from './Components/LoginPage';
import { useState } from 'react';

const data = [
  {
    "id": 1,
    "name": "Neetesh Gupta",
    "address": "Ashoknagar",
    "phone": "+91-7000835163",
    "username": "Neetesh",
    "password": "neetesh@123",
    "posts": [
      {"id" : 1, "content" : "A Content 1", "url" : "https://picsum.photos/200/300"},
      {"id" : 2, "content" : "A Content 2", "url" : "https://picsum.photos/200/300"},
      {"id" : 3, "content" : "A Content 3", "url" : "https://picsum.photos/200/300"},
      {"id" : 4, "content" : "A Content 4", "url" : "https://picsum.photos/200/300"},
      {"id" : 5, "content" : "A Content 5", "url" : "https://picsum.photos/200/300"}
    ]
  },
  {
    "id": 2,
    "name": "Shri Yadav",
    "address": "Banglore",
    "phone": "+91-9815421421",
    "username": "Shri",
    "password": "shri@123",
    "posts": [
      {"id" : 1, "content" : "A Content 1", "url" : "https://picsum.photos/200"},
      {"id" : 2, "content" : "A Content 2", "url" : "https://picsum.photos/200"},
      {"id" : 3, "content" : "A Content 3", "url" : "https://picsum.photos/200"},
      {"id" : 4, "content" : "A Content 4", "url" : "https://picsum.photos/200"},
      {"id" : 5, "content" : "A Content 5", "url" : "https://picsum.photos/200"},
      {"id" : 6, "content" : "A Content 6", "url" : "https://picsum.photos/200"},
      {"id" : 7, "content" : "A Content 7", "url" : "https://picsum.photos/200"},
      {"id" : 8, "content" : "A Content 8", "url" : "https://picsum.photos/200"},
      {"id" : 9, "content" : "A Content 9", "url" : "https://picsum.photos/200"},
      {"id" : 10, "content" : "A Content 10", "url" : "https://picsum.photos/200"}
    ]
  },
  {
    "id": 3,
    "name": "Rahul Khanna",
    "address": "Mumbai",
    "phone": "+91-8741216598",
    "username": "Rahul",
    "password": "rahul@123",
    "posts": [
      {"id" : 1, "content" : "A Content 1", "url" : "https://source.unsplash.com/random/200x200?sig=1"},
      {"id" : 2, "content" : "A Content 2", "url" : "https://source.unsplash.com/random/200x200?sig=1"},
      {"id" : 3, "content" : "A Content 3", "url" : "https://source.unsplash.com/random/200x200?sig=1"},
      {"id" : 4, "content" : "A Content 4", "url" : "https://source.unsplash.com/random/200x200?sig=1"},
      {"id" : 5, "content" : "A Content 5", "url" : "https://source.unsplash.com/random/200x200?sig=1"},
      {"id" : 6, "content" : "A Content 6", "url" : "https://source.unsplash.com/random/200x200?sig=1"}
    ]
  },
  {
    "id": 4,
    "name": "Rohit Mishra",
    "address": "Bhopal",
    "phone": "+91-9875110647",
    "username": "Rohit",
    "password": "rohit@123",
    "posts": [
      {"id" : 1, "content" : "A Content 1", "url" : "https://loremflickr.com/320/240"},
      {"id" : 2, "content" : "A Content 2", "url" : "https://loremflickr.com/320/240"},
      {"id" : 3, "content" : "A Content 3", "url" : "https://loremflickr.com/320/240"},
      {"id" : 4, "content" : "A Content 4", "url" : "https://loremflickr.com/320/240"},
      {"id" : 5, "content" : "A Content 5", "url" : "https://loremflickr.com/320/240"},
      {"id" : 6, "content" : "A Content 6", "url" : "https://loremflickr.com/320/240"},
      {"id" : 7, "content" : "A Content 7", "url" : "https://loremflickr.com/320/240"},
      {"id" : 8, "content" : "A Content 8", "url" : "https://loremflickr.com/320/240"}
    ]
  },
  {
    "id": 5,
    "name": "Deepak Sahu",
    "address": "Ujjain",
    "phone": "+91-9874556252",
    "username": "Deepak",
    "password": "deepak@123",
    "posts": [
      {"id" : 1, "content" : "A Content 1", "url" : "https://loremflickr.com/320/240"},
      {"id" : 2, "content" : "A Content 2", "url" : "https://loremflickr.com/320/240"},
      {"id" : 3, "content" : "A Content 3", "url" : "https://loremflickr.com/320/240"},
      {"id" : 4, "content" : "A Content 4", "url" : "https://loremflickr.com/320/240"},
      {"id" : 5, "content" : "A Content 5", "url" : "https://loremflickr.com/320/240"},
      {"id" : 6, "content" : "A Content 6", "url" : "https://loremflickr.com/320/240"},
      {"id" : 7, "content" : "A Content 7", "url" : "https://loremflickr.com/320/240"},
      {"id" : 8, "content" : "A Content 8", "url" : "https://loremflickr.com/320/240"},
      {"id" : 9, "content" : "A Content 9", "url" : "https://loremflickr.com/320/240"}
    ]
  },
  {
    "id": 6,
    "name": "Deepti Vishw",
    "address": "Shimla",
    "phone": "+91-9787254544",
    "username": "Deepti",
    "password": "deepti@123",
    "posts": [
      {"id" : 1, "content" : "A Content 1", "url" : "https://loremflickr.com/320/240"},
      {"id" : 2, "content" : "A Content 2", "url" : "https://loremflickr.com/320/240"},
      {"id" : 3, "content" : "A Content 3", "url" : "https://loremflickr.com/320/240"},
      {"id" : 4, "content" : "A Content 4", "url" : "https://loremflickr.com/320/240"},
      {"id" : 5, "content" : "A Content 5", "url" : "https://loremflickr.com/320/240"},
      {"id" : 6, "content" : "A Content 6", "url" : "https://loremflickr.com/320/240"},
      {"id" : 7, "content" : "A Content 7", "url" : "https://loremflickr.com/320/240"}
    ]
  },
  {
    "id": 7,
    "name": "Shruti Chouhan",
    "address": "Kashmir",
    "phone": "+91-9754627546",
    "username": "Shruti",
    "password": "shruti@123",
    "posts": [
      {"id" : 1, "content" : "A Content 1", "url" : "https://loremflickr.com/320/240"},
      {"id" : 2, "content" : "A Content 2", "url" : "https://loremflickr.com/320/240"},
      {"id" : 3, "content" : "A Content 3", "url" : "https://loremflickr.com/320/240"},
      {"id" : 4, "content" : "A Content 4", "url" : "https://loremflickr.com/320/240"}
    ]
  },
  {
    "id": 8,
    "name": "Kapil Bhati",
    "address": "Kota",
    "phone": "+91-9724254211",
    "username": "Kapil",
    "password": "kapil@123",
    "posts": [
      {"id" : 1, "content" : "A Content 1", "url" : "https://loremflickr.com/320/240"},
      {"id" : 2, "content" : "A Content 2", "url" : "https://loremflickr.com/320/240"}
    ]
  },
  {
    "id": 9,
    "name": "Piyush Sharma",
    "address": "Indore",
    "phone": "+91-8925484132",
    "username": "Piyush",
    "password": "piyush@123",
    "posts": [
      {"id" : 1, "content" : "A Content 1", "url" : "https://loremflickr.com/320/240"}
    ]
  }
]

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          loggedIn={loggedIn} 
          setLoggedIn={setLoggedIn} 
        />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/directory' element={<Directory data={data}/>}></Route>
          <Route path='/userdetails/:id' element={<UserDetails data={data}/>}></Route>
          <Route 
            path='/loginpage' 
            element={<LoginPage 
                        loggedIn={loggedIn} 
                        setLoggedIn={setLoggedIn} 
                        data={data}/>}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
