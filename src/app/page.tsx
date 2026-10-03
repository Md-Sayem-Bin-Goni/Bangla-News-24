import MainNews from '@/components/MainNews';
import Marquee from '@/components/Marquee';
import NewsCard from '@/components/NewsCard';


interface IOtherSection {
  curationId: string;
  title: string
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }

}


const HomePage = async () => {

  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json();



  const sections = data.data;
  // const mainNews = sections[0].articles;
  // const otherSections: IOtherSection[] = sections.slice(1);


  console.log(data);




  return (
    <div >
      <Marquee />

      <div className='container mx-auto mt-5'>
        <MainNews news={sections[0].articles} />
      </div>




      <div className='container mx-auto'>
        <div><h2 className='text-red-700 font-bold text-4xl'>অন্যান্য খবর</h2></div>
        {
          data.data.map(os => (
            <div key={os.curationId}>
              <h1>{os.title}</h1>
              <hr />

             <div className='grid grid-cols-4 gap-4'>
               {
                os.articles.map((o)=> <NewsCard key={o.id} news={o}/>)
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
