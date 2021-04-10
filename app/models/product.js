import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ProductModel extends Model {
  @belongsTo('section') section;
  @attr('string') name;
  @attr('string') price;
  @attr('string') promotion;
  @hasMany('product', { inverse: null }) packs;
}
