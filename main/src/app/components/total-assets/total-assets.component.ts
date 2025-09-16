import { Component, ViewChild } from '@angular/core';

import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexGrid,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { MatButtonModule } from '@angular/material/button';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';

export interface totalassetsChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  responsive: ApexResponsive;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  colors: string | any;
  labels: string | any;
}

@Component({
  selector: 'app-total-assets',
  imports: [MaterialModule, NgApexchartsModule, MatButtonModule, TablerIconsModule, MatIconModule],
  templateUrl: './total-assets.component.html',
})
export class AppTotalAssetsComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public totalassetsChart!: Partial<totalassetsChart> | any;

  constructor() {
    this.totalassetsChart = {

      series: [
        { name: 'Asia', data: [38] },
        { name: 'USA', data: [20] },
        { name: 'Europe', data: [26] }
      ],
      chart: {
        type: 'bar',
        fontFamily: 'inherit',
        height: 22,
        stacked: true,
        stackType: '100%',
        toolbar: { show: false },
        sparkline: { enabled: true },
        animations: { enabled: false },
        margin: 0,
        offsetX: 0,
        offsetY: 0
      },
      colors: ["var(--mat-sys-primary)", "#F6B51E", "var(--mat-sys-secondary)"],
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '80%', // makes the bar thin
          borderRadius: 4
        }
      },
      stroke: {
        show: true,
        colors: "var(--mat-card-elevated-container-color)",
        width: 3,
      },
      dataLabels: { enabled: false },
      xaxis: {
        labels: { show: false },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        labels: { show: false }
      },
      grid: {
        show: false,
        padding: { left: 0, right: 0, top: 0, bottom: 0 }
      },
      legend: { show: false },
      tooltip: {
        enabled: true,
        theme: 'dark'
      },

    };
  }
}
