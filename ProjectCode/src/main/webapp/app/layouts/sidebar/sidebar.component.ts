import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiLanguageService } from 'ng-jhipster';

import { VERSION } from 'app/app.constants';
import { LoginService } from 'app/core/login/login.service';
import { LoginModalService } from 'app/core/login/login-modal.service';

@Component({
  selector: 'jhi-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['sidebar.scss']
})
export class SidebarComponent implements OnInit {
  inProduction?: boolean;
  isNavbarCollapsed?: boolean;
  languages?: any[];
  modalRef?: NgbModalRef;
  version: string;
  account: any;

  constructor(
    private loginService: LoginService,
    private languageService: JhiLanguageService,
    private loginModalService: LoginModalService,
    private router: Router,
    private modalService: NgbModal,
    private eventManager: JhiEventManager
  ) {
    this.version = VERSION ? 'v' + VERSION : '';
    this.isNavbarCollapsed = true;
  }

  ngOnInit(): void {}

  changeLanguage(languageKey: string): void {
    this.languageService.changeLanguage(languageKey);
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed = true;
  }

  logout(): void {
    this.collapseNavbar();
    this.loginService.logout();
    this.router.navigate(['']);
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
