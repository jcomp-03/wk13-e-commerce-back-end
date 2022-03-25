// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tags',
  foreignKey: 'product_tag'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'tags',
  foreignKey: 'tag_id'
});

/* Product.hasMany(Tag, {
  foreignKey: 'product_tag'
}); */




module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};