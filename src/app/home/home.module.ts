import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { UserService } from './service/user.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SearchComponent } from './search/search.component';
import { FilterByUser } from './filter-by-user.pipe';

// Angular Material
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

const materialModules = [
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
]

@NgModule({
    declarations: [
        HomeComponent,
        SearchComponent,
        FilterByUser,
        UserDetailsComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ...materialModules,
        HttpClientModule
    ],
    providers: [UserService],
})
export class HomeModule { }
