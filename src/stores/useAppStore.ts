import{create}  from'zustand'
import {devtools} from 'zustand/middleware'
import{createRecipesSlices, type RecipesSliceType} from './recipeSlice'
import {type FavoritesSliceType, createFavoriteSlice} from './favoriteSlice'
import {type NotificationSliceType, createNotificationSlice} from './notificationSlice'


export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a)=>({
    ...createRecipesSlices(...a),
    ... createFavoriteSlice(...a),
    ... createNotificationSlice(...a),
    
})))