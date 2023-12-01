
function Title() {
    return (
        <div className="container text-center" style={{ backgroundColor: '#BBDEFB' }}>
        <div className="row">
          <div className="col">
          </div>
          <div className="col-10" >
            <h1>
              CS 452: VIRTUAL REALITY- Cooking Game
            </h1>
            <h4>
              By Cody, Chase, Azka, Loc
            </h4>
            <div className = 'links' style = {{display: 'flex', justifyContent: "space-between", marginLeft: '32%', marginRight: '32%'}}>
              <a class="btn btn-secondary" href="/" role="button">
                Home
              </a>
              <a class="btn btn-secondary" href="/about" role="button">
                About Our Project
              </a>
              <button type="button" class="btn btn-secondary">
                Download
              </button>
            </div>
          </div>
          <div className="col">
          </div>
        </div>
        <div className="row" style={{ marginTop: '1%' }}></div>
      </div>
    )
}

export default Title;