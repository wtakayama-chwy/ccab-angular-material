import { Pipe, PipeTransform } from '@angular/core';
import { User } from './interface/user';

@Pipe({ name: 'filterByUser' })
export class FilterByUser implements PipeTransform {
    // 1st param = which element you want to apply a transformation

    transform(users: User[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim() // ignores all white spaces
            .toLowerCase(); // Must compare lower to lower

        if (descriptionQuery) {
            return users.filter(user =>
                user.name.toLowerCase().includes(descriptionQuery) || String(user.id).includes(descriptionQuery)
            );
        } else {
            return users;
        }
    }
}