import {H3Event} from 'h3';
import {Country} from './country.service'

export default defineEventHandler(async(ev:H3Event) => {
    const data = await Country.getCountries();
    return data;
})