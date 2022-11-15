import React, { useState,useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";




export default function News(props)  {
  // articles = [{
  //   source: {
  //     id: "the-wall-street-journal",
  //     name: "The Wall Street Journal",
  //   },
  //   author: null,
  //   title:
  //     "在岸人民币周五跌近400点、紧随离岸失守7元大关；美元指数再度急涨 - Wall Street Journal",
  //   description:
  //     "<ol><li>在岸人民币周五跌近400点、紧随离岸失守7元大关；美元指数再度急涨  Wall Street Journal\r\n</li><li>人民币汇率破“7”了！有哪些影响？十问十答  瞭望东方周刊\r\n</li><li>离岸人民币汇率“破7”  财新网金融频道\r\n</li><li>人民币兑美元汇率两年多来首次破7  Wall Street Journal\r\n</li><li>华商基金张永志：人民币破“7”影响及后续汇率走势  新浪\r\n</li><li>在Google 新闻上查看完整报道</li></ol>",
  //   url: "https://cn.wsj.com/articles/在岸人民币周五跌近400点-紧随离岸失守7元大关-美元指数再度急涨-11663319105",
  //   urlToImage: "https://images.wsj.net/im-33583/social",
  //   publishedAt: "2022-09-16T09:05:00Z",
  //   content:
  //     "4007\r\n16:3017.01666.97753910.56%\r\n17.00337.0250202078\r\n16:3017.03260.27%7.0368\r\n...",
  // },
  // {
  //   source: {
  //     id: "the-wall-street-journal",
  //     name: "The Wall Street Journal",
  //   },
  //   author: "wsj",
  //   title: "Peter Thiel, Losing Arizona...",
  //   description:
  //     "He and Donald Trump helped Blake Masters get the nomination. Where are they now?",
  //   url: "https://www.wsj.com/articles/peter-thiel-losing-arizona-blake-masters-funding-gop-super-pac-inflation-power-voters-republicans-filibuster-11663280414",
  //   urlToImage: "https://images.wsj.net/im-624388/social",
  //   publishedAt: "2022-09-16T02:00:03Z",
  //   content:
  //     "Opinion | Peter Thiel, Losing ArizonaListen to article(3 minutes)If Republicans lose a tantalizingly close Arizona Senate race, don’t place the blame entirely at the feet of nominee Blake Masters. Lo… [+1064 chars]",
  // },
  // {
  //   source: {
  //     id: "the-wall-street-journal",
  //     name: "The Wall Street Journal",
  //   },
  //   author: "The Wall Street Journal",
  //   title: "Pop Music’s Tension Between New And Familiar",
  //   description:
  //     "The longevity of old songs is an even greater mystery when what every era’s fans want is the fresh, the startling, the new. – The Wall Street Journal",
  //   url: "https://www.wsj.com/articles/lets-do-it-book-review-history-pop-music-hit-parade-11662733576",
  //   urlToImage: "https://images.wsj.net/im-619041/social",
  //   publishedAt: "2022-09-15T22:01:00Z",
  //   content:
  //     "At a poetry festival in Dublin a few years ago, I found myself in a group of mostly middle-aged folks from all over the English-speaking world. Out of nowhere, someone began to sing Its a Long Way to… [+1151 chars]",
  // },
  // {
  //   source: {
  //     id: "the-wall-street-journal",
  //     name: "The Wall Street Journal",
  //   },
  //   author: "Meghan Bobrowsky",
  //   title:
  //     "California Gov. Gavin Newsom Signs Law Requiring Social Media Companies to Consider Children’s Health",
  //   description:
  //     "California Gov. Gavin Newsom Signs Law Requiring Social Media Companies to Consider Children’s Healthwsj.com",
  //   url: "https://www.wsj.com/articles/california-gov-gavin-newsom-signs-law-requiring-social-media-companies-to-consider-childrens-health-11663277455",
  //   urlToImage: "https://images.wsj.net/im-624234/social",
  //   publishedAt: "2022-09-15T21:36:51Z",
  //   content:
  //     "Social-media companies that operate in California will have to consider the health and well-being of children under \r\na first-of-its-kind bill signed into law Thursday by Gov. Gavin Newsom.Called the… [+292 chars]",
  // },
  // {
  //   source: {
  //     id: "the-wall-street-journal",
  //     name: "The Wall Street Journal",
  //   },
  //   author: "Alyssa Lukpat",
  //   title: "Dems Scrambling...",
  //   description:
  //     "Dems Scrambling...\r\n\n \n \n \n (Third column, 5th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Hispanics pass whites to become largest group in Texas...\r\nAbbott sends busloads of migrants outside Kamala home...\r\nNew York relocates arrivals -- to Florida!\r\nDeSantis …",
  //   url: "https://www.wsj.com/articles/florida-sends-50-migrants-on-planes-to-marthas-vineyard-11663253106",
  //   urlToImage: "https://images.wsj.net/im-623712/social",
  //   publishedAt: "2022-09-15T21:19:40Z",
  //   content:
  //     "An accelerating campaign by Republican governors to send migrants to Democratic strongholds, initially seen by many Democratic officials as a political stunt, is now sending those officials scramblin… [+353 chars]",
  // }

  //     ]
  
 

  const capitalize =(word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  const [articles,setArticles]=useState([ ])
  const[loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)
  document.title= `${capitalize(props.category)}-FreshNews` 
  
  
  const update= async()=>{
    // console.log(state.page)
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`

    // setState({loading: true});
    props.setProgress(10)
    let data = await fetch(url);
    props.setProgress(30)
    
    let perseData = await data.json();
    props.setProgress(70)
    setArticles(perseData.articles)
    
    props.setProgress(100)
    
  }
  useEffect(() => {
    update();
  },[])
 
  const fetchMoreData= async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page+1)

    // setState({loading: true});
    let data = await fetch(url);
   
    let perseData = await data.json();
    setArticles( articles.concat(perseData.articles))
    setTotalResults(perseData.totalResults)
    
  }
  
  // nextpage= async()=>{
  //   console.log(state.page)
  //   setState({
  //     page: state.page+1
  //   });
    
  //   update();
  
  // }

  // previousepage= async()=>{
  //   setState({
  //     page: state.page -1
      
  //   });
    
  //   update();
  // }
  
    return (
      <div>
        <h1 className="text-center mb-5" style={{ marginTop: '100px' }}>Fresh News - {props.heading}  </h1>
        {/* <div >
         { state.loading && <Spinner/>}
        </div > */}
        <InfiniteScroll
       
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults }

          loader= { <Spinner/> }
          
        >
        <div className="container row my-4  " style={{ margin: "auto" }}>
          {articles.map((element) => {
            return (
              <div className=" col-md-4 "  key={element.url}>
                <Newsitem
                  title={element.title ?element.title.slice(0, 30):'...'}
                  description={element.description? element.description.slice(0, 50):'...'}
                  imgUrl={element.urlToImage? element.urlToImage: 'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/AB4D/production/_126735834_gettyimages-1424010876.jpg'}
                  url={element.url}
                  source={element.source.name.slice(0,10)}
                  
                />
              </div>
            );
          })}
        </div>

        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button type="button" disabled={state.page<=1} onClick={previousepage} className="btn btn-dark "> &larr; Previous</button>
        <button type="button" disabled={state.page+1 > Math.ceil(state.totalResults/props.pageSize)} onClick={nextpage} className="btn btn-dark">Next &rarr;</button>
      </div> */}
      </div>
    );

    
  
}
News.defaultProps ={
  api:'059f37684f544bca86554015e0fa5521',
  pageSize: 12,
  country: 'in',
  category: 'sports',
  heading: 'Today Headlines'
}  

News.propTypes = {
  api: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}