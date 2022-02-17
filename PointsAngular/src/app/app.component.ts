 import { Component } from '@angular/core';
import { AuthService } from './config/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public events: string[] = [];
  public opened: boolean = false; 
  
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  
}



