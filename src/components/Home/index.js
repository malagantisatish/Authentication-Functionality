// Write your JS code here
import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import About from '../About'

const Home = () => (
  <div className="bg-container">
    <Header />
    <div>
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default Home
