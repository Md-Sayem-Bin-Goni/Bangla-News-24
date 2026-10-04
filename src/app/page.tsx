import MainNews from '@/components/MainNews';
import NewsCard from '@/components/NewsCard';


interface INews {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

interface IOtherSection {
  curationId: string;
  title: string;
  articles: INews[];
}


const HomePage = async () => {

  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json();



  const sections  = data.data;
  // const mainNews = sections[0].articles;
  const otherSections: IOtherSection[] = sections.slice(1);


  // console.log(data);




  return (
    <div >
 

      <div className='container mx-auto mt-5'>
        <MainNews news={sections[0].articles} />
      </div>




      <div className='container mx-auto'>
        <div><h2 className='text-red-700 font-bold text-4xl pt-10'>অন্যান্য খবর</h2></div>
        {
          otherSections.map(os   => (
            <div key={os.curationId}>
              <h1 className='font-bold text-2xl'>{os.title}</h1>
              <hr className=' text-red-700 py-2 font-bold'/>

              <div className='grid grid-cols-4 gap-4 pb-10'>
                {
                  os.articles.map((news) => <NewsCard key={news.id} news={news} />)
                }
              </div>
            </div>
          ))
        }
      </div>



    </div>
  );
};

export default HomePage;
