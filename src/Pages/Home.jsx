import './Home.css'
import AllPosts from './AllPosts';

function Home() {
  return (
    <div className='Home-main'>
      <h1>Welcome to the Forum!</h1>
      <h4>Please select a topic you like in the <br/> <b>THREADS</b> section if you want more especific info!</h4>
      <AllPosts />
    </div>
  );
}

export default Home;
