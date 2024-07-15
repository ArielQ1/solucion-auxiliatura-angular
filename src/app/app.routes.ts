import { Routes } from '@angular/router';
import { PrimeraComponent } from './pages/primera/primera.component';
import { SegundaComponent } from './pages/segunda/segunda.component';
import { TerceraComponent } from './pages/tercera/tercera.component';

export const routes: Routes = [
    {path:'primera', component: PrimeraComponent},
    {path:'segunda', component: SegundaComponent},
    {path:'tercera', component: TerceraComponent},
    {path:'', redirectTo: 'primera', pathMatch: 'full'}
];
