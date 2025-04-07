import { Routes } from '@angular/router';
import { LogInComponent } from './auth/pages/log-in/log-in.component';
import { MainLayoutComponent } from './main/main-layout.component';
import { DashboardComponent } from './main/dashboard/pages/dashboard/dashboard.component';
import { AuthGuard } from './auth/guard/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LogInComponent,
    },
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
        ]
    },
    {
        path: '**',
        redirectTo: 'login',
    }
];
