import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TabPanelComponent } from "./tab-panel.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-tab-group',
  template: `
    <div class="tab-headers">
      <div *ngFor="let tab of tabPanelList; index as idx" 
        (click)="activeIndexChange.emit(idx)" [class.active]="activeIndex === idx" class="tab-header-item">
        {{tab.title}}
        <button (click)="removeTab(tab)">x</button>
      </div>
    </div>

    <div *ngIf="tabPanelList.length; else noTabs" class="tab-body">
      <ng-container *ngTemplateOutlet="tabPanelList[activeIndex].panelBody"></ng-container>
    </div>

    <ng-template #noTabs>
      No more tabs
    </ng-template>
  `,
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .tab-headers {
      display: flex;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #000;
      margin-bottom: 0.5rem;
    }

    .tab-header-item {
      margin-right: 0.5rem;
      padding: 5px 10px;
    }

    .tab-header-item.active {
      border: 1px solid red;
    }
  `]
})
export class TabGroupComponent {
  tabPanelList: TabPanelComponent[] = [];

  @Input() activeIndex = 0;
  @Output() activeIndexChange = new EventEmitter<number>();

  addTab(tab: TabPanelComponent): void {
    this.tabPanelList = [...this.tabPanelList, tab];
  }

  removeTab(tab: TabPanelComponent) {
    let found = -1;
    this.tabPanelList = this.tabPanelList.filter((tabPanel, index) => {
      if (tabPanel === tab) {
        found = index;
        return false;
      }

      return true;
    });

    if (found === this.activeIndex) {
      this.activeIndexChange.emit(found === this.tabPanelList.length ? found - 1 : found);
    }
  }
}