import { SERVER_REQUEST } from '../../shared/Backend';
import { ApiEndpoints } from '../../config';
import { GET_SUBCATEGORY, FILTER_SUBCATEGORY } from '../Constants';
import { LOGGER } from '../../shared/Methods';

export const getSubCatReducer = (data) => ({
    type: FILTER_SUBCATEGORY,
    payload: data
});

export const getFilterSubCat = (body) => async (dispatch) => {
   const response = await SERVER_REQUEST(ApiEndpoints.GET_SUBCATEGORY(1), 'post', body);
   if(response.status === '00') {
       dispatch({type: GET_SUBCATEGORY, data: response.data})
       LOGGER('SUBCAT', response.data);
   } else {
      LOGGER('SUBERROR', response.message);
   }
}