import { Box } from 'components/Box/Box';
import React, { useState, useEffect } from 'react';
import { useFetchingData } from 'hooks/useFetchingData';
import NewsItem from 'components/NewsPage/NewsItem/NewsItem';
import SearchBar from 'components/NewsPage/SearchBar/SearchBar';
import { NewsList } from './NewsPage.styled';
import { PageTitle } from 'components/commonComponents/PageTitle.styled';
import { toISODate } from 'helpers/newsHelpers/dateConverting';
import { stringMax } from 'helpers/newsHelpers/stringConverting';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [publicNews, setPublicNews] = useState([]);
  const [request, setRequest] = useState('');

  const { status, results } = useFetchingData('api/news');
  
  /*сортування новин */

  useEffect(() => {
    if (status === 'resolved') {
      const NewNews = results.map(news => ({
        ...news,
        title: stringMax(news.title, 50) + '...',
        date: Date.parse(news.date),
        description: stringMax(news.description, 250) + '...',
      }));
      //   console.log('NewNews', NewNews);
      const SortNews = NewNews.sort((a, b) => (a.date < b.date ? 1 : -1));

      const NewDateNews = SortNews.map(news => ({
        ...news,
        date:
          toISODate(news.date) !== 'NaN/NaN/NaN'
            ? toISODate(news.date)
            : 'Two or three weeks ago',
      }));
      setNews(NewDateNews);
      setPublicNews(NewDateNews);
    }
  }, [status, results]);

  /*фільтр новин*/

  useEffect(() => {
    async function filterArray() {
      const normalisedFilter = request.toLowerCase();

      /*фільтр відсортованого масиву */
      const filterNews = news.filter(item => {
        return item.title.toLowerCase().includes(normalisedFilter);
      });

      /*якщо нічого не знайдено,- рендер всього списку */
      if (filterNews.length === 0) {
        console.log('нічого не знайдено');
        setPublicNews(news);
        return;
      }
      setPublicNews(filterNews);
    }

    filterArray();
  }, [request, news]);

  /*перевірка чи запит інший */
  const handleFormSubmit = value => {
    if (request !== value) {
      setRequest(value);
    } else {
      console.log('ви переглядаєте ' + value);
      return;
    }
  };

  /* -------------------------------------------------------------------------------------- */

  return (
    <Box as="section" pt={['42px', '58px', '88px']}>
      <PageTitle>News</PageTitle>

      <SearchBar setNews={handleFormSubmit} />
      <NewsList>
        {publicNews.map(article => (
          <NewsItem
            key={article._id}
            title={article.title}
            description={article.description}
            date={article.date}
            url={article.url}
          />
        ))}
      </NewsList>
    </Box>
  );
};

export default NewsPage;