function Video() {
    return (
      <div className="w-full h-screen overflow-hidden relative grid place-items-center">
      <div id="background">
      <div className="container text-center" style={{marginTop: '1%'}}>
     <div className="row" style={{marginTop: '1%'}}>
          <div className="col">
          </div>
          <style></style>
          <div className="col-10" style={{width:"100%", height:"100%"}}>
            <h1 className="responsive-heading" style = {{color: 'white'}}>
              <b>Welcome To The CS 452: VIRTUAL REALITY- Cooking Game Website!</b>
            </h1>
          <iframe 
         style = {{position: 'absolute', top: '35%', left: '20%', width: '60%', height: '60%'}}
         width="70%" height="100%" src="https://www.youtube.com/embed/FHY3-DwozMY?si=GqB9mK4TpfNjUJFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
           </div>
          <div className="col">
          </div>
        </div>
      </div>
      </div>
  </div>
    )
}

export default Video;