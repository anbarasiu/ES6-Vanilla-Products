export default class Products{
  constructor(){
    this.iteration = 1;
  }

  loadProducts(){
    var start = (this.iteration - 1) * 9;
    var end = start + 9;
    return this.products.slice(start, end);
  }

  loadMore(){
    this.iteration = this.iteration + 1;
    this.loadProducts();
  }

  clear(){
    this.iteration = 1;
    this.loadProducts();
  }

  filter(selectedCat){
    this.clear();
    var categories = selectedCat.join(' ');
    return this.loadProducts().filter((p, i, arr) => categories.indexOf(p.cat) != -1);
  }

  sort(sortBy){
    this.clear();
    return this.loadProducts().sort((prev, curr) => prev[sortBy] - curr [sortBy]);
  }
}
