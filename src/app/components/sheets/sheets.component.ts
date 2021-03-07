import { Component } from '@angular/core';
import Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';

@Component
({
  selector: 'sheets',
  templateUrl: 'sheets.component.html',
  styleUrls: ['sheets.component.sass']
})
export class SheetsComponent
{
  data = [
    { id: 1, name: 'Ted Right', address: '' },
    { id: 2, name: 'Frank Honest', address: '' },
    { id: 3, name: 'Joan Well', address: '' },
    { id: 4, name: 'Gail Polite', address: '' },
    { id: 5, name: 'Michael Fair', address: '' },
  ]
  private hotRegisterer = new HotTableRegisterer();
  hotSettings: Handsontable.GridSettings = {
    data: this.data,
    colHeaders: true,
    width: '100%',
    height: '100%',
    contextMenu: true,
    licenseKey: 'non-commercial-and-evaluation'
  };

  clear()
  {
    console.log(this.hotRegisterer.getInstance('myHot').getData());
  }
}
