import { useState, useEffect } from 'react';
import { Status } from 'constants/status';
import { getNoticeByCategory } from 'api/notice';
import NoticeCategoryItem from '../NoticeCategoryItem';
import { useDispatch } from 'react-redux';
import { NoticesCardsList } from './NoticesCategoriesList.styled';
import { useLocation } from 'react-router-dom';
import { useNotices } from 'hooks/useNotices';
import { getFavorites } from 'redux/notices/operations';
import { getUserNotices } from 'redux/notices/operations';
import { Box } from 'components/Box/Box';

export const NoticesCategoriesList = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  const { ownNotices, favoriteNotices } = useNotices();

  const dispatch = useDispatch();
  const location = useLocation();
  const categoryName = location.pathname.split('/').reverse()[0];
  const { query: search, isLoading, error } = useNotices();

  useEffect(() => {
    async function getNotices() {
      setResults([]);
      setStatus(Status.PENDING);

      try {
        if (page === 0) {
          setPage(1);
          return;
        }

        if (categoryName === 'favorite') {
          dispatch(getFavorites({ search, page }));
        } else if (categoryName === 'own') {
          dispatch(getUserNotices({ search, page }));
        } else {
          const notices = await getNoticeByCategory({
            categoryName,
            search,
            page,
          });

          setResults(notices.results);
        }

        // setResults(prevState => [...prevState, ...notices.results]);
        // setResults(notices.results);
        // setTotal(movies.total);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
      }
    }
    getNotices();
  }, [categoryName, search, page, dispatch]);

  return (
    <>
      {status === Status.PENDING && isLoading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="20px 50px"
        >
          LOADING
        </Box>
      )}
      {status === Status.RESOLVED && (
        <NoticesCardsList>
          {categoryName === 'favorite'
            ? favoriteNotices.map(item => (
                <NoticeCategoryItem key={item._id} notice={item} />
              ))
            : null}
          {categoryName === 'own'
            ? ownNotices.map(item => (
                <NoticeCategoryItem key={item._id} notice={item} />
              ))
            : null}
          {results.map(item => (
            <NoticeCategoryItem key={item._id} notice={item} />
          ))}
        </NoticesCardsList>
      )}
      {status === Status.REJECTED && error && <b>ERROR</b>}
    </>
  );
};

export default NoticesCategoriesList;