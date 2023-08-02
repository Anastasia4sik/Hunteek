import { Employee } from '../types/Employee';
import { Project } from '../types/Project';
import { Recruiter } from '../types/Recruiter';

import employeesData from './employees.json';
import recruitersData from './recruiter.json';
import projectsData from './projects.json';

export function getEmployees(): Promise<Employee[]> {
  // return fetch('url')
  //   .then(response => response.json())
  //   .catch(error => {
  //     console.error(error);

  //     return [];
  //   });

  return Promise.resolve(employeesData);
}

export function getRecruiters(): Promise<Recruiter[]> {
  // return fetch('url')
  //   .then(response => response.json())
  //   .catch(error => {
  //     console.error(error);

  //     return [];
  //   });

  return Promise.resolve(recruitersData);
}

export function getProjects(): Promise<Project[]> {
  // return fetch('url')
  //   .then(response => response.json())
  //   .catch(error => {
  //     console.error(error);

  //     return [];
  //   });

  return Promise.resolve(projectsData);
}
