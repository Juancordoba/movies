import {Entity, model, property} from '@loopback/repository';

@model()
export class Movie extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    default: "",
  })
  description?: string;

  @property({
    type: 'number',
    default: 0,
  })
  year?: number;


  constructor(data?: Partial<Movie>) {
    super(data);
  }
}

export interface MovieRelations {
  // describe navigational properties here
}

export type MovieWithRelations = Movie & MovieRelations;
