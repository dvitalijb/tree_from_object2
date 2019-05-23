const data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }
    }
};

const container = document.getElementById('container');

function createTree(domElement, obj) {
    const ul = document.createElement('ul');
    for (const key in obj) {
        const li = document.createElement('li');
        li.textContent = key;
        ul.appendChild(li);
        domElement.appendChild(ul);
        if (obj.hasOwnProperty(key)) {
            createTree(li, obj[key])
        }
    }
}

createTree(container, data);
