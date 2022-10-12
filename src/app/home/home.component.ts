import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let arrow:any=document.querySelectorAll(".arrow");
 
    for(var i=0;i<arrow.length;i++){
      arrow[i].addEventListener("click",(e:any)=>{
        
        let arrowParent=e.target.parentElement.parentElement;
        console.log("arrowParent",arrowParent)
        arrowParent.classList.toggle("showMenu")
      })
    }
    let sidebar:any=document.querySelector(".sidebar");
    let sidebarBtn:any=document.querySelector(".bx-menu");
    sidebarBtn.addEventListener("click",()=>{
      debugger
      sidebar.classList.toggle("close");
    })

  }

}
