import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    }, {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, 
    // {
    //     path: 'components',
    //     loadChildren: './components/components.module#ComponentsModule'
    // },
    // {
    //     path: 'forms',
    //     loadChildren: './forms/forms.module#Forms'
    // },
    // {
    //     path: 'tables',
    //     loadChildren: './tables/tables.module#TablesModule'
    // },
    // {
    //     path: 'contact',
    //     loadChildren: './maps/maps.module#MapsModule'
    // },
    {
        path: 'portfolio',
        loadChildren: './projects/projects.module#ProjectsModule'
    },
    // {
    //     path: 'widgets',
    //     loadChildren: './widgets/widgets.module#WidgetsModule'
    // },
    {
        path: 'skills',
        loadChildren: './charts/charts.module#ChartsModule'
    },
    {
        path: 'about',
        loadChildren: './calendar/calendar.module#CalendarModule'
    },
    {
        path: '',
        loadChildren: './userpage/user.module#UserModule'
    },
    {
        path: '',
        loadChildren: './education/education.module#EducationModule'
    },
    {
        path: '',
        loadChildren: './experience/experience.module#ExperienceModule'
    }
  ]},
  {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'contact',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    }
];
