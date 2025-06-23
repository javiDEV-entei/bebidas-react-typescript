import{create}  from'zustand'
import {devtools} from 'zustand/middleware'
import{createRecipesSlices, type RecipesSliceType} from './recipeSlice'


export const useAppStore = create<RecipesSliceType>()(devtools((...a)=>({
    ...createRecipesSlices(...a)
    
})))