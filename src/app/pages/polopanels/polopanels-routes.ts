import { Routes } from '@angular/router';
import { PolopanelsComponent } from './polopanels.component';

export const routes: Routes = [
    {
        path: '',
        component: PolopanelsComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./home/home.module').then((m) => m.HomeModule),
            },
            // {
            //     path: 'conversiones',
            //     loadChildren: () =>
            //         import('./conversions/conversions.module').then((m) => m.ConversionsModule),
            // },
            // {
            //     path: 'calcula-fecha',
            //     loadChildren: () =>
            //         import('./dates-calculator/dates-calculator.module').then((m) => m.DatesCalculatorModule),
            // },
            // {
            //     path: 'formulario',
            //     loadChildren: () =>
            //         import('./form/form.module').then((m) => m.FormModule),
            // },
            // {
            //     path: '**',
            //     loadChildren: () =>
            //         import('./home/home.module').then((m) => m.HomeModule),
            // },
        ],
    },
];