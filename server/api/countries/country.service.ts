import {Model} from '~/types';
import {db} from '~/lib/client'
import { Query } from 'node-appwrite';

const cfg = useRuntimeConfig();
type CountryView = Partial<Model.Country>;

export namespace Country{
    const collection = '6421d767bb17bcbd83b4';

    export function getCountries(): Promise<CountryView[]>{
        return db.listDocuments(cfg.DATABASE, collection, []).then(docs => {
            let list:Array<CountryView> = [];
            for(const doc of docs.documents){
                list = [...list,{
                    key: doc.key,
                    value: doc.value
                }]
            }
            return list;
        })
    } 
}