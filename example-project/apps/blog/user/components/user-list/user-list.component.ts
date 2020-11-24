import { Component } from '@angular/core';
import {
  PoBreadcrumb,
  PoNotificationService,
  PoTableColumn,
} from '@po-ui/ng-components';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { UserService } from '../../services/user.service';
import { PoPageDynamicTableActions } from '@po-ui/ng-templates';

@Component({
  selector: 'erp-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  public detailValues;

  readonly columns: PoTableColumn[] = [
    {
      property: 'id',
      label: this.translocoService.translate('user.userNumber'),
    },
    {
      property: 'descricao',
      label: this.translocoService.translate('user.userDescription'),
    },
  ];

  readonly actions: PoPageDynamicTableActions = {
    new: '/user/create',
    edit: '/user/edit/:id',
    remove: true,
    removeAll: false,
  };

  readonly fields: Array<any> = [
    {
      property: 'id',
      key: true,
      label: this.translocoService.translate('user.userNumber'),
      visible: true,
      filter: true,
    },
    {
      property: 'descricao',
      label: this.translocoService.translate('user.userDescription'),
      filter: true,
      gridColumns: 6,
    },
  ];

  readonly breadcrumb: PoBreadcrumb = {
      items: [
        {
          label: this.translocoService.translate('common.home'),
          link: '/',
        },
        {
          label: this.translocoService.translate('user.user'),
          link: '/user',
        },
      ],
    };

  constructor(
    private userService: UserService,
    private router: Router,
    private poNotificationService: PoNotificationService,
    private translocoService: TranslocoService
  ) {}
}
