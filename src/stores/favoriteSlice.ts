import type {StateCreator} from 'zustand'
import type { Recipe } from '../types'
import { createNotificationSlice, type NotificationSliceType } from './notificationSlice';
import type { RecipesSliceType } from './recipeSlice';


export type FavoritesSliceType ={

    favorites: Recipe[]
    handleClickFavorite:(recipe: Recipe) => void
    favoriteExist:(id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoriteSlice: StateCreator<FavoritesSliceType & RecipesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) =>({
    favorites: [],
    handleClickFavorite:(recipe) =>{
        if (get().favoriteExist(recipe.idDrink)){
            set((state)=>({
                favorites:state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
                
            }))
            createNotificationSlice(set,get,api).showNotification({text: 'Se elimino de los favoritos', error: false})

        }else{
            
            set((state)=>({
                favorites:[...state.favorites, recipe]
            }))
            createNotificationSlice(set,get, api).showNotification({text: 'Se agrego a los favoritos', error: false})

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