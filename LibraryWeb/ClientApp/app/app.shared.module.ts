import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { BooksDataComponent } from './components/books-data/books-data.component';
import { UsersDataComponent } from './components/users-data/users-data.component';
import { LoginComponent } from './components/login/login.component';
import { LibraryComponent } from './components/library/library.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        StatisticsComponent,
        BooksDataComponent,
        UsersDataComponent,
        LoginComponent,
        LibraryComponent,
        DetailsComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'statistics', component: StatisticsComponent },
            { path: 'books-data', component: BooksDataComponent },
            { path: 'users-data', component: UsersDataComponent },
            { path: 'login', component: LoginComponent },
            { path: 'library', component: LibraryComponent },
            { path: 'details', component: DetailsComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
