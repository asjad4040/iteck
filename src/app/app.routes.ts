import { Routes } from '@angular/router';
import { SassTechComponent } from './layouts/sass-tech/sass-tech.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'sass-technology',
        pathMatch:'full'
    },
    {
        path:'sass-technology',
        component:SassTechComponent,
        children:[
            {
                path:'',
                component:HomeComponent
            }
        ]
    }
];
