import React, { useEffect, useState } from 'react';

const News = () => {
    const [newsData, setNewsData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              'https://api.marketaux.com/v1/news/all?&filter_entities=true&language=en&country=in&api_token=doVHlk041nfuz5Spz7UezxW0c5flpLIsvvKi6SHu'
            );
    
            if (!response.ok) {
              throw new Error('Failed to fetch news data');
            }
    
            const data = await response.json();
    
           
            if (data && data.data && data.data.length > 0) {
              setNewsData(data.data); 
            } else {
              setError('No news data available');
            }
          } catch (error) {
            setError(`Error fetching news data: ${error.message}`);
          }
        };
    
        fetchData();
      }, []); 
  return (
    <div className='flex flex-col  w-full'>
            {error ? (
        <p>{error}</p>
        ) : (
            newsData.map((news, index) => (
            <div  key={index}>
                <div className="flex gap-2 pt-[0.6rem] pb-[0.6rem] border-b-[lightGrey] border-b border-solid  ">
                    <div className="image flex-1 object-cover ">
                    <img className="w-28 h-16" src={news.image_url} alt="newsImage" />  
                    </div>
                    <div className="title flex flex-[3]  items-center">
                        <p className='font-bold text-sm'>{news.title}</p>
                    </div>
                </div>
                
            </div>
        ))
      )}
    </div>
  )
}

export default News