import { useEffect, useState } from 'react';
import {fetchList} from "../../services/Services";


function useAppHook() {

  const [list, setList ] = useState([])

  const initialLoad = async () => {
    const newList = await fetchList();
    setList(newList);
  }

  useEffect(() => {
    initialLoad();
  }, [])

  return {
    list
  }
}

export default useAppHook;

