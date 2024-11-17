/**
 * @import {AxiosInstance} from 'axios'
 */

/**
 * @param {AxiosInstance} axiosInst
 *
 * @returns {Promise<number[]>}
 */
export const getFavoriteRestaurants = async (axiosInst) => {
    const favorites = await axiosInst.get('/customers/favorite-restaurants');

    if (favorites.status !== 200) {
        throw new Error(
            `Error fetching restaurant data status: ${favorites.status}; 
            body: ${favorites.data}`
        );
    }

    return favorites.data;
};

/**
 * @param {AxiosInstance} axiosInst
 * @param {number[]} restaurantIds
 *
 * @returns {Promise<string>}
 */
export const removeFavoriteRestaurant = async (axiosInst, restaurantIds) => {
    const response = await axiosInst.delete('/customers/favorite-restaurants', {
        data: restaurantIds,
    });

    if (response.status !== 200) {
        throw new Error(
            `Error removing favorite restaurant status: ${response.status}; 
            body: ${response.data}`
        );
    }

    return response.data;
};
