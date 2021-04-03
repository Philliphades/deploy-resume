import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// interface educationType {
//     course: string;
//     year: string;
//     mark: number;
//     title: string;
//     institution: string;
//     board: string;
//     theme: string;
//     icon: string;
//     max: number;
//   }
//   interface Skill {
//     color: string;
//     name: string;
//     percentage: number;
//     image: string;
//   }
  
//   interface SkillType {
//     title: string;
//     skills: Skill[];
//   }
  
@Component({
    selector: 'app-education-cmp',
    templateUrl: 'education.component.html',
	styleUrls: ['./education.component.css','./education.scss']
})  

export class EducationComponent implements OnInit{
    // public education: Array<educationType>;
    // public skills: Array<SkillType>;
    public circleProgressRadius: number;
    constructor(
        private route: ActivatedRoute,
      ) { }

    ngOnInit() {

        this.route.fragment.subscribe((fragment: string) => {
            if (fragment === 'skills') {
              const skillsDOM = document.getElementById(fragment);
              skillsDOM.scrollIntoView();
            }
          });
      
          this.resizeComponents(window.innerWidth); 
          
        // vm.meMarks = false;
        // vm.mscMarks = false;
        // vm.hscMarks = false;
        // vm.sslcMarks = false;
    //    this.education = [
    //         {
    //             course: "M.E",
    //             year:"2013 - 2015",
    //             title: "Computer Science & Engineering",
    //             institution: "PPG Institute of Technology, Coimbatore",
    //             board:"Anna University, Chennai",
    //             theme: "info",
    //             icon: "graduation‐cap ",
    //             mark: 3.00,
    //             max: 4
    //         },
    //         {
    //             course: "M.Sc",
    //             year: "2008 - 2013",
    //             title: "Software Systems",
    //             institution: "Kovai Kalaimagal College of Arts & Science, Coimbatore",
    //             board: "Bharathiar University, Coimbatore",
    //             theme: "warning",
    //             icon: "graduation‐cap ",
    //             mark: 8.3,
    //             max: 10
    //         },
    //         {
    //             course: "HSC",
    //             year: "2006 - 2008",
    //             title: "+2",
    //             institution: "S.N. Matric. Higher Sec. School, Coimbatore",
    //             board: "Stateboard",
    //             theme: "danger",
    //             icon: "pencil",
    //             mark: 62.7,
    //             max: 100
    //         },
    //         {
    //             course: "SSLC",
    //             year: "1996 - 2006",
    //             title: "10th",
    //             institution: "Govt. Higher Sec School, Coimbatore",
    //             board: "Stateboard",
    //             theme: "success",
    //             icon: "pencil",
    //             mark: 84.2,
    //             max: 100
    //         }    
    //     ];
    }
    private resizeComponents(width) {
        this.circleProgressRadius = width > 500 ? 100 : (width - 12 * 4) * 0.3 * (1 - 2 / 6.25);
    
      }
      @HostListener('window:resize', ['$event'])
      onResize(event) {
        this.resizeComponents(event.target.innerWidth);
      }
    
}


// function drawMouseSpeedDemo() {
    // var mrefreshinterval = 500; // update display every 500ms
    // var lastmousex = -1;
    // var lastmousey = -1;
    // var lastmousetime;
    // var mousetravel = 0;
    // var mpoints = [];
    // var mpoints_max = 30;
    // $('html').mousemove(function (e) {
    //     var mousex = e.pageX;
    //     var mousey = e.pageY;
    //     if (lastmousex > -1) {
    //         mousetravel += Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
    //     }
    //     lastmousex = mousex;
    //     lastmousey = mousey;
    // });
    // var mdraw = function () {
    //     var md = new Date();
    //     var timenow = md.getTime();
    //     if (lastmousetime && lastmousetime != timenow) {
    //         var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
    //         mpoints.push(pps);
    //         if (mpoints.length > mpoints_max)
    //             mpoints.splice(0, 1);
    //         mousetravel = 0;
    //         $('#mousespeed').sparkline(mpoints, { width: mpoints.length * 2, tooltipSuffix: ' pixels per second' });
    //     }
    //     lastmousetime = timenow;
    //     setTimeout(mdraw, mrefreshinterval);
    // };
    // // We could use setInterval instead, but I prefer to do it this way
    // setTimeout(mdraw, mrefreshinterval);
// }
