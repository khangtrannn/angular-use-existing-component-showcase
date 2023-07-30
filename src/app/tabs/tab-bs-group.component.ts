import { Component } from "@angular/core";
import { TabGroupComponent } from "./tab-group.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-tab-bs-group',
  template: `
    <ul class="nav nav-tabs">
      <li *ngFor="let tab of tabPanelList; let idx = index;" class="nav-item">
        <a class="nav-link" [class.active]="idx === activeIndex" (click)="activeIndexChange.emit(idx)">
          {{tab.title}}
          <button class="btn btn-small btn-danger" (click)="removeTab(tab)">x</button>
        </a>
      </li>
    </ul>

    <div *ngIf="tabPanelList.length; else noTabs" class="tab-body">
      <ng-container *ngTemplateOutlet="tabPanelList[activeIndex].panelBody"></ng-container>
    </div>

    <ng-template #noTabs>
      No more tabs
    </ng-template>
  `,
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: TabGroupComponent,
      useExisting: TabBsGroupComponent,
    }
  ]
})
export class TabBsGroupComponent extends TabGroupComponent {}