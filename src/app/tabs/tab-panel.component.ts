import { Component, Input, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { TabGroupComponent } from "./tab-group.component";

@Component({
  selector: 'app-tab-panel',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  standalone: true,
})
export class TabPanelComponent implements OnInit {
  @Input({ required: true }) title!: string;

  // This template will be used by TabGroupComponent
  // <ng-container *ngTemplateOutlet="tabPanelList[activeIndex].panelBody"></ng-container>
  // static: true let 'panelBody' is able to use in ngOnInit
  @ViewChild(TemplateRef, { static: true }) panelBody!: TemplateRef<unknown>;

  constructor(private tabGroup: TabGroupComponent) {}

  ngOnInit(): void {
    // Register itself to tabPanelList in TabGroupComponent
    this.tabGroup.addTab(this);
  }
}