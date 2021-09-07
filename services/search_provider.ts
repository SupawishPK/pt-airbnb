// import { SearchResponse } from 'interfaces/api/search'
import { SearchResponse } from "interfaces/api/search";
import HttpRequest from "./http_request";

class SearchProvider extends HttpRequest {
  searchResult(searchInput: string) {
    return this.get<Array<SearchResponse>>(
      "https://links.papareact.com/isz",
      {}
    );
  }
}

export default new SearchProvider();
