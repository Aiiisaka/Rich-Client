import Model, { attr, hasMany } from '@ember-data/model';

export default class CategoryModel extends Model {
  @hasMany('contacts') contacts;
  @attr('string') nom;
}
