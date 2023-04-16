import { useState, useEffect, useMemo } from "react";
import debounce from "lodash/debounce";
import { isExist } from "../helpers/helper";

export default function useSearch({ listArr, searchQuery = "" }: USESEARCH) {
  const [searchValue, setSearchValue] = useState("");
  const [resultListArr, setResultListArr] = useState<DATALIST[]>([]);

  ///////////// SEARCH PART ///////////////////

  useEffect(() => {
    const delayedQuery = debounce(
      () => setSearchValue(searchQuery?.toLowerCase()),
      300
    );
    delayedQuery();
    // Cancel the debounce on useEffect cleanup.
    return () => {
      delayedQuery.cancel();
    };
  }, [searchQuery]);

  useEffect(() => {
    if (!listArr.length) {
      return;
    } else {
      if (searchValue) {
        let filteredUsers = listArr?.filter(
          (u) =>
            isExist(u?.title?.toLowerCase(), searchValue) ||
            isExist(u?.description?.toLowerCase(), searchValue)
        );
        setResultListArr(filteredUsers);
      } else {
        let filteredUsers = listArr;
        setResultListArr(filteredUsers);
      }
    }
  }, [searchValue, listArr]);

  return {
    searchValue,
    resultListArr,
  };
}
