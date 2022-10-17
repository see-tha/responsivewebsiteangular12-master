import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"Crown Plaza",
      foodDetails:"5-star hotel",
      foodPrice:15000,
      foodImg:"https://th.bing.com/th/id/R.09e09aff7f1c09a4ac669e74071ca1d3?rik=FgOTpLKUXpoI4g&riu=http%3a%2f%2fwww.cfmedia.vfmleonardo.com%2fimageRepo%2f6%2f0%2f97%2f37%2f51%2fCHISH_18013_S.jpg&ehk=1kuxuQ2rrcaYMYUj1tmJRWO09CuL9HP3Krzfw4NDeiQ%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      id:2,
      foodName:"Le-Meridien",
      foodDetails:"5-star hotel",
      foodPrice:25000,
      foodImg:"https://th.bing.com/th/id/OIP.WSH_tgSo1T5JEN9uyZ1W6AHaEK?pid=ImgDet&rs=1"
    },
    {
      id:3,
      foodName:"Al-Saj",
      foodDetails:"5-star hotel",
      foodPrice:14900,
      foodImg:"https://www.hotelsinthiruvananthapuram.com/logos/al_saj_convention_centre_hotel.jpg"
    },
    {
      id:4,
      foodName:"Leela Palace",
      foodDetails:"5-star hotel",
      foodPrice:24000,
      foodImg:"https://www.watg.com/wp-content/uploads/2016/08/Hero-Image-34-scaled.jpg"
    },
    {
      id:5,
      foodName:"O By Tamara",
      foodDetails:"5 star hotel",
      foodPrice:10500,
      foodImg:"https://www.hotelierindia.com/public/images/2020/06/08/O-By-Tamara.png"
    },
    {
      id:6,
      foodName:"Hyatt",
      foodDetails:"5 star hotel ",
      foodPrice:21900,
      foodImg:"https://th.bing.com/th/id/OIP.fd4mA97IM-iOvN6ShcAOhAHaE5?pid=ImgDet&rs=1"
    }
  ]


  

}
