import Image from "next/image";
import insta1 from "@/public/homepage/insta/1.png"
import insta2 from "@/public/homepage/insta/2.png"
import insta3 from "@/public/homepage/insta/3.png"
import insta4 from "@/public/homepage/insta/4.png"
import insta5 from "@/public/homepage/insta/5.png"
import insta6 from "@/public/homepage/insta/6.png"


export function InstagramSection() {
  return (
    <section id="bts" className="w-full px-6 md:py-16 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex justify-between gap-8 items-center">

          <div className="space-y-6 flex items-start md:px-20 px-10 py-20 md:py-0 md:flex-col md:w-2/3 justify-center md:h-[-webkit-fill-available] bg-background text-center md:text-left">
            <div>
              <h2 className="font-serif text-2xl lg:text-3xl text-black mb-3 uppercase">#BTS</h2>
              <h2 className="font-serif text-3xl lg:text-4xl text-black uppercase">
                Instagram
              </h2>
              <p className="text-black before:w-[2rem] text-lg text-center inline-flex rounded-none  px-12 tracking-wider py-3 uppercase relative
              before:border-t-[.5px] before:top-7 before:absolute before:border-black before:left-0
               after:w-[2rem] after:top-7 after:absolute after:border-t-[.5px] after:right-0 after:border-black mx-auto md:mx-0">Follow Us</p>
            </div>
          </div>

          {/* instagram */}
          <div className="grid grid-cols-3 gap-4 w-full">
            <a href="https://www.instagram.com/reel/DNS_1QgybMp/?utm_source=ig_web_copy_link&igsh=MWJzbGh4ZnpjZHU1Zw==" target="_blank"><Image src={insta1} width={300} height={500} alt="instagram1" className="object-cover" /></a>
            <a href="https://www.instagram.com/reel/DM-qnnWS94f/?utm_source=ig_web_copy_link&igsh=MWhpemh2NTJtc2VubQ==" target="_blank"><Image src={insta2} width={300} height={500} alt="instagram1" className="object-cover" /></a>
            <a href="https://www.instagram.com/reel/DMxu9KMyyRn/?utm_source=ig_web_copy_link&igsh=MTJtbTdqNXk5OGY5ag==" target="_blank"><Image src={insta3} width={300} height={500} alt="instagram1" className="object-cover" /></a>
            <a href="https://www.instagram.com/reel/DMkzkruJttx/?utm_source=ig_web_copy_link&igsh=NHJ1YjZrbGo1bngw" target="_blank"><Image src={insta4} width={300} height={500} alt="instagram1" className="object-cover" /></a>
            <a href="https://www.instagram.com/reel/DMSo0ZAyga-/?utm_source=ig_web_copy_link&igsh=c3FyMml0bnlnaTNh" target="_blank"><Image src={insta5} width={300} height={500} alt="instagram1" className="object-cover" /></a>
            <a href="https://www.instagram.com/reel/DLxTRtWy4CX/?utm_source=ig_web_copy_link&igsh=MTEyMnlwdTh3d2NndQ==" target="_blank"><Image src={insta6} width={300} height={500} alt="instagram1" className="object-cover" /></a>

          </div>


        </div>
      </div>
    </section>
  )
}
