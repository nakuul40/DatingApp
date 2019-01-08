import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemeberListsComponent } from './members/memeber-lists/memeber-lists.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
export const appRoutes: Routes = [
     { path: '' , component: HomeComponent},
     {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members' , component: MemeberListsComponent},
            { path: 'members/:id' , component: MemberDetailComponent},
            { path: 'messages' , component: MessagesComponent},
            { path: 'lists' , component: ListsComponent},
        ]
     },
     { path: '**' , redirectTo: '', pathMatch: 'full'},
];
