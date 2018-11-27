import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router} from '@angular/router';
import { Item } from '../../interfaces/item';
import {ChartsModule, Color} from 'ng2-charts';
@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css'],
  providers: [DataService]
})
export class ListitemComponent {

    // Pie
    public pieChartLabels:string[] = ['Autorizadas', 'Pendientes', 'Errores'];
    public pieChartData:number[] = [300, 500, 100];
    public pieChartDatasets: any[] = [
      {
        data: [350, 450, 100],
        backgroundColor: [
          "#a3042c",
          "#e20a40",
          "#69021ce8"
        ],
        hoverBackgroundColor: [
          "#000",
          "#36A2EB",
          "#FFCE56"
        ]
      }];

    public pieChartType:string = 'pie';
    public piechartOptions = {
      responsive: true,
      legend: {position: 'bottom'},
      title: {
        display: true,
        text: 'Your chart title',
        fontColor: 'black',  // chart title color (can be hexadecimal too)
      },
      
      
    }

    
    


    public pieChartColors:Array<Color> = [{}];

    
    // Pie
    public pieChartLabels2:string[] = ['En Proceso', 'Terminadas'];
    public pieChartData2:number[] = [];
    public pieChartDatasets2: any[] = [
      {
        data: [350, 450],
        backgroundColor: [
          "#a3042c",
          "#e20a40",
        ],
        hoverBackgroundColor: [
          "#000",
          "#36A2EB",
        ]
      }];
      
    public pieChartType2:string = 'pie';
    public piechartOptions2 = {
      responsive: true,
      legend: {position: 'bottom'}
    };

    public pieChartColors2:Array<Color> = [{}];

   
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
   
    public chartHovered(e:any):void {
      console.log(e);
    }

    public chartClicked2(e:any):void {
      console.log(e);
    }
   
    public chartHovered2(e:any):void {
      console.log(e);
    }


/*  public listitem;
  public containeritem:Item;

  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit() {
    this.dataservice.getItem().subscribe(
      res =>{
        this.listitem = res.data[1];
      },
      err =>{
        console.log("There is an error : "+err);
      }
    )
  }
  onSelect(item:Item){
    if (!localStorage.getItem('currentUser')) {
      this.router.navigate(['/login']);
  }
    this.containeritem = item;
  }*/
  
}
