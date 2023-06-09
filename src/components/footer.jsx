import { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render(){
  return (
   <>
   <footer class="bg-zinc-800">
    <div class="container px-12 py-16 mx-auto">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">

        <div>
        <img class=" w-60 h-5 max-w-3xl  font-semibold  capitalize" src="http://www.mango4g.rw/images/logo_new.png" alt=""></img>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <Link to="" class=" transition-colors duration-300 hover:text-white text-white hover:underline ">REMERA CORNER GISEMENTI</Link>
                    <Link to="" class=" transition-colors duration-300 hover:text-white text-white hover:underline ">Kigali,RWANDA</Link>
                    
                </div>
            </div>
            <div>
                <p class="font-semibold text-white"></p>

                
            </div>


            <div class="sm:col-span-2">
                <h1 class="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl dark:text-white">Contact Us</h1>
                <div class="flex flex-col items-start mt-5 space-y-2">
                    <Link to="" class=" transition-colors duration-300 hover:text-white text-white hover:underline ">CALLING TOLL FREE LINE   2550</Link>
                    <Link to="" class=" transition-colors duration-300 hover:text-white text-white hover:underline ">SUPPORT                 info@mangotelecom.rw </Link>
                    <Link to="" class=" transition-colors duration-300 hover:text-white text-white hover:underline ">INQUIRES                 inquires@mangotelecom.rw</Link>
                    <div class="flex justify-center space-x-2">
  <a href="#!" role="button">
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-7 w-7"
      fill="currentColor"

      viewBox="0 0 24 24">
      <path
        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg>
  </a>

  <a href="#!" role="button">
   
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-7 w-7"
      fill="currentColor"
      viewBox="0 0 24 24">
      <path
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  </a>

</div>                    
     </div>           
            </div>

                  
        </div>
        
        <div class="my-8 border-white-200 md:my-16 dark:border-white-700"></div>
        <div>
        <p className='text-white '>
            @<span className='text-white'>2020</span> Mango Telecom.All rights reserved
        </p>

        </div>
        
    </div>
</footer>
  
   
   </>
   
  );
}
}

export default Footer;
