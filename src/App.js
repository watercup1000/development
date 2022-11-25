import './App.css';
import FilteredList from './FilteredList.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const productList = [
    {name: "Sprite" , type: "Soda", price: 1, img: "https://m.media-amazon.com/images/I/61nzV9fQ5bL.jpg"},
    {name: "Coke" , type: "Soda", price: 1, img: "https://images.heb.com/is/image/HEBGrocery/000862949?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0"},
    {name: "Ginger Ale" , type: "Soda", price: 1, img:"https://m.media-amazon.com/images/I/718mTGxe8dL.jpg"},
    {name: "Orange Soda" , type: "Soda", price: 1, img:"https://images.heb.com/is/image/HEBGrocery/001556394?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0"},
    {name: "Coffee" , type: "Hot", price: 3, img: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg"},
    {name: "Tea" , type: "Hot", price: 3, img: "https://www.foodandwine.com/thmb/6wTm7a0y87X97LK-ZMxe2787kI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/different-types-of-tea-FT-BLOG0621-7c7fd231e66d4fea8ca9a47cad52ba79.jpg"},
    {name: "Green Tea" , type: "Hot", price: 3, img: "https://assets.epicurious.com/photos/5887d21b5f76684c78cf57db/16:9/w_2560%2Cc_limit/green_tea_24012017.jpg"},
    {name: "Hot Cocoa" , type: "Hot", price: 3, img: "https://www.willcookforsmiles.com/wp-content/uploads/2019/11/Hot-Chocolate-5-1.jpg"},
    {name: "Bud Light" , type: "Beer", price: 4, img: "https://www.budlight.com/img/BL_Core_Can.png"},
    {name: "Corona" , type: "Beer", price: 4, img: "https://products3.imgix.drizly.com/ci-corona-extra-22d971897e230884.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20"},
    {name: "Modelo" , type: "Beer", price: 4, img: "https://dydza6t6xitx6.cloudfront.net/ci-modelo-especial-440cbc07250fd500.jpeg"},
    {name: "Guinness" , type: "Beer", price: 4, img: "https://m.media-amazon.com/images/I/41F5BaobF8L._AC_SY580_.jpg"},
  ]

  return (
    <div className="App">
      <FilteredList list={productList} />
    </div>
  );
}

export default App;


//TODO:
//ADD an aggregrator section. This could mean adding a cart that keeps track of the total price in the cart