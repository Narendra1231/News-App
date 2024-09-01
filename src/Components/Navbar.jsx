
const Navbar=(props)=>{
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><span class="badge text-bg-success">N</span>EWS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav" style={{cursor:"pointer"}}>
        <li class="nav-item ">
          <div class="nav-link active" data-toggle="tab" onClick={()=>props.setCategory("technology")}>Technology</div>
        </li>
        <li class="nav-item">
          <div class="nav-link active"  onClick={()=>props.setCategory("business")}>Business</div>
        </li>
        <li class="nav-item">
          <div class="nav-link active"onClick={()=>props.setCategory("health")} >Health</div>
        </li>
        <li class="nav-item">
          <div class="nav-link active" onClick={()=>props.setCategory("sports")}>Sporths</div>
        </li>
        <li class="nav-item">
          <div class="nav-link active" onClick={()=>props.setCategory("science")}>Science</div>
        </li>
        <li class="nav-item">
          <div class="nav-link active" onClick={()=>props.setCategory("entertainment")}>Entertainment</div>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
    );
}
export default Navbar;