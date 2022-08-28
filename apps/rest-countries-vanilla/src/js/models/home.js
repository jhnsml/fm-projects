import { clearResults, clearPagination } from '../views/view';
import pagination from '../utils/pagination';

/* Home Controller */

const home = (data) => {
    clearResults();
    clearPagination();
    pagination(data);
};

export default home;