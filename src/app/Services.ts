import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
/**
 * Created by jkliphouse on 9/20/16.
 */

export  interface Person {
    id: number,
    name: string,
    age: number,
    hobby: string
}

@Injectable()

export class PeopleService {

    constructor(
        private http: Http
    ){}

    getPeople() {
        return this.http.get('../People.json');

    }
}

@Injectable()

export class FilterService {

    Filters = [
        "That Filter",
        "This Filter",
    ]

    getFilters() {
        return this.Filters;
    }

}