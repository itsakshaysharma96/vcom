// import InstaFeed from "@/src/screen/homepage/_components/InstaFeed";


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
          <div className="grid grid-cols-1 gap-4 w-full">
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div className="elfsight-app-18d0606b-bca0-4562-aea8-bda84b017f61" data-elfsight-app-lazy></div>
          </div>

          {/* <InstaFeed /> */}

        </div>
      </div>
    </section>
  )
}
