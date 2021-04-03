import {Component, OnInit, HostListener} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

interface Skill {
  color: string;
  name: string;
  percentage: number;
  image: string;
}

interface SkillType {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})


export class HomepageComponent implements OnInit {

  public skills: Array<SkillType>;
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

    this.skills = [
      {
        title: 'Fundamentals',
        skills: [
          {
            color: '#e44d26',
            name: 'HTML 5',
            percentage: 95,
            image: 'html5',
          },
          {
            color: '#7A378B',
            name: 'C#',
            percentage: 55,
            image: 'c-sharp',
          },
          {
            color: '#264de4',
            name: 'CSS 3',
            percentage: 80,
            image: 'css3',
          },
          {
            color: '#6181b6',
            name: 'Python',
            percentage: 45,
            image: 'python',
          },          
          
          {
            color: '#1C86EE',
            name: 'C++',
            percentage: 30,
            image: 'cpp',
          },          
          {
            color: '#f7df1e',
            name: 'JS ES6',
            percentage: 54,
            image: 'js',
          },
          {
            color: '#6181b6',
            name: 'PHP',
            percentage: 10,
            image: 'php',
          },
        ]
      },
      {
        title: 'Frontend',
        skills: [
          
          {
            color: '#e23237',
            name: 'Angular 2+',
            percentage: 75,
            image: 'angular',
          },
          {
            color: '#007acc',
            name: 'TypeScript',
            percentage: 65,
            image: 'typescript',
          },
          {
            color: '#cd6799',
            name: 'SASS',
            percentage: 30,
            image: 'sass',
          },
          {
            color: '#563d7c',
            name: 'Bootstrap',
            percentage: 60,
            image: 'bootstrap',
          },
          {
            color: '#61dbfb',
            name: 'React',
            percentage: 1,
            image: 'react',
          },
           // {
          //   color: '#0767aa',
          //   name: 'jQuery',
          //   percentage: 90,
          //   image: 'jquery',
          // },
          // {
          //   color: '#41b883',
          //   name: 'Vue.js',
          //   percentage: 85,
          //   image: 'vue',
          // },
        ]
      },
      {
        title: 'Backend & DB',
        skills: [
          {
            color: '#008800',
            name: 'Spring Boot',
            percentage: 30,
            image: 'spring-boot',
          },          
          {
            color: '#EE0000',
            name: 'Java',
            percentage: 40,
            image: 'java',
          },
          {
            color: '#111111',
            name: 'SQL',
            percentage: 50,
            image: 'sql',
          },
            // {
          //   color: '#1a171b',
          //   name: 'Spring Boot',
          //   percentage: 30,
          //   image: 'spring-boot',
          // },
          // {
          //   color: '#fb503b',
          //   name: 'Laravel',
          //   percentage: 40,
          //   image: 'laravel',
          // },
          // {
          //   color: '#5aa845',
          //   name: 'Node.js',
          //   percentage: 10,
          //   image: 'nodejs',
          // },
          // {
          //   color: '#f8981d',
          //   name: 'mysql',
          //   percentage: 40,
          //   image: 'mysql',
          // },
        ]
      },
      // {
      //   title: 'CMS',
      //   skills: [
      //     {
      //       color: '#00749a',
      //       name: 'WordPress',
      //       percentage: 90,
      //       image: 'wordpress',
      //     },
      //     {
      //       color: '#df0067',
      //       name: 'PrestaShop',
      //       percentage: 65,
      //       image: 'prestashop',
      //     },
          // {
          //   color: '#7ac043',
          //   name: 'Joomla',
          //   percentage: 20,
          //   image: 'joomla',
          // },
        // ]
      // },
      {
        title: 'Dev Tools',
        skills: [
          {
            color: '#de4c36',
            name: 'GIT',
            percentage: 90,
            image: 'git',
          },
          {
            color: '#1a171b',
            name: 'github',
            percentage: 85,
            image: 'github',
          },
          // {
          //   color: '#8ed6fb',
          //   name: 'github',
          //   percentage: 85,
          //   image: 'github',
          // },
          {
            color: '#1d91b4',
            name: 'Docker',
            percentage: 5,
            image: 'docker',
          },
          // {
          //   color: '#c63d14',
          //   name: 'Microservices',
          //   percentage: 20,
          //   image: 'jest',
          // },          
        ]
      },
      // {
      //     title: 'Languages',
      //     skills: [
      //       {
      //         color: '#00749a',
      //         name: 'English',
      //         percentage: 25,
      //         image: 'english',
      //       },
            // {
            //   color: '#df0067',
            //   name: 'PrestaShop',
            //   percentage: 65,
            //   image: '',
            // },
            // {
            //   color: '#7ac043',
            //   name: 'Joomla',
            //   percentage: 20,
            //   image: 'joomla',
            // },
          // ]
        // },
    ];
  }

  private resizeComponents(width) {
    this.circleProgressRadius = width > 500 ? 100 : (width - 12 * 4) * 0.3 * (1 - 2 / 6.25);

  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeComponents(event.target.innerWidth);
  }


}
