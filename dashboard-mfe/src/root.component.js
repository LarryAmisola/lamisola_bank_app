import Parcel from 'single-spa-react/parcel';

export default function Root(props) {
  return (
    <>
      <Parcel 
        config = {() => System.import("@lamisola-banking-group/header-mfe")} 
        wrapWith = "nav"
        wrapClassName = "container-fluid"  
      />

      <main >
      
        <article>
          <h5>Savings Account</h5>
          <div className='grid'>
            <h6>000009189291</h6>
            <div>PHP 569,029.00</div>
          </div>
          <div className='grid'>
            <h6>000009100011</h6>
            <div>PHP 569,029.00</div>
          </div>
        </article>

        <article>
          <h5>Dollars Account</h5>
          <div className='grid'>
            <h6>99999812438</h6>
            <div>USD 569,029.00</div>
          </div>
          <div className='grid'>
            <h6>9999981111</h6>
            <div>USD 250,000.45</div>
          </div>
          <div className='grid'>
            <h6>9999989000</h6>
            <div>USD 50,109.00</div>
          </div>
        </article>

        <article>
          <h5>Dollars Account</h5>
          <div className='grid'>
            <h6>99999812438</h6>
            <div>USD 569,029.00</div>
          </div>
          <div className='grid'>
            <h6>9999981111</h6>
            <div>USD 250,000.45</div>
          </div>
          <div className='grid'>
            <h6>9999989000</h6>
            <div>USD 50,109.00</div>
          </div>
        </article>

        <article>
          <h5>Dollars Account</h5>
          <div className='grid'>
            <h6>99999812438</h6>
            <div>USD 569,029.00</div>
          </div>
          <div className='grid'>
            <h6>9999981111</h6>
            <div>USD 250,000.45</div>
          </div>
          <div className='grid'>
            <h6>9999989000</h6>
            <div>USD 50,109.00</div>
          </div>
        </article>

      </main>
    </>
  );
}
