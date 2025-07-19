import{create}  from'zustand'
import {devtools} from 'zustand/middleware'
import{createRecipesSlices, type RecipesSliceType} from './recipeSlice'
import {type FavoritesSliceType, createFavoriteSlice} from './favoriteSlice'
import {type NotificationSliceType, createNotificationSlice} from './notificationSlice'
import { createAISlice, type AISlice } from './aiSlice'


export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType & AISlice>()(devtools((...a)=>({
    ...createRecipesSlices(...a),
    ... createFavoriteSlice(...a),
    ... createNotificationSlice(...a),
    ... createAISlice(...a),
    
})))