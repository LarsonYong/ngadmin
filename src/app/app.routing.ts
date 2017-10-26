import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { ModuleWithProviders } from '@angular/core';
// import { AuthenticationGuard } from '../services/authGuard.service';

export const routes: Routes = [
    {
      path: 'login', loadChildren: './login/login.component.ts',
      children: [
        {
          path: '',
          children: [
            {
              path: 'dashboard', loadChildren:'./dashboard/dashboard.component.ts'
            },
            {
              path: 'gateeway', loadChildren:'./gateway/gateway.component.ts'
            },
            {
              path: 'build',loadChildren:'./build/build.component.ts'  
            },
            {
              path: 'unit', loadChildren:'./unit/unit.component.ts'  
            },
            {
              path: 'user', loadChildren:'./user/user.component.ts'  
            },
            {
              path: '',redirectTo: 'dashboard', pathMatch:'full'
            },
          ]
        }
      ]
    },
    
    
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);