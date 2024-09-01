import image from '../news.jpg';
const NewsItems=(props)=>{
    return(
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
      <img src={props.detail.image?props.detail.image:image} style={{height:"200px",width:"336px"}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.detail.title.slice(0,50)}</h5>
        <p className="card-text">{props.detail.description?props.detail.description.slice(0,90):"News can be important or exciting information that you haven't heard yet. It can also be a tool for development, carrying messages to people"}</p>
        <a href={props.detail.url} className="btn btn-primary">read more</a>
      </div>
    </div>
    );
}
export default NewsItems 