import {createSelector} from 'reselect'

const productsSelector = (state) => state.products

export const getList = createSelector(
    [productsSelector],
    state => state.list
)