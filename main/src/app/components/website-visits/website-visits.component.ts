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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialModule } from 'src/app/material.module';

interface month {
  value: string;
  viewValue: string;
}

export interface WebsiteVisitsChart {
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
  selector: 'app-website-visits',
  imports: [MaterialModule, NgApexchartsModule, MatButtonModule, TablerIconsModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatMenuModule],
  templateUrl: './website-visits.component.html',
})
export class AppWebsiteVisitsComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public WebsiteVisitsChart!: Partial<WebsiteVisitsChart> | any;

  months: month[] = [
        { value: 'mar', viewValue: '2025' },
        { value: 'April', viewValue: '2024' },
        { value: 'May', viewValue: '2023' },
    ];

  constructor() {
    this.WebsiteVisitsChart = {

      series: [
        {
          name: "Site A",
          data: [25, 40, 35, 30, 25, 43, 25, 35, 30, 40, 32, 27]
        },
        {
          name: "Site B",
          data: [25, 30, 30, 40, 30, 27, 30, 45, 28, 30, 22, 43]
        },
      ],

      chart: {
        type: 'bar',
        height: 200,
        stacked: true,
        toolbar: {
          show: false
        },
        foreColor: "#adb0bb",
        fontFamily: "inherit",
      },

      plotOptions: {
        bar: {
          horizontal: false,
          barHeight: "20%",
          columnWidth: "32%",
          borderRadius: 5,
          borderRadiusApplication: "end", // 'around', 'end'
          borderRadiusWhenStacked: "all", // 'all', 'last'
        },
      },

      colors: ["var(--mat-sys-primary)", "var(--mat-sys-secondary)"],

      dataLabels: {
        enabled: false,
      },

      legend: {
        show: false,
      },

      grid: {
        borderColor: "var(--mat-sys-outline-variant)",
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },

      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5,
        labels: {
          formatter: function (value: number) {
            return value / 10 + "k";
          }
        },
      },

      xaxis: {
        type: "category",
        categories: [
          `Jan`,
          `Feb`,
          `Mar`,
          `APR`,
          `MAY`,
          `JUN`,
          `JUL`,
          `AUG`,
          `SEP`,
          `OCT`,
          `NOV`,
          `DEC`,
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },


      tooltip: {
        theme: "dark",
      }

    };
  }

}