import { useMemo } from 'react'
import { NavLink, useLocation} from 'react-router-dom'

export default function Header() {

    const {pathname} = useLocation()

    const isHome = useMemo(()=> pathname ==='/', [pathname])
    
  return (
    <header className=" bg-slate-800">
        <div className=" mx-auto container px-5 py-16">
            <div className=" flex justify-between items-center">
                <div>
                    <img className="w-32" src="/logo.svg" alt="logotipo" />
                </div>

                <nav className=' flex gap-4'>
                    <NavLink to="/"
                     className={({isActive})=>
                        isActive? ' text-orange-500 uppercase font-bold': 'text-white uppercase font-bold'
                     }
                     >inicio</NavLink>
                    <NavLink to="/favoritos"
                     className={({isActive})=>
                        isActive? ' text-orange-500 uppercase font-bold': 'text-white uppercase font-bold'
                     }>Favoritos</NavLink>
                </nav>
            </div>
            {isHome &&(
                <form>
                    <div className=' space-y-4'>
                        <label 
                        htmlFor="ingredient"
                        className=' block text-white uppercase font-extrabold text-lg'
                        >Nombre o Ingredientes</label>

                        <input
                         id='ingredient' 
                        type="text" 
                        name='ingredient'
                        className='p-3 w-full rounded-lg focus:outline-none bg-white'
                        placeholder='Nombre o Ingrediente. Ej. Vodka, Tequila, Cafe'
                        />
                    </div>
                </form>
            )}
        </div>

    </header>
  )
}
