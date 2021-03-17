import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>Page Not Found</h1>
      <p>The page you're trying to find isn't here. Would you like to return to the <Link to='/'>dashboard</Link>?</p>
    </div>
  );
}

export default NotFound;