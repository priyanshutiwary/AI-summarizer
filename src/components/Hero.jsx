import {logo} from '../assets/assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
         <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="summar-logo"
            className='w-28 object-contain'/>
            <button 
            type='button'
            onClick={()=>window.open('https://github.com/priyanshutiwary')}
            className='black_btn'
            >GitHub</button>
         </nav>
         <h1 className='head_text'>summarize Article with <br className='max-md:hidden'/>
         <span className='orange_gradient'>Open AI gpt-4</span></h1>
         <h2 className='desc text-center'>AI-powered summarization saves time, transforms lengthy texts to clear summaries, empowering quick information digestion and unlocking fresh insights.</h2>
    </header>
  )
}

export default Hero
