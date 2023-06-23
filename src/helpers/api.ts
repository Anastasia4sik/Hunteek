/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
import { Employee } from '../types/employee';

export function getEmployees(): Promise<Employee[]> {
  return fetch('https://gitlab.com/Anastasia4sik/hunteek/-/blob/develop/public/api/employees.json')
    .then(response => response.json())
    .catch(error => {
      console.error(error);

      return [];
    });
}
