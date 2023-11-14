abstract class Shape {
  constructor(
    public readonly color: string,
    public readonly name: string,
  ) {}

  abstract calculateArea(): number
}

abstract class Printable {
  abstract print(): void
}

export class Circle extends Shape {
  constructor(
    public readonly color: string,
    public readonly name: string,
    protected readonly radius: number,
  ) {
    super(color, name)
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius
  }
}
export class Rectangle extends Shape implements Printable {
  constructor(
    public readonly color: string,
    public readonly name: string,
    protected readonly width: number,
    protected readonly height: number,
  ) {
    super(color, name)
  }

  calculateArea(): number {
    return this.width * this.height
  }

  print(): void {
    console.log(`Area of ${this.name} = width * height`)
  }
}
export class Square extends Rectangle implements Printable {
  constructor(
    public readonly color: string,
    public readonly name: string,
    protected readonly side: number,
  ) {
    super(color, name, side, side)
  }

  print(): void {
    console.log(`Area of ${this.name} = side * side`)
  }
}
export class Triangle extends Shape {
  constructor(
    public readonly color: string,
    public readonly name: string,
    public readonly base: number,
    public readonly height: number,
  ) {
    super(color, name)
  }

  calculateArea(): number {
    return 0.5 * this.base * this.height
  }
}
