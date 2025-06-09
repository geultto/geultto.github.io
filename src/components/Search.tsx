'use client';

import React from 'react';
import { SearchDialog, type SharedProps } from 'fumadocs-ui/components/dialog/search';
import { useDocsSearch } from 'fumadocs-core/search/client';


export default function CustomSearchDialog(props: SharedProps): React.ReactElement {
  // 검색 설정 - 서버에서 모든 검색 로직 처리
  const { query, search, setSearch } = useDocsSearch({
    type: 'static',
  });
  
  function handleSearchChange(rawQuery: string) {
    // 앞뒤 공백만 제거하고 서버에 그대로 전달
    setSearch(rawQuery);
  }
  
  // 서버 결과를 그대로 사용 (클라이언트 사이드 필터링 제거)
  const processedResults = React.useMemo(() => {
    
    // 로딩 중이거나 검색어가 없으면 빈 배열
    if (query.isLoading || !search.trim()) {
      return [];
    }
    
    // 에러가 있으면 빈 배열
    if (query.error) {
      return [];
    }
    
    // 결과가 'empty'이거나 배열이 아니면 빈 배열
    if (query.data === 'empty' || !Array.isArray(query.data)) {
      return [];
    }
    
    // 서버에서 받은 결과를 그대로 반환
    
    return query.data;
  }, [query.data, query.isLoading, query.error, search]);
  
  return (
    <SearchDialog
      search={search}
      onSearchChange={handleSearchChange}
      results={processedResults}
      {...props}
    />
  );
}