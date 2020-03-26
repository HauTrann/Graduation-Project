import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.MedicalEquipmentManagerDepartmentModule)
      },
      {
        path: 'department-employee',
        loadChildren: () =>
          import('./department-employee/department-employee.module').then(m => m.MedicalEquipmentManagerDepartmentEmployeeModule)
      },
      {
        path: 'equipment-type',
        loadChildren: () => import('./equipment-type/equipment-type.module').then(m => m.MedicalEquipmentManagerEquipmentTypeModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class MedicalEquipmentManagerEntityModule {}
