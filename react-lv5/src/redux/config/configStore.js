import React from 'react'
import hendlerReducer from '../modules/hendlerReducer';
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        hendlerReducer,
    }
})


export default store;