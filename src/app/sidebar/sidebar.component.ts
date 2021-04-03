import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
    {
        path: '/home',
        title: 'Home',
        type: 'link',
        icontype: 'home'
    },
    {
        path: '/about',
        title: 'About Me',
        type: 'link',
        icontype: 'info'
    },
    {
        path: '/skills',
        title: 'Skills',
        type: 'link',
        icontype: 'psychology'
    },
    {
        path: '/education',
        title: 'Education',
        type: 'link',
        icontype: 'school'
    },
    {
        path: '/experience',
        title: 'Experience',
        type: 'link',
        icontype: 'military_tech'
    },
    {
        path: '/portfolio',
        title: 'Portfolio',
        type: 'link',
        icontype: 'card_travel'
    },
    {
        path: '/contact',
        title: 'Contact Me',
        type: 'link',
        icontype: 'call'        
    }   
    
    
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    updatePS(): void  {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
}
