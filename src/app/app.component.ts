import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SearchbarComponent } from "./components/searchbar/searchbar.component";
import { ListComponent } from "./list/list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SearchbarComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rep';
}
