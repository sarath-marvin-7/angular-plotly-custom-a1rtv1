import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
// import { layout } from '@rfid-mocks/inp-timeline-plot';
// import { ThemeService } from '@app-global/services/theme/theme.service';
import { Subscription } from 'rxjs';

declare const Plotly: any;

@Component({
  selector: 'app-plotly',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.css']
})
export class PlotlyComponent implements OnInit {
  public data: any;
  public layout: any;
  public data2: any;
  public data3: any;
  public layout3: any;

  /* The plot target container. */
  @ViewChild('plotContainer') plotContainer:ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initPlot();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.data && changes.data.previousValue) {
      this.initPlot();
    }
    if (changes && changes.layout && changes.layout.previousValue) {
      this.initPlot();
    }
  }

  ngOnDestroy() {
    // if (this._theme$) { this._theme$.unsubscribe(); }
  }
  public layout2: any;
  public data4: any;

  private initPlot() {
    // this.getTheme();

    // the layout.
    this.layout = {
      autosize: true,
      height: 500,
      legend: { orientation: 'h', x: 0, y: -0.1 },
      margin: { l: 10, r: 10, b: 290, t: 70, pad: 0 },
      showlegend: true,

      title: { text: 'Alarm Trend Of Process' },
      xaxis: {
        anchor: 'y',
        autorange: true,
        domain: (2)[(0.05, 1)],
        dtick: 15000 * 60 * 1000, //TEST interval
        range: (2)[('2019-02-21 13:37:13.3223', '2019-04-22 10:22:46.6777')],
        showgrid: false,
        showticklabels: true,
        zeroline: false,
        tick0: 0,
        tickformat: '%H:%M',
        title: {
          font: { size: 13, color: '#cccccc' }
        },
        type: 'date',
        zeroline: false,
        title: 'demo',
        side: 'right',
        linecolor: '#FFF',
        linewidth: 50
      },
      yaxis: {
        title: 'Demo',
        anchor: 'x',
        autorange: true,
        domain: (2)[(0.6, 1)],
        dtick: 50,
        range: (2)[(-0.18038237738985866, 2.1803823773898587)],
        showgrid: false,
        showticklabels: true,
        tick0: 0,
        type: 'linear',
        zeroline: true,
        zerolinecolor: '#bdbdbd'
      }
    };

    this.data = [
      {
        type: 'sunburst',
        labels: [
          'Eve',
          'Sarath',
          'Programmer',
          'Coder',
          'Cain',
          'Seth',
          'Enos',
          'Noam',
          'Abel',
          'Awan',
          'Enoch',
          'Azura'
        ],
        parents: [
          '',
          'Eve',
          'Sarath',
          'Sarath',
          'Eve',
          'Eve',
          'Seth',
          'Seth',
          'Eve',
          'Eve',
          'Awan',
          'Eve',
          'Eve'
        ],
        values: [10, 22, 13, 12, 14, 12, 10, 2, 6, 6, 4, 4],
        outsidetextfont: { size: 20, color: '#377eb8' },
        leaf: { opacity: 0.6 },
        marker: { line: { width: 2 } }
      }
    ];

    this.data2 = [
      {
        x: [0, 1, 2, 3, 4, 5],
        y: [1.5, 1, 1.3, 0.7, 0.8, 0.9],
        type: 'scatter'
      },
      {
        x: [0, 1, 2, 3, 4, 5, 6],
        y: [1, 0.5, 0.7, -1.2, 0.6, -0.6, 0.7],
        type: 'bar'
      }
    ];

    this.data3 = [
      {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 15, 24],
        type: 'bar'
      }
    ];

    this.layout2 = {
      margin: { l: 0, r: 0, b: 0, t: 0 },
      width: 300,
      height: 300
    };

    this.layout3 = {
      title: 'Number of Animals',
      width: 620,
      height: 440,
      font: {
        family: 'Raleway, sans-serif'
      },
      showlegend: true,
      xaxis: {
        tickangle: -45
      },
      yaxis: {
        zeroline: false,
        gridwidth: 2
      },
      bargap: 0.2
    };

    this.data4 = [
      {
        y: [
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5
        ],
        mode: 'markers',
        marker: {
          size: 40,
          color: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39
          ]
        }
      }
    ];

    if (this.data !== undefined && this.layout) {
      Plotly.newPlot(
        this.plotContainer.nativeElement,
        this.data,
        this.layout3,
        {
          staticPlot: false
        }
      );
    } else {
      console.warn('The data or the layout are not defined');
    }
  }

  /** On resize this method triggers & resize the plot. */
  public onResize() {
    Plotly.Plots.resize(this.plotContainer.nativeElement);
  }
}
