import {createSelector } from 'reselect';
import { getNewsList, getFilter } from './news.reducer';
import { News } from '../../model/news';

//export const getNews = '';

export const getNews = createSelector(
    getNewsList,
    news => getFilter
)