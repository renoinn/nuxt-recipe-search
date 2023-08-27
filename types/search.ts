export interface SearchRequest {
  q: string,
  start: number,
  num: number,
}

export interface SearchResponse {
  kind: string,
  url: Object,
  queries: Object,
  context: string,
  searchInformation: Object,
  items: Array<ResultItem>,
}

export interface ResultItemQueries {
  request: QueriesRequest,
  nextPage: QueriesNextItem,
}

export interface QueriesRequest {
  title: string
  totalResults: number,
  searchTerms: string,
  count: number,
  startIndex: number,
  inputEncoding: string,
  outputEncoding: string,
  safe: string,
  cx: string,
}

export interface QueriesNextItem {
  title: string
  totalResults: number,
  searchTerms: string,
  count: number,
  startIndex: number,
  inputEncoding: string,
  outputEncoding: string,
  safe: string,
  cx: string,
}

export interface ResultItem {
  kind: string,
  title: string,
  htmlTitle: string,
  link: string,
  displayLink: string
  snippet: string,
  htmlSnippet: string,
  cacheId: string,
  formattedUrl: string,
  htmlFormattedUrl: string,
  pagemap: ResultItemPageMap,
}

export interface ResultItemPageMap {
  cse_thumbnail: Array<ResultItemThumbnail>,
  metatags: Array<Object>,
  cse_image: Array<ResultItemImage>
}

export interface ResultItemThumbnail {
  src: string,
  width: number,
  height: number,
}

export interface ResultItemImage {
  src: string,
}

