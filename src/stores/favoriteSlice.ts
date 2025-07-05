import type {StateCreator} from 'zustand'
import type { Recipe } from '../types'


export type FavoritesSliceType ={

    favorites: Recipe[]
    handleClickFavorite:(recipe: Recipe) => void
    favoriteExist:(id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoriteSlice: StateCreator<FavoritesSliceType> = (set, get, api) =>({
    favorites: [],
    handleClickFavorite:(recipe) =>{
        if (get().favoriteExist(recipe.idDrink)){
            set((state)=>({
                favorites:state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
                
            }))
            

        }else{
            
            set((state)=>({
                favorites:[...state.favorites, recipe]
            }))

        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
        
    },
    favoriteExist: (id) =>{
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () =>{
        const storedFavorites = localStorage.getItem('favorites')
        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            })
            
        }
    }
})