import { Component, OnInit } from '@angular/core';
import { markFormAsDirty } from '@totvs/niemeyer';
import {
  PoNotificationService,
  PoSelectOption,
  PoToasterOrientation,
} from '@po-ui/ng-components';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { translate } from '@ngneat/transloco';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'erp-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  public itemForm: FormGroup;
  public buttonGroupOptions: PoSelectOption[] = [];
  public isEditing: boolean;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private poNotificationService: PoNotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.itemForm = this.formBuilder.group({
      id: ['', Validators.required],
      ativo: [true, Validators.required],
      descricao: ['', Validators.required],
      isEditing: [false],
    });

    this.fetchItem();
  }

  fetchItem() {
    const { id } = this.route.snapshot.params;

    this.isEditing = !!id;

    if (!id) {
      return of({});
    }

    this.userService
      .get(id)
      .pipe(
        tap((item: User) => {
          this.itemForm.patchValue({
            ...item,
            isEditing: true,
          });

          this.itemForm.markAsPristine();
        })
      )
      .subscribe();
  }

  onSubmit({ value, valid }: { value: any; valid: boolean }) {
    if (!valid) {
      markFormAsDirty(this.itemForm);

      return this.poNotificationService.warning({
        message: translate('requiredField'),
        orientation: PoToasterOrientation.Top,
      });
    }

    this.userService.save(value).subscribe(() => {
      const message = this.isEditing
        ? translate('itemChange', {
            item: translate('user.user'),
            action: translate('updated'),
          })
        : translate('itemChange', {
            item: translate('user.user'),
            action: translate('registered'),
          });

      this.poNotificationService.success({
        message: translate(message),
        orientation: PoToasterOrientation.Top,
      });

      this.router.navigate(['/user']);
    });
  }
}
