import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  hotelListObj:any = {
    city: "",
    checkIn:null,
    checkOut:null,
    rooms:""
      }
    constructor(private ActivatedRoute:ActivatedRoute){
        this.hotelListObj.city = this.ActivatedRoute.snapshot.queryParamMap.get("city")
        this.hotelListObj.checkIn = this.ActivatedRoute.snapshot.queryParamMap.get("checkIn")
        this.hotelListObj.checkOut = this.ActivatedRoute.snapshot.queryParamMap.get("checkOut")
        this.hotelListObj.rooms = this.ActivatedRoute.snapshot.queryParamMap.get("rooms")
    
        console.log("list are", this.hotelListObj)
      }
ngOnInit(){

}

    }
