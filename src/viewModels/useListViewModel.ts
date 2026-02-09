import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../services/ApiServices';
import { AppDispatch, RootState } from '../redux/Store';

const useListViewModel = () => {
   const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.users.users);
  const status = useSelector((state: RootState) => state.users.status);
  const error = useSelector((state: RootState) => state.users.error);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchItems());
    }
  }, [status, dispatch]);

  return {
    items,
    isLoading: status === 'loading',
    error,
  };
}

export default useListViewModel