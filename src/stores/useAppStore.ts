import{create}  from'zustand'
import {devtools} from 'zustand/middleware'
import{createRecipesSlices, type RecipesSliceType} from './recipeSlice'
import {type FavoritesSliceType, createFavoriteSlice} from './favoriteSlice'


export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools((...a)=>({
    ...createRecipesSlices(...a),
    ... createFavoriteSlice(...a),
    
})))