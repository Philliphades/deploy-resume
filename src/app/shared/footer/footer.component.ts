import { Component } from '@angular/core';

@Component({
    selector: 'app-footer-cmp',
    templateUrl: 'footer.component.html',
    styleUrls: ['./footer.component.css']
})

export class FooterComponent {
    test: Date = new Date();
}
