function Video() {
    return (
      <div className="container text-center" style={{ backgroundColor: '#BBDEFB' ,marginTop: '1%'}}>
     <div className="row">
          <div className="col">
          </div>
          <div className="col" style={{ marginTop: '1%' }}>
            <iframe width="1120" height="630" src="https://www.youtube.com/embed/FHY3-DwozMY?si=GqB9mK4TpfNjUJFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="col">
          </div>
        </div>
        <div className="row" style={{ marginTop: '60px' }}></div>
       
      </div>
    )
}

export default Video;