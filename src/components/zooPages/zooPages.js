import React from 'react'
import ZooFacebookPage from './ZooFacebookPage';
function zooPages() {
    const zooPages = [
        { name: "สวนสัตว์เปิดเขาเขียว", url: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSongkhlaZooPage&tabs=timeline&width=1000&height=800&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=404165548973233" },
        // { name: "สวนสัตว์อุบลราชธานี", url: "https://www.facebook.com/eduubonzoo" },
        // { name: "สวนสัตว์เชียงใหม่", url: "https://www.facebook.com/FanpageChiangMaiZoo" },
        // { name: "สวนสัตว์นครราชสีมา", url: "https://www.facebook.com/NakhonratchasimaZoo" },
        // { name: "สวนสัตว์ขอนแก่น", url: "https://www.facebook.com/Khonkaenzoo" },
        // { name: "สวนสัตว์สงขลา", url: "https://www.facebook.com/SongkhlaZooPage" }
      ];
    
      return (
        <div className="">
          <header className="bg-primary text-white text-center py-3">
            <h1>Zoo e-Ticket องค์การสวนสัตว์แห่งประเทศไทย ในพระบรมราชูปถัมภ์ ร่วมด้วย บริษัท แอดเพย์ เซอร์วิสพอยท์ จำกัด </h1>
          </header>
          <main className="container mt-4">
            {zooPages.map((zoo, index) => (
              <ZooFacebookPage key={index} name={zoo.name} url={zoo.url} />
            ))}
          </main>
        </div>
      );
}

export default zooPages
