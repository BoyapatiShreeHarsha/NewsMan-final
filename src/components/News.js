import React,{useEffect,useState} from 'react'
import Loader from './Loader';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props)=> {

    const [articles, setarticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalarticles, setTotalarticles] = useState(0);
    const [nextpage, setNextpage] = useState("")


    const capilalise = (str) => {
        let lower = str.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    

    const update = async () => {
        props.setProgress(10);
        let url = `https://newsdata.io/api/1/news?apikey=${props.api}&country=${props.country}&language=en&category=${props.category}`;
        
        setLoading(true);
        let array = await fetch(url);
        props.setProgress(30);
        array = await array.json();
        props.setProgress(70);
        setarticles(array.results);
        setTotalarticles(array.totalResults);
        setLoading(false);
        setNextpage(array.nextPage);
        props.setProgress(100);
    }

    useEffect(() => {
      update();
      document.title = `NewsMan-${capilalise(props.category)}`
    }, [])
    

    const fetchMoreData =async () => {
        let url =  `https://newsdata.io/api/1/news?apikey=${props.api}&country=${props.country}&language=en&category=${props.category}&page=${nextpage}`;
        setLoading(true);
        let array = await fetch(url);
        array = await array.json();
        setarticles(articles.concat(array.results));
        setTotalarticles(array.totalResults);
        
        setLoading(false);
        setNextpage(array.nextPage);
      };


    
        return (

            <>
                <h2 className='text-center'style={{margin:"75px 0px"}} >Top-Headlines on {capilalise(props.category)}</h2>
                {loading && <Loader/>}
                
                <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length!==totalarticles}
                        loader={<Loader/>}
                    >
                <div className="container">
                <div className='row'>
                    
                    {articles.map((element,index) => {
                        
                        let l = element.title.length;
                        return (<div className='col-md-4 my-2' key={element.url}>
                            <NewsItem key={index.toString()} title={element.title} description={(element.description != null) ? element.description.slice(0, 200 - l) : " "} imageUrl={element.image_url} newsUrl={element.link} author={element.creator} date={element.pubDate} source={element.source_id} color={props.colour} />
                        </div>
                        )
                    })}
                
                </div>
                </div>
                </InfiniteScroll>
                
            </ >
        )
    
}

News.defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general"
}

News.propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
