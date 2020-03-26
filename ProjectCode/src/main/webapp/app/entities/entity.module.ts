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
      },
      {
        path: 'equipment',
        loadChildren: () => import('./equipment/equipment.module').then(m => m.MedicalEquipmentManagerEquipmentModule)
      },
      {
        path: 'medical-supplies-type',
        loadChildren: () =>
          import('./medical-supplies-type/medical-supplies-type.module').then(m => m.MedicalEquipmentManagerMedicalSuppliesTypeModule)
      },
      {
        path: 'medical-supplies',
        loadChildren: () => import('./medical-supplies/medical-supplies.module').then(m => m.MedicalEquipmentManagerMedicalSuppliesModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class MedicalEquipmentManagerEntityModule {}
