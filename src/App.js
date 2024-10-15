import './App.css';
const Notifications = [
  {
    imageUrl:'https://assets.ccbp.in/frontend/react-js/primary-icon-img.png',
    name: 'Information message'
  },
  {
    imageUrl:'https://assets.ccbp.in/frontend/react-js/success-icon-img.png',
    name: 'Success Message'
  },
  {
    imageUrl:'https://assets.ccbp.in/frontend/react-js/warning-icon-img.png',
    name: 'Warning Message'
  },
  {
    imageUrl:'https://assets.ccbp.in/frontend/react-js/danger-icon-img.png',
    name: 'Error Meesage'
  }
  
];
const App = () => {
  return (
    <div className="App">
        <h1 className="notification">Notifications</h1>
          <li className='Messages'>
          <button className="info"> 
              <div className='img'>
                <img className='image' src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png' alt='card'/>
              </div>
              Information message
          </button>
          
          <button className='Success' >
              <div className='img'>
                <img className='image' src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png' alt='card'/>
                </div>
                Success Message
          </button>
          
          <button className='Warning'>
              <div className='img'>
                <img className='image' src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png' alt='card'/>
              </div>
              Warning Message
          </button>
          
          <button className='Error'>
              <div className='img'>
                <img className='image' src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png' alt='card'/>
              </div>
              Error Meesage
          </button>
          </li>
        </div>
  );
}

export default App;

