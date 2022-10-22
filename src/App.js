import { useState } from 'react';
import './App.css';
import { Pg1 } from './forms/pg1.form';
import { Pg2 } from './forms/pg2.form';
import { Pg3 } from './forms/pg3.form';

function App() {
  const [page, setPage] = useState(1)
  return (
    <form action='slax.php' className='ii'>
      <div className='container mt-4'>
        <center>

          <h2>Make Your Own Resume</h2>
        </center>
        <div className=''>
          {page == 1 ? <Pg1 /> : page == 2 ? <Pg2 /> : page == 3 ? <Pg3 /> : null}
        </div>
        {page > 1 ? <button className='btn btn-light m-2' onClick={() => setPage(page - 1)}>Back</button> : null}
        {page < 3 ? <button className='btn btn-primary m-2' onClick={() => setPage(page + 1)}>Next</button> : page == 3 ? <button type='submit' className='btn btn-success m-2'>submit</button> : null}


      </div >

    </form>
  );
}

export default App;
