import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from './tabs/tab-group.component';
import { TabPanelComponent } from './tabs/tab-panel.component';
import { TabBsGroupComponent } from './tabs/tab-bs-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TabGroupComponent, TabPanelComponent, TabBsGroupComponent],
  template: `
    <app-tab-group [(activeIndex)]="currentIndex">
      <app-tab-panel title="First Tab">First Tab Content</app-tab-panel>
      <app-tab-panel title="Second Tab">Second Tab Content</app-tab-panel>
      <app-tab-panel title="Third Tab">Third Tab Content</app-tab-panel>
      <app-tab-panel title="Fourth Tab">Fourth Tab Content</app-tab-panel>
    </app-tab-group>

    <app-tab-bs-group [(activeIndex)]="tabBsIndex">
      <app-tab-panel title="First Tab">First Tab Content</app-tab-panel>
      <app-tab-panel title="Second Tab">Second Tab Content</app-tab-panel>
      <app-tab-panel title="Third Tab">Third Tab Content</app-tab-panel>
      <app-tab-panel title="Fourth Tab">Fourth Tab Content</app-tab-panel>
    </app-tab-bs-group>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-use-existing-component-showcase';
  currentIndex = 0;
  tabBsIndex = 0;
}
