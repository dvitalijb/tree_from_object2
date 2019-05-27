const data = {
    'Рыбы': {
        'Форель': {},
        'Щука': {}
    },

    'Деревья': {
        'Хвойные': {
            'Лиственница': {},
            'Ель': {}
        },
        'Цветковые': {
            'Берёза': {},
            'Тополь': {}
        }
    }
};

const container = document.getElementById('container');

function createTree(domElement, obj) {
    if (Object.keys(obj).length > 0) {
        const ul = document.createElement('ul');

        for (const key in obj) {
            const li = document.createElement('li');
            li.textContent = key;
            ul.appendChild(li);
            console.log(obj.hasOwnProperty(key))

            if (obj.hasOwnProperty(key)) {
                createTree(li, obj[key])
            }
        }

        domElement.appendChild(ul);
    }


}

createTree(container, data);
