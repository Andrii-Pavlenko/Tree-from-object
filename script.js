let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },

    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  };

function createTree(container, data) {
container.append(tree(data));
}
function tree(data) {
if (!Object.keys(data).length) return;
let ul = document.createElement('ul');
for (let key in data) {
    let li = document.createElement('li');
    li.textContent = key;
    ul.append(li);
    let children = tree(data[key]);
    if(children){
    li.append(children);
    }
}
return ul;
}

createTree(document.getElementById('tree'), data);