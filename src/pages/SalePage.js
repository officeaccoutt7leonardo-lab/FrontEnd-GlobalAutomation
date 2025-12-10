import { Link } from 'react-router-dom';


function App() {
  return (
  <body id='hero' className='min-h-screen bg-slate-50 dark:bg-zinc-900/100 dark:text-white'>
    <header className='text-white sticky top-0 z-10 backdrop-blur-sm'>
      <section className='max-w-6xl mx-auto py-6 px-6 flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>
          Global Automation
        </h1>
        <a  href='https://wa.me/5511942476485?text=Olá%2C%20vi%20sua%20campanha%20do%20no%20site%21' className='bg-blue-500 px-8 py-2 rounded-lg text-black whitespace-nowrap'>
          Entrar em Contato
        </a>
      </section>
      <hr className='border-t border-gray-700 mt-1' />
    </header>
    <main className='max-w-4xl mx-auto mt-40'>

      <section className='flex flex-col items-center gap-6 text-center py-20'>

        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-bold text-white">
            Automações <br /> Para sua empresa
          </h1>

          <p className='mt-4 text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto'>
            Automações com o n8n e crianção de chatbots
          </p>
        </div>

        <a href='https://wa.me/5511942476485?text=Olá%2C%20vi%20sua%20campanha%20do%20no%20site%21' className="mt-4 text-sm md:text-base lg:text-lg bg-blue-500 px-8 py-2 rounded-lg text-black whitespace-nowrap shadow-[0_15px_25px_-5px_rgba(59,130,246,0.4)]">
          Fale conosco
        </a>
      </section>

      
    </main>

  </body>  
);
}

export default App;
