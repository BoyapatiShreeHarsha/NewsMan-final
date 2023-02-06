import React from 'react'
import image1 from './news.jpg'
import image2 from './news2.jpg'
import image3 from './news3.jpg'

const  NewsItem = (props)=> {

    let { title, description,  imageUrl, newsUrl, author, date,source,color } = props;
    const authorsname= (author)=>
    {
      let s = "";
      for(let i=0;i<author.length;i++)
      {
        s+=author[i];
        s+=" ";
      }
      return s;
    }
    const changedate = (date) => {
      let d = new Date(date);
      return d.toGMTString();
    }
    const imggenerator =()=>{
      let arr=[image1,image2,image3];
      let x=Math.random()*2;
      return arr[x];
    }
    return (
      <div>
        <div className="card">
          <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
          <span className={`badge rounded-pill bg-${color}`}>
            {source}
          </span>
          </div>
          <img src={imageUrl ?? image3} className="card-img-top" alt="Error" style={{ height: "200px", width: "100%" }} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            {/* {console.log(imggenerator())} */}
            <p>By {author ? authorsname(author) : "Unkown"} on {changedate(date)}</p>
            <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
