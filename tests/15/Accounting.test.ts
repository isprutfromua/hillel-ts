import { Accounting } from '@/lessons/14/models/Accounting';
import { IEmployee } from '@/lessons/14/interfaces/IEmployee.ts';
import { IAnimal } from '@/lessons/14/interfaces/IAnimal.ts';

describe('Accounting class tests', () => {
  let accounting: Accounting;

  beforeEach(() => {
    accounting = new Accounting('Test Department', 100000); // Припустимий початковий бюджет
  });

  test('should hire employees correctly', async () => {
    const hiredEmployees: IEmployee[] = await accounting.hireEmployees()

    expect(hiredEmployees.length).toBeGreaterThan(0)
  });

  test('should assign employees correctly', () => {
    const employees: IEmployee[] = [
      { name: 'John Doe', position: 'Accountant', salary: 50000 },
      { name: 'Jane Doe', position: 'Senior Accountant', salary: 60000 },
    ];

    accounting.assignEmployees(employees);
    expect(accounting.employeesList.length).toBe(employees.length);
  });

  test('should assign animal correctly', () => {
    const animal: IAnimal = { name: 'Fluffy', species: 'Cat', age: 3, foodCost: 100 };
    accounting.assignAnimal(animal);
    expect(accounting.animalsList.length).toBe(1);
  });

  test('should pay salary without errors', () => {
    const employees: IEmployee[] = [
      { name: 'John Doe', position: 'Accountant', salary: 50000 },
    ];
    accounting.assignEmployees(employees);
    expect(() => accounting.paySalary()).not.toThrow();
  });

  test('should throw error when paying salary with insufficient budget', () => {
    const employees: IEmployee[] = [
      { name: 'John Doe', position: 'Accountant', salary: 150000 }, // Більше бюджету
    ];
    accounting.assignEmployees(employees);
    expect(() => accounting.paySalary()).toThrow('We don`t have enough money for paying salaries.');
  });

  test('should buy animals food without errors', () => {
    const animal: IAnimal = { name: 'Fluffy', species: 'Cat', age: 3, foodCost: 50 };
    accounting.assignAnimal(animal);
    expect(() => accounting.buyAnimalsFood()).not.toThrow();
  });

  test('should throw error when buying animals food with insufficient budget', () => {
    const lion: IAnimal = { name: 'Fluffy', species: 'Lion', age: 3, foodCost: 50000 };
    const tiger: IAnimal = { name: 'Jinji', species: 'Tiger', age: 5, foodCost: 55000 };
    accounting.assignAnimal(lion);
    accounting.assignAnimal(tiger);
    expect(() => accounting.buyAnimalsFood()).toThrow('We don`t have enough money for buying food for animals.');
  });

  test('should calculate expenses correctly', async () => {
    const employees: IEmployee[] = [
      { name: 'John Doe', position: 'Accountant', salary: 50000 },
    ];
    const animal: IAnimal = { name: 'Fluffy', species: 'Cat', age: 3, foodCost: 50 };

    accounting.assignEmployees(employees);
    accounting.assignAnimal(animal);

    const expenses = await accounting.calculateExpenses();
    const expectedExpenses = employees[0].salary + animal.foodCost;

    expect(expenses).toBe(expectedExpenses);
  });
});
